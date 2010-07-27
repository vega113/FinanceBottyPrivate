package com.example.portfoliobotty.client.utils;

public interface PortfolioUtils {

	public abstract void showStaticMessage(String msg);

	public abstract void dismissStaticMessage();

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

	public abstract String retrHostId();

	public abstract void requestNavigateTo(String discussFinanceBottyWaveView,
			Object object);
	
//	public abstract WaveFeature getWave();
//	public abstract void setWave(WaveFeature wave);
//	public abstract DynamicHeightFeature getHeight();
//	public abstract void setHeight(DynamicHeightFeature height);
//	public abstract void setMiniMessages(MiniMessagesFeature mmFeature);
	

}