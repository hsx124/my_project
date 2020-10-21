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

import cn.hsx124.server.util.Logger;

public class HandleRequest implements Runnable {
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
			if (requestURI.endsWith(".html") || requestURI.endsWith(".htm")) {

				responeStaticHTML(requestURI, out);
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

	private void responeStaticHTML(String requestURI, PrintWriter out) throws IOException {
		String staticResoure = "webapps/" + requestURI.substring(1);
		String temp = null;
		BufferedReader br = null;
		try {
			br = new BufferedReader(new InputStreamReader(new FileInputStream(new File(staticResoure))));
			out.println("HTTP/1.1 200 OK");
			out.println("Content-Type:text/html;charset=utf-8\n");
			while ((temp = br.readLine()) != null) {
				out.println(temp);
			}
		} catch (FileNotFoundException e) {
			br = new BufferedReader(new InputStreamReader(new FileInputStream(new File("webapps/error_page/404.html"))));
			out.println("HTTP/1.1 404 NotFound");
			out.println("Content-Type:text/html;charset=utf-8\n");
			while ((temp = br.readLine()) != null) {
				out.println(temp);
			}
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			try {
				br.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}

	}

}
