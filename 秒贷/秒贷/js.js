var slide = document.getElementById("slide");
var slideImg = document.getElementById("slideImg");
var buttons = document.querySelectorAll(".buttons span");
var maxNum = buttons.length-1;
var offset = 1903;
var posX = 0;
var timer = null;
var slideTime = 2000;
var index = 0;

function toRight(){
	index++;
	if(index > 4){
		index = 0;
	}
	animate(-1903*index);
	// console.log("index的值是" + index);
	buttonShow();
}
function toLeft(){
	index--;
	if(index < 0){
		index = 4;
	}
	animate(-1903*index);
	// console.log("index的值是" + index);

}
function animate( offsetNum ){
	posX = offsetNum;
	if(posX < -1903*maxNum){
		posX = 0;
	}
	if(posX > 0){
		posX = -1903*maxNum;
	}
	// console.log(posX);
	slideImg.style.left= posX + 'px';
	buttons[index].className = "on";
}
function play(){
	timer = setInterval(function(){
		toRight();
	},slideTime);
}
play();
function stop(){
	clearInterval(timer);
}
function buttonShow(stepNum){
	for(var k=0; k<buttons.length; k++){
		buttons[k].className = "";
	}
	buttons[index].className = "on";
}
slide.onmouseover = function(){
	stop();
}
slide.onmouseout = function(){
	play();
}
for(var i =0; i<buttons.length; i++){
	buttons[i].onclick = function(){
		for(var j=0; j<5; j++){
			//console.log(j);
			buttons[j].className = "";
			if( this==buttons[j]){
				index=j;
				console.log("index的值是"+ index);
				console.log("j的值是"+j);
				animate(-offset*j);
				buttons[j].className = "on";
			}
		}
	}
}