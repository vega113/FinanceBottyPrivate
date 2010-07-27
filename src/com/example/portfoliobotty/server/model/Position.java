package com.example.portfoliobotty.server.model;

import java.io.Serializable;

import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.gson.annotations.Expose;

@SuppressWarnings("serial")
public class Position implements Serializable{
	@Persistent
	@PrimaryKey
	String positionId;
	@Persistent
	@Expose
	String exchange;
	@Persistent
	@Expose
	String symbol;
	@Persistent
	@Expose
	String fullName;
	@Persistent
	@Expose
	double shares;
	@Persistent
	@Expose
	double gainPercentage;
	@Persistent
	@Expose
	double costBasis;
	@Persistent
	@Expose
	String currencyCode;
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
	
	@Expose
	Returns returns;
	
	
	public Position(String positionId, String exchange, String symbol,
			String fullName, int shares, double gainPercentage,
			double costBasis, String currencyCode, double daysGain,
			double gain, double marketValue, long returnsId) {
		super();
		this.positionId = positionId;
		this.exchange = exchange;
		this.symbol = symbol;
		this.fullName = fullName;
		this.shares = shares;
		this.gainPercentage = gainPercentage;
		this.costBasis = costBasis;
		this.currencyCode = currencyCode;
		this.daysGain = daysGain;
		this.gain = gain;
		this.marketValue = marketValue;
		this.returnsId = returnsId;
	}
	public Position(String positionId, String exchange, String symbol,String fullName, double shares, double gainPercentage,double costBasis, double daysGain,
			double gain, double marketValue, Returns returns) {
		super();
		this.positionId = positionId;
		this.exchange = exchange;
		this.symbol = symbol;
		this.fullName = fullName;
		this.shares = shares;
		this.gainPercentage = gainPercentage;
		this.costBasis = costBasis;
		this.currencyCode = null;
		this.daysGain = daysGain;
		this.gain = gain;
		this.marketValue = marketValue;
		this.returns = returns;
	}
	public String getPositionId() {
		return positionId;
	}
	public void setPositionId(String positionId) {
		this.positionId = positionId;
	}
	public String getExchange() {
		return exchange;
	}
	public void setExchange(String exchange) {
		this.exchange = exchange;
	}
	public String getSymbol() {
		return symbol;
	}
	public void setSymbol(String symbol) {
		this.symbol = symbol;
	}
	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	public double getShares() {
		return shares;
	}
	public void setShares(int shares) {
		this.shares = shares;
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
	public String getCurrencyCode() {
		return currencyCode;
	}
	public void setCurrencyCode(String currencyCode) {
		this.currencyCode = currencyCode;
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
	public Returns getReturns() {
		return returns;
	}
	public void setReturns(Returns returns) {
		this.returns = returns;
	}
	@Override
	public String toString() {
		return "Position [costBasis=" + costBasis + ", currencyCode="
				+ currencyCode + ", daysGain=" + daysGain + ", exchange="
				+ exchange + ", fullName=" + fullName + ", gain=" + gain
				+ ", gainPercentage=" + gainPercentage + ", marketValue="
				+ marketValue + ", positionId=" + positionId + ", returnsId="
				+ returnsId + ", shares=" + shares + ", symbol=" + symbol + "]";
	}
}
