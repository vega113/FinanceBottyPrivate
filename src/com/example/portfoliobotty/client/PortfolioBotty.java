package com.example.portfoliobotty.client;

import com.allen_sauer.gwt.log.client.DivLogger;
import com.allen_sauer.gwt.log.client.Log;
import com.example.portfoliobotty.client.inject.PortfolioGinjector;
import com.example.portfoliobotty.client.ui.PortfolioPanel;
import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.ui.AbsolutePanel;
import com.google.gwt.user.client.ui.RootPanel;

/**
 * Entry point classes define <code>onModuleLoad()</code>.
 */
public class PortfolioBotty implements EntryPoint {

	/**
	 * This is the entry point method.
	 */
	public void onModuleLoad() {
		PortfolioGinjector ginjector = GWT.create(PortfolioGinjector.class);
		ginjector.getResources().globalCSS().ensureInjected();
		PortfolioPanel widget = ginjector.getPortfolioPanel();
	    RootPanel.get("mainPanel").add(widget);
	    initRemoteLogger(RootPanel.get("logPanel"));
	}
	
	public void initRemoteLogger(AbsolutePanel panel){
		Log.setUncaughtExceptionHandler();
		if (panel != null) {
			panel.add (Log.getLogger(DivLogger.class).getWidget());
			Log.info("Logger initialized: " + Log.class.getName());
		}
	}
}
