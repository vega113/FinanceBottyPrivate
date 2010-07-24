package com.example.portfoliobotty.server.command;

import java.io.IOException;
import java.net.MalformedURLException;
import java.util.List;
import java.util.Set;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import com.example.portfoliobotty.server.dao.TokenDao;
import com.example.portfoliobotty.server.finance.FinancePortfoliosClient;
import com.example.portfoliobotty.server.finance.service.GFinanceService;
import com.example.portfoliobotty.server.model.Portfolio;
import com.example.portfoliobotty.server.model.TokenData;
import com.example.portfoliobotty.server.util.Util;
import com.google.gdata.client.finance.FinanceService;
import com.google.gdata.util.ServiceException;
import com.google.inject.Inject;

public class GetPortfolioData extends Command {
	private static final Logger LOG = Logger.getLogger(GetPortfolioData.class.getName());
	private Util util;
	private GFinanceService gfService;
	private TokenDao tokenDao;
	
	@Inject
	public GetPortfolioData(Util util, GFinanceService gfService, TokenDao tokenDao){
		this.util = util;
		this.gfService = gfService;
		this.tokenDao = tokenDao;
	}
	
	@Override
	public JSONObject execute() throws JSONException {
		String userId = this.getParam("user");
	    if (util.isNullOrEmpty(userId)) {
	    	StringBuilder sb = new StringBuilder();
	    	Set<String> keys = getParams().keySet();
	    	for(String key : keys){
	    		sb.append(key + ":" + getParam(key) + ". ");
	    	}
	    	LOG.severe("Missing required param: user. " +"\n" + sb.toString());
	      throw new IllegalArgumentException("Missing required param: user. " +"\n" + sb.toString());
	    }
	    TokenData tokenData = tokenDao.retrTokenByUser(userId);
	    if(tokenData == null) throw new IllegalArgumentException("NO_USER" + "No authenthication token for: " + userId + ", please go to /LoginServlet to register with service! ");
	    String token = tokenDao.retrTokenByUser(userId).getToken();
	    FinanceService service = gfService.loginAndReturnService(token);
	    List<Portfolio> portfolios = null;
	    try {
			portfolios = gfService.retrPortfolios(service);
		} catch (MalformedURLException e) {
			LOG.log(Level.SEVERE,"",e);
		} catch (IOException e) {
			LOG.log(Level.SEVERE,"",e);
		} catch (ServiceException e) {
			LOG.log(Level.SEVERE,"",e);
		}
		JSONObject json = new JSONObject();
	    json.put("result", new JSONArray(util.toJson(portfolios)));
	    return json;
	}

}
