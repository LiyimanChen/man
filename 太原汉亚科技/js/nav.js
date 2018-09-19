var nav = document.getElementById('nav');
var nav_top = nav.offsetTop;
window.onscroll = function(){
	var bdy = document.documentElement || document.body;
	if(bdy.scrollTop > nav_top){
		nav.style.position = "fixed";
		nav.style.top = "0px";
		nav.style.left = "0px";
	}else{
		nav.style.position = "";
	}
}
var leader = 0;
var timer = null;
var line = document.getElementById('line');
function Fn(target,ele){
	if (timer) {
		clearInterval(timer);
	}
	timer = setInterval(function(){
		leader = leader + (target - leader)/10;
		ele.style.left = leader + "px";
	},10)
}
var nav_ul = document.getElementById('nav_ul');
var lis = nav_ul.getElementsByTagName('li');
var dls = nav_ul.getElementsByTagName('dl');
var dts = nav_ul.getElementsByTagName('dt');
for (var i = 0; i < lis.length; i++) {
	lis[i].index = i;
	lis[i].onmouseover = function(){
		clearInterval(timer1);
		for (var i = 0; i < dls.length; i++) {
			dls[i].style.display = "none";
		}
		dls[this.index].style.display = "block";
		line.style.width = "100px";
		Fn(20+this.index*120,line);
	}
	var timer1 = null;
	lis[i].onmouseout = function(){
		var num = 100;
		for (var i = 0; i < dls.length; i++) {
			dls[i].style.display = "none";
		}
		if (timer1) {
			clearInterval(timer1);
		}
		timer1 = setInterval(function(){
			if (num<=0) {
				clearInterval(timer1);
			}
			line.style.width = num + "px";
			num-=10;
		},10)
	}
}