package com.example.portfoliobotty.client.service;

import java.util.Date;
import com.allen_sauer.gwt.log.client.Log;
import com.example.portfoliobotty.client.constants.PortfolioConstants;
import com.example.portfoliobotty.client.request.RequestService;
import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.http.client.RequestException;
import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONString;
import com.google.gwt.json.client.JSONValue;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.inject.Inject;

public class PortfolioServiceImpl implements PortfolioService {
	
	private RequestService requestService;
	private String url;
	
	@Inject
	public PortfolioServiceImpl(RequestService requestService, PortfolioConstants constants){
		this.requestService = requestService;
		url = "/command/jsonrpc" + "?cachebust=" + new Date().getTime();
	}

	@Override
	public void retrPortfolios(String user,
			AsyncCallback<JSONValue> callback) throws RequestException {
		try{
			Log.debug("enterin retrPortfolios");
			com.google.gwt.json.client.JSONObject paramsJson = new JSONObject();
			com.google.gwt.json.client.JSONObject postDataJson = new JSONObject();
			
			paramsJson.put("user", new JSONString(user));
			postDataJson.put("params", paramsJson);
			postDataJson.put("method", new JSONString("GET_PORTFOLIO_DATA"));
			
			JavaScriptObject params = postDataJson.getJavaScriptObject();
			requestService.makeRequest(url,callback,params);
			Log.debug("retrPortfolios: made request");
		}catch(RequestException e){
			Log.warn("RequestException in retrPortfolios", e);
			throw  e;
		}
		
	}
}
