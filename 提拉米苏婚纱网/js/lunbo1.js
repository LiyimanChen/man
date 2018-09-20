(function(){
	window.LunBo = LunBo;
	var self = null;
	function LunBo(){
		this.pageThree_btm_left = $("#pageThree_btm_left");
		this.$ImgLiss = $("#pageThree_btm_left li");
		this.pageThree_btm_right = $("#pageThree_btm_right");
		this.$clickLiss = $("#pageThree_btm_right li");
		this.num = 0;
		self = this;
		this.timer = setInterval(this.action,1500);
	}
	LunBo.prototype.action = function(){
		self.$ImgLiss.stop(true);
		self.num++;
		self.num %= 8 ;
		self.$ImgLiss.eq(self.num).fadeIn(1000).siblings().fadeOut(1000);
		self.change();
		// self.changeFun();
	}
	LunBo.prototype.change = function(){
		self.$clickLiss.eq(self.num).addClass("cur").siblings().removeClass("cur");
	}
	// LunBo.prototype.changeFun = function(){
	// 	self.$clickLiss.on("click",function(){
	// 		self.num = $(this).index()-2;
	// 		self.action();
	// 	})
	// }
})();