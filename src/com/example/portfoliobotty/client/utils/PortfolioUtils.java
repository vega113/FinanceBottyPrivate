package com.example.portfoliobotty.client.utils;

import org.cobogw.gwt.waveapi.gadget.client.WaveFeature;

import com.example.portfoliobotty.client.feature.minimessages.MiniMessagesFeature;
import com.google.gwt.gadgets.client.AnalyticsFeature;
import com.google.gwt.gadgets.client.DynamicHeightFeature;


public interface PortfolioUtils {

	/**
	 * show new static message
	 * @param msg
	 */
	public abstract void showStaticMessage(String msg);
	/**
	 * dismiss the last shown static message 
	 */
	public abstract void dismissStaticMessage();
	/**
	 * dismiss all shown static message 
	 */
	public abstract void dismissAllStaticMessages();

	public abstract void showSuccessMessage(String msg, int seconds);

	public abstract void recordPageView(String typeOfrecord);

	public abstract String retrUserId();

	public abstract String retrUserName();

	public abstract void adjustHeight();

	public abstract void alert(String msg);

	public abstract void dismissAlert();

	
	public abstract void putToPrivateSate(String key, String value);
	
	public abstract String retrFromPrivateSate(String key);
	
	public abstract WaveFeature getWave();
	public abstract void setWave(WaveFeature wave);
	public abstract DynamicHeightFeature getHeight();
	public abstract void setHeight(DynamicHeightFeature height);
	public abstract void setMiniMessages(MiniMessagesFeature mmFeature);
	public abstract void setAnalytics(AnalyticsFeature analyticsFeature);
	public abstract String retrHostId();

	public abstract void showTimerMessage(String msg, int seconds);

	public abstract void requestNavigateTo(String view, String optParams);

}