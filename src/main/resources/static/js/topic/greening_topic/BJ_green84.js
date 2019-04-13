var image_BJ_green84_layer_1 = init_image_layer_CQL_greenrate_1("BJ_green84");
var image_BJ_green84_layer_2 = init_image_layer_CQL_greenrate_2("BJ_green84");
var image_BJ_green84_layer_3 = init_image_layer_CQL_greenrate_3("BJ_green84");
var image_BJ_green84_layer_4 = init_image_layer_CQL_greenrate_4("BJ_green84");



var vector_BJ_green84_layer_1;
var vector_BJ_green84_layer_2;
var vector_BJ_green84_layer_3;
var vector_BJ_green84_layer_4;
// function add_vector_BJ_green84_layer() {
//
//     var featurearray = [];
//     var source;
//     // 矢量图层 获取gejson数据
//     $.ajax({
//         // url: "data/" + dataurl,
//         url : '/selectByExample_BJ_green84',
//         type : "GET",
//         success : function(result) {
//             var features = result;
//             for (var i = 0; i < features.length; i++) {
//                 var geom = result[i].geom.substring(6,
//                     result[i].geom.length - 1);
//                 coordinates = geom.split(" ");
//                 coordinates[0] = coordinates[0] * 1;
//                 coordinates[1] = coordinates[1] * 1;
//                 var point = new ol.Feature({
//
//                     // geometry: new
//                     // ol.geom.Point(ol.proj.fromLonLat(features[i].geometry.coordinates)),
//                     geometry : new ol.geom.Point(ol.proj
//                         .fromLonLat(coordinates)),
//                     BJ_green84:"BJ_green84",
//                     path:features[i].path,
//                     绿视率 : features[i].greenRate,
//                     绿地名称 : features[i].greenname,
//
//                 });
//                 // console.log(ol.proj.fromLonLat(features[i].geometry.coordinates));
//
//                 point.setStyle(new ol.style.Style({
//                     image : new ol.style.Icon({
//                         // color: '#4271AE',
//                         src : '/images/topic/resource_topic/park.png',
//                         scale : 0.5
//                     }),
//
//                     //text : new ol.style.Text({
//                     //	text : "  " + features[i].greenname + "  ",
//                     //	fill : new ol.style.Fill({
//                     //		color : 'white'
//                     //	}),
//                     //	backgroundFill : new ol.style.Fill({
//                     //		color : 'rgb(0,0,0)'
//                     //	}),
//                     //	offsetY : 45
//
//                     //}),
//
//                     fill : new ol.style.Fill({
//                         color : '#ff0000'
//                     }),
//                     stroke : new ol.style.Stroke({
//                         color : '#ff0000'
//                     })
//
//                 }));
//                 featurearray.push(point);
//             }
//             var source = new ol.source.Vector({
//                 features : featurearray
//             });
//             vector_BJ_green84_layer = new ol.layer.Vector({
//                 source : source,
//                 zIndex : 1002
//             });
//             map.addLayer(vector_BJ_green84_layer);
//         },
//         error : function() {
//             alert('error');
//         }
//     })
//
// }

