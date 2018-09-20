window.onload=function(){
//详情页的放大镜效果
	function bigMirror(){
		var bao=getId("bao");
		var browse=getId("browse");
		var bliArr=getTags(browse,"li");
		var left=getId("left");
		var lful=getTags(left,"ul")[0];
		var lArr=lful.getElementsByTagName("li");
		var drag=getId("drag");
		var btn=getId("btn");
		var l=getId("l");
		var r=getId("r");
		var right=getId("right");
		var rImg=getTags(right,"img")[0];

		left.onmouseover=function(){
			btn.style.display="block";
			drag.style.display="block";
			right.style.display="block";
		}
		left.onmouseout=function(){
			btn.style.display="none";
			drag.style.display="none";
			right.style.display="none";
		}


		// var k=0;
		// r.onclick=function(){
		// 	k++;
		// 	if(k>2){
		// 		k=0;
		// 	}
		// 	if (k<0) {
		// 		k=2;
		// 	}
		// 	lArr[k].style.zIndex=1;
		// 	autoOpa(lArr);
		// 	for(var i=0;i<bliArr.length;i++){
		// 		bliArr[i].className="";
		// 	}
		// 	bliArr[k].className="current";
		// }
		// l.onclick=function(){
		// 	k-=2;
		// 	autoOpa(lArr);
		// }

		// //排他思想，显示当前
		// for(var i=0;i<bliArr.length;i++){
		// 	bliArr[i].onmouseover=function(){
		// 		for(var j=0;j<bliArr.length;j++){
		// 			bliArr[j].className="";
		// 			if (this==bliArr[j]) {
		// 				bliArr[j].className="current";
		// 				lArr[j].style.zIndex=1;
		// 				autoOpa(lArr);
		// 			}
					
		// 		}
		// 	}
		// }

		//drag移动显示放大效果
		left.onmousemove=function(e){
			var event=e||window.event;
			//获取drag可移动的最大范围
			var maxW=left.clientWidth-drag.offsetWidth;
			var maxH=left.clientHeight-drag.offsetHeight;
			//获取drag距离left的长度
			var X=event.clientX-bao.offsetLeft-drag.offsetWidth/2;
			var Y=event.clientY-bao.offsetTop-drag.offsetHeight/2;

			if (X>=maxW) {
				X=maxW;
			}else if (X<=0) {
				X=0;
			}

			if (Y>=maxH) {
				Y=maxH;
			}else if (Y<=0) {
				Y=0;
			}

			drag.style.left=X+"px";
			drag.style.top=Y+"px";


			var percentX=X/maxW;
			var percentY=Y/maxH;

			var maxW1=rImg.offsetWidth-right.offsetWidth;
			var maxH1=rImg.offsetHeight-right.offsetHeight;

			var X1=percentX*maxW1;
			var Y1=percentY*maxH1;

			rImg.style.left=-X1+"px";
			rImg.style.top=-Y1+"px";
		}

	}
	bigMirror();


}