var vector_search_layer;
// selectByExampleoldTree
add_search_layer_oldTree
var vector_search_layer_oldTree;
function add_search_layer_greenResource() {
var coordinates = [];
var featurearray = [];
	var source;
	// 矢量图层 获取gejson数据
	$.ajax({
		// url: "data/" + dataurl,
		url :  '/selectByExampleGreenName/'+$("#likeInputVal").val(),
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
					所属街道 : features[i].STREET,
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
function add_search_layer_oldTree() {
    var coordinates = [];
    var featurearray = [];
    var source;
    // 矢量图层 获取gejson数据
    $.ajax({
        // url: "data/" + dataurl,
        url :  '/selectByExampleoldTree/'+$("#likeInputVal").val(),
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
                    古树编号 : features[i].treeid,
                    树种 : features[i].treetype,
                    乡镇 : features[i].town,
                    小地名: features[i].location,
                    原挂牌号 : features[i].oldnum,
                    树高 : features[i].height+"m",
                    胸径 : features[i].diameter+"cm",
                    平均冠幅 : features[i].crown+"m<sup>2</sup>",
                    生长势 : features[i].state,
                    生长环境 : features[i].environmen,
                    管护单位 : features[i].ghdw,
                    管护人 : features[i].owner,
                    等级 : features[i].level,
                    护栏 : features[i].hl,
                    支撑 : features[i].zc,
                    封堵树洞 : features[i].fdsd,
                    树池 : features[i].sc,
                    树箍 : features[i].sg,

                });
                // console.log(ol.proj.fromLonLat(features[i].geometry.coordinates));

                point.setStyle(new ol.style.Style({
                    image : new ol.style.Icon({
                        // color: '#4271AE',
                        src : '/images/topic/resource_topic/park.png',
                        scale : 0.5
                    }),

                    text : new ol.style.Text({
                         text : "  " + features[i].treetype + "  ",

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
function add_search_layer_roofGreen() {
    var coordinates = [];
    var featurearray = [];
    var source;
    // 矢量图层 获取gejson数据
    $.ajax({
        // url: "data/" + dataurl,
        url :  '/selectByExampleroofGreen/'+$("#likeInputVal").val(),
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
                    所属街道 : features[i].STREET,
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
function add_search_layer_waterResource() {
    var coordinates = [];
    var featurearray = [];
    var source;
    // 矢量图层 获取gejson数据
    $.ajax({
        // url: "data/" + dataurl,
        url :  '/selectByExamplewaterResource/'+$("#likeInputVal").val(),
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
                    所属街道 : features[i].STREET,
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


function list_search_result_greenResource() {


 $("#search_list_result ul").empty();
	// 矢量图层 获取gejson数据
	$.ajax({
		// url: "data/" + dataurl,
		url :  '/selectByExampleLikeGreenNameLimit/'+$("#likeInputVal").val(),
		type : "GET",
		success : function(result) {
		console.log(result);


		    $.each(result,function(index, item) {

               //

									$("<li style='margin-top:5px;margin-left:10px;cursor:pointer;' class='search_list_result_li'></li>").append(item.greenname).appendTo("#search_list_result ul");
		    })




		},
		error : function() {
			alert('error');
		}
	})
}
function list_search_result_oldTree() {


    $("#search_list_result ul").empty();
    // 矢量图层 获取gejson数据
    $.ajax({
        // url: "data/" + dataurl,
        url :  '/selectByExampleLikeoldTreeLimit/'+$("#likeInputVal").val(),
        type : "GET",
        success : function(result) {
            console.log(result);

           // $("<li style='margin-top:5px;margin-left:10px;cursor:pointer;' class='search_list_result_li'></li>").append(result[0].treetype+"  "+" ").appendTo("#search_list_result ul");
            $.each(result,function(index, item) {

                //

                $("<li style='margin-top:5px;margin-left:10px;cursor:pointer;' class='search_list_result_li'></li>").append(item.treetype).appendTo("#search_list_result ul");
            })




        },
        error : function() {
            alert('error');
        }
    })
}
function list_search_result_roofGreen() {


    $("#search_list_result ul").empty();
    // 矢量图层 获取gejson数据
    $.ajax({
        // url: "data/" + dataurl,
        url :  '/selectByExampleLikeGreenNameLimit_bj_ld_roof/'+$("#likeInputVal").val(),
        type : "GET",
        success : function(result) {
            console.log(result);


            $.each(result,function(index, item) {

                //

                $("<li style='margin-top:5px;margin-left:10px;cursor:pointer;' class='search_list_result_li'></li>").append(item.greenname+"  "+" ").appendTo("#search_list_result ul");
            })




        },
        error : function() {
            alert('error');
        }
    })
}
function list_search_result_waterResource() {

    $("#search_list_result ul").empty();
    // 矢量图层 获取gejson数据
    $.ajax({
        // url: "data/" + dataurl,
        url :  '/selectByExampleLikeGreenNameLimit_waterResource/'+$("#likeInputVal").val(),
        type : "GET",
        success : function(result) {
            console.log(result);


            $.each(result,function(index, item) {

                //

                $("<li style='margin-top:5px;margin-left:10px;cursor:pointer;' class='search_list_result_li'></li>").append(item.greenname+"  "+" ").appendTo("#search_list_result ul");
            })




        },
        error : function() {
            alert('error');
        }
    })
}



function delete_search_layer() {

	delete_layer(vector_search_layer);
    delete_layer(vector_search_layer_oldTree);
}