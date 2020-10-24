package cn.hsx124.server.util;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.Node;
import org.dom4j.io.SAXReader;

public class WebXMLParser {

	private static Map<String, String> servletInfoMap = new HashMap<>();
	private static Map<String, String> servletMappingInfoMap = new HashMap<>();
	private static Map<String, String> servletMap = new HashMap<>();
	public static Map<String, Map<String, String>> servletMaps = new HashMap<>();

	public static void parser(String[] webapps) {
		Arrays.stream(webapps).forEach(app -> {
			try {
				Map<String, String> webParser = parser();
				servletMaps.put(app, webParser);
			} catch (DocumentException e) {
				e.printStackTrace();
			}
		});
	}

	private static Map<String, String> parser() throws DocumentException {
		SAXReader sr = new SAXReader();
		Document document = sr.read("webapps/WEB-INF/web.xml");
		List<Node> servletNodes = document.selectNodes("/web-app/servlet");
		servletNodes.forEach(node -> {
			Node servletNameNode = node.selectSingleNode("servlet-name");
			String servletName = servletNameNode.getStringValue();
			Node servletClassNode = node.selectSingleNode("servlet-class");
			String servletClass = servletClassNode.getStringValue();
			servletInfoMap.put(servletName, servletClass);
		});

		List<Node> servletMappingNodes = document.selectNodes("/web-app/servlet-mapping");
		servletMappingNodes.forEach(node -> {
			Node servletNameNode = node.selectSingleNode("servlet-name");
			String servletName = servletNameNode.getStringValue();
			Node urlPatternNodes = node.selectSingleNode("url-pattern");
			String urlPattern = urlPatternNodes.getStringValue();
			servletMappingInfoMap.put(servletName, urlPattern);
		});

		servletMappingInfoMap.keySet().forEach(key -> {
			String servletClasses = servletInfoMap.get(key);
			String urlPatterns = servletMappingInfoMap.get(key);
			servletMap.put(urlPatterns, servletClasses);
		});
		return servletMap;
	}

}
