//以id名获取元素
function getId(id){
	return document.getElementById(id);
}

//从父元素中，以标签名获取元素
//注意：pid传入的是变量
//例如：var box=getId("box")
//getTags(box,div);获取box中的所有的div标签
function getTags(pid,tag){
	return pid.getElementsByTagName(tag);
}


//获取父Id名称中所有的class名的标签元素
function getPidClass(pid,cName){
	var parentId=document.getElementById(pid);
	var all=parentId.getElementsByTagName("*");
	var arr=[];
	for(var i=0;i<all.length;i++){
		if (all[i].className==cName) {
			arr.push(all[i]);
		}
	}
	return arr;
}



//获取element的非行间样式
function getStyle(ele,attr){
	if (ele.currentStyle) {
		return ele.currentStyle[attr];
	}else{
		return window.getComputedStyle(ele.null)[attr];
	}
}


//左右轮播封装
function move(ele,target){			
	function moveStep(){
		var speed=(target-ele.offsetLeft)/10;
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		var cha=Math.abs(ele.offsetLeft-target);
		ele.style.left=ele.offsetLeft+speed+"px";
		if (cha<=Math.abs(speed)) {
			clearInterval(ele.timer);
			ele.style.left=target+"px";
		}
	}
	if (ele.timer) {
		clearInterval(ele.timer);
	}
	ele.timer=setInterval(moveStep,30);
}



//透明度轮播
var k=0;
function autoOpa(ele){
	var timer=null;
	var opa=0;
	if (timer) {
		clearInterval(timer);
	}
	timer=setInterval(function(){
		opa+=0.05;
		if (opa>=1) {
			opa=1;
			clearInterval(timer);

			for(var i=0;i<ele.length;i++){
				ele[i].style.opacity=0;
				ele[i].style.zIndex=0;
			}
		}
		ele[k].style.opacity=opa;
	},30)
}



//上下轮播
function move1(ele,target){
	function moveStep1(){
		var speed=(target-ele.offsetTop)/20;
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		var cha=Math.abs(target-ele.offsetTop);
		ele.style.top=ele.offsetTop+speed+"px";
		if (cha<Math.abs(speed)) {
			clearInterval(ele.timer);
			ele.style.top=target+"px";
		}
	}
	if (ele.timer) {
		clearInterval(ele.timer);
	}
	ele.timer=setInterval(moveStep1,20);
}


//tab切换封装
function tabSwitch(ele1,ele2){
	for(var i=0;i<ele1.length;i++){
		ele1[i].onmouseover=function(){
			for (var j=0;j<ele1.length; j++) {
				ele1[j].className="";
				ele2[j].style.display="none";
				if (this==ele1[j]) {
					this.className="current";
					ele2[j].style.display="block";
				}
			}
		}
	}
}



//下拉菜单显示隐藏
function blockHid(ele1,ele2){
	for(var i=0;i<ele1.length;i++){
		ele1[i].onmouseover=function(){
			for(var j=0;j<ele1.length;j++){
				if (this==ele1[j]) {
					ele2[j].style.display="block";
				}
			}
		}
	}
	for(var i=0;i<ele1.length;i++){
		ele1[i].onmouseout=function(){
			for(var j=0;j<ele1.length;j++){
				if (this==ele1[j]) {
					ele2[j].style.display="none";
				}
			}
		}
	}
}


// //绑定事件
// function addHandler(ele,eventName,fun){
// 	if (ele.addEventListener) {
// 		ele.addEventListener(eventName,fun,false);
// 	}else if (ele.attachEvent) {}{
// 		ele.attachEvent("on"+eventName,fun);
// 	}else{
// 		ele["on"+eventName]=fun;
// 	}
// }
// //ele:元素名；eventName：事件名（例如：click，mouseover等等）；fun：回调函数

// //解除事件绑定
// function removeHandler(ele,eventName,fun){
// 	if (ele.removeEventListener) {
// 		ele.removeEventListener(eventName,fun,false);
// 	}else if (ele.detachEvent){
// 		ele.detachEvent("on"+eventName,fun);
// 	}else{
// 		ele["on"+eventName]=null;
// 	}
// }



//获取event对象的目标元素的封装
function eventTarget(evt){
	var event=evt||window.event;
	var eventTarget=event.target||event.srcElement;
	return eventTarget;
}

function eventTarget2(){
	var event=arguments[0]||window.event;
	var eventTarget=event.target||event.srcElement;
	return eventTarget;
}


//阻止浏览器的默认行为
function prevent(e){
	var event=e||window.event;
	if (event&&event.preventDefault) {
		event.preventDefault();
	}else{
		event.returnValue=false;
	}
}


//阻止冒泡
function stopBubble(e){
	var event=e||window.event;
	if (event&&evnet.stopPropagation) {
		event.stopPropagation();
	}else{
		event.cancelBubble=true;
	}
}


//获取元素的绝对位置
function getPos(ele){
	var left=0;
	var top=0;
	//注意：判断进入循环的条件，为true时进循环，一旦为null则退出循环
	while(ele.offsetParent){
		left+=ele.offsetLeft;
		top+=ele.offsetTop;
		ele=ele.offsetParent;
	}
	//返回一个对象
	return {l:left,t:top};
}



//获取下一个兄弟节点
function getNext(ele){
	if (ele.nextElementSibling) {
		return ele.nextElementSibling;
	}else{
		return ele.nextSibling;
	}
}

//获取上一个兄弟节点
function getPrevious(ele){
	if (ele.previousElementSibling) {
		return ele.previousElementSibling;
	}else{
		return ele.previousSibling;
	}
}