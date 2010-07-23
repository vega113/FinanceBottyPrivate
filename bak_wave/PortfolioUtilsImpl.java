package com.example.portfoliobotty.client.utils;

import org.cobogw.gwt.waveapi.gadget.client.WaveFeature;

import com.allen_sauer.gwt.log.client.Log;
import com.example.portfoliobotty.client.feature.minimessages.MiniMessagesFeature;
import com.google.gwt.gadgets.client.AnalyticsFeature;
import com.google.gwt.gadgets.client.DynamicHeightFeature;
import java.util.HashMap;
import java.util.Map;
import com.google.gwt.user.client.Window;
import com.google.inject.Inject;


public class PortfolioUtilsImpl implements PortfolioUtils {
	private WaveFeature wave;
	private DynamicHeightFeature height;
	private MiniMessagesFeature messages;
	private AnalyticsFeature analytics;
	
	
	@Inject
	public PortfolioUtilsImpl(WaveFeature wave, DynamicHeightFeature height,
			MiniMessagesFeature messages, AnalyticsFeature analytics) {
		super();
		this.wave = wave;
		this.height = height;
		this.messages = messages;
		this.analytics = analytics;
	}
	@Override
	public String retrUserId() {
		if(wave != null && wave.getViewer() != null){
			return wave.getViewer().getId();
		}else{
			return "";
		}
		
	}
	@Override
	public void adjustHeight(){
		if(height != null){
			height.adjustHeight();
		}
	}
	
	@Override
	public String retrUserName() {
		if(wave != null && wave.getViewer() != null){
			return wave.getHost().getId();
		}else{
			return "";
		}
		
	}
	@Override
	public String retrHostId(){
		if(wave != null && wave.getViewer() != null){
			return wave.getHost().getId();
		}else{
			return "";
		}
	}
	@Override
	public void alert(String msg) {
		messages.alert(msg);
	}	
	@Override
	public void showStaticMessage(String msg) {
		messages.createStaticMessage(msg);
	}	
	@Override
	public void dismissStaticMessage() {
		messages.dismissStaticMessage();
	}
	@Override
	public void dismissAllStaticMessages() {
		messages.dismissAllStaticMessages();
	}
	@Override
	public void showSuccessMessage(String msg, int seconds) {
		messages.showSuccessMessage(msg, seconds);
	}
	@Override
	public void dismissAlert(){
		messages.dismissAlert();
	}
	@Override
	public WaveFeature getWave() {
		return wave;
	}
	@Override
	public void setWave(WaveFeature wave) {
		Log.info("setWave: " + wave);
		this.wave = wave;
	}
	@Override
	public DynamicHeightFeature getHeight() {
		return height;
	}
	@Override
	public void setHeight(DynamicHeightFeature height) {
		this.height = height;
	}

	@Override
	public void setMiniMessages(MiniMessagesFeature mmFeature) {
		this.messages = mmFeature;
		
	}

	@Override
	public void showTimerMessage(String msg, int seconds) {
		messages.createTimerMessage(msg, seconds);
		
	}

	@Override
	public void setAnalytics(AnalyticsFeature analyticsFeature) {
		this.analytics = analyticsFeature; 
	}
	
	private final static String ANALYTICS_ID = "UA-13269470-3";
	@Override
	public void recordPageView(String typeOfrecord) {
		analytics.recordPageView(ANALYTICS_ID, typeOfrecord);
	}
	@Override
	public void putToPrivateSate(String key, String value){
		HashMap<String,String> delta = new HashMap<String, String>();
		delta.put(key, value);
		wave.getPrivateState().submitDelta(delta);
	}
	@Override
	public String retrFromPrivateSate(String key){
		return wave.getPrivateState().get(key);
	}
	
	/*
	public void showStaticMessage(String msg) {
	}	
	public void dismissStaticMessage() {
	}
	public void dismissAllStaticMessages() {
	}
	public void showSuccessMessage(String msg, int seconds) {
		Window.alert(msg);
	}
	public void recordPageView(String typeOfrecord) {
	}
	
	public String retrUserId() {
		return "vega113";
		
	}
	public String retrUserName() {
		return "Yuri Zelikov";
		
	}
	public void adjustHeight(){
	}
	public void alert(String msg) {
		Window.alert(msg);
	}	
	public void dismissAlert(){
	}

	private static HashMap<String,String> privateState = new HashMap<String, String>();
	public void putToPrivateSate(String key, String value){
		privateState.put(key, value);
	}
	public String retrFromPrivateSate(String key){
		return privateState.get(key);
	}
	*/
	
}
