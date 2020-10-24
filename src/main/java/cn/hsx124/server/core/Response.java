package cn.hsx124.server.core;

import java.io.PrintWriter;

import cn.hsx124.server.servlet.ServletResponse;

public class Response implements ServletResponse {
	private PrintWriter out = null;

	@Override
	public void setWriter(PrintWriter out) {
		this.out = out;
	}

	@Override
	public PrintWriter getWriter() {
		return this.out;
	}

}
