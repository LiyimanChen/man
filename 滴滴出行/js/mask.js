(function(){
	window.MaskFn = MaskFn;
	function MaskFn(){
		this.mask = $("#mask");
		this.sixPageImgs = $(".sixPageImgs");
		this.maskLis = $("#mask li");
		this.maskIs = this.maskLis.children(0);
		this.maskImgs = $("#mask img");
		this.lBtn = $("#leftBtn");
		this.rBtn = $("#rightBtn");
		this.maskEvent();
		this.clickEvent();
	}
	MaskFn.prototype.maskEvent = function(){
		var self = this;
		this.maskLis.on("mouseenter",function(eve){
			console.log($(this).children()[0]);
			$(this).children()[0].style.opacity = "0";
		})
		this.maskLis.on("mouseleave",function(eve){
			console.log($(this).children()[0]);
			$(this).children()[0].style.opacity = "0.8";
		})
	}
	MaskFn.prototype.clickEvent = function(){
		var self = this;
		var num = 0;
		this.lBtn.on("click",function(){
			num--;
			if(num<=0){
				num=0;
				self.lBtn.css("opacity","0.3")
			}
			self.lBtn.css("opacity","1");
			self.sixPageImgs.animate({
				"scrollLeft":self.maskLis.width() * num 
			},1000)
			console.log(self.mask.scrollLeft);
		})
		this.rBtn.on("click",function(){
			console.log(self.sixPageImgs)
			num++;
			if(num>=3){
				num=3;
				self.rBtn.css("opacity","0.3")
			}
			self.rBtn.css("opacity","1")
			self.sixPageImgs.animate({
				"scrollLeft":self.maskLis.width() * num 
			},1000)
			console.log(self.mask.scrollLeft);
		})
	}
})();