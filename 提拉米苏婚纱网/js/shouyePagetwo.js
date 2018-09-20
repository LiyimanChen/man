// (function(){
// 	window.Divs = Divs;
// 	function Divs(){
// 		this.pageTwoOne = $("#pageTwo_one");
// 		this.pageTwoTwo = $("#pageTwo_two");
// 		this.pageTwoThree = $("#pageTwo_three");
// 		this.pageTwoFour = $("#pageTwo_four");
// 		this.createFn();
// 	}
// 	var self = this;
// 	Divs.prototype.createFn = function(){
// 		// 鼠标浮上去创建一个div
// 		this.pageTwoOne.on("mouseenter",function(){
// 			console.log(123);
// 			var pageTwoOneDiv = $("<div id='pageTwoOneDiv'></div>").appendTo(this.pageTwoOne);
// 			console.log(pageTwoOneDiv);
// 			pageTwoOneDiv.css({
// 				"width":"580px",
// 				"height":"680px",
// 				"background":"red",
// 				"position":"absolute",
// 				"left":0,
// 				"top":0
// 			})

// 		})

// 	}
// })();

	console.log(123123132);
	// 第一个
	$("#pageTwo_one").on("mouseenter",function(){
		var pageTwoOneDiv = $("<div id='pageTwoOneDiv'></div>").appendTo($("#pageTwo_one"));
		pageTwoOneDiv.css({
			"width":"580px",
			"height":"680px",
			"background":"rgba(0,0,0,.3)",
			"position":"absolute",
			"left":"0",
			"top":"0"
		},500);
		var pageTwoOneP = $("<p>9YEARS 專注旅拍婚紗攝影</p>").appendTo(pageTwoOneDiv);
		pageTwoOneP.css({
			"line-height":'680px',
			"text-align":"center",
			"font-size":"35px",
			"font-family":"微软雅黑",
			"color":"white"
		})
		// $("#pageTwo_one img").animate({
		// 	"width":"680px",
		// 	"height":"780px"
		// })
	})
	$("#pageTwo_one").on("mouseleave",function(){
		$("#pageTwoOneDiv").fadeOut(500);
		$("#pageTwoOneDiv").remove();
	})
	// 第二个
	$("#pageTwo_two").on("mouseenter",function(){
		var pageTwoTwoDiv = $("<div id='pageTwoTwoDiv'></div>").appendTo($("#pageTwo_two"));
		pageTwoTwoDiv.css({
			"width":"580px",
			"height":"332px",
			"background":"rgba(0,0,0,.3)",
			"position":"absolute",
			"left":"0",
			"top":"0"
		},500);
		var pageTwoTwoP = $("<p>1000元新婚紅包</p>").appendTo(pageTwoTwoDiv);
		pageTwoTwoP.css({
			"line-height":'332px',
			"text-align":"center",
			"font-size":"35px",
			"font-family":"微软雅黑",
			"color":"white"
		})
	})
	$("#pageTwo_two").on("mouseleave",function(){
		$("#pageTwoTwoDiv").fadeOut(500);
		$("#pageTwoTwoDiv").remove();
	})
	// 第三个
	$("#pageTwo_three").on("mouseenter",function(){
		var pageTwoTHreeDiv = $("<div id='pageTwoTHreeDiv'></div>").appendTo($("#pageTwo_three"));
		pageTwoTHreeDiv.css({
			"width":"580px",
			"height":"332px",
			"background":"rgba(0,0,0,.3)",
			"position":"absolute",
			"left":"0",
			"top":"0"
		},500);
		var pageTwoTHreeP = $("<p>客片欣賞</p>").appendTo(pageTwoTHreeDiv);
		pageTwoTHreeP.css({
			"line-height":'332px',
			"text-align":"center",
			"font-size":"35px",
			"font-family":"微软雅黑",
			"color":"white"
		})
	})
	$("#pageTwo_three").on("mouseleave",function(){
		$("#pageTwoTHreeDiv").fadeOut(500);
		$("#pageTwoTHreeDiv").remove();
	})
	// 第四个
	$("#pageTwo_four").on("mouseenter",function(){
		var pageTwoFourDiv = $("<div id='pageTwoFourDiv'></div>").appendTo($("#pageTwo_four"));
		pageTwoFourDiv.css({
			"width":"580px",
			"height":"680px",
			"background":"rgba(0,0,0,.3)",
			"position":"absolute",
			"left":"0",
			"top":"0"
		},500);
		var pageTwoFourP = $("<p> Tiramisu 9th Anniversary discount celebration1</p>").appendTo(pageTwoFourDiv);
		pageTwoFourP.css({
			"line-height":'300px',
			"text-align":"center",
			"font-size":"35px",
			"font-family":"微软雅黑",
			"color":"white"
		})
	})
	$("#pageTwo_four").on("mouseleave",function(){
		$("#pageTwoFourDiv").fadeOut(500);
		$("#pageTwoFourDiv").remove();
	})


/*$("#pageTwo_one").on("mouseenter",function(){
	$("#pageTwo_one").children(1).fadeIn();
})
$("#pageTwo_one").on("mouseleave",function(){
	$("#pageTwoOneDiv").fadeOut();
})*/