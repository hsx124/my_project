package cn.hsx124.server.util;

/**
 * ���O���R���\�[���ɏo�̓N���X
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
	 * ���O�o��
	 *
	 * @param msg
	 */
	public static void info(String msg) {
		System.out.println("[info] " + DateUtil.getCurrentStringDate() + " " + msg);
	}
}
