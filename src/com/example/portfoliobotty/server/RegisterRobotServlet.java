package com.example.portfoliobotty.server;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.inject.Singleton;

@Singleton
public class RegisterRobotServlet extends HttpServlet {

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		PrintWriter writer = resp.getWriter();
		String st = req.getParameter("st");
		if(st.equals("8543")){
			writer.write("AOijR2d4C__TTOeeeGX0QjlapxcjCKo028VDDLmysl3P6zQZFR4DxyXoP3uxd9Q4tjoF6eXFJ02dRcgR-Pnd7bjNJqcl2lhOIcrUnVUlnPeUYx5HYrCB2EcjcGfp-6rymLKgkZL09dj5Ptdaa_Ouy0zG8t4rgYyZeg==");
			writer.flush();
		}
		writer.write("");
		writer.flush();
	}

}
