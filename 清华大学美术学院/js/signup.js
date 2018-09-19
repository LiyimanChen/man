(function(){
	
	function Tab(){
		this.lis = $(".content ul li");
		this.show1 = $(".zaixianbaoming");
		this.show2 = $(".baomingliucheng");
		this.btn = $("#btn");
		this.lists = $(".lists");
		this.green = $(".green")
	}
	
	Tab.prototype = {
		constructor:Tab,
		init:function(){
			this.tab();
			this.xiala();
		},
		tab:function(){
			var that = this;
			this.lis.on("click",function(){
//				console.log($(this).index());
				if ($(this).index() == 0) {
					that.show1.addClass("show").siblings().removeClass("show");
					that.green.html("在线报名");
				}else{
					that.show2.addClass("show").siblings().removeClass("show");
					that.green.html("报名流程");
				}
			})
		},
		xiala:function(){
			var that = this;
			this.btn.on("click",function(){
				that.lists.slideToggle(500);
			})
		}
	}
	
	var tab = new Tab();
	tab.init();
}())
