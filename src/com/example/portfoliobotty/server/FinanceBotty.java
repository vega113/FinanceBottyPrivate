package com.example.portfoliobotty.server;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.Map;
import java.util.Set;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.json.JSONException;
import org.json.JSONObject;

import com.example.portfoliobotty.server.command.Command;
import com.example.portfoliobotty.server.command.JsonRpcRequest;
import com.example.portfoliobotty.server.util.Util;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.inject.Inject;
import com.google.inject.Injector;
import com.google.inject.Singleton;
import com.google.wave.api.AbstractRobot;
import com.google.wave.api.Blip;
import com.google.wave.api.Context;
import com.google.wave.api.ElementType;
import com.google.wave.api.Gadget;
import com.google.wave.api.event.GadgetStateChangedEvent;
import com.google.wave.api.event.EventHandler.Capability;

@Singleton
public class FinanceBotty extends AbstractRobot {
	private static final Logger LOG = Logger.getLogger(FinanceBotty.class.getName());

	public static final String SANDBOX_DOMAIN = "wavesandbox.com";
	public static final String PREVIEW_DOMAIN = "googlewave.com";

	public static final String PREVIEW_RPC_URL = "http://gmodules.com/api/rpc";
	public static final String SANDBOX_RPC_URL = "http://sandbox.gmodules.com/api/rpc";
	protected  String OAUTH_TOKEN = null;
	protected  String OAUTH_KEY = null;
	protected  String OAUTH_SECRET = null;
	protected  String SECURITY_TOKEN = null;
	private String domain = PREVIEW_DOMAIN;//SANDBOX_DOMAIN;
	
	@Inject
	public FinanceBotty(Injector injector, Util util) {
		this.util = util;
		this.injector = injector;
		OAUTH_TOKEN = System.getProperty("OAUTH_TOKEN");
		OAUTH_KEY = System.getProperty("OAUTH_KEY");
		OAUTH_SECRET = System.getProperty("OAUTH_SECRET");
		SECURITY_TOKEN = System.getProperty("SECURITY_TOKEN");
		initOauth();
	}

	public void initOauth() {
		setupVerificationToken(OAUTH_TOKEN, SECURITY_TOKEN);

		if(OAUTH_KEY != null && OAUTH_SECRET != null){
			if (this.domain.equals(SANDBOX_DOMAIN)) {
				setupOAuth(OAUTH_KEY, OAUTH_SECRET, SANDBOX_RPC_URL);
			}
			if (this.domain.equals(PREVIEW_DOMAIN)) {
				setupOAuth(OAUTH_KEY, OAUTH_SECRET, PREVIEW_RPC_URL);
			}
			LOG.info("DONE OAUTH");
		}

		setAllowUnsignedRequests(true);
	}

	protected Injector injector = null;
	protected Util util = null;

	@Override
	protected String getRobotName() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	protected String getRobotProfilePageUrl() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	@Capability(contexts = {Context.SELF})
	public void onGadgetStateChanged(GadgetStateChangedEvent e) {
		LOG.log(Level.WARNING, "OnGadgetStateChanged: ");
		JSONObject json = new JSONObject();
		Blip blip = e.getBlip();
		String gadgetUrl = "http://" + System.getProperty("APP_DOMAIN") + ".appspot.com/portfoliobotty/com.example.portfoliobotty.client.PortfolioBotty.gadget.xml";
		Gadget gadget = Gadget.class.cast(blip.first(ElementType.GADGET,Gadget.restrictByUrl(gadgetUrl)).value());
		try{
			if(gadget!=null)
			{
				Set<String> keys = new LinkedHashSet<String>( gadget.getProperties().keySet());
				for(String key : keys){
					String[] split = key.split("#");
					String postBody = gadget.getProperty(key);
					if(split != null && split.length == 3 && split[0].equalsIgnoreCase("request") && postBody != null){
						String responseKey = "response#" + split[1] + "#" +  split[2];
						LOG.info("Found request: " + key + ", body: " + postBody);
						Gson gson = new GsonBuilder().excludeFieldsWithoutExposeAnnotation().create();
						JsonRpcRequest jsonRpcRequest = gson.fromJson(postBody, JsonRpcRequest.class);
						if (jsonRpcRequest != null) {
							String method = jsonRpcRequest.getMethod();
							if (method != null) {
								LOG.info("processing method " + method);
								Class<? extends Command> commandClass = com.example.portfoliobotty.server.command.CommandType.valueOfIngoreCase(method).getClazz();
								Command command = injector.getInstance(commandClass);
								jsonRpcRequest.getParams().put("senderId", e.getModifiedBy());
								LOG.info("sender is: " + e.getModifiedBy());
								command.setParams(jsonRpcRequest.getParams());
								try{
									try {
										json = command.execute();
									} catch (JSONException e1) {
										json.put("error", e1.getMessage());
									} catch (IllegalArgumentException e2) {
										json.put("error", e2.getMessage());
									}
								}catch(JSONException e3){
									json.put("error", e3.getMessage());
									LOG.severe(e3.getMessage());
								}
								Map<String,String> out = new HashMap<String, String>();
								out.put(key, null);
								out.put(responseKey, json.toString());
								blip.first(ElementType.GADGET,Gadget.restrictByUrl(gadgetUrl)).updateElement(out);
							}
						}
					}
				}
			}else{
				LOG.log(Level.WARNING, "\nGadget is null: ");
			}
		}catch(Exception e4){

			StringWriter sw = new StringWriter();
			PrintWriter pw = new PrintWriter(sw);
			e4.printStackTrace(pw);
			e.getWavelet().reply("\n" + "EXCEPTION !!!" + sw.toString() + " : " + e4.getMessage());
			LOG.severe(sw.toString());
		}
	}

}
