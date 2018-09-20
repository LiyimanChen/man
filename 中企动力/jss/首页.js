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

var arrColor = ["rgb(21,190,196)","rgb(0,153,224)","rgb(165,206,21)","rgb(227,169,12)","rgb(250,210,0)"];
var arrItd = $("introduce").getElementsByTagName("li");
for (var i = 0; i < arrItd.length; i++) {
	arrItd[i].style.backgroundColor = arrColor[i];
}


var servelis = $("serve_ul").children;
console.log(servelis);
var serveSpans = $("serve_ul").getElementsByTagName("span");
console.log(serveSpans);
for (var i = 0; i < servelis.length; i++) {
	servelis[i].onmouseover = function(){
		for (var i = 0; i < servelis.length; i++) {
			if (this == servelis[i]) {
				serveSpans[i].style.height = "186px";
			}else{
				serveSpans[i].style.height = "0px";
			}
			
		}
	}
	servelis[i].onmouseout = function(){
		for (var i = 0; i < servelis.length; i++) {
			if (this == servelis[i]) {
				serveSpans[i].style.height = "0px";
			}else{
				serveSpans[i].style.height = "0px";
			}
			
		}
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


	function   Xuehua(id){
      this.box = document.getElementById(id);
      this.sjcj = function(){
      	this.span = document.createElement("span");
      	this.span.style.position = "absolute"
      	this.span.style.top = 0;
      	this.span.style.left  = parseInt(Math.random()*1900)+"px";
      	this.span.style.fontSize = "30px";
      	this.span.style.color = "pink";
      	this.span.style.zIndex = "9999999999999999999999";
      	this.box.appendChild(this.span);
      	this.span.innerText = "❉";
      	this.pl(this.span);
      }
      this.pl = function(ele){
      	var top =0;
      	var left = ele.offsetLeft;
      	var sjtop = parseInt(Math.random()*(10-3)+3);
      	var sjleft = parseInt(Math.random()*(10-3)+3);
      	var sj = parseInt(Math.random()*10);
      	var timer = setInterval(function(){
              if (top>3000) {
              	ele.remove();
              	clearInterval(timer);
              }else if(left>1800){
              	ele.remove();
              	clearInterval(timer);
              }else{
              	if (sj>5) {
              		left +=sjleft;
              	}else{
              		left-=sjleft;
              	}
              	top+=sjtop;
              }
              ele.style.left = left+"px";
              ele.style.top = top+"px";
      	},50)
      }
      this.xiaxue = function(){
      	var  that = this;
      	setInterval(function(){
      		that.sjcj();
      	},200)
      }
     }
    var  box = new  Xuehua("box");
    box.xiaxue();