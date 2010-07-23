package com.example.portfoliobotty.server.guice;

import java.util.logging.Logger;

import javax.jdo.JDOHelper;
import javax.jdo.PersistenceManagerFactory;

import com.example.portfoliobotty.server.FinanceBotty;
import com.example.portfoliobotty.server.RegisterRobotServlet;
import com.example.portfoliobotty.server.authSub.*;
import com.example.portfoliobotty.server.command.JsonRpcProcessor;
import com.example.portfoliobotty.server.dao.PortfolioDao;
import com.example.portfoliobotty.server.dao.PortfolioDaoImpl;
import com.example.portfoliobotty.server.dao.PositionDao;
import com.example.portfoliobotty.server.dao.PositionDaoImpl;
import com.example.portfoliobotty.server.dao.ReturnsDao;
import com.example.portfoliobotty.server.dao.ReturnsDaoImpl;
import com.example.portfoliobotty.server.dao.TokenDao;
import com.example.portfoliobotty.server.dao.TokenDaoImpl;
import com.example.portfoliobotty.server.finance.service.GFinanceService;
import com.example.portfoliobotty.server.finance.service.GFinanceServiceImpl;
import com.google.inject.AbstractModule;
import com.google.inject.Guice;
import com.google.inject.Injector;
import com.google.inject.Provides;
import com.google.inject.Singleton;
import com.google.inject.servlet.GuiceServletContextListener;
import com.google.inject.servlet.ServletModule;

public class GuiceServletConfig extends GuiceServletContextListener {
  private static final Logger LOG = Logger.getLogger(GuiceServletConfig.class.getName());

  @Override
  protected Injector getInjector() {
    ServletModule servletModule = new ServletModule() {
      @Override
      protected void configureServlets() {
    	          serveRegex("\\/_wave/.*").with(FinanceBotty.class);
//    	  serve("/_wave/verify_token").with(RegisterRobotServlet.class);
    	  serve("/command/jsonrpc").with(JsonRpcProcessor.class);
    	  //        serve("/feeds/json").with(JsonGenerator.class);
    	  //        serve("/feeds/atom").with(AtomGenerator.class);       
    	  //        serve("/installNew").with(InstallServlet.class); 
    	  serve("/LoginServlet").with(LoginServlet.class) ; 
    	  serve("/HandleTokenServlet").with(HandleTokenServlet.class); 
    	  serve("/SuccessMessageServlet").with(SuccessMessageServlet.class); 


    	  //serve("/migrateTags").with(MigrateTags.class);
    	  //serve("/migrateTagsTask").with(MigrateTagsTask.class);
      }
    };

    AbstractModule businessModule = new AbstractModule() {
      @Override
      protected void configure() {
//        bind(ForumPostDao.class).to(ForumPostDaoImpl.class);
    	  bind(GFinanceService.class).to(GFinanceServiceImpl.class);
    	  bind(TokenDao.class).to(TokenDaoImpl.class);
    	  bind(PositionDao.class).to(PositionDaoImpl.class);
    	  bind(PortfolioDao.class).to(PortfolioDaoImpl.class);
    	  bind(ReturnsDao.class).to(ReturnsDaoImpl.class);
      }
      @Provides
      @Singleton
      PersistenceManagerFactory getPmf() {
        return JDOHelper.getPersistenceManagerFactory("transactions-optional");
      }
    };

    return Guice.createInjector(servletModule, businessModule);
  }
}
