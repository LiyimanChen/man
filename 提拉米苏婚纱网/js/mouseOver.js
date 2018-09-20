(function(){
	window.MouseOver = MouseOver;
	// var self = null;
	function MouseOver(){
		this.$lis = $("#topNavRight li");
		this.$dls = $("#topNavRight dl");
		this.$dts = $("#topNavRight dt");
		// self = this;
		this.$liss = $("#leftNavLeft li");
		this.$a = $("a");
		this.init();
	}
	MouseOver.prototype.init = function(){
		var self = this;
		this.$lis.on("mouseenter",function(){
			self.$lis.eq($(this).index()).css({
				"background-color":"rgb(215,22,75)",	
			},200).fadeIn;
			self.$dls.eq($(this).index()).show(200);
		});
		this.$lis.on("mouseleave",function(){
			self.$lis.eq($(this).index()).css({
				"background-color":"",	
			},200).fadeOut;
			self.$dls.hide(200);
		});
		for (var i = 0; i < this.$dts.length; i++) {
			this.$dts[i].index = i;
			this.$dts[i].onmouseenter = function(){
				self.$dts.eq(this.index).css({
					"background-color":"white",
					"color":"rgb(215,2,75)"
				}).siblings().css({
					"color":"white",
					"background-color":"rgb(215,2,75)"
				})
			}
		}
		// this.$a.on("mouseenter",function(){
		// 	self.$a.eq($(this).index()).css({
		// 		"display":"inline-block",
		// 		"background-color":"rgba(90,90,90,.3)"
		// 	})
		// })
		/*this.h$dts.on("mouseenter",function(){
			self.$dts.eq($(this).index()).css({
				"background-color":"white",
				"color":"rgb(215,2,75)"
			}).siblings().css({
				"color":"white",
				"background-color":"rgb(215,2,75)"
			})
		}) */
		// this.$dts.on("mouseleave",function(){
		// 	self.$dts.eq($(this).index()).css({
		// 		"background-color":"white",
		// 		"color":"rgb(215,2,75)"
		// 	})
		// })
		/*var self = this;
		for (var i = 0; i < this.$lis.length; i++) {
			this.$lis.on("mouseenter",function(){
				for (var j = 0; j < self.$lis.length; j++) {
					self.$dls.show(200);
				}
			})
		}*/
		/*var self = this;
		this.$lis.on("mouseenter",function(){
			for (var i = 0; i < self.$lis.length; i++) {
				$(self).$dls.show(200);
			}
			
		})*/
	}
})(); 