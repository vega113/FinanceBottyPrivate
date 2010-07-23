package com.example.portfoliobotty.server.dao;

import javax.jdo.PersistenceManager;
import javax.jdo.PersistenceManagerFactory;

import com.example.portfoliobotty.server.model.Portfolio;
import com.example.portfoliobotty.server.model.Returns;
import com.google.inject.Inject;

public class PortfolioDaoImpl implements PortfolioDao {
	private PersistenceManagerFactory pmf = null;

	@Inject
	public PortfolioDaoImpl(PersistenceManagerFactory pmf) {
		this.pmf = pmf;
	}
	
	/* (non-Javadoc)
	 * @see com.example.portfoliobotty.server.dao.TokenDao#save(com.example.portfoliobotty.server.model.TokenData)
	 */
	@Override
	public Portfolio save(Portfolio portfolio) {
		PersistenceManager pm = pmf.getPersistenceManager();
		try {
			portfolio = pm.makePersistent(portfolio);
			portfolio = pm.detachCopy(portfolio);
		} finally {
			pm.close();
		}
		return portfolio;
	}
	@Override
	public Portfolio retrPortfolioById(String id){
		Portfolio portfolio = null;
		PersistenceManager pm = pmf.getPersistenceManager();
		try {
			portfolio = pm.getObjectById(Portfolio.class, id);
			portfolio = pm.detachCopy(portfolio);
		} finally {
			pm.close();
		}
		return portfolio;
	}
}
