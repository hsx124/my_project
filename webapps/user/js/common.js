(function(w) {
	let fn = {}
	fn.getFormData = function() {
		let objString = "";
		let fr = document.querySelector("form");
		Array.from(fr).filter(
				function(ele) {
					return ele.type == "text" || ele.type == "radio"
							|| ele.type == "date" || ele.type == "password";
				}).forEach(function(ele) {
			objString += ele.name + "=" + ele.value + "&";
		})
		return objString;
	}

	fn.ajax = function(method, url, data, callback) {
		let req = getXMLHttpRequest();
		req.open(method, url);
		req.onreadystatechange = function() {
			if (req.readyState == 4) {
				if (req.status == 200) {
					let respTxt = req.responseText;
					callback(respTxt);
				}
			}
		}
		if ("post" == method) {
			req.setRequestHeader("Content-type",
					"application/x-www-form-urlencoded");
		}
		req.send(data);
	}

	fn.checkcode = function(eleObj) {
		eleObj.onclick = function() {
			this.src = "user/checkCode?" + new Date().getTime();
		}
	}

	function getXMLHttpRequest() {
		return new XMLHttpRequest();
	}

	w.cm = fn;
})(window, undefined)