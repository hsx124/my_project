package cn.hsx124.server.util;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStreamReader;

public class FileReadUtil {

	private FileReadUtil() {
	}

	public static String readHTML(String path) throws Exception {
		String temp = null;
		StringBuffer sb = new StringBuffer();
		BufferedReader br = new BufferedReader(new InputStreamReader(new FileInputStream(new File(path)),"Shift_JIS"));
		while ((temp = br.readLine()) != null) {
			sb.append(temp);
		}
		br.close();
		return sb.toString();

	}
}
