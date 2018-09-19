(function(){
	window.NavFn = NavFn;
	function NavFn(){
		this.navBox = $(".three_click");
		this.nav = $(".three_click div");
		this.navUl = $(".three_click ul");
		this.nablis = $(".three_click li");
		this.img = $(".TopRight img");
		this.TopRight = $(".TopRight");
		this.navRightSml = $("#navRightSml");
		this.new1 = $("#new1");
		this.imgClick();
		this.rotateFn();
	}
	NavFn.prototype.rotateFn = function(){
		var self = this;
		this.nav.toggle(function(){
			self.nav.css({
				"transition":"all 1s ease 0s",
				"transform":"rotate(90deg)",
				"borderRadius":"50%",
			});
			self.navUl.css({
				"transition":"all 1s ease 0s",
				"display":"block",
				"width":"20vw"
			})
			self.nablis.css({
				"transition":"width 1s ease 0s",
				"display":"block"
			})
		},function(){
			self.nav.css({
				"transition":"all 1s ease 0s",
				"transform":"rotate(0deg)",
				"borderRadius":"0",
			});
			self.navUl.css({
				"transition":"width 1s ease 0s",
				"width":"0"
			})
			self.nablis.css({
				"transition":"width 1s ease 0s",
				"display":"none"
			})
		})
	}
	NavFn.prototype.imgClick = function(){
		var self = this;
		this.navRightSml.on("click",function(){
			console.log(self.TopRight)
			self.TopRight.css({
				"display":"block",
				"transform":"translateZ(0px)"
			})
		})
		this.img.on("click",function(){
			self.TopRight.css({
				"transform":"translateZ(800px)",
//				"display":"none"
			})
		})
	}
})();