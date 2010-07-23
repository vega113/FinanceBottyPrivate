package com.example.portfoliobotty.server.model;

import java.util.ArrayList;
import java.util.List;

import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.gson.annotations.Expose;

public class Portfolio {
	@Persistent
	@PrimaryKey
	@Expose
	String portfolioId;
	@Persistent
	@Expose
	private String title;
	@Persistent
	@Expose
	String currencyCode;
	@Persistent
	@Expose
	double gainPercentage;
	@Persistent
	@Expose
	double costBasis;
	@Persistent
	@Expose
	double daysGain;
	@Persistent
	@Expose
	double gain;
	@Persistent
	@Expose
	double marketValue;
	@Persistent
	@Expose
	long returnsId;
	List<String> positionIds;
	
	@Expose
	Returns returns;
	@Expose
	List<Position> positions;
	
	public Portfolio(String portfolioId, String title,String currencyCode, double gainPercentage, double costBasis, double daysGain,
			double gain, double marketValue, Returns returns,
			List<Position> positions) {
		this.title = title;
		this.portfolioId = portfolioId;
		this.currencyCode = currencyCode;
		this.gainPercentage = gainPercentage;
		this.costBasis = costBasis;
		this.daysGain = daysGain;
		this.gain = gain;
		this.marketValue = marketValue;
		this.returns = returns;
		this.positions = positions;
	}
	public String getPortfolioId() {
		return portfolioId;
	}
	public void setPortfolioId(String portfolioId) {
		this.portfolioId = portfolioId;
	}
	public String getCurrencyCode() {
		return currencyCode;
	}
	public void setCurrencyCode(String currencyCode) {
		this.currencyCode = currencyCode;
	}
	public double getGainPercentage() {
		return gainPercentage;
	}
	public void setGainPercentage(double gainPercentage) {
		this.gainPercentage = gainPercentage;
	}
	public double getCostBasis() {
		return costBasis;
	}
	public void setCostBasis(double costBasis) {
		this.costBasis = costBasis;
	}
	public double getDaysGain() {
		return daysGain;
	}
	public void setDaysGain(double daysGain) {
		this.daysGain = daysGain;
	}
	public double getGain() {
		return gain;
	}
	public void setGain(double gain) {
		this.gain = gain;
	}
	public double getMarketValue() {
		return marketValue;
	}
	public void setMarketValue(double marketValue) {
		this.marketValue = marketValue;
	}
	public long getReturnsId() {
		return returnsId;
	}
	public void setReturnsId(long returnsId) {
		this.returnsId = returnsId;
	}
	public List<String> getPositionIds() {
		if(positionIds == null)
			positionIds = new ArrayList<String>();
		return positionIds;
	}
	public void setPositionIds(List<String> positionIds) {
		this.positionIds = positionIds;
	}
	public Returns getReturns() {
		return returns;
	}
	public void setReturns(Returns returns) {
		this.returns = returns;
	}
	public List<Position> getPositions() {
		if(positions == null)
			positions = new ArrayList<Position>();
		return positions;
	}
	public void setPositions(List<Position> positions) {
		this.positions = positions;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	@Override
	public String toString() {
		return "Portfolio [costBasis=" + costBasis + ", currencyCode="
				+ currencyCode + ", daysGain=" + daysGain + ", gain=" + gain
				+ ", gainPercentage=" + gainPercentage + ", marketValue="
				+ marketValue + ", portfolioId=" + portfolioId + ", positions="
				+ positionIds + ", returnsId=" + returnsId + "]";
	}
}
