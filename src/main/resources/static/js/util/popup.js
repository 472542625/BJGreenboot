//// 获取到popup的节点+
//
//$(function() {
//	var container = document.getElementById('popup');
//	var content = document.getElementById('popup-content');
//	var closer = document.getElementById('popup-closer');
//	// 创建一个overlay, 绑定html元素container
//	  var 	 overlay = new ol.Overlay(/** @type {olx.OverlayOptions} */
//		({
//			element : container,
//			autoPan : true,
//			autoPanAnimation : {
//				duration : 250
//			}
//		}));
//
//		// 监听地图点击事件
//		map.on('singleclick', function(evt) {
//			// 获取当前点击坐标，并设置到HTML元素上去
//			var coordinate = evt.coordinate;
//			console.log(coordinate);
//			var hdms = ol.coordinate.toStringHDMS(ol.proj.fromLonLat(coordinate));
//
//			// content.innerHTML = '<p>You clicked here:</p><code>' + hdms
//			// + '</code>';
//
//			content.innerHTML = '<p>You clicked here:</p><code></code>';
//			// 设置overlay的位置，从而显示在鼠标点击处
//			overlay.setPosition(coordinate);
////			var source = new ol.source.Vector({
////				features : featurearray
////			});
////			vector_bj_yj_jkd_layer = new ol.layer.Vector({
////				source : source,
////				zIndex : 1299
////			});
////			map.addLayer(vector_bj_yj_jkd_layer);
//			map.addOverlay(overlay);
//		});
//
//})



function popup(coordinate){
	var container = document.getElementById('popup');
	var click_property = document.getElementById('click_property');
	var content = document.getElementById('popup-content');
	var closer = document.getElementById('popup-closer');
	// 创建一个overlay, 绑定html元素container
	  var 	 overlay = new ol.Overlay(/** @type {olx.OverlayOptions} */
		({
			element : click_property,
			autoPan : true,
			autoPanAnimation : {
				duration : 250
			},
			offset:['-400','-400'],
			positioning:'center-center'
		}));

	 
			// 设置overlay的位置，从而显示在鼠标点击处
			overlay.setPosition(coordinate);
 
			map.addOverlay(overlay);
	 

	
}
