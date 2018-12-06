/**
 * Created by Administrator on 2018/8/11/011.
 */
 function checkBox(obj) {
    // 只有当选中的时候才会去掉其他已经勾选的checkbox，所以这里只判断选中的情况
    if (obj.is(":checked")) {
        // 先把所有的checkbox 都设置为不选种
        $(':input').prop('checked', false);
        // $('input.echarts_checkbox').prop('checked', false);
        // 把自己设置为选中
        obj.prop('checked', true);
    }
}
// var server_url="http://47.92.155.94:8185/";
var server_url = "http://localhost:8185/";
// var mvc_url = "http://47.92.155.94:8085/BJGreen/";

// *****东城区影像底图加载WMS
var imagelayer_dongcheng;
function add_imagemap_layer_dongcheng() {

	var wmsSource = new ol.source.TileWMS({
		url : server_url + 'geoserver/forest/wms',// 根据自己的服务器填写
		params : {
			'LAYERS' : 'forest:dongcheng',// 要加载的图层，可以为多个
			'TILED' : false
		},
		serverType : 'geoserver'// 服务器类型
	})
	imagelayer_dongcheng = new ol.layer.Tile({
		source : wmsSource
	});

	map.addLayer(imagelayer_dongcheng);

	map.getView().setCenter(
			ol.proj.transform([ 116.409, 39.923 ], 'EPSG:4326', 'EPSG:3857'));

	var view = map.getView();
	view.setZoom(15);

}

var imagelayer_beijing;
function add_imagemap_layer_beijing() {

	var wmsSource = new ol.source.TileWMS({
		url : server_url + 'geoserver/forest/wms',// 根据自己的服务器填写
		params : {
			'LAYERS' : 'forest:bjimg',// 要加载的图层，可以为多个
			'TILED' : false
		},
		serverType : 'geoserver'// 服务器类型
	})
	imagelayer_beijing = new ol.layer.Tile({
		source : wmsSource
	});

	map.addLayer(imagelayer_beijing);

	map.getView().setCenter(
			ol.proj.transform([ 116.409, 39.923 ], 'EPSG:4326', 'EPSG:3857'));

	var view = map.getView();
	view.setZoom(15);

}

var shplayer_dongcheng;
function add_shpmap_layer_dongcheng() {

	var wmsSource = new ol.source.TileWMS({
		url : server_url + 'geoserver/forest/wms',// 根据自己的服务器填写
		params : {
			'LAYERS' : 'forest:BJ_DC',// 要加载的图层，可以为多个
			'TILED' : false
		},
		serverType : 'geoserver'// 服务器类型
	})
	shplayer_dongcheng = new ol.layer.Tile({
		source : wmsSource
	});

	map.addLayer(shplayer_dongcheng);

	map.getView().setCenter(
			ol.proj.transform([ 116.409, 39.923 ], 'EPSG:4326', 'EPSG:3857'));

	var view = map.getView();
	view.setZoom(15);

}

var shplayer_beijing;
function add_shpmap_layer_beijing() {

	var wmsSource = new ol.source.TileWMS({
		url : server_url + 'geoserver/forest/wms',// 根据自己的服务器填写
		params : {
			'LAYERS' : 'forest:BJ',// 要加载的图层，可以为多个
			'TILED' : false
		},
		serverType : 'geoserver'// 服务器类型
	})
	shplayer_beijing = new ol.layer.Tile({
		source : wmsSource
	});

	map.addLayer(shplayer_beijing);

	map.getView().setCenter(
			ol.proj.transform([ 116.409, 39.923 ], 'EPSG:4326', 'EPSG:3857'));

	var view = map.getView();
	view.setZoom(15);

}

