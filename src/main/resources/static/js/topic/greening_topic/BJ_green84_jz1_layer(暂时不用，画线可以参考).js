/**
 * Created by Administrator on 2018/8/14/014.
 * 绿视率
 */
//var vector_bj_greenrate1_layer;
//function add_BJ_green84_jz1_layer1() {
//
//    vector_bj_greenrate1_layer = new ol.layer.Vector({
//        source: new ol.source.Vector({
//            format: new ol.format.GeoJSON(),
//            url: 'http://localhost:8185/geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=forest:BJ_green84_jz1&outputFormat=application/json&srsname=EPSG:4326&cql_filter=green_rate=1'
//        }),
//        style: function (feature, resolution) {
//            return new ol.style.Style({
//                stroke: new ol.style.Stroke({
//                    color: 'rgb(176,224,0)',
//                    width: 5
//                }),
//                //text: new ol.style.Text({
//                //
//                //    text:"211111111111111111111111111111111"
//                //
//                //})
//            });
//        },
//        zIndex: 999
//    });
//    map.addLayer(vector_bj_greenrate1_layer);
//
//}
//var vector_bj_greenrate2_layer;
//function add_BJ_green84_jz1_layer2() {
//
//    vector_bj_greenrate2_layer = new ol.layer.Vector({
//        source: new ol.source.Vector({
//            format: new ol.format.GeoJSON(),
//            url: 'http://localhost:8185/geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=forest:BJ_green84_jz1&outputFormat=application/json&srsname=EPSG:4326&cql_filter=green_rate=2'
//        }),
//        style: function (feature, resolution) {
//            return new ol.style.Style({
//                stroke: new ol.style.Stroke({
//                    color: 'rgb(255,170,1)',
//                    width: 5
//                })
//            });
//        },
//        zIndex: 999
//    });
//    map.addLayer(vector_bj_greenrate2_layer);
//
//}
//var vector_bj_greenrate3_layer;
//function add_BJ_green84_jz1_layer3() {
//
//    vector_bj_greenrate3_layer = new ol.layer.Vector({
//        source: new ol.source.Vector({
//            format: new ol.format.GeoJSON(),
//            url: 'http://localhost:8185/geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=forest:BJ_green84_jz1&outputFormat=application/json&srsname=EPSG:4326&cql_filter=green_rate=3'
//        }),
//        style: function (feature, resolution) {
//            return new ol.style.Style({
//                stroke: new ol.style.Stroke({
//                    color: 'rgb(56,167,0)',
//                    width: 5
//                })
//            });
//        },
//        zIndex: 999
//    });
//    map.addLayer(vector_bj_greenrate3_layer);
//
//}
//var vector_bj_greenrate4_layer;
//function add_BJ_green84_jz1_layer4() {
//
//    vector_bj_greenrate4_layer = new ol.layer.Vector({
//        source: new ol.source.Vector({
//            format: new ol.format.GeoJSON(),
//            url: 'http://localhost:8185/geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=forest:BJ_green84_jz1&outputFormat=application/json&srsname=EPSG:4326&cql_filter=green_rate=4'
//        }),
//        style: function (feature, resolution) {
//            return new ol.style.Style({
//                stroke: new ol.style.Stroke({
//                    color: 'rgb(254,0,0)',
//                    width: 5
//                })
//            });
//        },
//        zIndex: 999
//    });
//    map.addLayer(vector_bj_greenrate4_layer);
//
//}



var vector_bj_greenrate1_layer;
function add_BJ_green84_jz1_layer1() {




    var featurearray = [];

    var source;
    //矢量图层 获取gejson数据
    //&cql_filter=age between 0 and 60
    $.ajax({
        // url: "data/" + dataurl,
        url: server_url+'geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=forest:BJ_green84_jz1&outputFormat=application/json&srsname=EPSG:4326&cql_filter=green_rate=1',
        type: "GET",
        success: function (result) {

            var features = result.features;
            var coord_first = [];


            for (var i = 0; i < features.length; i++) {
                var coord_second = [];

                for (var j = 0; j < features[i].geometry.coordinates[0].length; j++) {

                    coord_second.push(ol.proj.fromLonLat(features[i].geometry.coordinates[0][j]));
                }

                coord_first.push(coord_second);


            }
            for (var i = 0; i < coord_first.length; i++) {

                var line = new ol.Feature({


                    geometry: new ol.geom.LineString(coord_first[i]),
                    ID:features[i].properties.Id,
                    绿视率:features[i].properties.green_rate,
                });


                line.setStyle(new ol.style.Style({


                        text: new ol.style.Text({
                            text: "" + features[i].properties.green_rate,
                            fill: new ol.style.Fill({
                                color: 'black'
                            })
                        }),

                        stroke: new ol.style.Stroke({
                            color: 'rgb(176,224,0)',
                            width: 5
                        })

                    })
                );
                featurearray.push(line);

            }

            //alert(featurearray.length);
            source = new ol.source.Vector({
                features: featurearray
            });
            vector_bj_greenrate1_layer = new ol.layer.Vector({
                source: source,
                zIndex: 1002
            });
            map.addLayer(vector_bj_greenrate1_layer);
        },
        error: function () {
            alert('error');
        }
    })
}

