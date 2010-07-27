package com.example.portfoliobotty.client.ui;

import java.util.HashMap;
import java.util.Map;

import com.allen_sauer.gwt.log.client.Log;
import com.example.portfoliobotty.client.constants.PortfolioConstants;
import com.example.portfoliobotty.client.constants.PortfolioMessages;
import com.example.portfoliobotty.client.resources.GlobalResources;
import com.example.portfoliobotty.client.service.PortfolioService;
import com.example.portfoliobotty.client.utils.PortfolioUtils;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ChangeEvent;
import com.google.gwt.event.dom.client.ChangeHandler;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.http.client.RequestException;
import com.google.gwt.i18n.client.NumberFormat;
import com.google.gwt.json.client.JSONArray;
import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONValue;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.Command;
import com.google.gwt.user.client.DeferredCommand;
import com.google.gwt.user.client.Timer;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Anchor;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.CaptionPanel;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;

public class PortfolioPanel extends Composite {

	private static PortfolioPanelUiBinder uiBinder = GWT
			.create(PortfolioPanelUiBinder.class);

	interface PortfolioPanelUiBinder extends UiBinder<Widget, PortfolioPanel> {
	}
	
	PortfolioUtils utils;

	@UiField
	CaptionPanel topCaption;
	@UiField
	ListBox portfoliosList;
	@UiField
	VerticalPanel portfolioDataPanel;
	@UiField
	VerticalPanel positionsTableHeaderPanel;
	@UiField
	VerticalPanel positionsTableDataPanel;
	
	@UiField
	CaptionPanel registerCptn;
	@UiField
	CaptionPanel portfolioDataCptn;
	@UiField
	CaptionPanel choosePortfolioCptn;
	@UiField
	CaptionPanel positionsDataCptn;
	@UiField
	Button registerBtn;
	
	@UiField
	Anchor discussFinanceBottyAnchor;
	
