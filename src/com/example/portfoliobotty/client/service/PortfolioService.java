package com.example.portfoliobotty.client.service;


import com.google.gwt.http.client.RequestException;
import com.google.gwt.json.client.JSONValue;
import com.google.gwt.user.client.rpc.AsyncCallback;

public interface PortfolioService {

	void retrPortfolios(String user, AsyncCallback<JSONValue> asyncCallback) throws RequestException;

}
