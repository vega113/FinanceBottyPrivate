package com.example.portfoliobotty.server.dao;

import com.example.portfoliobotty.server.model.TokenData;

public interface TokenDao {

	public abstract TokenData save(TokenData tokenData);

	public abstract TokenData retrTokenByUser(String user);

}