	private final Map<String,JSONValue> jsonResultMap =  new HashMap<String, JSONValue>();
	
	
	@Inject
	public PortfolioPanel(final PortfolioService service, final PortfolioUtils utils, final PortfolioConstants constants, final PortfolioMessages messages, final GlobalResources resources) {
		this.utils = utils;
		initWidget(uiBinder.createAndBindUi(this));
		
		discussFinanceBottyAnchor.setHref("#");
		discussFinanceBottyAnchor.setText("Discuss FinanceBotty");
		discussFinanceBottyAnchor.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				utils.requestNavigateTo(constants.discussFinanceBottyWaveView(), null);
			}
		});
		
		utils.recordPageView("/" + utils.retrHostId() + "/" + utils.retrUserId());
		
		registerCptn.setVisible(false);
		portfoliosList.addChangeHandler(new ChangeHandler() {
			
			@Override
			public void onChange(ChangeEvent event) {
				loadPortfoliosPanel(constants, messages, resources);
				String value = portfoliosList.getValue(portfoliosList.getSelectedIndex());
				utils.putToPrivateSate("portfolioId", value);
			}
		});
		utils.showStaticMessage(constants.loadingFinanceDataFirstTime());
		hideDataCaptions();
		loadFinanceData(service, utils, constants, messages, resources, utils.retrHostId());
		//load the UI first, defer the portfolio data loading
		Timer timer = new Timer() {
			
			@Override
			public void run() {
				utils.dismissAllStaticMessages();
				loadFinanceData(service, utils, constants, messages, resources, utils.retrHostId());
			}
		};
		timer.scheduleRepeating(29000);//repeating
	}



	private void loadFinanceData(PortfolioService service,
			final PortfolioUtils utils, final PortfolioConstants constants,
			final PortfolioMessages messages, final GlobalResources resources,
			String user) {
		try {
			utils.dismissAllStaticMessages();
			utils.showStaticMessage(constants.updatingStr());
			service.retrPortfolios(user, new AsyncCallback<JSONValue>() {
				
				@Override
				public void onSuccess(JSONValue result) {
					Log.debug("entering onSuccess");
					showDataCaptions();
					utils.dismissStaticMessage();
					jsonResultMap.put("result",result);
					JSONArray portfolios = (JSONArray)jsonResultMap.get("result");
					String selectedPortfolioId = utils.retrFromPrivateSate("portfolioId");
					populateProjectsList(portfolios);
					if(selectedPortfolioId != null){
						int size = portfoliosList.getItemCount();
						for(int i = 0; i < size; i++){
							String currValue = portfoliosList.getValue(i);
							if(currValue.equals(selectedPortfolioId)){
								portfoliosList.setSelectedIndex(i);
								break;
							}
						}
					}
					loadPortfoliosPanel(constants, messages, resources);
				}
				
				@Override
				public void onFailure(Throwable caught) {
					utils.dismissStaticMessage();
					if(caught.getMessage() != null && caught.getMessage().indexOf("NO_USER") > -1){
						hideDataCaptions();
						registerCptn.setVisible(true);
						utils.adjustHeight();
						registerBtn.addClickHandler(new ClickHandler() {
							
							@Override
							public void onClick(ClickEvent event) {
								Window.open("http://" + constants.appdomain() + ".appspot.com/LoginServlet?user=" + utils.retrHostId(), "", "");
//								Window.open("http://localhost:8888/LoginServlet?user=" + utils.retrHostId(), "", "");
							}
						});
					}else{
						String message = caught.getMessage().substring(0, Math.min(200, caught.getMessage().length()));
						utils.alert(message);
					}
					
				}
			});
		} catch (RequestException e) {
			utils.dismissStaticMessage();
			String message = e.getMessage().substring(0, Math.min(200, e.getMessage().length()));
			utils.alert(message);
		}
	}



	protected void populatePortfolioData(GlobalResources resources,PortfolioConstants constants,
			FlexTable flexTable, JSONArray portfolios) {
		NumberFormat fmt = NumberFormat.getFormat("###.##");
		int size = portfolios.size();
		try{
			for(int i = 0; i< size; i++){
				JSONObject portfolioJson = portfolios.get(i).isObject();
				String id = portfolioJson.get("portfolioId").isString().stringValue();
				String selectedId = portfoliosList.getValue(portfoliosList.getSelectedIndex());
				if(selectedId.equals(id)){
					Widget costBasis = new HTML(String.valueOf(fmt.format(portfolioJson.get("costBasis").isNumber().doubleValue())));
					Widget gainPercentage = new HTML(String.valueOf(fmt.format(portfolioJson.get("gainPercentage").isNumber().doubleValue())));
					Widget marketValue = new HTML(String.valueOf(fmt.format(portfolioJson.get("marketValue").isNumber().doubleValue())));
					Widget currencyCode = new HTML(portfolioJson.get("currencyCode").isString().stringValue());
					Widget[] widgets = {costBasis,gainPercentage,marketValue,currencyCode};
					int j = 0;
					for(Widget widget : widgets){
						widget.setWidth(constants.cellWidth());
						flexTable.setWidget(1, j, widget);
						j++;
					}
					flexTable.getRowFormatter().setStylePrimaryName(1, resources.globalCSS().regularRow());
					break;
				}
			}
		}catch(Exception e){
			Log.error("", e);
		}
		utils.adjustHeight();
	}



	protected FlexTable createPortfolioHeader(PortfolioConstants constants,
			PortfolioMessages messages,GlobalResources resources) {
		FlexTable header = new FlexTable();
		Widget costBasis = new HTML(constants.costBasisNameStr());
		Widget gainPercentage = new HTML(constants.gainPercentageNameStr());
		Widget marketValue = new HTML(constants.marketValueNameStr());
		Widget currencyCode = new HTML(constants.currencyCodeNameStr());
		Widget[] widgets = {costBasis,gainPercentage,marketValue,currencyCode};
		int i = 0;
		for(Widget widget : widgets){
			widget.setWidth(constants.cellWidth());
			header.setWidget(0, i, widget);
			i++;
		}
		header.getRowFormatter().setStylePrimaryName(0, resources.globalCSS().highlight());
		return header;
	}
	protected FlexTable createPositionsHeader(PortfolioConstants constants,
			PortfolioMessages messages,GlobalResources resources) {
		FlexTable header = new FlexTable();
		
		Widget exchange = new HTML(constants.exchangeNameStr());
		Widget symbol = new HTML(constants.symbolNameStr());
		Widget shares = new HTML(constants.sharesNameStr());
		Widget daysGain = new HTML(constants.daysGainNameStr());
		Widget costBasis = new HTML(constants.costBasisNameStr());
		Widget gainPercentage = new HTML(constants.gainPercentageNameStr());
		Widget gain = new HTML(constants.gainNameStr());
		
		Widget return1w = new HTML(constants.return1wNameStr());
		Widget return4w = new HTML(constants.return4wNameStr());
		Widget return1y = new HTML(constants.return1yNameStr());
		Widget returnOverall = new HTML(constants.returnOverallNameStr());
//		Widget[] widgets = {exchange,symbol,daysGain,shares,costBasis,gainPercentage,gain,return1w,return4w,return1y,returnOverall};
		Widget[] widgets = {exchange,symbol,shares,daysGain,costBasis,gainPercentage,gain,return1w};
		int i = 0;
		for(Widget widget : widgets){
			widget.setWidth(constants.cellWidth());
			header.setWidget(0, i, widget);
			i++;
		}
		header.getRowFormatter().setStylePrimaryName(0, resources.globalCSS().highlight());
		return header;
	}

	protected void populatePositions(GlobalResources resources,PortfolioConstants constants,
			FlexTable flexTable, JSONArray portfolios){
		registerCptn.setVisible(false);
		NumberFormat fmt = NumberFormat.getFormat("###.##");
		int size = portfolios.size();
		try{
			for(int i = 0; i< size; i++){
				JSONObject portfolioJson = portfolios.get(i).isObject();
				String id = portfolioJson.get("portfolioId").isString().stringValue();
				String selectedId = portfoliosList.getValue(portfoliosList.getSelectedIndex());
				if(selectedId.equals(id)){
					JSONArray positions = portfolioJson.get("positions").isArray();
					int positionsSize = positions.size();
					for(int j = 0; j < positionsSize; j++){
						JSONObject positionJson = positions.get(j).isObject();
						Widget exchange = new HTML(positionJson.get("exchange").isString().stringValue());
						Widget symbol = new HTML(positionJson.get("symbol").isString().stringValue());
						Widget shares = new HTML(String.valueOf(positionJson.get("shares").isNumber() != null? fmt.format(positionJson.get("shares").isNumber().doubleValue()) : 0));
						Widget daysGain = new HTML(String.valueOf(positionJson.get("daysGain").isNumber() != null? fmt.format(positionJson.get("daysGain").isNumber().doubleValue()) : 0));
						Widget costBasis = new HTML(String.valueOf(positionJson.get("costBasis").isNumber() != null? fmt.format(positionJson.get("costBasis").isNumber().doubleValue()) : 0));
						Widget gainPercentage = new HTML(String.valueOf(positionJson.get("gainPercentage").isNumber() != null? fmt.format(positionJson.get("gainPercentage").isNumber().doubleValue()) : 0));
						Widget gain = new HTML(String.valueOf(positionJson.get("gain").isNumber() != null? fmt.format(positionJson.get("gain").isNumber().doubleValue()) : 0));
						
						JSONObject returnsJson = positionJson.get("returns").isObject();
						Widget return1w = new HTML(String.valueOf(returnsJson.get("return1w").isNumber() != null? fmt.format(returnsJson.get("return1w").isNumber().doubleValue()) : 0));
						Widget return4w = new HTML(String.valueOf(returnsJson.get("return4w").isNumber() != null? fmt.format(returnsJson.get("return4w").isNumber().doubleValue()) : 0));
						Widget return1y = new HTML(String.valueOf(returnsJson.get("return1y").isNumber() != null? fmt.format(returnsJson.get("return1y").isNumber().doubleValue()) : 0));

						Widget[] widgets = {exchange,symbol,shares,daysGain,costBasis,gainPercentage,gain,return1w};
						int k = 0;
						for(Widget widget : widgets){
							widget.setWidth(constants.cellWidth());
							flexTable.setWidget(j, k, widget);
							k++;
						}
						if(j % 2 == 0){
							flexTable.getRowFormatter().setStylePrimaryName(j, resources.globalCSS().regularRow());
						}else{
							flexTable.getRowFormatter().setStylePrimaryName(j, resources.globalCSS().highlightRow());
						}
					}
				}
			}
		}catch(Exception e){
			Log.error("", e);
		}
	}



	protected void populateProjectsList(JSONArray portfolios) {
		int size = portfolios.size();
		String selectedValue = null;
		if(size > 0 && portfoliosList.getSelectedIndex() > 0){
			selectedValue = portfoliosList.getValue(portfoliosList.getSelectedIndex());
		}
		portfoliosList.clear();
		try{
			for(int i = 0; i< size; i++){
				JSONObject portfolioJson = portfolios.get(i).isObject();
				String portfolioName = portfolioJson.get("title").isString().stringValue();
				String id = portfolioJson.get("portfolioId").isString().stringValue();
				portfoliosList.addItem(portfolioName,id);
				if(id.equals(selectedValue)){
					portfoliosList.setSelectedIndex(i);
				}
			}
		}catch(Exception e){
			Log.error("", e);
		}
	}



	protected void loadPortfoliosPanel(final PortfolioConstants constants,
			final PortfolioMessages messages, final GlobalResources resources) {
		try{
			topCaption.setCaptionHTML(messages.gadgetTitleMsg(utils.retrUserName()));
			portfolioDataPanel.clear();
			positionsTableHeaderPanel.clear();
			positionsTableDataPanel.clear();
			JSONArray portfolios = (JSONArray)jsonResultMap.get("result");
			FlexTable portfolioDataFlexTable = createPortfolioHeader(constants,messages,resources);
			populatePortfolioData(resources,constants,portfolioDataFlexTable,portfolios);
			portfolioDataPanel.add(portfolioDataFlexTable);
			FlexTable positionsHeaderFlexTable = createPositionsHeader(constants,messages,resources);
			positionsTableHeaderPanel.add(positionsHeaderFlexTable);
			FlexTable positionsDataFlexTable = new FlexTable();
			populatePositions(resources, constants,positionsDataFlexTable, portfolios);
			positionsTableDataPanel.add(positionsDataFlexTable);
			utils.adjustHeight();
		}catch (RuntimeException e) {
			Log.warn("exception in loadPortfoliosPanel");
		}
	}
	
	private void hideDataCaptions(){
		portfolioDataCptn.setVisible(false);
		choosePortfolioCptn.setVisible(false);
		positionsDataCptn.setVisible(false);
	}
	private void showDataCaptions(){
		portfolioDataCptn.setVisible(true);
		choosePortfolioCptn.setVisible(true);
		positionsDataCptn.setVisible(true);
	}
}
