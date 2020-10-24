package cn.hsx124.server.util;

import java.sql.Date;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

/**
 * 日付処理クラス
 * 
 * @author shuxiong huang
 * @version 1.0
 * @since 1.0
 *
 */
public class DateUtil {

	private DateUtil() {
	}

	public static String getCurrentStringDate() {
		LocalDateTime now = LocalDateTime.now();
		DateTimeFormatter pattern = DateTimeFormatter.ofPattern("yyyy/MM/dd(E) HH:mm:ss.ss");
		String stringDate = now.format(pattern);
		return stringDate;
	}
}
