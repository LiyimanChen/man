(function(){
	window.MapFn = MapFn;
	function MapFn(){
		var map = new BMap.Map("map");
		var point = new BMap.Point(116.403406,39.91737);
		map.centerAndZoom(point,-200);
		var cover = new BMap.Convertor();
		cover.translate(new Array(point),1,5,function(data){
			if (data.status===0) {
				map.setCenter(data.points[0]);
			}
			 var marker = new BMap.Marker(data.points[0]);
			 map.addOverlay(marker); 
		});
		//  给地图加控件
		// 添加缩放平移控件
		map.addControl(new BMap.NavigationControl());
		// 添加比例尺控件
		map.addControl(new BMap.ScaleControl());
		// 添加缩略图控件
		map.addControl(new BMap.OverviewMapControl());
		// 添加卫星
		map.addControl(new BMap.MapTypeControl());
		// map.addControl(new BMap.Marker());
	}
})();
