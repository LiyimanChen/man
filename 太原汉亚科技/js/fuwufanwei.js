var works = document.getElementById('works');
var works_center_center = document.getElementById('works_center_center');
var uls = works.getElementsByTagName('ul');
var lis = works.getElementsByTagName('li');
// window.onscroll = function(evt){
// 	var event = evt || window.event;
// 	var topNum = event.scrollTop;
// 	var opt = 0;
// 	console.log(event);
// 	console.log(topNum);
// 		if (topNum >= 200) {
// 			opt = works_center_center.style.opacity;
			
// 			opt+=0.2;
// 			// works_center_center.style.display = "block";
// 			if (opt >= 1) {
// 				opt = 1;
// 			}
// 		}
// }
for (var i = 0; i < lis.length; i++) {
	lis[i].onmouseover = function(){
		for (var i = 0; i < lis.length; i++) {
			if (this==lis[i]) {
				this.style.backgroundColor = "rgb(255,198,0)";
				this.style.transition="all .5s";
			}else{
				lis[i].style.backgroundColor = "";
			}
		}
	}
	lis[i].onmouseout = function(){
		for (var i = 0; i < lis.length; i++) {
			if (this==lis[i]) {
				this.style.backgroundColor = "";
			}else{
				lis[i].style.backgroundColor = "";
			}
		}
	}
}