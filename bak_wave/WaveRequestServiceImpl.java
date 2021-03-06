package com.example.portfoliobotty.client.request;

import java.util.Date;
import java.util.HashMap;
import org.cobogw.gwt.waveapi.gadget.client.StateUpdateEvent;
import org.cobogw.gwt.waveapi.gadget.client.StateUpdateEventHandler;
import org.cobogw.gwt.waveapi.gadget.client.WaveFeature;
import com.allen_sauer.gwt.log.client.Log;
import com.example.portfoliobotty.client.utils.PortfolioUtils;
import com.google.gwt.core.client.JavaScriptException;
import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.core.client.JsArrayString;
import com.google.gwt.http.client.RequestException;
import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONParser;
import com.google.gwt.json.client.JSONValue;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.inject.Inject;


public class WaveRequestServiceImpl implements RequestService {
	private PortfolioUtils utils;
	private WaveFeature wave;
	
	@Inject
	public WaveRequestServiceImpl(PortfolioUtils utils, WaveFeature wave){
		this.utils = utils;
		this.wave = wave;
		utils.getWave().addStateUpdateEventHandler(stateUpdateEventHandler);
	}
	
	StateUpdateEventHandler stateUpdateEventHandler = new StateUpdateEventHandler() {
		@Override
		public void onUpdate(StateUpdateEvent event) {
			JsArrayString keys =  event.getState().getKeys();
			AsyncCallback<JSONValue> callback = null;
			try{
				for(int i = 0; i < keys.length(); i++){
					if(keys.get(i).toLowerCase().startsWith("response") &&  callbacksMap.containsKey(keys.get(i).toLowerCase())){
						try{
							callback = callbacksMap.remove(keys.get(i));
							String responseStr = event.getState().get(keys.get(i));
							Log.debug("Response : " + keys.get(i) + " : " + responseStr);
							try{
								JSONValue jsonVal = JSONParser.parse(responseStr);
								if(jsonVal.isObject().containsKey("error")){
									throw new Exception(jsonVal.isObject().get("error").isString().stringValue());
								}else if(jsonVal.isObject().containsKey("result")){
									callback.onSuccess(jsonVal.isObject().get("result"));

								}else if(jsonVal.isObject().containsKey("success")){
									callback.onSuccess(jsonVal.isObject().get("success"));

								}
							}catch(Exception e){
								callback.onFailure(e);
								return;
							}

							event.getState().submitValue(keys.get(i), null);
						}catch (Exception e) {
							if(callback != null){
								callback.onFailure(e);
							}
							Log.error("", e);
						}
						break;
					}else if(keys.get(i).startsWith("response")){
						Log.trace("No callback for key: " + keys.get(i));
						event.getState().submitValue(keys.get(i), null); //if we can't find what to do with this response - dismiss it.
						break;
					}
				}
			}catch (Exception e) {
				Log.error("", e);
			}
		}
	};
	
	private static HashMap<String, AsyncCallback<JSONValue>> callbacksMap = new HashMap<String, AsyncCallback<JSONValue>>();
	
	@Override
	public void makeRequest(String url, AsyncCallback<JSONValue> callback,
			JavaScriptObject params) throws RequestException {
		Log.debug("entering makeRequest: " + params);
		try{
			if(url == null || callback == null){
				Log.warn("URL OR CALLBACK OR BOTH IS NULL: " + url + " : " + callback.toString());
				throw new IllegalArgumentException("URL OR CALLBACK OR BOTH IS NULL: " + url + " : " + callback.toString());
			}
			String user = null;
			try{
				user = utils.retrUserId();
				if("".equals(user)){
					Log.warn("no viewer!");
					return;
				}
			}catch (Exception e) {
				Log.warn("no viewer!");
				return;
			}
			long timestamp = (new Date()).getTime();
			String callbackResponseKey = "response#" + user +"#" + timestamp;
			String callbackRequestKey = "request#" + user +"#" + timestamp;
			callbacksMap.put(callbackResponseKey, callback);
			HashMap<String,String> delta = new HashMap<String, String>();
			String paramsStr = (new JSONObject(params)).toString();
			delta.put(callbackRequestKey, paramsStr);
			Log.debug("Sent request: " + callbackRequestKey + " : " + paramsStr);
			wave.getState().submitDelta(delta);
		}catch(JavaScriptException e){
			Log.warn("JavaScriptException in makeRequest", e);
			callback.onFailure(e);
		}catch(Exception e){
			Log.warn("Exception in makeRequest", e);
			callback.onFailure(e);
		}
		Log.debug("exiting makeRequest");
	}

}
