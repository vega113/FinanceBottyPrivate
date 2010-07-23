package com.example.portfoliobotty.server.dao;

import com.example.portfoliobotty.server.model.Portfolio;

public interface PortfolioDao {

	Portfolio save(Portfolio portfolio);

	Portfolio retrPortfolioById(String id);

}
