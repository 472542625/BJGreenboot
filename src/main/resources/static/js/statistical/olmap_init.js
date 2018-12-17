
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
			center : ol.proj.fromLonLat([  116.409, 39.923 ]),
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


			/** ***其他面专题图层**** */

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

		} else {

			document.getElementById("other_click_property").style.display = "none";

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



function delete_layer(vector_layer) {

	map.removeLayer(vector_layer);
}

var vector_search_layer;

function positioning_map(gid) {

    var coordinates = [];
    var featurearray = [];

    // 矢量图层 获取gejson数据
    $.ajax({
        // url: "data/" + dataurl,
        url :  '/selectStatisticalAnalysis_positioning_bygid',
        data:"gid="+gid,
        type : "GET",
        success : function(result) {


            var features = result;

                var geom = result.geom.substring(6,
                    result.geom.length - 1);
                coordinates = geom.split(" ");
                coordinates[0] = coordinates[0] * 1;
                coordinates[1] = coordinates[1] * 1;

                console.log(coordinates);
                var point = new ol.Feature({

                    // geometry: new
                    // ol.geom.Point(ol.proj.fromLonLat(features[i].geometry.coordinates)),
                    geometry : new ol.geom.Point(ol.proj
                        .fromLonLat(coordinates)),
                    绿地名称 : features.greenname,
                    绿地性质 : features.greentype,
                    图斑面积 : features.sumTub+"m<sup>2</sup>",
                    绿化面积 : features.sumLvdi+"m<sup>2</sup>",
                    绿化覆盖面积 : features.sumlhf+"m<sup>2</sup>",
                    屋顶绿化面积 : features.sumRofe+"m<sup>2</sup>",
                    其他面积 : features.sumQita+"m<sup>2</sup>",
                    所属街道 : features.street,
                    居委会 : features.village,
                    绿地归属 : features.greenowner,
                    建成时间 : features.buildyear,
                    产权单位 : features.property,
                    管养单位 : features.manager,
                    管养性质 : features.managPro,

                });
                // console.log(ol.proj.fromLonLat(features[i].geometry.coordinates));

                point.setStyle(new ol.style.Style({
                    image : new ol.style.Icon({
                        // color: '#4271AE',
                        src : '/images/topic/resource_topic/park.png',
                        scale : 0.5
                    }),

                    text : new ol.style.Text({
                        text : "  " + features.greenname + "  ",
                        fill : new ol.style.Fill({
                            color : 'white'
                        }),
                        backgroundFill : new ol.style.Fill({
                            color : 'rgb(0,0,0)'
                        }),
                        offsetY : 45

                    }),

                    fill : new ol.style.Fill({
                        color : '#ff0000'
                    }),
                    stroke : new ol.style.Stroke({
                        color : '#ff0000'
                    })

                }));
                featurearray.push(point);

            var source = new ol.source.Vector({
                features : featurearray
            });
            vector_search_layer = new ol.layer.Vector({
                source : source,
                zIndex : 1002
            });

            map.getView().setCenter(
                ol.proj.transform([ coordinates[0], coordinates[1] ], 'EPSG:4326',
                    'EPSG:3857'));

            var view = map.getView();
            view.setZoom(15);
            map.addLayer(vector_search_layer);
        },
        error : function() {
            alert('error');
        }
    })
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



			
 
     





})
