/* Copyright (c) 2008 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


package com.example.portfoliobotty.server.authSub;

import com.example.portfoliobotty.server.dao.TokenDao;
import com.example.portfoliobotty.server.finance.service.GFinanceService;
import com.example.portfoliobotty.server.model.TokenData;
import com.google.gdata.client.finance.FinanceService;
import com.google.gdata.client.http.AuthSubUtil;
import com.google.gdata.util.AuthenticationException;
import com.google.gdata.util.ServiceException;
import com.google.inject.Inject;
import com.google.inject.Singleton;

import java.io.IOException;
import java.net.MalformedURLException;
import java.security.GeneralSecurityException;
import java.util.Date;
import java.util.Iterator;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.ws.ServiceMode;

/**
 * Handles the processing of an AuthSub token.
 * <p>
 * The user will login to the Google account and lend permission for
 * this service to impersonate the user.  Upon completion of the login
 * and permission-grant, the user will be redirected to this servlet
 * with the token in the URL.
 *
 * 
 */
@Singleton
public class HandleTokenServlet extends HttpServlet {
	private static Logger LOG = Logger.getLogger(HandleTokenServlet.class.getName());
	private GFinanceService gFinanceService;
	private TokenDao tokenDao;
	@Inject
	public HandleTokenServlet(GFinanceService gFinanceService, TokenDao tokenDao) {
		this.gFinanceService = gFinanceService;
		this.tokenDao = tokenDao;
	}

	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
	throws ServletException, IOException {

		// Retrieve the AuthSub token assigned by Google
		String token = AuthSubUtil.getTokenFromReply(req.getQueryString());
		if (token == null) {
			resp.sendError(HttpServletResponse.SC_BAD_REQUEST,
					"No token specified.");
			return;
		}

		// Exchange the token for a session token
		String sessionToken;
		try {
			sessionToken =
				AuthSubUtil.exchangeForSessionToken(token,
						Utility.getPrivateKey());
		} catch (IOException e1) {
			resp.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR,
					"Exception retrieving session token.");
			return;
		} catch (GeneralSecurityException e1) {
			resp.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR,
					"Security error while retrieving session token.");
			return;
		} catch (AuthenticationException e) {
			resp.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR,
					"Server rejected one time use token.");
			return;
		}

		try {
			// Sanity checking usability of token
			Map<String, String> info =
				AuthSubUtil.getTokenInfo(sessionToken, Utility.getPrivateKey());
			for (Iterator<String> iter = info.keySet().iterator(); iter.hasNext();) {
				String key = iter.next();
				System.out.println("\t(key, value): (" + key + ", " + info.get(key)
						+ ")");
			}
		} catch (IOException e1) {
			resp.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR,
					"Exception retrieving info for session token.");
			return;
		} catch (GeneralSecurityException e1) {
			resp.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR,
					"Security error while retrieving session token info.");
			return;
		} catch (AuthenticationException e) {
			resp.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR,
					"Auth error retrieving info for session token: " +
					e.getMessage());
			return;
		}

		String user = handleToken(sessionToken);

		StringBuffer continueUrl = req.getRequestURL();
		int index = continueUrl.lastIndexOf("/");
		continueUrl.delete(index, continueUrl.length());
		continueUrl.append(LoginServlet.NEXT_URL);
		resp.sendRedirect(continueUrl.toString() + "?user="+user);
	}

	private String handleToken(String sessionToken) throws MalformedURLException,
	IOException {
		//now need to retrieve the user 
		FinanceService service = gFinanceService.loginAndReturnService(sessionToken);
		String user = null;
		try {
			user = gFinanceService.retrUserFromPortfolioFeed(service);
		} catch (ServiceException e) {
			LOG.log(Level.SEVERE,"",e);
		}

		// save the token
		TokenData tokenData = tokenDao.retrTokenByUser(user);
		if(tokenData == null){
			tokenData = new TokenData(user, sessionToken, new Date(), new Date());
		}else{
			tokenData.setToken(sessionToken);
			tokenData.setUpdated(new Date());
		}
		tokenDao.save(tokenData);
		return  user;
	}
}
