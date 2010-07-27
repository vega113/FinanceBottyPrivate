package com.example.portfoliobotty.server.install;


import java.io.IOException;
import java.io.PrintWriter;
import java.text.MessageFormat;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.jsr107cache.Cache;
import net.sf.jsr107cache.CacheException;
import net.sf.jsr107cache.CacheManager;

import com.google.appengine.api.memcache.jsr107cache.GCacheFactory;
import com.google.inject.Singleton;

@SuppressWarnings("serial")
@Singleton
public class InstallGadgetServlet extends HttpServlet{
	private static final Logger LOG = Logger.getLogger(InstallGadgetServlet.class.getName());
	private Cache cache;

	public InstallGadgetServlet() {
		try {
	    	Map<String, Integer> props = new HashMap<String, Integer>();
	        props.put(GCacheFactory.EXPIRATION_DELTA, 60*60);
	        cache = CacheManager.getInstance().getCacheFactory().createCache(props);
	    } catch (CacheException e) {
	        LOG.log(Level.INFO,"InstallGadgetServlet cache init",e);
	    }
	}

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		PrintWriter writer = response.getWriter();
		String outXml = null;
		try{
			Object obj = cache.get("xml");
			if(obj != null){
				outXml = (String)obj;
				LOG.log(Level.INFO ,"retrieved outXml from cache");
			}else{
				String projectName = "FinanceBotty"; //0
			    String profileImageUrl = System.getProperty("FINANCEBOTTY_ICON_URL");//1
				String projectDescription = "View and share your Google Finance Portfolio inside Google Wave.";//2
				String version = "0.3";//3
				String authorName = "Yuri Zelikov";//4
				String robotAddress = System.getProperty("APP_DOMAIN") + "+gadget@appspot.com" ;//5
				String gadgetbottyInstallUrl = "http://" + System.getProperty("APP_DOMAIN") + ".appspot.com/portfoliobotty/com.example.portfoliobotty.client.PortfolioBotty.gadget.xml";//6
				Object[] args = {projectName, profileImageUrl, projectDescription,version,authorName, robotAddress,gadgetbottyInstallUrl};
				
				String extensionStr = 
					"<?xml version=\"1.0\" encoding=\"UTF-8\"?>" +
					"<extension name=\"{0}\" thumbnailUrl=\"{1}\" description=\"{2}\">" + 
						"<author name=\"{4}\" /> " +
						"<menuHook location=\"TOOLBAR\" text=\"{0}\" iconUrl=\"{1}\">" +     
							"<addParticipants>" + 
								"<participant id=\"{5}\" />" + 
							"</addParticipants>" +  
							 "<insertGadget url=\"{6}\"/>" +
						"</menuHook>" + 
				    "</extension>";
				
				MessageFormat fmt = new MessageFormat(extensionStr);
				outXml = fmt.format(args);
				cache.put("xml", outXml);
				LOG.log(Level.INFO ,"created outXML");
			}
			writer.print(outXml);
			writer.flush();
		}catch(Exception e){
			writer.print(e.getMessage());
			e.printStackTrace(writer);
			writer.flush();
			LOG.severe(e.toString() + "\n" + e.getMessage());
		}
	}
}

