package com.example.portfoliobotty.server.finance.service;

import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

import com.example.portfoliobotty.server.authSub.LoginServlet;
import com.example.portfoliobotty.server.dao.TokenDao;
import com.example.portfoliobotty.server.finance.FinancePortfoliosClient;
import com.example.portfoliobotty.server.model.Portfolio;
import com.google.gdata.client.finance.FinanceService;
import com.google.gdata.data.finance.PortfolioEntry;
import com.google.gdata.data.finance.PortfolioFeed;
import com.google.gdata.util.ServiceException;
import com.google.inject.Inject;

public class GFinanceServiceImpl implements GFinanceService {

	/* (non-Javadoc)
	 * @see com.example.portfoliobotty.server.finance.GFinanceService#loginAndReturnService(java.lang.String)
	 */
	@Override
	public FinanceService loginAndReturnService(String token){
		return FinancePortfoliosClient.loginUser(token, null);
	}

	/* (non-Javadoc)
	 * @see com.example.portfoliobotty.server.finance.GFinanceService#retrUserFromPortfolioFeed(com.google.gdata.client.finance.FinanceService)
	 */
	@Override
	public String retrUserFromPortfolioFeed(FinanceService service) throws MalformedURLException, IOException, ServiceException{
		PortfolioFeed portfolioFeed = service.getFeed(new URL("http://finance.google.com/finance/feeds/default/portfolios"), PortfolioFeed.class);
		PortfolioEntry entry = portfolioFeed.getEntries().get(0);
		String user = "";
		if(entry != null){
			String feedId = entry.getId();
			user = feedId.replace(LoginServlet.FINANCE_SCOPE_URL, "").split("@")[0];
		}
		return user;
	}

	@Override
	public List<Portfolio> retrPortfolios(FinanceService service) throws MalformedURLException, IOException, ServiceException {
		PortfolioFeed portfolioFeed = service.getFeed(new URL("http://finance.google.com/finance/feeds/default/portfolios?returns=true&positions=true"), PortfolioFeed.class);
		List<Portfolio> portfolios = new ArrayList<Portfolio>();
		for(PortfolioEntry entry : portfolioFeed.getEntries()){
			Portfolio portfolio = FinancePortfoliosClient.initPortfolioEntry(entry);
			portfolios.add(portfolio);
		}
		return portfolios;
	}

}
