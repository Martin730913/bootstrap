window.onload = function() {
	var oFrom = document.getElementById("form"),
		oInput = document.getElementById("search"),
		oBtn = document.getElementById("btn"),
		oDiv1 = document.getElementById("div1"),
		aImg = oDiv1.getElementsByTagName("img"),
		i = 0,
		timer = null,
		time2 = null;
	oBtn.onclick = function() {
		if (oInput.value == "") {
			alert("请输入内容");
			return flase;
		} else {
			oFrom.action = "#";
			oFrom.method = "post";
			oFrom.onsubmit();
		}
	}
	//以下是图片透明度改变代码
	timer = setInterval(autoPlay, 4000);

	function autoPlay() {
		i++;
		if (i >= 3) {
			i = 0;
		}
		change(i);
	}

	function change(g) {
		var iTime = null;
		var iTarget = 4;
		var oOpacity = 0;
		var iSpeed = 0;
		for (var d = 0; d < aImg.length; d++) {
			aImg[d].style.opacity = "0.2";
			aImg[d].style.filter = "alpha(opacity=20)";
		}

		clearInterval(iTime);
		iTime = setInterval(function() {
			oOpacity += iTarget;
			iSpeed = Math.ceil(oOpacity) / 100;
			if (iSpeed >= 1) {
				clearInterval(iTime);
				iSpeed = 0;
			} else {
				aImg[g].style.opacity = iSpeed;
				aImg[g].style.filter = "alpha(opacity:" + iSpeed * 100 + ")";
			}

		}, 80);
	}
	oDiv1.onmouseover = function() {
		clearInterval(timer);
	}
	oDiv1.onmouseout = function() {
		timer = setInterval(autoPlay, 4000);
	}
}