// ///wms地图服务--------------------------------------------------------------------------------------------------->
// ///wms地图服务--------------------------------------------------------------------------------------------------->
// ///wms地图服务--------------------------------------------------------------------------------------------------->
// ///wms地图服务--------------------------------------------------------------------------------------------------->
// ///wms地图服务--------------------------------------------------------------------------------------------------->
// ///wms地图服务--------------------------------------------------------------------------------------------------->
var map;
var baiduMapLayer;
var baiduMapLayerLabel;
var baiduRasterLayer;
var googleMapLayer;
var googleMapLayer;
var googleRasterLayer;
var gaodeMapLayer;
var osmLayer;
var pixel_coordinates = [];// 鼠标点击的坐标
var vector_bj_yj_jkd_layer_buffer_circle;// /缓冲区圆图层
$(function() {

	// //底图控制·····························································································
	// //百度谷歌影像
	// // 自定义分辨率和瓦片坐标系
	// var resolutions = [];
	// var maxZoom = 18;
	// // 计算百度使用的分辨率
	// for (var i = 0; i <= maxZoom + 1; i++) {
	// resolutions[i] = Math.pow(2, maxZoom - i);
	// }
	// var tilegrid = new ol.tilegrid.TileGrid({
	// origin: [0, 0], // 设置原点坐标
	// resolutions: resolutions // 设置分辨率
	// });
	// // 创建百度行政区划
	// var baiduSource = new ol.source.TileImage({
	// tileGrid: tilegrid,
	// tileUrlFunction: function (tileCoord, pixelRatio, proj) {
	// var z = tileCoord[0];
	// var x = tileCoord[1];
	// var y = tileCoord[2];
	//
	// // 百度瓦片服务url将负数使用M前缀来标识
	// if (x < 0) {
	// x = 'M' + (-x);
	// }
	// if (y < 0) {
	// y = 'M' + (-y);
	// }
	//
	// // return "http://online0.map.bdimg.com/onlinelabel/?qt=tile&x=" + x +
	// "&y=" + y + "&z=" + z + "&styles=pl&udt=20170115&scaler=1&p=1";
	// //street
	// return 'http://online' + parseInt(Math.random() * 10) +
	// '.map.bdimg.com/onlinelabel/?qt=tile&x=' +
	// x + '&y=' + y + '&z=' + z + '&styles=pl&udt=20170620&scaler=1&p=1';
	// }
	// });
	// // 百度影像
	// var baiduSourceRaster = new ol.source.TileImage({
	// tileGrid: tilegrid,
	// tileUrlFunction: function (tileCoord, pixelRatio, proj) {
	// var z = tileCoord[0];
	// var x = tileCoord[1];
	// var y = tileCoord[2];
	//
	// // 百度瓦片服务url将负数使用M前缀来标识
	// if (x < 0) {
	// x = 'M' + (-x);
	// }
	// if (y < 0) {
	// y = 'M' + (-y);
	// }
	// return 'http://shangetu' + parseInt(Math.random() * 10) +
	// '.map.bdimg.com/it/u=x=' + x +
	// ';y=' + y + ';z=' + z + ';v=009;type=sate&fm=46&udt=20170606';
	// }
	// });
	// // 百度标注
	// var baiduSourceLabel = new ol.source.TileImage({
	// tileGrid: tilegrid,
	// tileUrlFunction: function (tileCoord, pixelRatio, proj) {
	// var z = tileCoord[0];
	// var x = tileCoord[1];
	// var y = tileCoord[2];
	//
	// // 百度瓦片服务url将负数使用M前缀来标识
	// if (x < 0) {
	// x = 'M' + (-x);
	// }
	// if (y < 0) {
	// y = 'M' + (-y);
	// }
	// return 'http://online' + parseInt(Math.random() * 10) +
	// '.map.bdimg.com/onlinelabel/?qt=tile&x=' +
	// x + '&y=' + y + '&z=' + z + '&styles=sl&udt=20170620&scaler=1&p=1';
	// }
	// });
	// // 百度行政区划
	// baiduMapLayer = new ol.layer.Tile({
	// source: baiduSource
	// });
	//
	// // 百度地图标注
	// baiduMapLayerLabel = new ol.layer.Tile({
	// source: baiduSourceLabel
	// });
	// //百度地图影像
	// baiduRasterLayer = new ol.layer.Tile({
	// source: baiduSourceRaster
	// });
	// //谷歌行政区划
	// googleMapLayer = new ol.layer.Tile({
	// source: new ol.source.XYZ({
	// url:
	// 'http://www.google.cn/maps/vt/pb=!1m4!1m3!1i{z}!2i{x}!3i{y}!2m3!1e0!2sm!3i345013117!3m8!2szh-CN!3scn!5e1105!12m4!1e68!2m2!1sset!2sRoadmap!4e0'
	// })
	// });
	// //谷歌影像
	// googleRasterLayer = new ol.layer.Tile({
	// source: new ol.source.TileImage({url:
	// 'http://mt2.google.cn/vt/lyrs=y&hl=zh-CN&gl=CN&src=app&x={x}&y={y}&z={z}&s=G'}),
	// visible: false
	// });
	//
	//
	// //高德地图
	// gaodeMapLayer = new ol.layer.Tile({
	// source: new ol.source.XYZ({
	// url:
	// 'http://webrd03.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1&style=8'//高德地图在线
	// }),
	// projection: 'EPSG:4326'
	// })

	// osm
	osmLayer = new ol.layer.Tile({
		source : new ol.source.OSM()
	})

	// 地图初始化

	map = new ol.Map({
		target : 'map',
		layers : [ osmLayer ],
		view : new ol.View({
			center : ol.proj.fromLonLat([ 121.48, 31.22 ]),
			// center: [121.48, 31.22],
			zoom : 10,
			minZoom : 0,
			projection : 'EPSG:3857',
		}),

		// 在默认控件的基础上，再加上其他内置的控件
		controls : ol.control.defaults().extend(
				[

				// new ol.control.MousePosition(),
				new ol.control.OverviewMap(), new ol.control.ScaleLine(),
						new ol.control.ZoomSlider(),
						new ol.control.ZoomToExtent() ]),
	});

	// //////////////////////////////////////////////////////点击显示属性列表
	// //////////////////////////////////////////////////////点击显示属性列表
	// //////////////////////////////////////////////////////点击显示属性列表
	// //////////////////////////////////////////////////////点击显示属性列表
	// //////////////////////////////////////////////////////点击显示属性列表
	// //////////////////////////////////////////////////////点击显示属性列表
	// 实现高亮显示
	var featureOverlay = new ol.layer.Vector({
		source : new ol.source.Vector(),
		map : map,
		style : new ol.style.Style({
			image : new ol.style.Circle({
				radius : 5,
				fill : null,
				stroke : new ol.style.Stroke({
					color : 'red',
					width : 1
				})
			})
		})
	});
	var highlight;

	var displayFeatureInfo = function(pixel) {

		var feature = map.forEachFeatureAtPixel(pixel, function(feature) {
			return feature;
		});

		if (feature) {
			// info.innerHTML = feature.getId() + '<br>';
			var keys = feature.getKeys();
			var properties = feature.getProperties();

			/** ***判断是绿视率图层**** */
			if (keys[2] == "绿视率") {

				document.getElementById("greerate_r_box").style.display = "inline";// 如果是绿视图就显示视屏
				// ****popup
				pixel_coordinates = properties['geometry'].getCoordinates();

				popup(pixel_coordinates[0]);
				for (var i = 1; i < keys.length; i++) {
					// info.innerHTML += keys[i] + ' ： ';
					// nfo.innerHTML += properties[keys[i]] + '<br>';
					var key = $("<td></td>").append(keys[i]);
					var property = $("<td></td>").append(properties[keys[i]]);
					$("<tr></tr>").append(key).append(property).appendTo(
							"#feeature_properties_talbe_tbody");

				}
				document.getElementById("click_property").style.display = "inline";
			}
			/** ***判断是气象监测专题图层**** */
			else if (keys[3] == "PM2_5") {
				// document.getElementById("click_property").style.display =
				// "none";
				// ****popup
				pixel_coordinates = properties['geometry'].getCoordinates();
				popup(pixel_coordinates);
				var Id = $("<td></td>").append(properties['Id']);
				var xy = $("<td></td>").append(
						"经纬度：" + ("" + properties['x']).slice(0, 5) + " "
								+ ("" + properties['y']).slice(0, 5));
				var y = $("<td></td>").append(
						("" + properties['y']).slice(0, 6));

				var AQIstr = "";
				if (properties['AQI'] < 50) {
					AQIstr = properties['AQI'] + "优";
				}

				var owner = $("<td></td>").append(properties['owner']);
				var state = $("<td></td>").append(properties['state']);
				$("<tr></tr>").append('站点编号').append(Id).appendTo(
						"#feeature_properties_talbe_tbody");
				$("<tr></tr>").append('站址').append(xy).appendTo(
						"#feeature_properties_talbe_tbody");
				$("<tr></tr>").append('负责人').append(owner).appendTo(
						"#feeature_properties_talbe_tbody");
				$("<tr></tr>").append('站点状态').append(state).appendTo(
						"#feeature_properties_talbe_tbody");
				$("#temper").text(properties['temper']);
				$("#AQI").text(AQIstr);
				$("#PM2_5").text(properties['PM2_5']);
				$("#PM10").text(properties['PM10']);
				$("#O3").text(properties['O3']);
				$("#NO2").text(properties['NO2']);
				$("#SO2").text(properties['SO2']);
				$("#CO").text(properties['CO']);
				document.getElementById("click_property").style.display = "inline";

			}

			else if (keys[0] == "bj_yj_jkd") {

				delete_layer(vector_bj_yj_jkd_layer_buffer_circle);
				// console.log(properties['geometry'].getCoordinates());

				// ****popup
				pixel_coordinates = properties['geometry'].getCoordinates();
				popup(pixel_coordinates);

				for (var i = 2; i < keys.length; i++) {
					// info.innerHTML += keys[i] + ' ： ';
					// nfo.innerHTML += properties[keys[i]] + '<br>';
					var key = $("<td></td>").append(keys[i]);
					var property = $("<td></td>").append(properties[keys[i]]);

					// 自定义给这个控件一个edit-id属性,在数据修改弹出框中用到

					$("<tr></tr>").append(key).append(property).appendTo(
							"#feeature_properties_talbe_tbody");

				}
				// layui-btn layui-btn-normal
				var querybtn = $("<a></a>").addClass("alarm_warn_buf_qbtn")
						.append("查询周围物资");

				querybtn.attr("query-id", properties['gid']);

				querybtn.attr("id", "alarm_warn_buf_qbtn");

				var btn = $("<td></td>").append(querybtn);
				var empty = $("<td></td>");
				$("<tr></tr>").append(btn).append(empty).appendTo(
						"#feeature_properties_talbe_tbody");

				// $("<div></div>").append(btn).appendTo(
				// "#click_property");
				delete_layer(vector_bj_yj_jkd_layer_buffer);

				document.getElementById("alarm_warning_box").style.display = "none";
				document.getElementById("click_property").style.display = "inline";

			}
			/** ***绿量图层**** */
			else if (keys[1] == "古树编号") {

			}
			/** ***其他面专题图层**** */
			else {
				for (var i = 1; i < keys.length; i++) {
					// info.innerHTML += keys[i] + ' ： ';
					// nfo.innerHTML += properties[keys[i]] + '<br>';
					var key = $("<td></td>").append(keys[i]);
					var property = $("<td></td>").append(properties[keys[i]]);
					$("<tr></tr>").append(key).append(property).appendTo(
							"#other_feeature_properties_talbe_tbody");

					// console.log(pixel_coordinates.length);
					document.getElementById("other_click_property").style.display = "inline";

				}

			}
		} else {
			// alert("none");
			document.getElementById("click_property").style.display = "none";
			document.getElementById("other_click_property").style.display = "none";
			document.getElementById("alarm_warning_box").style.display = "none";

			document.getElementById("greerate_r_box").style.display = "none";// 如果没点击绿视图的视屏影藏
		}

		if (feature !== highlight) {
			if (highlight) {
				featureOverlay.getSource().removeFeature(highlight);
			}
			if (feature) {
				featureOverlay.getSource().addFeature(feature);
			}
			highlight = feature;
		}
	};

	map.on('click', function(evt) {
		$("#feeature_properties_talbe_tbody").empty();
		$("#other_feeature_properties_talbe_tbody").empty();
		displayFeatureInfo(evt.pixel);

	});

});

