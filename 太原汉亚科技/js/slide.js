function $(id){
	return document.getElementById(id);
}
// 控制图片的切换的定时器
var photo_num = 0;
var timer = null;
changePhotoNum();
function changePhotoNum(){
	timer = setInterval(function(){
		if (timer1) {
			clearInterval(timer1);
		}
		photo_num++;
		movePhoto();
		console.log(photo_num);
	},2000)
}
// 让图片滚动到目标的位置
var timer1 = null;
function movePhoto(){
	if (timer1) {
		clearInterval(timer1);
	}
	if(photo_num < 0){
		photo_num = 4;
	}
	if(photo_num > 4 ){
		photo_num = 0;
	}
	changeLiState();
	var start = $("imgs").scrollLeft;
	var end = photo_num*1920;
	var allLength = end - start;
	var stepNum = 0;
	var every = allLength/4;
	timer1 = setInterval(function(){
		if (stepNum >= 4-1) {
			clearInterval(timer1);
		}
		$("imgs").scrollLeft += every;
		stepNum++;
	},100)
}
// 左右点击
	$("left_btn").onclick = function(){
		if (timer) {
			clearInterval(timer);
		}
		photo_num--;
		// 立即执行当前的改变
		movePhoto();
		// 恢复原来运行状态
		changePhotoNum();
	}
	$("right_btn").onclick = function(){
		if (timer) {
			clearInterval(timer);
		}
		photo_num ++;
		movePhoto();
		changePhotoNum();
	}

	//改变li的选中状态
	var lis = document.getElementsByTagName('li');
	function changeLiState(){
		for (var i = 0; i < lis.length; i++) {
			lis[i].className = "";
		}
		// lis[photo_num].className = "select";
	}
	for (var i = 0; i < lis.length; i++) {
		lis[i].index = i;
		lis[i].onclick = function(){
			if (timer) {
				clearInterval(timer);
			}
			photo_num = this.index;
			console.log(this.index);   //每次所点击的li的下标值
			movePhoto();
			changePhotoNum();
		}
	}