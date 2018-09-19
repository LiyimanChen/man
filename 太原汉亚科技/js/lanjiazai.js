var show_bot = document.getElementById('show_bottom');
var imgss = show_bot.getElementsByTagName('img');
window.addEventListener("scroll",fn(jisuan,500,1000),false);
var timer2 = null;
function fn(fn,yanchi,zongshijian){
	var kaishi = new Date();
	return function(){
		clearTimeout(timer2);
		var dangqian = new Date();
		if (dangqian-kaishi >= zongshijian) {
			fn();
			kaishi = dangqian;
		}else{
			timer2 = setTimeout(fn,500);
		}
	}
}
function jisuan(){
	var bd = document.documentElement || document.body;
	var gunchu = document.documentElement.scrollTop || bd.scrollTop;
	for (var i = 0; i < imgss.length; i++) {
		if (gunchu >= imgss[i].offsetTop-1000) {
			imgss[i].src = imgss[i].getAttribute("suibian");
		}
	}
}