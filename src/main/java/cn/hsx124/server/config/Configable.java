package cn.hsx124.server.config;

public interface Configable {
	String ROOT_PATH = "webapps/";
	String ERROR_PAGE_ROOT_PATH = "webapps/error_page/404.html";
	String WEB_XML_PATH = ROOT_PATH + "WEB-INF/web.xml";
	String HTTP_STATUS_SUCCESS = "HTTP/1.1 200 OK";
	String HTTP_STATUS_NOT_FOUND = "HTTP/1.1 404 NotFound";
	String CONTENT_TYPE_HTML = "Content-Type:text/html;charset=UTF-8\n";
	String CONTENT_TYPE_CSS = "Content-Type:text/css;charset=UTF-8\n";
	String CONTENT_TYPE_JS = "Content-Type:text/javascript;charset=UTF-8\n";
}
