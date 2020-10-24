package cn.hsx124.server.core;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.net.Socket;
import java.util.Map;

import cn.hsx124.server.config.Configable;
import cn.hsx124.server.servlet.Servlet;
import cn.hsx124.server.util.FileReadUtil;
import cn.hsx124.server.util.Logger;
import cn.hsx124.server.util.WebXMLParser;
import cn.hsx124.user.servlet.UserLoginServlet;

public class HandleRequest implements Runnable, Configable {
	private Socket client;

	public HandleRequest(Socket client) {
		this.client = client;
	}

	@Override
	public void run() {
		Logger.info(Thread.currentThread().getName() + " is running..");
		BufferedReader br = null;
		InputStream inputStream = null;
		PrintWriter out = null;
		try {
			inputStream = client.getInputStream();
			out = new PrintWriter(client.getOutputStream());
			br = new BufferedReader(new InputStreamReader(inputStream));
			String requestURI = br.readLine().split(" ")[1];
			Logger.info(Thread.currentThread().getName() + " requestURI:" + requestURI);

			String webAppName = requestURI.split("[/]")[1];
			// String urlPath = requestURI.split("[/]")[2];
			if (!requestURI.contains(".")) {
				String className = WebXMLParser.servletMaps.get(webAppName).get(requestURI);
				Class<?> clazz = Class.forName(className);
				Object object = clazz.newInstance();
				Servlet s = (Servlet) object;
				Response resp = new Response();
				resp.setWriter(out);
				out.println(HTTP_STATUS_SUCCESS);
				out.println(CONTENT_TYPE_HTML);
				s.service(resp);
			}

			if (requestURI.endsWith(".html") || requestURI.endsWith(".htm")) {

				responeStaticHTML(requestURI, out);
			}

			if (requestURI.endsWith(".css")) {
				out.println(HTTP_STATUS_SUCCESS);
				out.println(CONTENT_TYPE_CSS);
				String readCSS = FileReadUtil.readContent((ROOT_PATH + requestURI));
				out.println(readCSS);
			}

			if (requestURI.endsWith(".js")) {
				out.println(HTTP_STATUS_SUCCESS);
				out.println(CONTENT_TYPE_JS);
				String readJS = FileReadUtil.readContent(ROOT_PATH + requestURI);
				out.println(readJS);
			}
			out.flush();

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (inputStream != null) {
				try {
					inputStream.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
			if (br != null) {
				try {
					br.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}
	}

	private void responeStaticHTML(String requestURI, PrintWriter out) throws Exception {
		String staticResoure = ROOT_PATH + requestURI.substring(1);
		try {
			String htmlString = FileReadUtil.readContent(staticResoure);
			out.println(HTTP_STATUS_SUCCESS);
			out.println(CONTENT_TYPE_HTML);
			out.println(htmlString);
		} catch (FileNotFoundException e) {
			String htmlString = FileReadUtil.readContent(ERROR_PAGE_ROOT_PATH);
			out.println(HTTP_STATUS_NOT_FOUND);
			out.println(CONTENT_TYPE_HTML);
			out.println(htmlString);
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
