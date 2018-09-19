var content = document.getElementById('content');
var lis = content.getElementsByTagName('li');

// for (var i = 0; i < lis.length; i++) {
// 	lis[i].onclick = function(){
// 		for (var i = 1; i < lis.length; i++) {
// 			if (this==lis[i]) {
// 				this.style.backgroundColor = "rgb(51,122,183)";
// 				this.style.color = "white";
// 			}else{
// 				lis[i].style.backgroundColor = "";
// 				lis[i].style.color = "rgb(51,122,183)";
// 			}
// 		}
// 	}
// }
for (var i = 0; i < lis.length; i++) {
	lis[i].onmouseover = function(){
		for (var i = 1; i < lis.length; i++) {
			if (this==lis[i]) {
				this.style.backgroundColor = "rgb(51,122,183)";
				this.style.color = "white";
				this.style.transition="all .8s";
			}else{
				lis[i].style.backgroundColor = "";
				lis[i].style.color = "rgb(51,122,183)";
			}
		}
	}
	lis[i].onmouseout = function(){
		for (var i = 1; i < lis.length; i++) {
			if (this==lis[i]) {
				this.style.backgroundColor = "";
				this.style.color = "";
			}else{
				lis[i].style.backgroundColor = "";
				lis[i].style.color = "";
			}
		}
	}
}