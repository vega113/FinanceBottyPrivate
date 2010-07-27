package com.example.portfoliobotty.client;

import org.cobogw.gwt.waveapi.gadget.client.WaveFeature;
import org.cobogw.gwt.waveapi.gadget.client.WaveGadget;

import com.allen_sauer.gwt.log.client.DivLogger;
import com.allen_sauer.gwt.log.client.Log;
import com.example.portfoliobotty.client.feature.minimessages.MiniMessagesFeature;
import com.example.portfoliobotty.client.feature.minimessages.NeedsMiniMessages;
import com.example.portfoliobotty.client.feature.views.NeedsViews;
import com.example.portfoliobotty.client.feature.views.ViewsFeature;
import com.example.portfoliobotty.client.inject.PortfolioGinjector;
import com.example.portfoliobotty.client.ui.PortfolioPanel;
import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;
import com.google.gwt.gadgets.client.AnalyticsFeature;
import com.google.gwt.gadgets.client.DynamicHeightFeature;
import com.google.gwt.gadgets.client.NeedsAnalytics;
import com.google.gwt.gadgets.client.NeedsDynamicHeight;
import com.google.gwt.gadgets.client.UserPreferences;
import com.google.gwt.gadgets.client.Gadget.ModulePrefs;
import com.google.gwt.user.client.Timer;
import com.google.gwt.user.client.ui.AbsolutePanel;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.inject.Provider;

/**
 * Entry point classes define <code>onModuleLoad()</code>.
 */
//public class DigestBottyGadget implements EntryPoint {
@ModulePrefs(title = "Wave Google Finance",author="Yuri Zelikov",author_email="vega113+financebotty@gmail.com", width=600, height=600)
public class PortfolioBotty extends WaveGadget<UserPreferences> implements NeedsDynamicHeight, NeedsMiniMessages, NeedsAnalytics, NeedsViews{

	/**
	 * This is the entry point method.
	 */
	/*
	public void onModuleLoad() {
		PortfolioGinjector ginjector = GWT.create(PortfolioGinjector.class);
		ginjector.getResources().globalCSS().ensureInjected();
		PortfolioPanel widget = ginjector.getPortfolioPanel();
	    RootPanel.get("mainPanel").add(widget);
	    initRemoteLogger(RootPanel.get("logPanel"));
	}
	*/
	public void initRemoteLogger(AbsolutePanel panel){
		Log.setUncaughtExceptionHandler();
		if (panel != null) {
			panel.add (Log.getLogger(DivLogger.class).getWidget());
			Log.info("Logger initialized: " + Log.class.getName());
		}
	}

	@Override
	protected void init(UserPreferences preferences) {
		Log.info("init PortfolioBotty");
		PortfolioBotty.waveFeature = getWave();
		mmFeature.initMiniMessagesFeature();
		viewsFeature.initViewsFeature();
		Timer t = new Timer() {
			
			@Override
			public void run() {
				PortfolioGinjector ginjector = GWT.create(PortfolioGinjector.class);
				ginjector.getResources().globalCSS().ensureInjected();
				PortfolioPanel widget = ginjector.getPortfolioPanel();
				dhFeature.getContentDiv().add(widget);
			}
		};
		t.schedule(1000);
	    initRemoteLogger(RootPanel.get());
	}
	
	static WaveFeature waveFeature;
	
	static DynamicHeightFeature dhFeature;
	@Override
	public void initializeFeature(DynamicHeightFeature feature) {
		PortfolioBotty.dhFeature = feature;
		
	}
	
	static private MiniMessagesFeature mmFeature;
	@Override
	public void initializeFeature(MiniMessagesFeature feature) {
		PortfolioBotty.mmFeature = feature;
	}
	
	static private ViewsFeature viewsFeature;
	@Override
	public void initializeFeature(ViewsFeature feature) {
		PortfolioBotty.viewsFeature = feature;
	}
	
	static private AnalyticsFeature analyticsFeature;
	@Override
	public void initializeFeature(AnalyticsFeature analyticsFeature) {
		PortfolioBotty.analyticsFeature = analyticsFeature;
	}
	
	public static class AnalyticsFeatureProvider implements Provider<AnalyticsFeature>{
		@Override
		public AnalyticsFeature get() {
			Log.info("Providing AnalyticsFeature");
			return PortfolioBotty.analyticsFeature;
		}
	}
	
	public static class MiniMessagesFeatureProvider implements Provider<MiniMessagesFeature>{
		@Override
		public MiniMessagesFeature get() {
			Log.info("Providing MiniMessagesFeature");
			return PortfolioBotty.mmFeature;
		}
	}
	
	public static class DynamicHeightFeatureProvider implements Provider<DynamicHeightFeature>{
		@Override
		public DynamicHeightFeature get() {
			Log.info("Providing DynamicHeightFeature");
			return PortfolioBotty.dhFeature;
		}
	}
	
	public static class WaveFeatureProvider implements Provider<WaveFeature>{
		@Override
		public WaveFeature get() {
			Log.info("Providing WaveFeature");
			return PortfolioBotty.waveFeature;
		}
	}
	
	public static class ViewsFeatureProvider implements Provider<ViewsFeature>{
		@Override
		public ViewsFeature get() {
			Log.info("Providing ViewsFeature");
			return PortfolioBotty.viewsFeature;
		}
	}
}
