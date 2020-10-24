package cn.hsx124.server.servlet;

import java.io.PrintWriter;

public interface ServletResponse {
	public void setWriter(PrintWriter out);

	public PrintWriter getWriter();
}
