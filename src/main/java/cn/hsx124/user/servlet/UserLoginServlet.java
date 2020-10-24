package cn.hsx124.user.servlet;

import java.io.PrintWriter;

import cn.hsx124.server.servlet.Servlet;
import cn.hsx124.server.servlet.ServletResponse;

public class UserLoginServlet implements Servlet {

	@Override
	public void service(ServletResponse response) {
		PrintWriter writer = response.getWriter();
		writer.println("hello world..");

	}
}
