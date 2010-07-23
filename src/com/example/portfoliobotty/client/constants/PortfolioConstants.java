

package com.example.portfoliobotty.client.constants;

import com.google.gwt.i18n.client.Constants;
import com.google.gwt.i18n.client.Constants.DefaultIntValue;

/**
 * Interface that can be used to read constants from a properties file.
 *
 * Instances of this interface can be requested/injected by Gin without an
 * explicit binding: Gin will internallt call GWT.create on the requested type.
 */
public interface PortfolioConstants extends Constants {
	@DefaultIntValue(value=320)
	int basicReportHeightInt();

	String gadgetTitleStr();
	String symbolNameStr();
	String exchangeNameStr();
	String sharesNameStr();
	String gainPercentageNameStr();
	String costBasisNameStr();
	String marketValueNameStr();
	String daysGainNameStr();
	String gainNameStr();
	String currencyCodeNameStr();
	
	String return1wNameStr();
	String return4wNameStr();
	String return1yNameStr();
	String returnOverallNameStr();
	
	String portfolioDataStr();
	String choosePortfolioStr();
	String positionsDataStr();
	
	String updatingStr();
	
	@DefaultStringValue(value="60px")
	String cellWidth();
}
