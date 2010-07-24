
package com.example.portfoliobotty.client.inject;

import com.example.portfoliobotty.client.request.GwtRequestServiceImpl;
import com.example.portfoliobotty.client.request.RequestService;
import com.example.portfoliobotty.client.service.PortfolioService;
import com.example.portfoliobotty.client.service.PortfolioServiceImpl;
import com.example.portfoliobotty.client.utils.PortfolioUtilsImpl;
import com.example.portfoliobotty.client.utils.PortfolioUtils;
import com.google.gwt.inject.client.AbstractGinModule;
import com.google.inject.Provider;
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
    
    //Gwt simulation
//    bind(RequestService.class).to(WaveRequestServiceImpl.class).in(Singleton.class);
    bind(RequestService.class).to(GwtRequestServiceImpl.class).in(Singleton.class);
    bind(PortfolioUtils.class).toProvider(PortfolioUtilsProvider.class);
  }
  static class PortfolioUtilsProvider implements Provider<PortfolioUtils>{
		PortfolioUtils utils = new PortfolioUtilsImpl();
		@Override
		public PortfolioUtils get() {
			return utils;
		}
	}
}
