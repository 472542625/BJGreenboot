/**
 * Created by Administrator on 2018/8/15/015.
 */

var vector_LYR_LD_Garden_layer;
function add_LYR_LD_Garden_layer(greentype) {

	var wmsSource = new ol.source.TileWMS({
		url : server_url + 'geoserver/forest/wms',
		params : {
			'LAYERS' : 'forest:'+greentype,
			'TILED' : false
		},
		serverType : 'geoserver'
	})
	vector_LYR_LD_Garden_layer = new ol.layer.Tile({
		source : wmsSource,
		zIndex : 999
	});

	map.addLayer(vector_LYR_LD_Garden_layer);
}
// function add_LYR_LD_Garden_layer() {
//
// vector_LYR_LD_Garden_layer = new ol.layer.Vector({
// source: new ol.source.Vector({
// format: new ol.format.GeoJSON(),
// url:
// server_url+'geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=forest:LYR_LD_Garden&outputFormat=application/json&srsname=EPSG:4326'
// }),
// style: function (feature, resolution) {
// return new ol.style.Style({
// //stroke: new ol.style.Stroke({
// // color: 'rgb(157,204,16)',
// // width: 3
// //}),
// fill: new ol.style.Fill({
//
// color: 'rgba(115,178,115,0.8)'
//
// })
// });
// },
// zIndex: 999
// });
// map.addLayer(vector_LYR_LD_Garden_layer);
//
// }

// var vector_LYR_LD_GardenP_layer;
// function add_LYR_LD_GardenP_layer() {
//
// vector_LYR_LD_GardenP_layer = new ol.layer.Vector({
// source: new ol.source.Vector({
// format: new ol.format.GeoJSON(),
// url:
// server_url+'geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=forest:LYR_LD_GardenP&maxFeatures=5000&outputFormat=application/json&srsname=EPSG:4326'
// }),
// style: function (feature, resolution) {
// return new ol.style.Style({
// //stroke: new ol.style.Stroke({
// // color: 'red',
// // width: 3
// //})
// //,
// //fill:new ol.style.Fill({
// //
// // color:'rgba(210,239,255,0.5)'
// //
// //})
//
// image: new ol.style.Icon(({
// src: 'images/olimg/park.png',
// scale:0.1
// }))
// });
// },
// zIndex: 1002
// });
//
// map.addLayer(vector_LYR_LD_GardenP_layer);
// }

var vector_LYR_LD_GardenP_layer_clusters;
function add_LYR_LD_GardenP_layer(greentype1) {

	var featurearray = [];
	var source;
	// 矢量图层 获取gejson数据
	// &cql_filter=age between 0 and 60
	$.ajax({
		// url: "data/" + dataurl,
		url :'/selectByExamplegreentype1/' + greentype1,
		type : "GET",
		success : function(result) {
			var features = result;
			for (var i = 0; i < features.length; i++) {
				var geom = result[i].geom.substring(6,
						result[i].geom.length - 1);
				coordinates = geom.split(" ");
				coordinates[0] = coordinates[0] * 1;
				coordinates[1] = coordinates[1] * 1;
				var point = new ol.Feature({

					// geometry: new
					// ol.geom.Point(ol.proj.fromLonLat(features[i].geometry.coordinates)),
					geometry : new ol.geom.Point(ol.proj
							.fromLonLat(coordinates)),
					绿地名称 : features[i].greenname,
					绿地性质 : features[i].greentype,
					图斑面积 : features[i].sumTub+"m<sup>2</sup>",
					绿化面积 : features[i].sumLvdi+"m<sup>2</sup>",
					绿化覆盖面积 : features[i].sumlhf+"m<sup>2</sup>",
					屋顶绿化面积 : features[i].sumRofe+"m<sup>2</sup>",
					其他面积 : features[i].sumQita+"m<sup>2</sup>",
					所属街道 : features[i].street,
					居委会 : features[i].village,
					绿地归属 : features[i].greenowner,
					建成时间 : features[i].buildyear,
					产权单位 : features[i].property,
					管养单位 : features[i].manager,
					管养性质 : features[i].managPro,
				});
				// console.log(ol.proj.fromLonLat(features[i].geometry.coordinates));

				point.setStyle(new ol.style.Style({
					image : new ol.style.Icon({
						// color: '#4271AE',
						src : '/images/topic/resource_topic/park.png',
						scale : 0.5
					}),

					text : new ol.style.Text({
						text : "  " + features[i].greenname + "  ",
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
			}
			var source = new ol.source.Vector({
				features : featurearray
			});

            /******聚类分析*******/


            var clusterSource = new ol.source.Cluster({
                distance: 40,
                source: source
            });
            var styleCache = {};
            vector_LYR_LD_GardenP_layer_clusters =  new ol.layer.Vector({
                source: clusterSource,
                style: function(feature) {
                    var size = feature.get('features').length;
                    feature.set("绿地名称",feature.get('features')[0].N.绿地名称);
                    feature.set("绿地性质",feature.get('features')[0].N.绿地性质);
                    feature.set("图斑面积",feature.get('features')[0].N.图斑面积);
                    feature.set("绿化面积",feature.get('features')[0].N.绿化面积);
                    feature.set("绿化覆盖面积",feature.get('features')[0].N.绿化覆盖面积);
                    feature.set("屋顶绿化面积",feature.get('features')[0].N.屋顶绿化面积);
                    feature.set("其他面积",feature.get('features')[0].N.其他面积);
                    feature.set("所属街道",feature.get('features')[0].N.所属街道);
                    feature.set("居委会",feature.get('features')[0].N.居委会);
                    feature.set("绿地归属",feature.get('features')[0].N.绿地归属);
                    feature.set("建成时间",feature.get('features')[0].N.建成时间);
                    feature.set("产权单位",feature.get('features')[0].N.产权单位);
                    feature.set("管养单位",feature.get('features')[0].N.管养单位);
                    feature.set("管养性质",feature.get('features')[0].N.管养性质);
                    var style = styleCache[size];
                    if (!style) {
                        style = new ol.style.Style({
                            image: new ol.style.Circle({
                                radius: 10,
                                stroke: new ol.style.Stroke({
                                    color: '#fff'
                                }),
                                fill: new ol.style.Fill({
                                    color: '#3399CC'
                                })
                            }),
                            text: new ol.style.Text({
                                text: size.toString(),
                                fill: new ol.style.Fill({
                                    color: '#fff'
                                })
                            })
                        });
                        styleCache[size] = style;
                    }
                    return style;
                },
                zIndex : 1002
            });




            // map.addLayer(vector_BJ_JD_ldl_layer);
            map.addLayer(vector_LYR_LD_GardenP_layer_clusters);
            clusterSource.setDistance(parseInt(100, 10));



		},
		error : function() {
			alert('error');
		}
	})
}
// function del_LYR_LD_GardenP_layertest() {
//
// delete_layer(vector_LYR_LD_GardenP_layertest);
// }

function addLYR_LD_Garden_layer(greentype_wms,greentype1) {

	add_LYR_LD_Garden_layer(greentype_wms);

	add_LYR_LD_GardenP_layer(greentype1);
}

function deleteBJ_LYR_LD_Garden_layer() {

	delete_layer(vector_LYR_LD_Garden_layer);
	delete_layer(vector_LYR_LD_GardenP_layer_clusters);
}
