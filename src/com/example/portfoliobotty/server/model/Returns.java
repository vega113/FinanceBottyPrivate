package com.example.portfoliobotty.server.model;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.IdentityType;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.gson.annotations.Expose;
@PersistenceCapable(identityType = IdentityType.APPLICATION, detachable = "true")
public class Returns {
	@Persistent(valueStrategy=IdGeneratorStrategy.IDENTITY)
	@PrimaryKey
	long key;
	public Returns(double return1w, double return4w, double return3m,
			double returnYTD, double return1y, double return3y,
			double return5y, double returnOverall) {
		super();
		this.return1w = return1w;
		this.return4w = return4w;
		this.return3m = return3m;
		this.returnYTD = returnYTD;
		this.return1y = return1y;
		this.return3y = return3y;
		this.return5y = return5y;
		this.returnOverall = returnOverall;
	}
	@Persistent
	@Expose
	double return1w;
	@Persistent
	@Expose
	double return4w;
	@Persistent
	@Expose
	double return3m;
	@Persistent
	@Expose
	double returnYTD;
	@Persistent
	@Expose
	double return1y;
	@Persistent
	@Expose
	double return3y;
	@Persistent
	@Expose
	double return5y;
	@Persistent
	@Expose
	double returnOverall;
	public long getKey() {
		return key;
	}
	public void setKey(long key) {
		this.key = key;
	}
	public double getReturn1w() {
		return return1w;
	}
	public void setReturn1w(double return1w) {
		this.return1w = return1w;
	}
	public double getReturn4w() {
		return return4w;
	}
	public void setReturn4w(double return4w) {
		this.return4w = return4w;
	}
	public double getReturn3m() {
		return return3m;
	}
	public void setReturn3m(double return3m) {
		this.return3m = return3m;
	}
	public double getReturnYTD() {
		return returnYTD;
	}
	public void setReturnYTD(double returnYTD) {
		this.returnYTD = returnYTD;
	}
	public double getReturn1y() {
		return return1y;
	}
	public void setReturn1y(double return1y) {
		this.return1y = return1y;
	}
	public double getReturn3y() {
		return return3y;
	}
	public void setReturn3y(double return3y) {
		this.return3y = return3y;
	}
	public double getReturn5y() {
		return return5y;
	}
	public void setReturn5y(double return5y) {
		this.return5y = return5y;
	}
	public double getReturnOverall() {
		return returnOverall;
	}
	public void setReturnOverall(double returnOverall) {
		this.returnOverall = returnOverall;
	}
	@Override
	public String toString() {
		return "Returns [key=" + key + ", return1w=" + return1w + ", return1y="
				+ return1y + ", return3m=" + return3m + ", return3y="
				+ return3y + ", return4w=" + return4w + ", return5y="
				+ return5y + ", returnOverall=" + returnOverall
				+ ", returnYTD=" + returnYTD + "]";
	}
}
