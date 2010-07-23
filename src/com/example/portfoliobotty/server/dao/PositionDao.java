package com.example.portfoliobotty.server.dao;

import com.example.portfoliobotty.server.model.Position;

public interface PositionDao {

	Position save(Position position);

	Position retrPositionById(String id);

}
