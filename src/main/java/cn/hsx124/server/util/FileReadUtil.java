package cn.hsx124.server.util;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.Node;
import org.dom4j.io.SAXReader;

public class FileReadUtil {

	private FileReadUtil() {
	}

	public static String readContent(String path) throws Exception {
		String temp = null;
		StringBuffer sb = new StringBuffer();
		BufferedReader br = new BufferedReader(new InputStreamReader(new FileInputStream(new File(path)), "UTF-8"));
		while ((temp = br.readLine()) != null) {
			sb.append(temp + "\r\n");
		}
		br.close();
		return sb.toString();

	}

}
