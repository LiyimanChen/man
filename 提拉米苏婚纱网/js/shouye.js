(function(){
	console.log(123);
	window.ShouyeFn = ShouyeFn;
	var bdy = document.documentElement || document.body;
	function ShouyeFn(){
		this.lunbo = new Lunbo();
		this.lunbo1 = new LunBo();
		this.lunbo2 = new LunBo2();
		this.topNav = $("#topNav");
		this.topNavTop = this.topNav.offsetTop;
		var that = this;
		window.onscroll = function(){
			if (bdy.scrollTop>0) {
				that.topNav.css({
					"position":"fixed",
					"top":"0px",
					"left":"0px",
					"z-index":"99999999999999"
				})
			}else{
				that.topNav.css({
					"position":""
				})
			}
		}
		this.templateFn = new TemplateFn();
		this.mouseOver = new MouseOver();
	}
})();