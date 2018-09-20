function $(id){return document.getElementById(id);}
var topNavLis = $("topNav").getElementsByTagName('li');
var topNavDls = $("topNav").getElementsByTagName('dl');
var topNavDts = $("topNav").getElementsByTagName('dt');
for (var i = 0; i < topNavLis.length; i++) {
	topNavLis[i].onmouseover = function(){
		for (var i = 0; i < topNavLis.length; i++) {
			if (this == topNavLis[i]) {
				topNavDls[i].style.opacity = "1";
				topNavDls[i].style.transition = "all 0.5s"
			}else{
				topNavDls[i].style.opacity = "0";
			}
		}
	}
	topNavLis[i].onmouseout = function(){
		for (var i = 0; i < topNavLis.length; i++) {
			if (this == topNavLis[i]) {
				topNavDls[i].style.opacity = "0";
			}else{
				topNavDls[i].style.opacity = "0";
			}
		}
	}
	for (var j = 0; j < topNavDts.length; j++) {
		topNavDts[j].onmouseover = function(){
			for (var j = 0; j < topNavDts.length; j++) {
				if (this==topNavDts[j]) {
					topNavDts[j].style.backgroundColor = "rgba(255,255,255,.3)";
					topNavDts[j].style.transition = "all .3s";
				}else{
					topNavDts[j].style.backgroundColor = "";
					
				}
			}
		}
		topNavDts[j].onmouseout = function(){
			for (var j = 0; j < topNavDts.length; j++) {
				if (this==topNavDts[j]) {
					topNavDts[j].style.backgroundColor = "";
				}else{
					topNavDts[j].style.backgroundColor = "";
					
				}
			}
		}
	}
}
var top = $("top");
// console.log(top);
var nav_top = $("top").offsetTop;
window.onscroll = function(){
	var bdy = document.documentElement ||document.body;
	if (bdy.scrollTop > nav_top) {
		$("top").style.position = "absolute";
		$("top").style.top = bdy.scrollTop + "px";
		$("top").style.left = "0px";
	}else{
		$("top").style.position = "";
	}
}

var yanzheng = document.getElementById('yanzheng');
	var btn = document.getElementById('sub');
	var inp = document.getElementById('inp');
	console.log(btn);
	getCodeFn();
	yanzheng.onclick = getCodeFn;
	
	// 获取验证码函数
	function getCodeFn(){
		var strArry = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
		var code_Str = "";
		var num = null;    //用来存放数组里的随机值
		for (var i = 0; i < 4; i++) {
			// 随机获取数组里的值
			num = parseInt(Math.random()*strArry.length);
			code_Str += strArry[num];
			console.log(num);
		}
		yanzheng.value = code_Str;
	}
	btn.onclick = function(){
		var val = inp.value;
		// var neirong = val.toUpperCase();
		if (val.length == 0) {
			alert("请输入验证码");
		}else if (val == yanzheng.value) {
			alert("验证正确");
			getCodeFn();
		}else {
			alert("验证错误");
		}
	}



	var other = document.getElementById("other");
	other.onclick = function(){
		other.style.display = "none";
	}

	var other1 = document.getElementById("other1");
	other1.onclick = function(){
		var b = document.documentElement || window.body;
		b.scrollTop = 0 + "px";
		other1.style.display = "none";
	}