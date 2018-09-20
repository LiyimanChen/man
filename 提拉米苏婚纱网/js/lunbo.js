(function(){
	window.Lunbo = Lunbo;
	var self = null;
	function Lunbo(){
		this.rightImgsBox = $("#rightImgsBox");
		this.$ImgLis = $("#rightImgsBox li");
		this.click = $("#rightImgsClick");
		this.$clickLis = $("#rightImgsClick li");
		this.leftBtn = $("#rightImgsLeftBtn");
		this.rightBtn = $("#rightImgsRightBtn");
		this.num = 0;
		this.bindEvent();
		self = this;
		this.timer = setInterval(this.action,1500);
	}
	Lunbo.prototype.action = function(){
		self.$ImgLis.stop(true);
		self.num++;
		self.num %= 4 ;
		self.$ImgLis.eq(self.num).fadeIn(500).siblings().fadeOut(500);
		self.$clickLis.eq(self.num).addClass("select").siblings().removeClass("select");
		// self.clickFn();
	}
	Lunbo.prototype.bindEvent = function(){
		this.leftBtn.on("click",function(){
			self.$ImgLis.stop(true);
			self.num -=2;
			self.action();
			if (self.num < 0 ) {
				self.num = 3 ;
			}
			// console.log(self.num);
			// self.clickFn();
		})
		this.rightBtn.on("click",function(){
			self.$ImgLis.stop(true);
			self.action();
			// seif.clickFn();
		})
	}
	Lunbo.prototype.clickFn = function(){
		this.click.animate({
			"scrollLeft":this.num*118
		},100)
	}
})();