var vector_bj_greenrate2_layer;
function add_BJ_green84_jz1_layer2() {




    var featurearray = [];

    var source;
    //矢量图层 获取gejson数据
    //&cql_filter=age between 0 and 60
    $.ajax({
        // url: "data/" + dataurl,
        url: server_url+'geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=forest:BJ_green84_jz1&outputFormat=application/json&srsname=EPSG:4326&cql_filter=green_rate=2',
        type: "GET",
        success: function (result) {

            var features = result.features;
            var coord_first = [];


            for (var i = 0; i < features.length; i++) {
                var coord_second = [];

                for (var j = 0; j < features[i].geometry.coordinates[0].length; j++) {

                    coord_second.push(ol.proj.fromLonLat(features[i].geometry.coordinates[0][j]));
                }

                coord_first.push(coord_second);


            }
            for (var i = 0; i < coord_first.length; i++) {

                var line = new ol.Feature({


                    geometry: new ol.geom.LineString(coord_first[i]),
                    ID:features[i].properties.Id,
                    绿视率:features[i].properties.green_rate,
                });


                line.setStyle(new ol.style.Style({


                        text: new ol.style.Text({
                            text: "" + features[i].properties.green_rate,
                            fill: new ol.style.Fill({
                                color: 'black'
                            })
                        }),

                        stroke: new ol.style.Stroke({
                            color: 'rgb(255,170,1)',
                            width: 5
                        })

                    })
                );
                featurearray.push(line);

            }

            //alert(featurearray.length);
            source = new ol.source.Vector({
                features: featurearray
            });
            vector_bj_greenrate2_layer = new ol.layer.Vector({
                source: source,
                zIndex: 1002
            });
            map.addLayer(vector_bj_greenrate2_layer);
        },
        error: function () {
            alert('error');
        }
    })
}


var vector_bj_greenrate3_layer;
function add_BJ_green84_jz1_layer3() {




    var featurearray = [];

    var source;
    //矢量图层 获取gejson数据
    //&cql_filter=age between 0 and 60
    $.ajax({
        // url: "data/" + dataurl,
        url: server_url+'geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=forest:BJ_green84_jz1&outputFormat=application/json&srsname=EPSG:4326&cql_filter=green_rate=3',
        type: "GET",
        success: function (result) {

            var features = result.features;
            var coord_first = [];


            for (var i = 0; i < features.length; i++) {
                var coord_second = [];

                for (var j = 0; j < features[i].geometry.coordinates[0].length; j++) {

                    coord_second.push(ol.proj.fromLonLat(features[i].geometry.coordinates[0][j]));
                }

                coord_first.push(coord_second);


            }
            for (var i = 0; i < coord_first.length; i++) {

                var line = new ol.Feature({


                    geometry: new ol.geom.LineString(coord_first[i]),
                    ID:features[i].properties.Id,
                    绿视率:features[i].properties.green_rate,
                });


                line.setStyle(new ol.style.Style({


                        text: new ol.style.Text({
                            text: "" + features[i].properties.green_rate,
                            fill: new ol.style.Fill({
                                color: 'black'
                            })
                        }),

                        stroke: new ol.style.Stroke({
                            color: 'rgb(56,167,0)',
                            width: 5
                        })

                    })
                );
                featurearray.push(line);

            }

            //alert(featurearray.length);
            source = new ol.source.Vector({
                features: featurearray
            });
            vector_bj_greenrate3_layer = new ol.layer.Vector({
                source: source,
                zIndex: 1002
            });
            map.addLayer(vector_bj_greenrate3_layer);
        },
        error: function () {
            alert('error');
        }
    })
}

var vector_bj_greenrate4_layer;
function add_BJ_green84_jz1_layer4() {




    var featurearray = [];

    var source;
    //矢量图层 获取gejson数据
    //&cql_filter=age between 0 and 60
    $.ajax({
        // url: "data/" + dataurl,
        url: server_url+'geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=forest:BJ_green84_jz1&outputFormat=application/json&srsname=EPSG:4326&cql_filter=green_rate=4',
        type: "GET",
        success: function (result) {

            var features = result.features;
            var coord_first = [];


            for (var i = 0; i < features.length; i++) {
                var coord_second = [];

                for (var j = 0; j < features[i].geometry.coordinates[0].length; j++) {

                    coord_second.push(ol.proj.fromLonLat(features[i].geometry.coordinates[0][j]));
                }

                coord_first.push(coord_second);


            }
            for (var i = 0; i < coord_first.length; i++) {

                var line = new ol.Feature({


                    geometry: new ol.geom.LineString(coord_first[i]),
                    ID:features[i].properties.Id,
                    绿视率:features[i].properties.green_rate,
                });


                line.setStyle(new ol.style.Style({


                        text: new ol.style.Text({
                            text: "" + features[i].properties.green_rate,
                            fill: new ol.style.Fill({
                                color: 'black'
                            })
                        }),

                        stroke: new ol.style.Stroke({
                            color: 'rgb(254,0,0)',
                            width: 5
                        })

                    })
                );
                featurearray.push(line);

            }

            //alert(featurearray.length);
            source = new ol.source.Vector({
                features: featurearray
            });
            vector_bj_greenrate4_layer = new ol.layer.Vector({
                source: source,
                zIndex: 1002
            });
            map.addLayer(vector_bj_greenrate4_layer);
        },
        error: function () {
            alert('error');
        }
    })
}


function add_BJ_green84_jz1_layer(){

    add_BJ_green84_jz1_layer1();
    add_BJ_green84_jz1_layer2();
    add_BJ_green84_jz1_layer3();
    add_BJ_green84_jz1_layer4();







}

function delete_BJ_green84_jz1_layer(){

    delete_layer(vector_bj_greenrate1_layer);
    delete_layer(vector_bj_greenrate2_layer);
    delete_layer(vector_bj_greenrate3_layer);
    delete_layer(vector_bj_greenrate4_layer);

}
