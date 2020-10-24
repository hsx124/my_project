(function() {
	let login = document.querySelector("#login");
	let img = document.querySelector("img");
	cm.checkcode(img);

	login.onclick = function() {
		cm.ajax("post", "login", cm.getFormData(), function(result) {
			let info = JSON.parse(result);
			let msg = document.querySelector("#msg");
			if (info.isSuccess) {
				location.href = info.path + "?username="
						+ info.InfoUtil.username;
			} else {
				msg.innerHTML = info.message;
				cm.checkcode(img);
			}
		})
	}

})(window, undefined)