// ///打开图层事件--------------------------------------------------------------------------------------------------->
// ///打开图层事件--------------------------------------------------------------------------------------------------->
// ///打开图层事件--------------------------------------------------------------------------------------------------->
// ///打开图层事件--------------------------------------------------------------------------------------------------->
// ///打开图层事件--------------------------------------------------------------------------------------------------->
// ///打开图层事件--------------------------------------------------------------------------------------------------->

function delete_layer(vector_layer) {

	map.removeLayer(vector_layer);
}

$(function() {
	add_imagemap_layer_beijing();// 默认加载北京影像底图
	add_imagemap_layer_dongcheng();// 默认加载影像底图
	add_shpmap_layer_dongcheng();// 默认加载东城矢量
	add_shpmap_layer_beijing();
	// /osm行政底图
	$("#mapselect_map").click(function() {

		var view = map.getView();
		view.setZoom(15);

		delete_layer(imagelayer_dongcheng);
		delete_layer(imagelayer_beijing);
		// delete_layer(osmLayer);
		// map.addLayer(osmLayer);

		// console.log(map.getLayers());
	})
	// 影像底图
	$("#mapselect_image").click(function() {

		var view = map.getView();
		view.setZoom(15);

		delete_layer(imagelayer_dongcheng);
		delete_layer(imagelayer_beijing);

		// delete_layer(osmLayer);

		map.addLayer(imagelayer_beijing);
		map.addLayer(imagelayer_dongcheng);

		add_shpmap_layer_dongcheng();// 默认加载东城矢量
		add_shpmap_layer_beijing();

	})
	function deleteallLayer() {
        // /***************************************搜索
		delete_search_layer();// 公园、附属、区域、广场绿地
		// /***************************************资源分类
		deleteBJ_LYR_LD_Garden_layer();// 公园、附属、区域、广场绿地
		deleteBJ_LD_GSMM_layer();// 古树名木
		deleteBJ_LD_roof_layer();// 屋顶绿化
		deleteLYR_Water_layer();// 水
		// /***************************************绿化指标专题
		delete_BJ_green84_jz1_layer();// 绿视率
		document.getElementById("greerate_r_box").style.display = "none";
		document.getElementById("green_rate_legend").style.display = "none";
        delete_wms_BJ_RJ_layer();//人均公园绿地
		delete_BJ_JD_lhfg_layer();// 街道绿化覆盖率
		delete_BJ_TB_lhfg_layer();// 图斑绿化覆盖率
		delete_BJ_lhfg_layer();// 单位绿化覆盖率
		document.getElementById("BJ_lhfg_legend").style.display = "none";// 绿化覆盖率
		document.getElementById("greentitleSelect_lhfg").style.display = "none";
		delete_BJ_JD_ldl_layer();// 街道绿地率
		delete_BJ_TB_ldl_layer();// 图斑绿地率
		delete_BJ_ldl_layer();// 单位绿地率
		document.getElementById("BJ_ldl_legend").style.display = "none";// 绿地率
		document.getElementById("greentitleSelect_ldl").style.display = "none";
		deleteBJ_Graden_500mbuffer_layer();// 公园绿地500米辐射范围

		delete_layer(green_count_layer);// 绿量

		// ***************************************监测专题
		deleteBJ_travel_layer();// 游人监测
		deleteBJ_JC_Air_layer();// 气象监测
		document.getElementById("monitor").style.display = "none";

		// ***************************************气象专题
		delete_BJ_PM10_layer();
		document.getElementById("BJ_PM25_legend").style.display = "none";
		delete_BJ_PM25_layer();
		document.getElementById("BJ_PM10_legend").style.display = "none";

		// ***************************************应急管理专题
		deletevector_bj_yj_jkd_layer();
		delete_layer(vector_bj_yj_jkd_layer_buffer_circle);
		document.getElementById("alarm_warning_box").style.display = "none";

		delete_layer(vector_bj_yj_wz_layer);// 物资
	}

   	/** 搜索* */
	$("#searchOk").click(
			function() {
			
		  if($("#likeInputVal").val()!=""){
			
 
				deleteallLayer();// 清空图层

				 add_search_layer();

			 
				  }
			})
			
 
     
     $("#likeInputVal").bind("input propertychange change",function(event){
        
        	
		  if($("#likeInputVal").val()!=""){
			
 
				 list_search_result();

			 
				 
			}
       
        
    });
 
    
    
        $(document).click(function(e) {
        
             if ($(e.target).attr('id') == "likeInputVal") {
                  document.getElementById("search_list_result").style.display = "inline";
             }
             else{
                  document.getElementById("search_list_result").style.display = "none";
             }
        
        })
    
    $(document).on("click", ".search_list_result_li", function() {
        //"  "
	
       $("#likeInputVal").val($(this).text().split("  ")[0]);

});
    
	/** 资源分类* */
	$("#LYR_LD_Garden_gongyuan").click(
			function() {
				deleteallLayer();// 清空图层

				addLYR_LD_Garden_layer("LYR_LD_Garden", "公园绿地");

				map.getView().setCenter(
						ol.proj.transform([ 116.409, 39.923 ], 'EPSG:4326',
								'EPSG:3857'));

				var view = map.getView();
				view.setZoom(15);
			})

	$("#LYR_LD_Garden_fushu").click(
			function() {
				deleteallLayer();// 清空图层

				addLYR_LD_Garden_layer("LYR_LD_Affiliated", "附属绿地");

				map.getView().setCenter(
						ol.proj.transform([ 116.409, 39.923 ], 'EPSG:4326',
								'EPSG:3857'));

				var view = map.getView();
				view.setZoom(15);
			})
	$("#LYR_LD_Garden_guangchang").click(
			function() {
				deleteallLayer();// 清空图层

				addLYR_LD_Garden_layer("LYR_LD_Square", "广场用地");

				map.getView().setCenter(
						ol.proj.transform([ 116.409, 39.923 ], 'EPSG:4326',
								'EPSG:3857'));

				var view = map.getView();
				view.setZoom(15);
			})
	$("#LYR_LD_Garden_quyu").click(
			function() {
				deleteallLayer();// 清空图层

				addLYR_LD_Garden_layer("LYR_LD_Suburb", "区域绿地");

				map.getView().setCenter(
						ol.proj.transform([ 116.409, 39.923 ], 'EPSG:4326',
								'EPSG:3857'));

				var view = map.getView();
				view.setZoom(15);
			})

	$("#LYR_Water").click(
			function() {
				deleteallLayer();// 清空图层

				addLYR_Water_layer();

				map.getView().setCenter(
						ol.proj.transform([ 116.409, 39.923 ], 'EPSG:4326',
								'EPSG:3857'));

				var view = map.getView();
				view.setZoom(15);
			})
	// 古树名木
	$("#BJ_LD_GSMM").click(
			function() {
				deleteallLayer();// 清空图层

				add_BJ_LD_GSMM_layer();

				map.getView().setCenter(
						ol.proj.transform([ 116.409, 39.923 ], 'EPSG:4326',
								'EPSG:3857'));

				var view = map.getView();
				view.setZoom(15);
			})

	// 屋顶绿化
	$("#BJ_LD_roof").click(
			function() {
				deleteallLayer();// 清空图层

				add_BJ_LD_roof_layer();

				map.getView().setCenter(
						ol.proj.transform([ 116.409, 39.923 ], 'EPSG:4326',
								'EPSG:3857'));

				var view = map.getView();
				view.setZoom(15);
			})

	/** 气象指标专题* */

	// pm2.5
	$("#BJ_PM25")
			.click(
					function() {
						deleteallLayer();// 清空图层

						add_wms_BJ_PM25_layer();

						document.getElementById("BJ_PM25_legend").style.display = "inline";
						map.getView().setCenter(
								ol.proj.transform([ 116.409, 39.923 ],
										'EPSG:4326', 'EPSG:3857'));

						var view = map.getView();
						view.setZoom(8);
					})
	// pm10
	$("#BJ_PM10")
			.click(
					function() {
						deleteallLayer();// 清空图层

						add_wms_BJ_PM10_layer();
						document.getElementById("BJ_PM10_legend").style.display = "inline";

						map.getView().setCenter(
								ol.proj.transform([ 116.409, 39.923 ],
										'EPSG:4326', 'EPSG:3857'));

						var view = map.getView();
						view.setZoom(8);
					})

	/** 绿化指标专题* */
	// /绿量forest:BJ_luliang
	$("#green_count").click(
			function() {
				deleteallLayer();// 清空图层

				add_green_count_layer();

				map.getView().setCenter(
						ol.proj.transform([ 116.409, 39.923 ], 'EPSG:4326',
								'EPSG:3857'));

				var view = map.getView();
				view.setZoom(15);
			})
	// 绿视率
	$("#green_rate")
			.click(
					function() {
						deleteallLayer();// 清空图层

						add_BJ_green84_jz1_layer();
						document.getElementById("green_rate_legend").style.display = "inline";

						map.getView().setCenter(
								ol.proj.transform([ 116.409, 39.923 ],
										'EPSG:4326', 'EPSG:3857'));
						var view = map.getView();
						view.setZoom(15);
					})
	// 绿化覆盖率
	$("#BJ_lhfg")
			.click(
					function() {
						deleteallLayer();// 清空图层

						add_BJ_lhfg_layer();
						document.getElementById("BJ_lhfg_legend").style.display = "inline";
						document.getElementById("greentitleSelect_lhfg").style.display = "inline";

						map.getView().setCenter(
								ol.proj.transform([ 116.409, 39.923 ],
										'EPSG:4326', 'EPSG:3857'));
						var view = map.getView();
						view.setZoom(15);
					})

	$("#vector_BJ_lhfg_layer")
			.click(
					function() {

						checkBox($(this));
						if ($("#vector_BJ_lhfg_layer").is(':checked')) {
							deleteallLayer();// 清空图层

							add_BJ_lhfg_layer();
							document.getElementById("BJ_lhfg_legend").style.display = "inline";
							document.getElementById("greentitleSelect_lhfg").style.display = "inline";

							map.getView().setCenter(
									ol.proj.transform([ 116.409, 39.923 ],
											'EPSG:4326', 'EPSG:3857'));
							var view = map.getView();
							view.setZoom(15);
						}

					})
	$("#vector_BJ_lhfg_TB_layer")
			.click(
					function() {
						checkBox($(this));
						if ($("#vector_BJ_lhfg_TB_layer").is(':checked')) {
							deleteallLayer();// 清空图层

							add_BJ_TB_lhfg_layer();
							document.getElementById("BJ_lhfg_legend").style.display = "inline";
							document.getElementById("greentitleSelect_lhfg").style.display = "inline";

							map.getView().setCenter(
									ol.proj.transform([ 116.409, 39.923 ],
											'EPSG:4326', 'EPSG:3857'));
							var view = map.getView();
							view.setZoom(15);
						}

					})
	$("#vector_BJ_lhfg_JD_layer")
			.click(
					function() {
						checkBox($(this));
						if ($("#vector_BJ_lhfg_JD_layer").is(':checked')) {
							deleteallLayer();// 清空图层

							add_BJ_JD_lhfg_layer();
							document.getElementById("BJ_lhfg_legend").style.display = "inline";
							document.getElementById("greentitleSelect_lhfg").style.display = "inline";

							map.getView().setCenter(
									ol.proj.transform([ 116.409, 39.923 ],
											'EPSG:4326', 'EPSG:3857'));
							var view = map.getView();
							view.setZoom(15);
						}

					})

	// 绿地率
	$("#BJ_ldl")
			.click(
					function() {
						
						deleteallLayer();// 清空图层

						add_BJ_ldl_layer();
						document.getElementById("BJ_ldl_legend").style.display = "inline";
						document.getElementById("greentitleSelect_ldl").style.display = "inline";

						map.getView().setCenter(
								ol.proj.transform([ 116.409, 39.923 ],
										'EPSG:4326', 'EPSG:3857'));
						var view = map.getView();
						view.setZoom(15);
					})
		
	$("#vector_BJ_ldl_layer")
			.click(
					function() {

						checkBox($(this));
						if ($("#vector_BJ_ldl_layer").is(':checked')) {
							deleteallLayer();// 清空图层

							add_BJ_lhfg_layer();
							document.getElementById("BJ_ldl_legend").style.display = "inline";
							document.getElementById("greentitleSelect_ldl").style.display = "inline";

							map.getView().setCenter(
									ol.proj.transform([ 116.409, 39.923 ],
											'EPSG:4326', 'EPSG:3857'));
							var view = map.getView();
							view.setZoom(15);
						}

					})
	$("#vector_BJ_ldl_TB_layer")
			.click(
					function() {
						checkBox($(this));
						if ($("#vector_BJ_ldl_TB_layer").is(':checked')) {
							deleteallLayer();// 清空图层

							add_BJ_TB_lhfg_layer();
							document.getElementById("BJ_ldl_legend").style.display = "inline";
							document.getElementById("greentitleSelect_ldl").style.display = "inline";

							map.getView().setCenter(
									ol.proj.transform([ 116.409, 39.923 ],
											'EPSG:4326', 'EPSG:3857'));
							var view = map.getView();
							view.setZoom(15);
						}

					})
	$("#vector_BJ_ldl_JD_layer")
			.click(
					function() {
						checkBox($(this));
						if ($("#vector_BJ_ldl_JD_layer").is(':checked')) {
							deleteallLayer();// 清空图层

							add_BJ_JD_ldl_layer();
							document.getElementById("BJ_ldl_legend").style.display = "inline";
							document.getElementById("greentitleSelect_ldl").style.display = "inline";

							map.getView().setCenter(
									ol.proj.transform([ 116.409, 39.923 ],
											'EPSG:4326', 'EPSG:3857'));
							var view = map.getView();
							view.setZoom(15);
						}

					})	
					
					

	// 公园绿地500米辐射范围
	$("#BJ_Graden_500mbuffer").click(
			function() {
				deleteallLayer();// 清空图层

				addBJ_Graden_500mbuffer_layer();

				map.getView().setCenter(
						ol.proj.transform([ 116.409, 39.923 ], 'EPSG:4326',
								'EPSG:3857'));
				var view = map.getView();
				view.setZoom(15);
			})

    // 公园绿地500米辐射范围
    $("#BJ_RJ").click(
        function() {
            deleteallLayer();// 清空图层

            add_wms_BJ_RJ_layer();

            map.getView().setCenter(
                ol.proj.transform([ 116.409, 39.923 ], 'EPSG:4326',
                    'EPSG:3857'));
            var view = map.getView();
            view.setZoom(15);
        })

	/** 监测专题* */
	$("#BJ_travel").click(
			function() {
				deleteallLayer();// 清空图层

				add_BJ_travel_layer(60);

				map.getView().setCenter(
						ol.proj.transform([ 116.409, 39.923 ], 'EPSG:4326',
								'EPSG:3857'));
				var view = map.getView();
				view.setZoom(15);
			})

	$("#BJ_JC_Air").click(
			function() {
				deleteallLayer();// 清空图层

				add_BJ_JC_Air_layer();

				document.getElementById("monitor").style.display = "inline";
				init_monitor_table();
				map.getView().setCenter(
						ol.proj.transform([ 116.409, 39.923 ], 'EPSG:4326',
								'EPSG:3857'));
				var view = map.getView();
				view.setZoom(15);
			})
	/** 应急管理* */
	$("#emergency_plan")
			.click(
					function() {

						layui
								.use(
										'layer',
										function() { // 独立版的layer无需执行这一句
											var $ = layui.jquery, layer = layui.layer; // 独立版的layer无需执行这一句

											layer
													.open({
														type : 1,
														area : "400px",
														title : '应急预案',
														// ,offset: type
														// //具体配置参考：http://www.layui.com/doc/modules/layer.html#offset
														// ,id: 'layerDemo'+type
														// //防止重复弹出
														anim : 1,
														offset : 'auto',
														content : $("#emergency_plan_box"),
														btn : [ '搜索' ],

														btnAlign : 'c' // 按钮居中
														,
														shade : 0,
														yes : function() {

															// alert($("#select_species").children('option:selected').val());
															// var pdfname =
															// $("#select_species").children('option:selected').val();

															var pdfname = $(
																	"input[type='radio']:checked")
																	.val();

                                                            self.location = '/js/topic/emergency_management/emergency_plan/'
																	+ pdfname
																	+ '.pdf';

														}
													});

										});

					})

	// /**************报警预警
	$("#alarm_warning").click(function() {

		deleteallLayer();
		list_vector_bj_yj_jkd_pointAll();

	})
	// /**************报警预警------缓冲区分析

	$("#alarm_warn_buf_qbtn").click(function() {

		alert('1221');

	})

	// $("#click_property").click(function(){
	//		
	// alert('1221');
	// })

	$("#click_property").delegate("#alarm_warn_buf_qbtn", "click", function() {
		var queryid = $(this).attr("query-id");
		list_vector_bj_yj_jkd_Buffer(queryid);

		delete_layer(vector_bj_yj_jkd_layer_buffer_circle)
		/** **下面画出缓冲区圆圈范围** */
		var circle = new ol.Feature({
			geometry : new ol.geom.Circle(pixel_coordinates, 1000)

		});

		circle.setStyle(new ol.style.Style({

			fill : new ol.style.Fill({
				color : 'rgba(255,246,143,0.5)'
			}),
			stroke : new ol.style.Stroke({
				color : '#FFB90F'
			})

		}));
		var source_circle = new ol.source.Vector({
			features : [ circle ]
		});
		vector_bj_yj_jkd_layer_buffer_circle = new ol.layer.Vector({
			source : source_circle,
			zIndex : 2
		});
		map.addLayer(vector_bj_yj_jkd_layer_buffer_circle);
	});

	$("#emergency_supplies").click(function() {

		deleteallLayer();
		add_bj_yj_wz_layer();

	})
	// 清除图层
	$("#layer_clear").click(function() {
		deleteallLayer();// 清空图层

	})

})
