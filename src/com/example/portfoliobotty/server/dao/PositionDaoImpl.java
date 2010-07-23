package com.example.portfoliobotty.server.dao;


import javax.jdo.PersistenceManager;
import javax.jdo.PersistenceManagerFactory;

import com.example.portfoliobotty.server.model.Portfolio;
import com.example.portfoliobotty.server.model.Position;
import com.example.portfoliobotty.server.model.TokenData;
import com.google.inject.Inject;

public class PositionDaoImpl implements PositionDao {
	private PersistenceManagerFactory pmf = null;

	@Inject
	public PositionDaoImpl(PersistenceManagerFactory pmf) {
		this.pmf = pmf;
	}
	
	/* (non-Javadoc)
	 * @see com.example.portfoliobotty.server.dao.TokenDao#save(com.example.portfoliobotty.server.model.TokenData)
	 */
	@Override
	public Position save(Position position) {
		PersistenceManager pm = pmf.getPersistenceManager();
		try {
			position = pm.makePersistent(position);
			position = pm.detachCopy(position);
		} finally {
			pm.close();
		}
		return position;
	}
	
	@Override
	public Position retrPositionById(String id){
		Position position = null;
		PersistenceManager pm = pmf.getPersistenceManager();
		try {
			position = pm.getObjectById(Position.class, id);
			position = pm.detachCopy(position);
		} finally {
			pm.close();
		}
		return position;
	}
}

