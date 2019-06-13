/**
 * Created by Administrator on 2018/8/11/011.
 */

function alerterror(info) {
    layui.use('layer', function() { // 独立版的layer无需执行这一句
        var $ = layui.jquery, layer = layui.layer; // 独立版的layer无需执行这一句

        layer.msg(info, {
            icon : 2
        });
    })
}

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
					width : 10
				})
			}),
			zIndex:9999
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

			if (keys[1] == "BJ_green84") {



                //
                // feature.setStyle(new ol.style.Style({
                //     image : new ol.style.Icon({
                //         // color: '#4271AE',
                //         src : '/images/topic/resource_topic/park.png',
                //         scale : 0.5
                //     }),
                //     fill : new ol.style.Fill({
                //         color : '#ff0000'
                //     }),
                //     stroke : new ol.style.Stroke({
                //         color : '#ff0000'
                //     })
                //
                // }));

				document.getElementById("greerate_r_box").style.display = "inline";// 如果是绿视图就显示视屏
				// ****popup
				// pixel_coordinates = properties['geometry'].getCoordinates();
                //
				// popup(pixel_coordinates[0]);
				for (var i = 3; i < keys.length; i++) {
					// info.innerHTML += keys[i] + ' ： ';
					// nfo.innerHTML += properties[keys[i]] + '<br>';
					var key = $("<td></td>").append(keys[i]);
					var property = $("<td></td>").append(properties[keys[i]]);
					$("<tr></tr>").append(key).append(property).appendTo(
							"#other_feeature_properties_talbe_tbody");

				}
			    document.getElementById("BJ_green84_video").src="/data/topic/BJ_green84P/"+ properties['path'];
                document.getElementById("BJ_green84_video").play();

                document.getElementById("other_click_property").style.display = "inline";




			}
            /** ***判断是监测专题的视频监测图层**** */
            else if (keys[1] == "bj_dt_video") {
                document.getElementById("greerate_r_box").style.display = "inline";// 视频弹出框，和绿视率公用

                document.getElementById("BJ_green84_video").src="/data/topic/monitor/video/"+ properties['path'];
                document.getElementById("BJ_green84_video").play();



            }
			/** ***判断是气象监测专题图层**** */
			else if (keys[3] == "PM2_5") {
				// document.getElementById("click_property").style.display =
				// "none";
				// ****popup
				pixel_coordinates = properties['geometry'].getCoordinates();
				popup(pixel_coordinates);




                // properties['NAME']


               aliyun(properties['NAME']);




				// $("#temper").text(properties['temper']);
                //
				// $("#PM2_5").text(properties['PM2_5']);
				// $("#PM10").text(properties['PM10']);
				// $("#O3").text(properties['O3']);
				// $("#NO2").text(properties['NO2']);
				// $("#SO2").text(properties['SO2']);
				// $("#CO").text(properties['CO']);
				document.getElementById("click_property").style.display = "inline";

			}
            /** ***判断是林业指标专题的活立木蓄积量图层**** */
            else if (keys[1] == "greenId") {
                // document.getElementById("click_property").style.display =
                // "none";
                // ****popup
                pixel_coordinates = properties['geometry'].getCoordinates();

                // var Id = $("<td></td>").append(properties['Id']);

                select_bj_tb_volp_plant(properties['greenId']);
               document.getElementById("bj_tb_volp_plant_click_property").style.display = "inline";

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
			// else if (keys[1] == "古树编号") {
            //
			// }
            /** ***聚合图层**** */
            else if (keys[1] == "features") {

                for (var i = 2; i < keys.length; i++) {
                    // info.innerHTML += keys[i] + ' ： ';
                    // nfo.innerHTML += properties[keys[i]] + '<br>';
                    var key = $("<td></td>").append(keys[i]);
                    var property = $("<td></td>").append(properties[keys[i]]);
                    $("<tr></tr>").append(key).append(property).appendTo(
                        "#other_feeature_properties_talbe_tbody");

                    // console.log(pixel_coordinates.length);


                }
                document.getElementById("other_click_property").style.display = "inline";

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
            document.getElementById("bj_tb_volp_plant_click_property").style.display = "none";//活立木蓄积量
			document.getElementById("click_property").style.display = "none";//点击得到popup弹框
			document.getElementById("other_click_property").style.display = "none";//点击得到左上角固定弹窗
			document.getElementById("alarm_warning_box").style.display = "none";//应急
            // document.getElementById("BJ_green84_video").play();
            document.getElementById("BJ_green84_video").pause();//停止播放视频，目前是绿视率和监测专题的视频监测公用

			document.getElementById("greerate_r_box").style.display = "none";// 如果没点击绿视图的视屏影藏
		}



        //feature没有赋值得话是返回false
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
        delete_BJ_green84_layer();// 绿视率
		document.getElementById("greerate_r_box").style.display = "none";
		document.getElementById("green_rate_legend").style.display = "none";

        delete_wms_BJ_RJ_layer();//人均公园绿地

        // BJ_RJ_legend
        document.getElementById("BJ_RJ_legend").style.display = "none";
        document.getElementById("BJ_RJ_layer_box").style.display = "none";
		delete_BJ_JD_lhfg_layer();// 街道绿化覆盖率
		delete_BJ_TB_lhfg_layer();// 图斑绿化覆盖率
		delete_BJ_lhfg_layer();// 单位绿化覆盖率
		document.getElementById("BJ_lhfg_legend").style.display = "none";// 绿化覆盖率
        document.getElementById("BJ_lhfg_legend").style.display = "none";// 绿地率
        document.getElementById("BJ_lhfg_jd_legend").style.display = "none";// 绿地率
        document.getElementById("BJ_lhfg_tb_legend").style.display = "none";// 绿地率
		document.getElementById("greentitleSelect_lhfg").style.display = "none";
        document.getElementById("BJ_lhfg_box").style.display = "none";
		delete_BJ_JD_ldl_layer();// 街道绿地率
		delete_BJ_TB_ldl_layer();// 图斑绿地率
		delete_BJ_ldl_layer();// 单位绿地率
		document.getElementById("BJ_ldl_legend").style.display = "none";// 绿地率
        document.getElementById("BJ_ldl_jd_legend").style.display = "none";// 绿地率
        document.getElementById("BJ_ldl_tb_legend").style.display = "none";// 绿地率
		document.getElementById("greentitleSelect_ldl").style.display = "none";
        document.getElementById("BJ_ldl_box").style.display = "none";
		deleteBJ_Graden_500mbuffer_layer();// 公园绿地500米辐射范围

		delete_layer(green_count_layer);// 绿量


        // ***************************************林业专题
        deletebj_tb_vol_layer();//活立木蓄积量
        document.getElementById("bj_tb_volp_plant_click_property").style.display = "none";
		// ***************************************监测专题
		deleteBJ_travel_layer();// 游人监测
        clearInterval(Interval_BJ_travel);// 游人监测清除
		deleteBJ_JC_Air_layer();// 气象监测
        delete_bj_dt_video_layer();//视频监测
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

        // /***************************************工具专题
        map.removeLayer(vector);
        $(".tooltip-static").remove();

    }

    var flag ="greenResource";



   	/** 搜索* */


   	/**搜索前先选择是搜索哪一个**/
    $("#greenResource_btn").click(
        function() {
            flag ="greenResource";

        })
    $("#oldTree_btn").click(
        function() {
            flag ="oldTree";

        })
    $("#roofGreen_btn").click(
        function() {
            flag ="roofGreen";

        })
    $("#waterResource_btn").click(
        function() {
            flag ="waterResource";

        })




    /**搜索**/
	$("#searchOk").click(
			function() {
			
		  if($("#likeInputVal").val()!=""){
			
 
				deleteallLayer();// 清空图层



              if(flag=="greenResource"){
                  add_search_layer_greenResource();
              }
              if(flag=="oldTree"){

                  add_search_layer_oldTree();
              }
              if(flag=="roofGreen"){
                  add_search_layer_roofGreen();
              }
              if(flag=="waterResource"){
                  add_search_layer_waterResource();
              }


          }
			})
			
 
     
     $("#likeInputVal").bind("input propertychange change",function(event){
        
        	
		  if($("#likeInputVal").val()!=""){


		  	  if(flag=="greenResource"){
                  list_search_result_greenResource();
			  }
              if(flag=="oldTree"){
                  list_search_result_oldTree();
              }
              if(flag=="roofGreen"){
                  list_search_result_roofGreen();
              }
              if(flag=="waterResource"){
                  list_search_result_waterResource();
              }





			 
				 
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
	
       $("#likeInputVal").val($(this).text());

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
    $("#LYR_LD_Garden_fanghu").click(
        function() {
            deleteallLayer();// 清空图层

            addLYR_LD_Garden_layer("LYR_LD_Fense", "防护绿地");

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

    // 山
    $("#LYR_Shan").click(
        function() {
            deleteallLayer();// 清空图层

             alerterror("东城区无海拔超过50米的山");
        })
    // 田
    $("#LYR_Tian").click(
        function() {
            deleteallLayer();// 清空图层

            alerterror("东城区暂无农田");
        })
    /** 林业指标专题* */
    // addbj_tb_vol_layer deletebj_tb_vol_layer
    $("#bj_tb_vol").click(
        function() {
            deleteallLayer();// 清空图层

            addbj_tb_vol_layer();
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

                        add_BJ_green84_layer();
						document.getElementById("green_rate_legend").style.display = "inline";
                        $("#lvshilv_1").prop("checked", true);
                        $("#lvshilv_2").prop("checked", true);

                        $("#lvshilv_3").prop("checked", true);
                        $("#lvshilv_4").prop("checked", true);
                        $("#lvshilv_5").prop("checked", true);
						map.getView().setCenter(
								ol.proj.transform([ 116.409, 39.923 ],
										'EPSG:4326', 'EPSG:3857'));
						var view = map.getView();
						view.setZoom(15);
					})
    $("#lvshilv_1")
        .click(
            function() {




                if ($("#lvshilv_1").is(':checked')) {

                    add_vector_BJ_green84_layer_select_1("很好");
                    map.addLayer(image_BJ_green84_layer_1);
                }
                else{
                    delete_layer(vector_BJ_green84_layer_1);
                    delete_layer(image_BJ_green84_layer_1);
				}





            })
    $("#lvshilv_2")
        .click(
            function() {




                if ($("#lvshilv_2").is(':checked')) {

                    add_vector_BJ_green84_layer_select_2("较好");
                    map.addLayer(image_BJ_green84_layer_2);
                }
                else{
                    delete_layer(vector_BJ_green84_layer_2);
                    delete_layer(image_BJ_green84_layer_2);
                }




            })
    $("#lvshilv_3")
        .click(
            function() {




                if ($("#lvshilv_3").is(':checked')) {
                    map.addLayer(image_BJ_green84_layer_3);
                    add_vector_BJ_green84_layer_select_3("一般");
                }
                else{
                    delete_layer(vector_BJ_green84_layer_3);
                    delete_layer(image_BJ_green84_layer_3);
                }





            })
    $("#lvshilv_4")
        .click(
            function() {




                if ($("#lvshilv_4").is(':checked')) {
                    map.addLayer(image_BJ_green84_layer_4);
                    add_vector_BJ_green84_layer_select_4("较差");
                }
                else{
                    delete_layer(vector_BJ_green84_layer_4);
                    delete_layer(image_BJ_green84_layer_4);
                }





            })

	// 绿化覆盖率
	$("#BJ_lhfg")
			.click(
					function() {
						deleteallLayer();// 清空图层

						add_BJ_lhfg_layer();
						document.getElementById("BJ_lhfg_legend").style.display = "inline";
                        document.getElementById("BJ_lhfg_box").style.display = "inline";
						document.getElementById("greentitleSelect_lhfg").style.display = "inline";

                        $("#vector_BJ_lhfg_layer").prop("checked", true);
                        $("#vector_BJ_lhfg_TB_layer").prop("checked", false);

                        $("#vector_BJ_lhfg_JD_layer").prop("checked", false);

                        $("#lhfg_1").prop("checked", true);
                        $("#lhfg_2").prop("checked", true);

                        $("#lhfg_3").prop("checked", true);
                        $("#lhfg_4").prop("checked", true);
                        $("#lhfg_5").prop("checked", true);


                        $("#lhfg_tb_1").prop("checked", true);
                        $("#lhfg_tb_2").prop("checked", true);

                        $("#lhfg_tb_3").prop("checked", true);
                        $("#lhfg_tb_4").prop("checked", true);
                        $("#lhfg_tb_5").prop("checked", true);
                        $("#lhfg_jd_1").prop("checked", true);
                        $("#lhfg_jd_2").prop("checked", true);

                        $("#lhfg_jd_3").prop("checked", true);
                        $("#lhfg_jd_4").prop("checked", true);
                        $("#lhfg_jd_5").prop("checked", true);
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
                            $("#lhfg_1").prop("checked", true);
                            $("#lhfg_2").prop("checked", true);

                            $("#lhfg_3").prop("checked", true);
                            $("#lhfg_4").prop("checked", true);
                            $("#lhfg_5").prop("checked", true);

							map.getView().setCenter(
									ol.proj.transform([ 116.409, 39.923 ],
											'EPSG:4326', 'EPSG:3857'));
							var view = map.getView();
							view.setZoom(15);
						}
                        else{
                            deleteallLayer();// 清空图层
                        }

					})


    $("#lhfg_1")
        .click(
            function() {




                if ($("#lhfg_1").is(':checked')) {

                    add_vector_BJ_lhfg_layer_1(0,0.1);
                    // add_vector_BJ_lhfg_layer_2(0.1,0.3);
                    // add_vector_BJ_lhfg_layer_3(0.3,0.6);
                    // add_vector_BJ_lhfg_layer_4(0.6,0.9);
                    // add_vector_BJ_lhfg_layer_5(0.9,4);
                    map.addLayer(image_BJ_lhfg_layer_1);

                }
                else{
                    delete_layer(image_BJ_lhfg_layer_1);
                    delete_layer(vector_BJ_lhfg_layer_clusters_1);

                }





            })
    $("#lhfg_2")
        .click(
            function() {




                if ($("#lhfg_2").is(':checked')) {

                    add_vector_BJ_lhfg_layer_2(0.1,0.3);


                }
                else{
                    delete_layer(image_BJ_lhfg_layer_2);
                    delete_layer(vector_BJ_lhfg_layer_clusters_2);

                }





            })
    $("#lhfg_3")
        .click(
            function() {




                if ($("#lhfg_3").is(':checked')) {


                    add_vector_BJ_lhfg_layer_3(0.3,0.6);

                    map.addLayer(image_BJ_lhfg_layer_3);

                }
                else{
                    delete_layer(image_BJ_lhfg_layer_3);
                    delete_layer(vector_BJ_lhfg_layer_clusters_3);

                }





            })
    $("#lhfg_4")
        .click(
            function() {




                if ($("#lhfg_4").is(':checked')) {


                    add_vector_BJ_lhfg_layer_4(0.6,0.9);

                    map.addLayer(image_BJ_lhfg_layer_4);

                }
                else{
                    delete_layer(image_BJ_lhfg_layer_4);
                    delete_layer(vector_BJ_lhfg_layer_clusters_4);

                }





            })
    $("#lhfg_5")
        .click(
            function() {




                if ($("#lhfg_5").is(':checked')) {


                    add_vector_BJ_lhfg_layer_5(0.9,4);
                    map.addLayer(image_BJ_lhfg_layer_5);

                }
                else{
                    delete_layer(image_BJ_lhfg_layer_5);
                    delete_layer(vector_BJ_lhfg_layer_clusters_5);

                }





            })
	$("#vector_BJ_lhfg_TB_layer")
			.click(
					function() {
						checkBox($(this));
						if ($("#vector_BJ_lhfg_TB_layer").is(':checked')) {
							deleteallLayer();// 清空图层

							add_BJ_TB_lhfg_layer();
							document.getElementById("BJ_lhfg_tb_legend").style.display = "inline";
							document.getElementById("greentitleSelect_lhfg").style.display = "inline";
                            $("#lhfg_tb_1").prop("checked", true);
                            $("#lhfg_tb_2").prop("checked", true);

                            $("#lhfg_tb_3").prop("checked", true);
                            $("#lhfg_tb_4").prop("checked", true);
                            $("#lhfg_tb_5").prop("checked", true);
							map.getView().setCenter(
									ol.proj.transform([ 116.409, 39.923 ],
											'EPSG:4326', 'EPSG:3857'));
							var view = map.getView();
							view.setZoom(15);
						}
                        else{
                            deleteallLayer();// 清空图层
                        }

					})
    $("#lhfg_tb_1")
        .click(
            function() {




                if ($("#lhfg_tb_1").is(':checked')) {


                    add_vector_BJ_TB_lhfg_layer_1(0,0.1);
                    // add_vector_BJ_lhfg_layer_2(0.1,0.3);
                    // add_vector_BJ_lhfg_layer_3(0.3,0.6);
                    // add_vector_BJ_lhfg_layer_4(0.6,0.9);
                    // add_vector_BJ_lhfg_layer_5(0.9,4);
                    map.addLayer(image_BJ_TB_lhfg_layer_1);

                }
                else{
                    delete_layer(image_BJ_TB_lhfg_layer_1);
                    delete_layer(vector_BJ_TB_lhfg_layer_clusters_1);

                }





            })
    $("#lhfg_tb_2")
        .click(
            function() {




                if ($("#lhfg_tb_2").is(':checked')) {


                    add_vector_BJ_TB_lhfg_layer_2(0.1,0.3);
                    // add_vector_BJ_lhfg_layer_2(0.1,0.3);
                    // add_vector_BJ_lhfg_layer_3(0.3,0.6);
                    // add_vector_BJ_lhfg_layer_4(0.6,0.9);
                    // add_vector_BJ_lhfg_layer_5(0.9,4);
                    map.addLayer(image_BJ_TB_lhfg_layer_2);

                }
                else{
                    delete_layer(image_BJ_TB_lhfg_layer_2);
                    delete_layer(vector_BJ_TB_lhfg_layer_clusters_2);

                }





            })
    $("#lhfg_tb_3")
        .click(
            function() {




                if ($("#lhfg_tb_3").is(':checked')) {


                    add_vector_BJ_TB_lhfg_layer_3(0.3,0.6);
                    // add_vector_BJ_lhfg_layer_2(0.1,0.3);
                    // add_vector_BJ_lhfg_layer_3(0.3,0.6);
                    // add_vector_BJ_lhfg_layer_4(0.6,0.9);
                    // add_vector_BJ_lhfg_layer_5(0.9,4);
                    map.addLayer(image_BJ_TB_lhfg_layer_3);

                }
                else{
                    delete_layer(image_BJ_TB_lhfg_layer_3);
                    delete_layer(vector_BJ_TB_lhfg_layer_clusters_3);

                }





            })
    $("#lhfg_tb_4")
        .click(
            function() {




                if ($("#lhfg_tb_4").is(':checked')) {


                    add_vector_BJ_TB_lhfg_layer_4(0.6,0.9);
                    // add_vector_BJ_lhfg_layer_2(0.1,0.3);
                    // add_vector_BJ_lhfg_layer_3(0.3,0.6);
                    // add_vector_BJ_lhfg_layer_4(0.6,0.9);
                    // add_vector_BJ_lhfg_layer_5(0.9,4);
                    map.addLayer(image_BJ_TB_lhfg_layer_4);

                }
                else{
                    delete_layer(image_BJ_TB_lhfg_layer_4);
                    delete_layer(vector_BJ_TB_lhfg_layer_clusters_4);

                }





            })
    $("#lhfg_tb_5")
        .click(
            function() {




                if ($("#lhfg_tb_5").is(':checked')) {


                    add_vector_BJ_TB_lhfg_layer_5(0.9,4);
                    // add_vector_BJ_lhfg_layer_2(0.1,0.3);
                    // add_vector_BJ_lhfg_layer_3(0.3,0.6);
                    // add_vector_BJ_lhfg_layer_4(0.6,0.9);
                    // add_vector_BJ_lhfg_layer_5(0.9,4);
                    map.addLayer(image_BJ_TB_lhfg_layer_5);

                }
                else{
                    delete_layer(image_BJ_TB_lhfg_layer_5);
                    delete_layer(vector_BJ_TB_lhfg_layer_clusters_5);

                }





            })
	$("#vector_BJ_lhfg_JD_layer")
			.click(
					function() {
						checkBox($(this));
						if ($("#vector_BJ_lhfg_JD_layer").is(':checked')) {
							deleteallLayer();// 清空图层

							add_BJ_JD_lhfg_layer();
							document.getElementById("BJ_lhfg_jd_legend").style.display = "inline";
							document.getElementById("greentitleSelect_lhfg").style.display = "inline";
                            $("#lhfg_jd_1").prop("checked", true);
                            $("#lhfg_jd_2").prop("checked", true);

                            $("#lhfg_jd_3").prop("checked", true);
                            $("#lhfg_jd_4").prop("checked", true);
                            $("#lhfg_jd_5").prop("checked", true);
							map.getView().setCenter(
									ol.proj.transform([ 116.409, 39.923 ],
											'EPSG:4326', 'EPSG:3857'));
							var view = map.getView();
							view.setZoom(15);
						}
                        else{
                            deleteallLayer();// 清空图层
                        }

					})

    $("#lhfg_jd_1")
        .click(
            function() {




                if ($("#lhfg_jd_1").is(':checked')) {


                    add_vector_BJ_JD_lhfg_layer_1(0,0.1);
                    // add_vector_BJ_lhfg_layer_2(0.1,0.3);
                    // add_vector_BJ_lhfg_layer_3(0.3,0.6);
                    // add_vector_BJ_lhfg_layer_4(0.6,0.9);
                    // add_vector_BJ_lhfg_layer_5(0.9,4);
                    map.addLayer(image_BJ_JD_lhfg_layer_1);

                }
                else{
                    delete_layer(image_BJ_JD_lhfg_layer_1);
                    delete_layer(vector_BJ_JD_lhfg_layer_clusters_1);

                }





            })
    $("#lhfg_jd_2")
        .click(
            function() {




                if ($("#lhfg_jd_2").is(':checked')) {


                    add_vector_BJ_JD_lhfg_layer_2(0.1,0.3);
                    // add_vector_BJ_lhfg_layer_2(0.1,0.3);
                    // add_vector_BJ_lhfg_layer_3(0.3,0.6);
                    // add_vector_BJ_lhfg_layer_4(0.6,0.9);
                    // add_vector_BJ_lhfg_layer_5(0.9,4);
                    map.addLayer(image_BJ_JD_lhfg_layer_2);

                }
                else{
                    delete_layer(image_BJ_JD_lhfg_layer_2);
                    delete_layer(vector_BJ_JD_lhfg_layer_clusters_2);

                }





            })
    $("#lhfg_jd_3")
        .click(
            function() {




                if ($("#lhfg_jd_3").is(':checked')) {


                    add_vector_BJ_JD_lhfg_layer_3(0.3,0.6);
                    // add_vector_BJ_lhfg_layer_2(0.1,0.3);
                    // add_vector_BJ_lhfg_layer_3(0.3,0.6);
                    // add_vector_BJ_lhfg_layer_4(0.6,0.9);
                    // add_vector_BJ_lhfg_layer_5(0.9,4);
                    map.addLayer(image_BJ_JD_lhfg_layer_3);

                }
                else{
                    delete_layer(image_BJ_JD_lhfg_layer_3);
                    delete_layer(vector_BJ_JD_lhfg_layer_clusters_3);

                }





            })
    $("#lhfg_jd_4")
        .click(
            function() {




                if ($("#lhfg_jd_4").is(':checked')) {


                    add_vector_BJ_JD_lhfg_layer_4(0.6,0.9);
                    // add_vector_BJ_lhfg_layer_2(0.1,0.3);
                    // add_vector_BJ_lhfg_layer_3(0.3,0.6);
                    // add_vector_BJ_lhfg_layer_4(0.6,0.9);
                    // add_vector_BJ_lhfg_layer_5(0.9,4);
                    map.addLayer(image_BJ_JD_lhfg_layer_4);

                }
                else{
                    delete_layer(image_BJ_JD_lhfg_layer_4);
                    delete_layer(vector_BJ_JD_lhfg_layer_clusters_4);

                }





            })
    $("#lhfg_jd_5")
        .click(
            function() {




                if ($("#lhfg_jd_5").is(':checked')) {


                    add_vector_BJ_JD_lhfg_layer_5(0.9,4);
                    // add_vector_BJ_lhfg_layer_2(0.1,0.3);
                    // add_vector_BJ_lhfg_layer_3(0.3,0.6);
                    // add_vector_BJ_lhfg_layer_4(0.6,0.9);
                    // add_vector_BJ_lhfg_layer_5(0.9,4);
                    map.addLayer(image_BJ_JD_lhfg_layer_5);

                }
                else{
                    delete_layer(image_BJ_JD_lhfg_layer_5);
                    delete_layer(vector_BJ_JD_lhfg_layer_clusters_5);

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

                        document.getElementById("BJ_ldl_box").style.display = "inline";


                        $("#ldl_1").prop("checked", true);
                        $("#ldl_2").prop("checked", true);

                        $("#ldl_3").prop("checked", true);
                        $("#ldl_4").prop("checked", true);
                        $("#ldl_5").prop("checked", true);



                        $("#ldl_tb_1").prop("checked", true);
                        $("#ldl_tb_2").prop("checked", true);

                        $("#ldl_tb_3").prop("checked", true);
                        $("#ldl_tb_4").prop("checked", true);
                        $("#ldl_tb_5").prop("checked", true);
                        $("#ldl_jd_1").prop("checked", true);
                        $("#ldl_jd_2").prop("checked", true);

                        $("#ldl_jd_3").prop("checked", true);
                        $("#ldl_jd_4").prop("checked", true);
                        $("#ldl_jd_5").prop("checked", true);

                        $("#vector_BJ_ldl_layer").prop("checked", true);
                        $("#vector_BJ_ldl_TB_layer").prop("checked", false);

                        $("#vector_BJ_ldl_JD_layer").prop("checked", false);
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

							add_BJ_ldl_layer();
							document.getElementById("BJ_ldl_legend").style.display = "inline";
							document.getElementById("greentitleSelect_ldl").style.display = "inline";
                            $("#ldl_1").prop("checked", true);
                            $("#ldl_2").prop("checked", true);

                            $("#ldl_3").prop("checked", true);
                            $("#ldl_4").prop("checked", true);
                            $("#ldl_5").prop("checked", true);
                            $("#ldl_tb_1").prop("checked", true);
                            $("#ldl_tb_2").prop("checked", true);

                            $("#ldl_tb_3").prop("checked", true);
                            $("#ldl_tb_4").prop("checked", true);
                            $("#ldl_tb_5").prop("checked", true);
                            $("#ldl_jd_1").prop("checked", true);
                            $("#ldl_jd_2").prop("checked", true);

                            $("#ldl_jd_3").prop("checked", true);
                            $("#ldl_jd_4").prop("checked", true);
                            $("#ldl_jd_5").prop("checked", true);

							map.getView().setCenter(
									ol.proj.transform([ 116.409, 39.923 ],
											'EPSG:4326', 'EPSG:3857'));
							var view = map.getView();
							view.setZoom(15);
						}
                        else{
                            deleteallLayer();// 清空图层
                        }

					})

    $("#ldl_1")
        .click(
            function() {




                if ($("#ldl_1").is(':checked')) {

                    add_vector_BJ_ldl_layer_1(0,0.07);
                    // add_vector_BJ_JD_ldl_layer_2(0.07,0.2);
                    // add_vector_BJ_JD_ldl_layer_3(0.2,0.4);
                    // add_vector_BJ_JD_ldl_layer_4(0.4,0.7);
                    // add_vector_BJ_JD_ldl_layer_5(0.7,1);
                    map.addLayer(image_BJ_ldl_layer_1);

                }
                else{
                    delete_layer(image_BJ_ldl_layer_1);
                    delete_layer(vector_BJ_ldl_layer_clusters_1);

                }





            })
    $("#ldl_2")
        .click(
            function() {




                if ($("#ldl_2").is(':checked')) {

                    add_vector_BJ_ldl_layer_2(0.07,0.2);
                    // add_vector_BJ_JD_ldl_layer_2(0.07,0.2);
                    // add_vector_BJ_JD_ldl_layer_3(0.2,0.4);
                    // add_vector_BJ_JD_ldl_layer_4(0.4,0.7);
                    // add_vector_BJ_JD_ldl_layer_5(0.7,1);
                    map.addLayer(image_BJ_ldl_layer_2);

                }
                else{
                    delete_layer(image_BJ_ldl_layer_2);
                    delete_layer(vector_BJ_ldl_layer_clusters_2);

                }





            })
    $("#ldl_3")
        .click(
            function() {




                if ($("#ldl_3").is(':checked')) {

                    add_vector_BJ_ldl_layer_3(0.2,0.4);
                    // add_vector_BJ_JD_ldl_layer_2(0.07,0.2);
                    // add_vector_BJ_JD_ldl_layer_3(0.2,0.4);
                    // add_vector_BJ_JD_ldl_layer_4(0.4,0.7);
                    // add_vector_BJ_JD_ldl_layer_5(0.7,1);
                    map.addLayer(image_BJ_ldl_layer_3);

                }
                else{
                    delete_layer(image_BJ_ldl_layer_3);
                    delete_layer(vector_BJ_ldl_layer_clusters_3);

                }





            })
    $("#ldl_4")
        .click(
            function() {




                if ($("#ldl_4").is(':checked')) {

                    add_vector_BJ_ldl_layer_4(0.4,0.7);
                    // add_vector_BJ_JD_ldl_layer_2(0.07,0.2);
                    // add_vector_BJ_JD_ldl_layer_3(0.2,0.4);
                    // add_vector_BJ_JD_ldl_layer_4(0.4,0.7);
                    // add_vector_BJ_JD_ldl_layer_5(0.7,1);
                    map.addLayer(image_BJ_ldl_layer_4);

                }
                else{
                    delete_layer(image_BJ_ldl_layer_4);
                    delete_layer(vector_BJ_ldl_layer_clusters_4);

                }





            })
    $("#ldl_5")
        .click(
            function() {




                if ($("#ldl_5").is(':checked')) {

                    add_vector_BJ_ldl_layer_5(0.7,1);
                    // add_vector_BJ_JD_ldl_layer_2(0.07,0.2);
                    // add_vector_BJ_JD_ldl_layer_3(0.2,0.4);
                    // add_vector_BJ_JD_ldl_layer_4(0.4,0.7);
                    // add_vector_BJ_JD_ldl_layer_5(0.7,1);
                    map.addLayer(image_BJ_ldl_layer_5);

                }
                else{
                    delete_layer(image_BJ_ldl_layer_5);
                    delete_layer(vector_BJ_ldl_layer_clusters_5);

                }





            })
	$("#vector_BJ_ldl_TB_layer")
			.click(
					function() {
						checkBox($(this));
						if ($("#vector_BJ_ldl_TB_layer").is(':checked')) {
							deleteallLayer();// 清空图层

							add_BJ_TB_ldl_layer();
							document.getElementById("BJ_ldl_tb_legend").style.display = "inline";
							document.getElementById("greentitleSelect_ldl").style.display = "inline";
                            $("#ldl_tb_1").prop("checked", true);
                            $("#ldl_tb_2").prop("checked", true);

                            $("#ldl_tb_3").prop("checked", true);
                            $("#ldl_tb_4").prop("checked", true);
                            $("#ldl_tb_5").prop("checked", true);

							map.getView().setCenter(
									ol.proj.transform([ 116.409, 39.923 ],
											'EPSG:4326', 'EPSG:3857'));
							var view = map.getView();
							view.setZoom(15);
						}
                        else{
                            deleteallLayer();// 清空图层
                        }

					})

    $("#ldl_tb_1")
        .click(
            function() {




                if ($("#ldl_tb_1").is(':checked')) {

                    add_vector_BJ_TB_ldl_layer_1(0,0.07);
                    // add_vector_BJ_JD_ldl_layer_2(0.07,0.2);
                    // add_vector_BJ_JD_ldl_layer_3(0.2,0.4);
                    // add_vector_BJ_JD_ldl_layer_4(0.4,0.7);
                    // add_vector_BJ_JD_ldl_layer_5(0.7,1);
                    map.addLayer(image_BJ_TB_ldl_layer_1);

                }
                else{
                    delete_layer(image_BJ_TB_ldl_layer_1);
                    delete_layer(vector_BJ_TB_ldl_layer_clusters_1);

                }





            })
    $("#ldl_tb_2")
        .click(
            function() {




                if ($("#ldl_tb_2").is(':checked')) {

                    add_vector_BJ_TB_ldl_layer_2(0.07,0.2);
                    // add_vector_BJ_JD_ldl_layer_2(0.07,0.2);
                    // add_vector_BJ_JD_ldl_layer_3(0.2,0.4);
                    // add_vector_BJ_JD_ldl_layer_4(0.4,0.7);
                    // add_vector_BJ_JD_ldl_layer_5(0.7,1);
                    map.addLayer(image_BJ_TB_ldl_layer_2);

                }
                else{
                    delete_layer(image_BJ_TB_ldl_layer_2);
                    delete_layer(vector_BJ_TB_ldl_layer_clusters_2);

                }





            })
    $("#ldl_tb_3")
        .click(
            function() {




                if ($("#ldl_tb_3").is(':checked')) {


                    // add_vector_BJ_JD_ldl_layer_2(0.07,0.2);
                    add_vector_BJ_TB_ldl_layer_3(0.2,0.4);
                    // add_vector_BJ_JD_ldl_layer_4(0.4,0.7);
                    // add_vector_BJ_JD_ldl_layer_5(0.7,1);
                    map.addLayer(image_BJ_TB_ldl_layer_3);

                }
                else{
                    delete_layer(image_BJ_TB_ldl_layer_3);
                    delete_layer(vector_BJ_TB_ldl_layer_clusters_3);

                }





            })
    $("#ldl_tb_4")
        .click(
            function() {




                if ($("#ldl_tb_4").is(':checked')) {

                    add_vector_BJ_TB_ldl_layer_4(0.4,0.7);
                    // add_vector_BJ_JD_ldl_layer_2(0.07,0.2);
                    // add_vector_BJ_JD_ldl_layer_3(0.2,0.4);
                    // add_vector_BJ_JD_ldl_layer_4(0.4,0.7);
                    // add_vector_BJ_JD_ldl_layer_5(0.7,1);
                    map.addLayer(image_BJ_TB_ldl_layer_4);

                }
                else{
                    delete_layer(image_BJ_TB_ldl_layer_4);
                    delete_layer(vector_BJ_TB_ldl_layer_clusters_4);

                }





            })
    $("#ldl_tb_5")
        .click(
            function() {




                if ($("#ldl_tb_5").is(':checked')) {

                    add_vector_BJ_TB_ldl_layer_5(0.7,1);
                    // add_vector_BJ_JD_ldl_layer_2(0.07,0.2);
                    // add_vector_BJ_JD_ldl_layer_3(0.2,0.4);
                    // add_vector_BJ_JD_ldl_layer_4(0.4,0.7);
                    // add_vector_BJ_JD_ldl_layer_5(0.7,1);
                    map.addLayer(image_BJ_TB_ldl_layer_5);

                }
                else{
                    delete_layer(image_BJ_TB_ldl_layer_5);
                    delete_layer(vector_BJ_TB_ldl_layer_clusters_5);

                }





            })
	$("#vector_BJ_ldl_JD_layer")
			.click(
					function() {
						checkBox($(this));
						if ($("#vector_BJ_ldl_JD_layer").is(':checked')) {
							deleteallLayer();// 清空图层

							add_BJ_JD_ldl_layer();
							document.getElementById("BJ_ldl_jd_legend").style.display = "inline";
							document.getElementById("greentitleSelect_ldl").style.display = "inline";



                            $("#ldl_jd_1").prop("checked", true);
                            $("#ldl_jd_2").prop("checked", true);

                            $("#ldl_jd_3").prop("checked", true);
                            $("#ldl_jd_4").prop("checked", true);
                            $("#ldl_jd_5").prop("checked", true);
							map.getView().setCenter(
									ol.proj.transform([ 116.409, 39.923 ],
											'EPSG:4326', 'EPSG:3857'));
							var view = map.getView();
							view.setZoom(15);
						}
                        else{
                            deleteallLayer();// 清空图层
                        }

					})



    $("#ldl_jd_1")
        .click(
            function() {




                if ($("#ldl_jd_1").is(':checked')) {

                    add_vector_BJ_JD_ldl_layer_1(0,0.07);
                    // add_vector_BJ_JD_ldl_layer_2(0.07,0.2);
                    // add_vector_BJ_JD_ldl_layer_3(0.2,0.4);
                    // add_vector_BJ_JD_ldl_layer_4(0.4,0.7);
                    // add_vector_BJ_JD_ldl_layer_5(0.7,1);
                    map.addLayer(image_BJ_JD_ldl_layer_1);

                }
                else{
                    delete_layer(image_BJ_JD_ldl_layer_1);
                    delete_layer(vector_BJ_JD_ldl_layer_clusters_1);

                }





            })
    $("#ldl_jd_2")
        .click(
            function() {




                if ($("#ldl_jd_2").is(':checked')) {

                    add_vector_BJ_JD_ldl_layer_2(0.07,0.2);
                    // add_vector_BJ_JD_ldl_layer_2(0.07,0.2);
                    // add_vector_BJ_JD_ldl_layer_3(0.2,0.4);
                    // add_vector_BJ_JD_ldl_layer_4(0.4,0.7);
                    // add_vector_BJ_JD_ldl_layer_5(0.7,1);
                    map.addLayer(image_BJ_JD_ldl_layer_2);

                }
                else{
                    delete_layer(image_BJ_JD_ldl_layer_2);
                    delete_layer(vector_BJ_JD_ldl_layer_clusters_2);

                }





            })
    $("#ldl_jd_3")
        .click(
            function() {




                if ($("#ldl_jd_3").is(':checked')) {


                    // add_vector_BJ_JD_ldl_layer_2(0.07,0.2);
                    add_vector_BJ_JD_ldl_layer_3(0.2,0.4);
                    // add_vector_BJ_JD_ldl_layer_4(0.4,0.7);
                    // add_vector_BJ_JD_ldl_layer_5(0.7,1);
                    map.addLayer(image_BJ_JD_ldl_layer_3);

                }
                else{
                    delete_layer(image_BJ_JD_ldl_layer_3);
                    delete_layer(vector_BJ_JD_ldl_layer_clusters_3);

                }





            })
    $("#ldl_jd_4")
        .click(
            function() {




                if ($("#ldl_jd_4").is(':checked')) {

                    add_vector_BJ_JD_ldl_layer_4(0.4,0.7);
                    // add_vector_BJ_JD_ldl_layer_2(0.07,0.2);
                    // add_vector_BJ_JD_ldl_layer_3(0.2,0.4);
                    // add_vector_BJ_JD_ldl_layer_4(0.4,0.7);
                    // add_vector_BJ_JD_ldl_layer_5(0.7,1);
                    map.addLayer(image_BJ_JD_ldl_layer_4);

                }
                else{
                    delete_layer(image_BJ_JD_ldl_layer_4);
                    delete_layer(vector_BJ_JD_ldl_layer_clusters_4);

                }





            })
    $("#ldl_jd_5")
        .click(
            function() {




                if ($("#ldl_jd_5").is(':checked')) {

                    add_vector_BJ_JD_ldl_layer_5(0.7,1);
                    // add_vector_BJ_JD_ldl_layer_2(0.07,0.2);
                    // add_vector_BJ_JD_ldl_layer_3(0.2,0.4);
                    // add_vector_BJ_JD_ldl_layer_4(0.4,0.7);
                    // add_vector_BJ_JD_ldl_layer_5(0.7,1);
                    map.addLayer(image_BJ_JD_ldl_layer_5);

                }
                else{
                    delete_layer(image_BJ_JD_ldl_layer_5);
                    delete_layer(vector_BJ_JD_ldl_layer_clusters_5);

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

    // 人均公园绿地面积
    $("#BJ_RJ").click(
        function() {
            deleteallLayer();// 清空图层

            add_wms_BJ_RJ_layer();
            document.getElementById("BJ_RJ_layer_box").style.display = "inline";
            document.getElementById("BJ_RJ_legend").style.display = "inline";
            map.getView().setCenter(
                ol.proj.transform([ 116.409, 39.923 ], 'EPSG:4326',
                    'EPSG:3857'));
            var view = map.getView();
            view.setZoom(15);
        })

	/** 监测专题* */

    var Interval_BJ_travel;
	$("#BJ_travel").click(
			function() {
				deleteallLayer();// 清空图层


                 Interval_BJ_travel =  setInterval(add_BJ_travel_layer,1000);


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

                $.ajax({

                    type : "GET",
                    url:'http://ali-pm25.showapi.com/pm25-detail',//url就是api请求接口
                    data:{
                        'city':'北京'  //传入参数：area获取areaid必须选一个
                    },

                    beforeSend:function(request){	//向接口发送身份认证
                        request.setRequestHeader("Authorization","APPCODE "+"ad46edb496a74883aadb28499f26d392");//注意这里APPCODE后面有一个空格，不能删掉
                    },
                    dataType:"json",//请求返回数据格式
                    success: function (data) {
                                $("#aqi").text(data.showapi_res_body.pm.aqi);
                                $("#so2").text(data.showapi_res_body.pm.so2);
                                $("#pm2_5").text(data.showapi_res_body.pm.pm2_5);
                                $("#primary_pollutant").text(data.showapi_res_body.pm.primary_pollutant);
                                $("#co").text(data.showapi_res_body.pm.co);
                                $("#no2").text(data.showapi_res_body.pm.no2);
                                $("#quality").text(data.showapi_res_body.pm.quality);
                                $("#pm10").text(data.showapi_res_body.pm.pm10);
                                $("#o3").text(data.showapi_res_body.pm.pm10);

                    },
                    error:function(e){
                        console.log(e.message);
                    }

                })
				document.getElementById("monitor").style.display = "inline";
				init_monitor_table();
				map.getView().setCenter(
						ol.proj.transform([ 116.409, 39.923 ], 'EPSG:4326',
								'EPSG:3857'));
				var view = map.getView();
				view.setZoom(15);
			})

    $("#bj_dt_video").click(
        function() {
            deleteallLayer();// 清空图层

            add_bj_dt_video_layer();
            map.getView().setCenter(
                ol.proj.transform([ 116.409, 39.923 ],
                    'EPSG:4326', 'EPSG:3857'));
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
                                                            window.open('/js/topic/emergency_management/emergency_plan/'
                                                                + pdfname
                                                                + '.pdf');


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




	/************工具专题**********************/
    /************长度测量measureDistance****/
    var source ;//图层数据源
    var vector;
    $("#measureDistance").click(function() {
        $(".tooltip-static").remove();
        map.removeLayer(vector);
        source  = new ol.source.Vector(); //图层数据源
        vector  = new ol.layer.Vector({
            source: source,
            style: new ol.style.Style({ //图层样式
                fill: new ol.style.Fill({
                    color: 'rgba(255, 255, 255, 0.2)' //填充颜色
                }),
                stroke: new ol.style.Stroke({
                    color: '#ffcc33', //边框颜色
                    width: 2 // 边框宽度
                }),
                image: new ol.style.Circle({
                    radius: 7,
                    fill: new ol.style.Fill({
                        color: '#ffcc33'
                    })
                })
            })
        });
              map.addLayer(vector);






        var geodesicCheckbox = document.getElementById('geodesic'); //测地学方式对象
        var typeSelect = document.getElementById('type'); //测量类型对象
        var draw; // global so we can remove it later
        var sketch;
        /**
         * 加载交互绘制控件函数
         */
        function addInteraction() {

            draw = new ol.interaction.Draw({
                source: source, //测量绘制层数据源
                type: /** @type {ol.geom.GeometryType} */ 'LineString', //几何图形类型
                style: new ol.style.Style({ //绘制几何图形的样式
                    fill: new ol.style.Fill({
                        color: 'rgba(255, 255, 255, 0.2)'
                    }),
                    stroke: new ol.style.Stroke({
                        color: 'rgba(0, 0, 0, 0.5)',
                        lineDash: [10, 10],
                        width: 2
                    }),
                    image: new ol.style.Circle({
                        radius: 5,
                        stroke: new ol.style.Stroke({
                            color: 'rgba(0, 0, 0, 0.7)'
                        }),
                        fill: new ol.style.Fill({
                            color: 'rgba(255, 255, 255, 0.2)'
                        })
                    })
                })
            });
            map.addInteraction(draw);

            createMeasureTooltip(); //创建测量工具提示框
            //  createHelpTooltip(); //创建帮助提示框

            var listener;
            //绑定交互绘制工具开始绘制的事件
            draw.on('drawstart',
                function(evt) {
                    // set sketch
                    sketch = evt.feature; //绘制的要素

                    /** @type {ol.Coordinate|undefined} */
                    var tooltipCoord = evt.coordinate; // 绘制的坐标
                    //绑定change事件，根据绘制几何类型得到测量长度值或面积值，并将其设置到测量工具提示框中显示
                    listener = sketch.getGeometry().on('change', function(evt) {
                        var geom = evt.target; //绘制几何要素
                        var output;
                        if (geom instanceof ol.geom.Polygon) {
                            output = formatArea( /** @type {ol.geom.Polygon} */ (geom)); //面积值
                            tooltipCoord = geom.getInteriorPoint().getCoordinates(); //坐标
                        } else if (geom instanceof ol.geom.LineString) {
                            output = formatLength( /** @type {ol.geom.LineString} */ (geom)); //长度值
                            tooltipCoord = geom.getLastCoordinate(); //坐标
                        }
                        measureTooltipElement.innerHTML = output; //将测量值设置到测量工具提示框中显示
                        measureTooltip.setPosition(tooltipCoord); //设置测量工具提示框的显示位置
                    });
                }, this);
            //绑定交互绘制工具结束绘制的事件
            draw.on('drawend',
                function(evt) {
                    measureTooltipElement.className = 'tooltip tooltip-static'; //设置测量提示框的样式
                    measureTooltip.setOffset([0, -7]);
                    // unset sketch
                    sketch = null; //置空当前绘制的要素对象
                    // unset tooltip so that a new one can be created
                    measureTooltipElement = null; //置空测量工具提示框对象
                     createMeasureTooltip(); //重新创建一个测试工具提示框显示结果
                    ol.Observable.unByKey(listener);
                    map.removeInteraction(draw); //移除绘制图形

                }, this);
        }





        addInteraction();    //调用加载绘制交互控件的方法，添加绘图进行测量





        /**
         *创建一个新的帮助提示框（tooltip）
         */
        var helpTooltipElement;
        function createHelpTooltip() {
            if (helpTooltipElement) {
                helpTooltipElement.parentNode.removeChild(helpTooltipElement);
            }
            helpTooltipElement = document.createElement('div');
            helpTooltipElement.className = 'tooltip hidden';
            helpTooltip = new ol.Overlay({
                element: helpTooltipElement,
                offset: [15, 0],
                positioning: 'center-left'
            });
            map.addOverlay(helpTooltip);
        }
        /**
         *创建一个新的测量工具提示框（tooltip）
         */
        var measureTooltipElement;
        function createMeasureTooltip() {
            if (measureTooltipElement) {
                measureTooltipElement.parentNode.removeChild(measureTooltipElement);
            }
            measureTooltipElement = document.createElement('div');
            measureTooltipElement.className = 'tooltip tooltip-measure';
            measureTooltip = new ol.Overlay({
                element: measureTooltipElement,
                offset: [0, -15],
                positioning: 'bottom-center'
            });
            map.addOverlay(measureTooltip);
        }








        /**
         * 测量长度输出
         * @param {ol.geom.LineString} line
         * @return {string}
         */
        var formatLength = function(line) {
            var length;
            length = Math.round(line.getLength() * 100) / 100; //直接得到线的长度

            var output;
            if (length > 100) {
                output = (Math.round(length / 1000 * 100) / 100) + ' ' + 'km'; //换算成KM单位
            } else {
                output = (Math.round(length * 100) / 100) + ' ' + 'm'; //m为单位
            }
            return output; //返回线的长度
        };
        /**
         * 测量面积输出
         * @param {ol.geom.Polygon} polygon
         * @return {string}
         */
        var formatArea = function(polygon) {
            var area;

                area = polygon.getArea(); //直接获取多边形的面积

            var output;
            if (area > 10000) {
                output = (Math.round(area / 1000000 * 100) / 100) + ' ' + 'km<sup>2</sup>'; //换算成KM单位
            } else {
                output = (Math.round(area * 100) / 100) + ' ' + 'm<sup>2</sup>'; //m为单位
            }
            return output; //返回多边形的面积
        };

        // addInteraction(); //调用加载绘制交互控件方法，添加绘图进行测量








        /**
         *  当用户正在绘制多边形时的提示信息文本
         * @type {string}
         */
        var continuePolygonMsg = '单击继续绘制多边形';
        /**
         * 当用户正在绘制线时的提示信息文本
         * @type {string}
         */
        var continueLineMsg = '单击继续绘制线';

        /**
         * 鼠标移动事件处理函数
         * @param {ol.MapBrowserEvent} evt
         */
        var pointerMoveHandler = function(evt) {
            if (evt.dragging) {
                return;
            }
            /** @type {string} */
            var helpMsg = '开始绘制'; //当前默认提示信息
            //判断绘制几何类型设置相应的帮助提示信息
            if (sketch) {
                var geom = (sketch.getGeometry());
                if (geom instanceof ol.geom.Polygon) {
                    helpMsg = continuePolygonMsg; //绘制多边形时提示相应内容
                } else if (geom instanceof ol.geom.LineString) {
                    helpMsg = continueLineMsg; //绘制线时提示相应内容
                }
            }
            // helpTooltipElement.innerHTML = helpMsg; //将提示信息设置到对话框中显示
            //  helpTooltip.setPosition(evt.coordinate); //设置帮助提示框的位置
            // $(helpTooltipElement).removeClass('hidden'); //移除帮助提示框的隐藏样式进行显示
        };
        map.on('pointermove', pointerMoveHandler); //地图容器绑定鼠标移动事件，动态显示帮助提示框内容
        //地图绑定鼠标移出事件，鼠标移出时为帮助提示框设置隐藏样式
        $(map.getViewport()).on('mouseout', function() {
            $(helpTooltipElement).addClass('hidden');
        });

    })


    /************面积测量measureArea****/
    $("#measureArea").click(function() {
        $(".tooltip-static").remove();
        map.removeLayer(vector);
        map.removeLayer(vector);
        source  = new ol.source.Vector(); //图层数据源
        vector  = new ol.layer.Vector({
            source: source,
            style: new ol.style.Style({ //图层样式
                fill: new ol.style.Fill({
                    color: 'rgba(255, 255, 255, 0.2)' //填充颜色
                }),
                stroke: new ol.style.Stroke({
                    color: '#ffcc33', //边框颜色
                    width: 2 // 边框宽度
                }),
                image: new ol.style.Circle({
                    radius: 7,
                    fill: new ol.style.Fill({
                        color: '#ffcc33'
                    })
                })
            })
        });
        map.addLayer(vector);






        var geodesicCheckbox = document.getElementById('geodesic'); //测地学方式对象
        var typeSelect = document.getElementById('type'); //测量类型对象
        var draw; // global so we can remove it later
        var sketch;
        /**
         * 加载交互绘制控件函数
         */
        function addInteraction() {

            draw = new ol.interaction.Draw({
                source: source, //测量绘制层数据源
                type: /** @type {ol.geom.GeometryType} */ 'Polygon', //几何图形类型
                style: new ol.style.Style({ //绘制几何图形的样式
                    fill: new ol.style.Fill({
                        color: 'rgba(255, 255, 255, 0.2)'
                    }),
                    stroke: new ol.style.Stroke({
                        color: 'rgba(0, 0, 0, 0.5)',
                        lineDash: [10, 10],
                        width: 2
                    }),
                    image: new ol.style.Circle({
                        radius: 5,
                        stroke: new ol.style.Stroke({
                            color: 'rgba(0, 0, 0, 0.7)'
                        }),
                        fill: new ol.style.Fill({
                            color: 'rgba(255, 255, 255, 0.2)'
                        })
                    })
                })
            });
            map.addInteraction(draw);

            createMeasureTooltip(); //创建测量工具提示框
            //  createHelpTooltip(); //创建帮助提示框

            var listener;
            //绑定交互绘制工具开始绘制的事件
            draw.on('drawstart',
                function(evt) {
                    // set sketch
                    sketch = evt.feature; //绘制的要素

                    /** @type {ol.Coordinate|undefined} */
                    var tooltipCoord = evt.coordinate; // 绘制的坐标
                    //绑定change事件，根据绘制几何类型得到测量长度值或面积值，并将其设置到测量工具提示框中显示
                    listener = sketch.getGeometry().on('change', function(evt) {
                        var geom = evt.target; //绘制几何要素
                        var output;
                        if (geom instanceof ol.geom.Polygon) {
                            output = formatArea( /** @type {ol.geom.Polygon} */ (geom)); //面积值
                            tooltipCoord = geom.getInteriorPoint().getCoordinates(); //坐标
                        } else if (geom instanceof ol.geom.LineString) {
                            output = formatLength( /** @type {ol.geom.LineString} */ (geom)); //长度值
                            tooltipCoord = geom.getLastCoordinate(); //坐标
                        }
                        measureTooltipElement.innerHTML = output; //将测量值设置到测量工具提示框中显示
                        measureTooltip.setPosition(tooltipCoord); //设置测量工具提示框的显示位置
                    });
                }, this);
            //绑定交互绘制工具结束绘制的事件
            draw.on('drawend',
                function(evt) {
                    measureTooltipElement.className = 'tooltip tooltip-static'; //设置测量提示框的样式
                    measureTooltip.setOffset([0, -7]);
                    // unset sketch
                    sketch = null; //置空当前绘制的要素对象
                    // unset tooltip so that a new one can be created
                    measureTooltipElement = null; //置空测量工具提示框对象
                    createMeasureTooltip(); //重新创建一个测试工具提示框显示结果
                    ol.Observable.unByKey(listener);
                    map.removeInteraction(draw); //移除绘制图形

                }, this);
        }





        addInteraction();    //调用加载绘制交互控件的方法，添加绘图进行测量





        /**
         *创建一个新的帮助提示框（tooltip）
         */
        var helpTooltipElement;
        function createHelpTooltip() {
            if (helpTooltipElement) {
                helpTooltipElement.parentNode.removeChild(helpTooltipElement);
            }
            helpTooltipElement = document.createElement('div');
            helpTooltipElement.className = 'tooltip hidden';
            helpTooltip = new ol.Overlay({
                element: helpTooltipElement,
                offset: [15, 0],
                positioning: 'center-left'
            });
            map.addOverlay(helpTooltip);
        }
        /**
         *创建一个新的测量工具提示框（tooltip）
         */
        var measureTooltipElement;
        function createMeasureTooltip() {
            if (measureTooltipElement) {
                measureTooltipElement.parentNode.removeChild(measureTooltipElement);
            }
            measureTooltipElement = document.createElement('div');
            measureTooltipElement.className = 'tooltip tooltip-measure';
            measureTooltip = new ol.Overlay({
                element: measureTooltipElement,
                offset: [0, -15],
                positioning: 'bottom-center'
            });
            map.addOverlay(measureTooltip);
        }








        /**
         * 测量长度输出
         * @param {ol.geom.LineString} line
         * @return {string}
         */
        var formatLength = function(line) {
            var length;
            length = Math.round(line.getLength() * 100) / 100; //直接得到线的长度

            var output;
            if (length > 100) {
                output = (Math.round(length / 1000 * 100) / 100) + ' ' + 'km'; //换算成KM单位
            } else {
                output = (Math.round(length * 100) / 100) + ' ' + 'm'; //m为单位
            }
            return output; //返回线的长度
        };
        /**
         * 测量面积输出
         * @param {ol.geom.Polygon} polygon
         * @return {string}
         */
        var formatArea = function(polygon) {
            var area;

            area = polygon.getArea(); //直接获取多边形的面积

            var output;
            if (area > 10000) {
                output = (Math.round(area / 1000000 * 100) / 100) + ' ' + 'km<sup>2</sup>'; //换算成KM单位
            } else {
                output = (Math.round(area * 100) / 100) + ' ' + 'm<sup>2</sup>'; //m为单位
            }
            return output; //返回多边形的面积
        };

        // addInteraction(); //调用加载绘制交互控件方法，添加绘图进行测量








        /**
         *  当用户正在绘制多边形时的提示信息文本
         * @type {string}
         */
        var continuePolygonMsg = '单击继续绘制多边形';
        /**
         * 当用户正在绘制线时的提示信息文本
         * @type {string}
         */
        var continueLineMsg = '单击继续绘制线';

        /**
         * 鼠标移动事件处理函数
         * @param {ol.MapBrowserEvent} evt
         */
        var pointerMoveHandler = function(evt) {
            if (evt.dragging) {
                return;
            }
            /** @type {string} */
            var helpMsg = '开始绘制'; //当前默认提示信息
            //判断绘制几何类型设置相应的帮助提示信息
            if (sketch) {
                var geom = (sketch.getGeometry());
                if (geom instanceof ol.geom.Polygon) {
                    helpMsg = continuePolygonMsg; //绘制多边形时提示相应内容
                } else if (geom instanceof ol.geom.LineString) {
                    helpMsg = continueLineMsg; //绘制线时提示相应内容
                }
            }
            // helpTooltipElement.innerHTML = helpMsg; //将提示信息设置到对话框中显示
            //  helpTooltip.setPosition(evt.coordinate); //设置帮助提示框的位置
            // $(helpTooltipElement).removeClass('hidden'); //移除帮助提示框的隐藏样式进行显示
        };
        map.on('pointermove', pointerMoveHandler); //地图容器绑定鼠标移动事件，动态显示帮助提示框内容
        //地图绑定鼠标移出事件，鼠标移出时为帮助提示框设置隐藏样式
        $(map.getViewport()).on('mouseout', function() {
            $(helpTooltipElement).addClass('hidden');
        });

    })

	// 清除图层
	$("#clearAllLayer").click(function() {
		deleteallLayer();// 清空图层

	})



})
