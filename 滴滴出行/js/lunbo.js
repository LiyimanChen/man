(function(){
	window.LunBo = lunboFn;
	function lunboFn(){
		this.box = $(".three_center");
		this.boxs = $(".three_img_img div");
		this.leftBtn = $(".three_left");
		this.rightBtn = $(".three_right");
		this.texts = $(".three_text");
		this.textLis = $("#textLi li");
		this.num = 0;
		this.num1 = 0;
		this.init();
	}
	lunboFn.prototype.action = function(){
		this.num++;
		this.num %= 10 ;
		this.boxs.eq(this.num).fadeIn(500).siblings().fadeOut(500);
	}
	lunboFn.prototype.action1 = function(){
		this.num1++;
		this.num1 %= 10 ;
//		console.log(this.textLis.eq(this.num1));
		this.texts.html(this.textLis.eq(this.num1).html());
		console.log(this.textLis.eq(this.num1).children(0))
		this.textLis.eq(this.num1).children(0).addClass("cur");
	}
	lunboFn.prototype.init = function(){
		var self = this;
		this.leftBtn.on("click",function(){
			self.num -= 2;
			self.num1 -= 2;
			self.action();
			self.action1();
			
			if(self.num < 0){
				self.num = 9;
			}
		})
		this.rightBtn.on("click",function(){
			self.action();
			self.action1();
		})
	}
})();
