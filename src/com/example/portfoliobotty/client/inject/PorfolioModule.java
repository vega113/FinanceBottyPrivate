
package com.example.portfoliobotty.client.inject;
import org.cobogw.gwt.waveapi.gadget.client.WaveFeature;

import com.allen_sauer.gwt.log.client.Log;
import com.example.portfoliobotty.client.PortfolioBotty;
import com.example.portfoliobotty.client.feature.minimessages.MiniMessagesFeature;
import com.example.portfoliobotty.client.feature.views.ViewsFeature;
import com.example.portfoliobotty.client.request.GwtRequestServiceImpl;
import com.example.portfoliobotty.client.request.RequestService;
import com.example.portfoliobotty.client.request.WaveRequestServiceImpl;
import com.example.portfoliobotty.client.service.PortfolioService;
import com.example.portfoliobotty.client.service.PortfolioServiceImpl;
import com.example.portfoliobotty.client.utils.PortfolioUtils;
import com.example.portfoliobotty.client.utils.PortfolioUtilsImpl;
import com.google.gwt.gadgets.client.AnalyticsFeature;
import com.google.gwt.gadgets.client.DynamicHeightFeature;
import com.google.gwt.inject.client.AbstractGinModule;
import com.google.inject.Singleton;

/**
 * This gin module binds an implementation for the
 * {@link com.google.gwt.inject.example.simple.client.SimpleService} used in
 * this example application. Note that we don't have to bind implementations
 * for {@link com.google.gwt.inject.DigestConstants.simple.client.SimpleConstants} and
 * {@link com.google.gwt.inject.DigestMessages.simple.client.SimpleMessages} - they
 * are constructed by Gin through GWT.create.
 */
public class PorfolioModule extends AbstractGinModule {

  protected void configure() {
//	bind(RequestService.class).to(GadgetRequestServiceImpl.class);
	  
    bind(PortfolioService.class).to(PortfolioServiceImpl.class);
    bind(RequestService.class).to(WaveRequestServiceImpl.class).in(Singleton.class);
    bind(PortfolioUtils.class).to(PortfolioUtilsImpl.class).in(Singleton.class);
    
    bind(WaveFeature.class).toProvider(PortfolioBotty.WaveFeatureProvider.class).in(Singleton.class);
    bind(AnalyticsFeature.class).toProvider(PortfolioBotty.AnalyticsFeatureProvider.class).in(Singleton.class);
    bind(MiniMessagesFeature.class).toProvider(PortfolioBotty.MiniMessagesFeatureProvider.class).in(Singleton.class);
    bind(DynamicHeightFeature.class).toProvider(PortfolioBotty.DynamicHeightFeatureProvider.class).in(Singleton.class);
    bind(ViewsFeature.class).toProvider(PortfolioBotty.ViewsFeatureProvider.class).in(Singleton.class);
  }
}
