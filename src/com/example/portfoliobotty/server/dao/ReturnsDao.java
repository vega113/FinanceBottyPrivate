package com.example.portfoliobotty.server.dao;

import com.example.portfoliobotty.server.model.Returns;

public interface ReturnsDao {

	Returns save(Returns returns);

	Returns retrReturnsById(long id);

}
