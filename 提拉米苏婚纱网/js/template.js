(function(){
	window.TemplateFn = TemplateFn;
	function TemplateFn(){
		var templateStr = $("#template1").html();
		$.get("../php/muban.json",function(data){
			// console.log(888);
			// console.log(data);
			var dataObj = typeof data == "object" ? data : eval("("+data+")");
			// console.log(dataObj);
			var dataArry = dataObj.pic;
			for (var i = 0; i < dataArry.length; i++) {
				var obj = dataArry[i];
				// console.log(obj);
				var DOMstr = compileFn(templateStr,obj);
				// console.log(DOMstr);
				$("#pageFour_btm").append(DOMstr);
			}
		})	
		var templateStr1 = $("#template2").html();
		$.get("../php/muban1.json",function(data){
			var objs = typeof data == "object" ? data : eval("("+data+")");
			var dataArray = objs.pic;
			for (var i = 0; i < dataArray.length; i++) {
				var obj1 = dataArray[i];
				var DOMstr1 = compileFn(templateStr1,obj1);
				$("#pageSix_btm").append(DOMstr1);
			}
		})
		var templateStr2 = $("#template3").html();
		$.get("../php/muban2.json",function(data){
			var obj1s = typeof data == "object" ? data : eval("("+data+")");
			var dataArray1 = obj1s.pic;
			for (var i = 0; i < dataArray1.length; i++) {
				var obj1 = dataArray1[i];
				var DOMstr2 = compileFn(templateStr2,obj1);
				$("#pageEightBtm").append(DOMstr2);
			}
		})
		var templateStr3 = $("#template4").html();
		$.get("../php/muban3.json",function(data){
			var obj2s = typeof data == "object" ? data : eval("("+data+")");
			var dataArray2 = obj2s.pic;
			for (var i = 0; i < dataArray2.length; i++) {
				var obj2 = dataArray2[i];
				var DOMstr3 = compileFn(templateStr3,obj2);
				$("#pageNineBtm").append(DOMstr3);
			}
		})
		function compileFn(templateStr,data){
			return templateStr.replace(/\@([a-z]+)\@/g,function(match,$1,index,string){
				return data[$1];
			})
		}
		// this.mask();
	}
	// TemplateFn.prototype.mask = function(){
	// 	console.log(11111);
	// 	this.$divss = $(".template div");
	// 	this.$images = $(".template img");
	// 	var self = this;
	// 	// this.$images.on("mouseenter",function(){
	// 	// 	var mask = $("<div id='mask'></div>").appendTo($("#pageTwo_one"));
	// 	// 	mask.css({
	// 	// 		"width":self.$images.width(),
	// 	// 		"height":self.$images.height(),
	// 	// 		"background":"rgba(0,0,0,.3)",
	// 	// 		"position":"absolute",
	// 	// 		"left":"0",
	// 	// 		"top":"0"
	// 	// 	},500);
	// 	// })
	// 	for (var i = 0; i < this.$images.length; i++) {
	// 		this.$images[i].index = i;
	// 		this.$images.on("mouseenter",function(){
	// 			var mask = $("<div id='mask'></div>").appendTo(self.$divss);
	// 			mask.css({
	// 				"width":self.$images.width(),
	// 				"height":self.$images.height(),
	// 				"background":"rgba(0,0,0,.3)",
	// 				"position":"absolute",
	// 				"left":"0",
	// 				"top":"0"
	// 			},500);
	// 		})
	// 	}
	// }
})();