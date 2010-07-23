package com.example.portfoliobotty.server.dao;

import javax.jdo.PersistenceManager;
import javax.jdo.PersistenceManagerFactory;

import com.example.portfoliobotty.server.model.Position;
import com.example.portfoliobotty.server.model.Returns;
import com.google.inject.Inject;

public class ReturnsDaoImpl implements ReturnsDao {
	private PersistenceManagerFactory pmf = null;

	@Inject
	public ReturnsDaoImpl(PersistenceManagerFactory pmf) {
		this.pmf = pmf;
	}
	
	/* (non-Javadoc)
	 * @see com.example.portfoliobotty.server.dao.TokenDao#save(com.example.portfoliobotty.server.model.TokenData)
	 */
	@Override
	public Returns save(Returns returns) {
		PersistenceManager pm = pmf.getPersistenceManager();
		try {
			returns = pm.makePersistent(returns);
			returns = pm.detachCopy(returns);
		} finally {
			pm.close();
		}
		return returns;
	}
	@Override
	public Returns retrReturnsById(long id){
		Returns returns = null;
		PersistenceManager pm = pmf.getPersistenceManager();
		try {
			returns = pm.getObjectById(Returns.class, id);
			returns = pm.detachCopy(returns);
		} finally {
			pm.close();
		}
		return returns;
	}
	
}