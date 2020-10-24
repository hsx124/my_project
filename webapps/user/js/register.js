(function() {
	let form = document.querySelector("form");
	let btnSubmit = document.querySelector("#sb");
	let inputs = document.querySelectorAll("input[type=text]");
	let img = document.querySelector("img");
	let username = document.querySelector("input[name=id]");
	btnSubmit.onclick = function() {
		console.log(cm.getFormData())
		let arr = []
		inputs.forEach(function(ele, index) {
			if (!ele.value) {
				ele.placeholder = "未入力項目です"
				ele.style.border = "3px solid red";
				arr[index] = "true";
			}

			ele.onblur = function() {
				if (this.value) {
					this.style.border = "";
				}
				console.log(this.name)
			}
		});
		const rt = arr.filter(function(i, e) {
			return i === "true";
		})
		if (rt.length < 1) {
			cm.ajax("post", "user/saveUser", cm.getFormData(), function(rt) {
				let info = JSON.parse(rt);
				let msg = document.querySelector("#msg");
				if (info.isSuccess) {
					location.href = info.path;
				} else {
					msg.innerHTML = info.message;
				}
			})
		}
	}

	/*
	 * img.onclick = function() { img.src = "user/checkCode?" + new
	 * Date().getTime(); }
	 */
	cm.checkcode(img);

	username.onblur = function() {

		cm.ajax("post", "user/checkUser", "username=" + username.value,
				function(result) {
					let msg = document.querySelector("#msg");
					if (result == "OK") {
						msg.innerHTML = "";
					} else {
						msg.innerHTML = result;
					}
				})
	}

})(window, undefined)