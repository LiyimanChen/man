(function(){
	window.LunBo2 = LunBo2;
	var self = null;
	function LunBo2(){
		this.autoNum = 0;
		this.pageFiveLunbo = $("#pageFiveLunbo");
		this.pageFiveLunbo_box = $("#pageFiveLunbo_box");
		this.$Imgs = $("#pageFiveLunbo li");
		this.choose = $("#pageFiveNav");
		this.$chooseLis = $("#pageFiveNav li"); 
		self = this;
		this.timer = setInterval(self.actionFn,1500);
	}
	LunBo2.prototype.actionFn = function(){
		// console.log("我是第五页的轮播");
		self.pageFiveLunbo.stop(true);
		self.autoNum ++;
		self.autoNum %= 5;
		// console.log(self.autoNum,self.pageFiveLunbo.scrollLeft());
		// console.log(self.$Imgs.width());
		// console.log(self.pageFiveLunbo_box.width());
		// console.log(self);

		self.pageFiveLunbo.animate({
			"scrollLeft":self.$Imgs.width() * self.autoNum
		},1000)
		// console.log(self.$Imgs.width() * self.autoNum);
		// console.log(self.pageFiveLunbo_box.scrollLeft());
		self.changFn();	
	}
	LunBo2.prototype.changFn = function(){
		self.$chooseLis.eq(self.autoNum).addClass("NavActive").siblings().removeClass("NavActive");
	}
})();