package com.example.portfoliobotty.server.finance.service;

import java.io.IOException;
import java.net.MalformedURLException;
import java.util.List;

import com.example.portfoliobotty.server.model.Portfolio;
import com.google.gdata.client.finance.FinanceService;
import com.google.gdata.util.ServiceException;

public interface GFinanceService {

	public abstract FinanceService loginAndReturnService(String token);

	public abstract String retrUserFromPortfolioFeed(FinanceService service)
			throws MalformedURLException, IOException, ServiceException;

	public abstract List<Portfolio> retrPortfolios(FinanceService service) throws MalformedURLException, IOException, ServiceException;

}