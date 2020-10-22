package cn.hsx124.server.core;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.Socket;

import cn.hsx124.server.util.FileReadUtil;
import cn.hsx124.server.util.Logger;

public class HandleRequest implements Runnable {
	private Socket client;
	private static final String ROOT_PATH = "webapps/";
	private static final String ERROR_PAGE_ROOT_PATH = "webapps/error_page/404.html";

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
			if (requestURI.endsWith(".html") || requestURI.endsWith(".htm")) {

				responeStaticHTML(requestURI, out);
				out.flush();
			}

			if(requestURI.endsWith(".css")){
				out.println("HTTP/1.1 200 OK");
				out.println("Content-Type:text/css;charset=Shift_JIS\n");
				String readHTML = FileReadUtil.readHTML(ROOT_PATH+"user/register.css");
				out.println(readHTML);
				out.flush();
			}


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
			String htmlString = FileReadUtil.readHTML(staticResoure);
			out.println("HTTP/1.1 200 OK");
			out.println("Content-Type:text/html;charset=Shift_JIS\n");
			out.println(htmlString);
		} catch (FileNotFoundException e) {
			String htmlString = FileReadUtil.readHTML(ERROR_PAGE_ROOT_PATH);
			out.println("HTTP/1.1 404 NotFound");
			out.println("Content-Type:text/html;charset=Shift_JIS\n");
			out.println(htmlString);
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
