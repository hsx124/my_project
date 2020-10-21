package cn.hsx124.server.util;

/**
 * ログをコンソールに出力クラス
 *
 * @author shuxiong huang
 * @version 1.0
 * @since 1.0
 *
 */
public class Logger {

	private Logger() {
	}

	/**
	 * ログ出力
	 *
	 * @param msg
	 */
	public static void info(String msg) {
		System.out.println("[info] " + DateUtil.getCurrentStringDate() + " " + msg);
	}
}
