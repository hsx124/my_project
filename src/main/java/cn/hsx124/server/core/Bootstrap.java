package cn.hsx124.server.core;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.Arrays;

import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.Element;
import org.dom4j.io.SAXReader;

import cn.hsx124.server.util.Logger;
import cn.hsx124.server.util.WebXMLParser;

/**
 * プログラミング実行入口
 *
 * @author shuxiong huang
 * @version 1.0
 * @since 1.0
 *
 */
public class Bootstrap {
	public static void main(String[] args) {
		start();
	}

	public static void start() {
		Logger.info("httpserver start");
		long start = System.currentTimeMillis();
		ServerSocket server = null;

		try {
			server = new ServerSocket(getPort());
			Logger.info("port = " + getPort());
			Logger.info("web.xml is loading");
			File file = new File("webapps");
			File[] listFiles = file.listFiles();
			String[] webapps = new String[listFiles.length];
			for (int i = 0; i < listFiles.length; i++) {
				if (!listFiles[i].getAbsolutePath().contains("error_page")
						&& !listFiles[i].getAbsolutePath().contains("WEB-INF")) {
					webapps[i] = listFiles[i].getName();
				}
			}
			WebXMLParser.parser(webapps);
			Logger.info("web.xml is loaded");
			long end = System.currentTimeMillis();
			Logger.info("httpserver started " + (end - start) + "ms");
			while (true) {
				Socket client = server.accept();
				/*
				 * inputStream = client.getInputStream(); br = new
				 * BufferedReader(new InputStreamReader(inputStream)); String
				 * temp = null; while ((temp = br.readLine()) != null) {
				 * System.out.println(temp); }
				 */
				new Thread(new HandleRequest(client)).start();
			}
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			if (server != null) {
				try {
					server.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}

		}
	}

	/**
	 * ポート番号取得
	 *
	 * @return ポート番号
	 */
	private static Integer getPort() {
		Integer port = 8080;
		try {
			SAXReader sr = new SAXReader();
			InputStream is = Bootstrap.class.getClassLoader().getResourceAsStream("server.xml");
			Document document = sr.read(is);
			Element ele = (Element) document.selectSingleNode("//connector[@port]");
			String portValue = ele.attributeValue("port");
			port = Integer.parseInt(portValue);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return port;
	}
}
