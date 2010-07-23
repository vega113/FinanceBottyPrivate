
package com.example.portfoliobotty.client.inject;

import com.example.portfoliobotty.client.resources.GlobalResources;
import com.example.portfoliobotty.client.ui.PortfolioPanel;
import com.example.portfoliobotty.client.utils.PortfolioUtils;
import com.google.gwt.inject.client.GinModules;
import com.google.gwt.inject.client.Ginjector;

@GinModules(PorfolioModule.class)
public interface PortfolioGinjector extends Ginjector {

	PortfolioPanel getPortfolioPanel();
	GlobalResources getResources();
	PortfolioUtils getPortfolioUtils();
}