function add_vector_BJ_green84_layer_select_1(greenrate) {

    var featurearray = [];
    var source;
    // 矢量图层 获取gejson数据
    $.ajax({
        // url: "data/" + dataurl,
        url : '/selectByExample_BJ_green84/'+greenrate,
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
                    BJ_green84:"BJ_green84",
                    path:features[i].path,
                    绿视率 : features[i].greenRate,
                    绿地名称 : features[i].greenname,

                });
                // console.log(ol.proj.fromLonLat(features[i].geometry.coordinates));

                point.setStyle(new ol.style.Style({
                    image : new ol.style.Icon({
                        // color: '#4271AE',
                        src : '/images/topic/resource_topic/park.png',
                        scale : 0.5
                    }),

                    // image: new ol.style.Circle({
                    //     radius: 10,
                    //     stroke: new ol.style.Stroke({
                    //         color: '#fff'
                    //     }),
                    //     fill: new ol.style.Fill({
                    //         color: '#3399CC'
                    //     })
                    // }),
                    //text : new ol.style.Text({
                    //	text : "  " + features[i].greenname + "  ",
                    //	fill : new ol.style.Fill({
                    //		color : 'white'
                    //	}),
                    //	backgroundFill : new ol.style.Fill({
                    //		color : 'rgb(0,0,0)'
                    //	}),
                    //	offsetY : 45

                    //}),

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
            vector_BJ_green84_layer_1 = new ol.layer.Vector({
                source : source,
                zIndex : 1002
            });
            map.addLayer(vector_BJ_green84_layer_1);
        },
        error : function() {
            alert('error');
        }
    })

}
function add_vector_BJ_green84_layer_select_2(greenrate) {

    var featurearray = [];
    var source;
    // 矢量图层 获取gejson数据
    $.ajax({
        // url: "data/" + dataurl,
        url : '/selectByExample_BJ_green84/'+greenrate,
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
                    BJ_green84:"BJ_green84",
                    path:features[i].path,
                    绿视率 : features[i].greenRate,
                    绿地名称 : features[i].greenname,

                });
                // console.log(ol.proj.fromLonLat(features[i].geometry.coordinates));

                point.setStyle(new ol.style.Style({
                    image : new ol.style.Icon({
                        // color: '#4271AE',
                        src : '/images/topic/resource_topic/park.png',
                        scale : 0.5
                    }),

                    //text : new ol.style.Text({
                    //	text : "  " + features[i].greenname + "  ",
                    //	fill : new ol.style.Fill({
                    //		color : 'white'
                    //	}),
                    //	backgroundFill : new ol.style.Fill({
                    //		color : 'rgb(0,0,0)'
                    //	}),
                    //	offsetY : 45

                    //}),

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
            vector_BJ_green84_layer_2 = new ol.layer.Vector({
                source : source,
                zIndex : 1002
            });
            map.addLayer(vector_BJ_green84_layer_2);
        },
        error : function() {
            alert('error');
        }
    })

}
function add_vector_BJ_green84_layer_select_3(greenrate) {

    var featurearray = [];
    var source;
    // 矢量图层 获取gejson数据
    $.ajax({
        // url: "data/" + dataurl,
        url : '/selectByExample_BJ_green84/'+greenrate,
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
                    BJ_green84:"BJ_green84",
                    path:features[i].path,
                    绿视率 : features[i].greenRate,
                    绿地名称 : features[i].greenname,

                });
                // console.log(ol.proj.fromLonLat(features[i].geometry.coordinates));

                point.setStyle(new ol.style.Style({
                    image : new ol.style.Icon({
                        // color: '#4271AE',
                        src : '/images/topic/resource_topic/park.png',
                        scale : 0.5
                    }),

                    //text : new ol.style.Text({
                    //	text : "  " + features[i].greenname + "  ",
                    //	fill : new ol.style.Fill({
                    //		color : 'white'
                    //	}),
                    //	backgroundFill : new ol.style.Fill({
                    //		color : 'rgb(0,0,0)'
                    //	}),
                    //	offsetY : 45

                    //}),

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
            vector_BJ_green84_layer_3 = new ol.layer.Vector({
                source : source,
                zIndex : 1002
            });
            map.addLayer(vector_BJ_green84_layer_3);
        },
        error : function() {
            alert('error');
        }
    })

}
function add_vector_BJ_green84_layer_select_4(greenrate) {

    var featurearray = [];
    var source;
    // 矢量图层 获取gejson数据
    $.ajax({
        // url: "data/" + dataurl,
        url : '/selectByExample_BJ_green84/'+greenrate,
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
                    BJ_green84:"BJ_green84",
                    path:features[i].path,
                    绿视率 : features[i].greenRate,
                    绿地名称 : features[i].greenname,

                });
                // console.log(ol.proj.fromLonLat(features[i].geometry.coordinates));

                point.setStyle(new ol.style.Style({
                    image : new ol.style.Icon({
                        // color: '#4271AE',
                        src : '/images/topic/resource_topic/park.png',
                        scale : 0.5
                    }),

                    //text : new ol.style.Text({
                    //	text : "  " + features[i].greenname + "  ",
                    //	fill : new ol.style.Fill({
                    //		color : 'white'
                    //	}),
                    //	backgroundFill : new ol.style.Fill({
                    //		color : 'rgb(0,0,0)'
                    //	}),
                    //	offsetY : 45

                    //}),

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
            vector_BJ_green84_layer_4 = new ol.layer.Vector({
                source : source,
                zIndex : 1002
            });
            map.addLayer(vector_BJ_green84_layer_4);
        },
        error : function() {
            alert('error');
        }
    })

}
function add_BJ_green84_layer() {

    map.addLayer(image_BJ_green84_layer_1);
    map.addLayer(image_BJ_green84_layer_2);
    map.addLayer(image_BJ_green84_layer_3);
    map.addLayer(image_BJ_green84_layer_4);
    add_vector_BJ_green84_layer_select_1("很好");
    add_vector_BJ_green84_layer_select_2("较好");
    add_vector_BJ_green84_layer_select_3("一般");
    add_vector_BJ_green84_layer_select_4("较差");

}

function delete_BJ_green84_layer() {
    delete_layer(image_BJ_green84_layer_1);
    delete_layer(image_BJ_green84_layer_2);
    delete_layer(image_BJ_green84_layer_3);
    delete_layer(image_BJ_green84_layer_4);

    delete_layer(vector_BJ_green84_layer_1);
    delete_layer(vector_BJ_green84_layer_2);
    delete_layer(vector_BJ_green84_layer_3);
    delete_layer(vector_BJ_green84_layer_4);
}