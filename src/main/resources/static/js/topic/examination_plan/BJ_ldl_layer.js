/**
 * Created by Administrator on 2018/8/14/014.
 */
//var vector_BJ_ldl_layer1;
//function add_BJ_ldl_layer1() {
//
//    vector_BJ_ldl_layer1 = new ol.layer.Vector({
//        source: new ol.source.Vector({
//            format: new ol.format.GeoJSON(),
//            url: server_url+'geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=forest:BJ_ldl&outputFormat=application/json&srsname=EPSG:4326&cql_filter=greentrate between 0 and 0.07'
//        }),
//        style: function (feature, resolution) {
//            return new ol.style.Style({
//                //stroke: new ol.style.Stroke({
//                //    color: 'rgb(236,252,204)',
//                //    width: 3
//                //}),
//                fill:new ol.style.Fill({
//
//                    color:'rgba(236,252,204,0.8)'
//
//                })
//            });
//        },
//        zIndex: 999
//    });
//    map.addLayer(vector_BJ_ldl_layer1);
//
//}
//var vector_BJ_ldl_layer2;
//function add_BJ_ldl_layer2() {
//
//    vector_BJ_ldl_layer2 = new ol.layer.Vector({
//        source: new ol.source.Vector({
//            format: new ol.format.GeoJSON(),
//            url: server_url+'geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=forest:BJ_ldl&outputFormat=application/json&srsname=EPSG:4326&cql_filter=greentrate between 0.0700001 and 0.2'
//        }),
//        style: function (feature, resolution) {
//            return new ol.style.Style({
//                //stroke: new ol.style.Stroke({
//                //    color: 'rgb(218,240,158)',
//                //    width: 3
//                //}),
//                fill:new ol.style.Fill({
//
//                    color:'rgba(218,240,158,0.8)'
//
//                })
//            });
//        },
//        zIndex: 999
//    });
//    map.addLayer(vector_BJ_ldl_layer2);
//
//}
//var vector_BJ_ldl_layer3;
//function add_BJ_ldl_layer3() {
//
//    vector_BJ_ldl_layer3 = new ol.layer.Vector({
//        source: new ol.source.Vector({
//            format: new ol.format.GeoJSON(),
//            url: server_url+'geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=forest:BJ_ldl&outputFormat=application/json&srsname=EPSG:4326&cql_filter=greentrate between 0.2000001 and 0.4'
//        }),
//        style: function (feature, resolution) {
//            return new ol.style.Style({
//                //stroke: new ol.style.Stroke({
//                //    color: 'rgb(199,227,113)',
//                //    width: 3
//                //}),
//                fill:new ol.style.Fill({
//
//                    color:'rgba(199,227,113,0.8)'
//
//                })
//            });
//        },
//        zIndex: 999
//    });
//    map.addLayer(vector_BJ_ldl_layer3);
//
//}
//var vector_BJ_ldl_layer4;
//function add_BJ_ldl_layer4() {
//
//    vector_BJ_ldl_layer4 = new ol.layer.Vector({
//        source: new ol.source.Vector({
//            format: new ol.format.GeoJSON(),
//            url: server_url+'geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=forest:BJ_ldl&outputFormat=application/json&srsname=EPSG:4326&cql_filter=greentrate between 0.400001 and 0.7'
//        }),
//        style: function (feature, resolution) {
//            return new ol.style.Style({
//                //stroke: new ol.style.Stroke({
//                //    color: 'rgb(180,217,69)',
//                //    width: 3
//                //}),
//                fill:new ol.style.Fill({
//
//                    color:'rgba(180,217,69,0.8)'
//
//                })
//            });
//        },
//        zIndex: 999
//    });
//    map.addLayer(vector_BJ_ldl_layer4);
//
//}
//var vector_BJ_ldl_layer5;
//function add_BJ_ldl_layer5() {
//
//    vector_BJ_ldl_layer5 = new ol.layer.Vector({
//        source: new ol.source.Vector({
//            format: new ol.format.GeoJSON(),
//            url: server_url+'geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=forest:BJ_ldl&outputFormat=application/json&srsname=EPSG:4326&cql_filter=greentrate between 0.700001 and 1'
//        }),
//        style: function (feature, resolution) {
//            return new ol.style.Style({
//                //stroke: new ol.style.Stroke({
//                //    color: 'rgb(157,204,16)',
//                //    width: 3
//                //}),
//                fill:new ol.style.Fill({
//
//                    color:'rgba(157,204,16,0.8)'
//
//                })
//            });
//        },
//        zIndex: 999
//    });
//    map.addLayer(vector_BJ_ldl_layer5);
//
//}



var vector_BJ_ldl_layer1_2018;
function add_BJ_ldl_layer1_2018() {
    var featurearray = [];
    var source;
    //矢量图层 获取gejson数据
    //&cql_filter=age between 0 and 60
    $.ajax({
        // url: "data/" + dataurl,
        url: server_url+'geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=forest:BJ_ldl&outputFormat=application/json&srsname=EPSG:4326&cql_filter=greentrate between 0 and 0.07',
        type: "GET",
        success: function (result) {

            var features = result.features;
            var coord_first = [];


            for (var i = 0; i < features.length; i++) {
                var coord_second = [];

                for (var j = 0; j < features[i].geometry.coordinates[0][0].length; j++) {

                    coord_second.push(ol.proj.fromLonLat(features[i].geometry.coordinates[0][0][j]));
                }

                coord_first.push(coord_second);


            }
            for (var i = 0; i < coord_first.length; i++) {

                var polygon = new ol.Feature({


                    geometry: new ol.geom.Polygon([coord_first[i]]),
                    地物名称: features[i].properties.GREENNAME,
                    绿地面积:features[i].properties.greenArea,
                    绿地率:features[i].properties.greentrate,

                });


                polygon.setStyle(new ol.style.Style({


                        text: new ol.style.Text({
                            text: "" + features[i].properties.GREENNAME,
                            fill: new ol.style.Fill({
                                color: 'black'
                            })
                        }),
                        fill: new ol.style.Fill({

                            color:'rgba(236,252,204,0.8)'

                        }),
                        //stroke: new ol.style.Stroke({
                        //    color: '#ff0000'
                        //})

                    })
                );
                featurearray.push(polygon);

            }

            //alert(featurearray.length);
            source = new ol.source.Vector({
                features: featurearray
            });
            vector_BJ_ldl_layer1_2018 = new ol.layer.Vector({
                source: source,
                zIndex: 1002
            });
            map1.addLayer(vector_BJ_ldl_layer1_2018);
        },
        error: function () {
            alert('error');
        }
    })
}
var vector_BJ_ldl_layer2_2018;
function add_BJ_ldl_layer2_2018() {
    var featurearray = [];
    var source;
    //矢量图层 获取gejson数据
    //&cql_filter=age between 0 and 60
    $.ajax({
        // url: "data/" + dataurl,
        url: server_url+'geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=forest:BJ_ldl&outputFormat=application/json&srsname=EPSG:4326&cql_filter=greentrate between 0.0700001 and 0.2',
        type: "GET",
        success: function (result) {

            var features = result.features;
            var coord_first = [];


            for (var i = 0; i < features.length; i++) {
                var coord_second = [];

                for (var j = 0; j < features[i].geometry.coordinates[0][0].length; j++) {

                    coord_second.push(ol.proj.fromLonLat(features[i].geometry.coordinates[0][0][j]));
                }

                coord_first.push(coord_second);


            }
            // console.log(coord_first[0]);
            for (var i = 0; i < coord_first.length; i++) {

                var polygon = new ol.Feature({


                    geometry: new ol.geom.Polygon([coord_first[i]]),
                    地物名称: features[i].properties.GREENNAME,
                    绿地面积:features[i].properties.greenArea,
                    绿地率:features[i].properties.greentrate,
                });


                polygon.setStyle(new ol.style.Style({
                        //image: new ol.style.Icon({
                        //    //color: '#4271AE',
                        //    src: 'images/olimg/park.png',
                        //    scale: 0.1
                        //}),

                        text: new ol.style.Text({
                            text: "" + features[i].properties.GREENNAME,
                            fill: new ol.style.Fill({
                                color: 'black'
                            })
                        }),
                        fill: new ol.style.Fill({

                            color:'rgba(218,240,158,0.8)'

                        }),
                        //stroke: new ol.style.Stroke({
                        //    color: '#ff0000'
                        //})

                    })
                );
                featurearray.push(polygon);

            }

            //alert(featurearray.length);
            source = new ol.source.Vector({
                features: featurearray
            });
            vector_BJ_ldl_layer2_2018 = new ol.layer.Vector({
                source: source,
                zIndex: 1002
            });
            map1.addLayer(vector_BJ_ldl_layer2_2018);
        },
        error: function () {
            alert('error');
        }
    })
}
var vector_BJ_ldl_layer3_2018;
function add_BJ_ldl_layer3_2018() {
    var featurearray = [];
    var source;
    //矢量图层 获取gejson数据
    //&cql_filter=age between 0 and 60
    $.ajax({
        // url: "data/" + dataurl,
        url: server_url+'geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=forest:BJ_ldl&outputFormat=application/json&srsname=EPSG:4326&cql_filter=greentrate between 0.200001 and 0.4',
        type: "GET",
        success: function (result) {

            var features = result.features;
            var coord_first = [];


            for (var i = 0; i < features.length; i++) {
                var coord_second = [];

                for (var j = 0; j < features[i].geometry.coordinates[0][0].length; j++) {

                    coord_second.push(ol.proj.fromLonLat(features[i].geometry.coordinates[0][0][j]));
                }

                coord_first.push(coord_second);


            }
            // console.log(coord_first[0]);
            for (var i = 0; i < coord_first.length; i++) {

                var polygon = new ol.Feature({

                    geometry: new ol.geom.Polygon([coord_first[i]]),
                    地物名称: features[i].properties.GREENNAME,
                    绿地面积:features[i].properties.greenArea,
                    绿地率:features[i].properties.greentrate,
                });


                polygon.setStyle(new ol.style.Style({
                        //image: new ol.style.Icon({
                        //    //color: '#4271AE',
                        //    src: 'images/olimg/park.png',
                        //    scale: 0.1
                        //}),

                        text: new ol.style.Text({
                            text: "" + features[i].properties.GREENNAME,
                            fill: new ol.style.Fill({
                                color: 'black'
                            })
                        }),
                        fill: new ol.style.Fill({

                            color:'rgba(180,217,69,0.8)'

                        }),
                        //stroke: new ol.style.Stroke({
                        //    color: '#ff0000'
                        //})

                    })
                );
                featurearray.push(polygon);

            }

            //alert(featurearray.length);
            source = new ol.source.Vector({
                features: featurearray
            });
            vector_BJ_ldl_layer3_2018 = new ol.layer.Vector({
                source: source,
                zIndex: 1002
            });
            map1.addLayer(vector_BJ_ldl_layer3_2018);
        },
        error: function () {
            alert('error');
        }
    })
}
var vector_BJ_ldl_layer4_2018;
function add_BJ_ldl_layer4_2018() {
    var featurearray = [];
    var source;
    //矢量图层 获取gejson数据
    //&cql_filter=age between 0 and 60
    $.ajax({
        // url: "data/" + dataurl,
        url: server_url+'geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=forest:BJ_ldl&outputFormat=application/json&srsname=EPSG:4326&cql_filter=greentrate between 0.400001 and 0.7',
        type: "GET",
        success: function (result) {

            var features = result.features;
            var coord_first = [];


            for (var i = 0; i < features.length; i++) {
                var coord_second = [];

                for (var j = 0; j < features[i].geometry.coordinates[0][0].length; j++) {

                    coord_second.push(ol.proj.fromLonLat(features[i].geometry.coordinates[0][0][j]));
                }

                coord_first.push(coord_second);


            }
            // console.log(coord_first[0]);
            for (var i = 0; i < coord_first.length; i++) {

                var polygon = new ol.Feature({

                    geometry: new ol.geom.Polygon([coord_first[i]]),
                    地物名称: features[i].properties.GREENNAME,
                    绿地面积:features[i].properties.greenArea,
                    绿地率:features[i].properties.greentrate,
                });


                polygon.setStyle(new ol.style.Style({
                        //image: new ol.style.Icon({
                        //    //color: '#4271AE',
                        //    src: 'images/olimg/park.png',
                        //    scale: 0.1
                        //}),

                        text: new ol.style.Text({
                            text: "" + features[i].properties.GREENNAME,
                            fill: new ol.style.Fill({
                                color: 'black'
                            })
                        }),
                        fill: new ol.style.Fill({

                            color:'rgba(180,217,69,0.8)'

                        }),
                        //stroke: new ol.style.Stroke({
                        //    color: '#ff0000'
                        //})

                    })
                );
                featurearray.push(polygon);

            }

            //alert(featurearray.length);
            source = new ol.source.Vector({
                features: featurearray
            });
            vector_BJ_ldl_layer4_2018 = new ol.layer.Vector({
                source: source,
                zIndex: 1002
            });
            map1.addLayer(vector_BJ_ldl_layer4_2018);
        },
        error: function () {
            alert('error');
        }
    })
}
var vector_BJ_ldl_layer5_2018;
function add_BJ_ldl_layer5_2018() {
    var featurearray = [];
    var source;
    //矢量图层 获取gejson数据
    //&cql_filter=age between 0 and 60
    $.ajax({
        // url: "data/" + dataurl,
        url: server_url+'geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=forest:BJ_ldl&outputFormat=application/json&srsname=EPSG:4326&cql_filter=greentrate between 0.700001 and 1',
        type: "GET",
        success: function (result) {

            var features = result.features;
            var coord_first = [];


            for (var i = 0; i < features.length; i++) {
                var coord_second = [];

                for (var j = 0; j < features[i].geometry.coordinates[0][0].length; j++) {

                    coord_second.push(ol.proj.fromLonLat(features[i].geometry.coordinates[0][0][j]));
                }

                coord_first.push(coord_second);


            }
            for (var i = 0; i < coord_first.length; i++) {

                var polygon = new ol.Feature({


                    geometry: new ol.geom.Polygon([coord_first[i]]),
                    地物名称: features[i].properties.GREENNAME,
                    绿地面积:features[i].properties.greenArea,
                    绿地率:features[i].properties.greentrate,
                });


                polygon.setStyle(new ol.style.Style({
                        //image: new ol.style.Icon({
                        //    //color: '#4271AE',
                        //    src: 'images/olimg/park.png',
                        //    scale: 0.1
                        //}),

                        text: new ol.style.Text({
                            text: "" + features[i].properties.GREENNAME,
                            fill: new ol.style.Fill({
                                color: 'black'
                            })
                        }),
                        fill: new ol.style.Fill({

                            color:'rgba(157,204,16,0.8)'

                        }),
                        //stroke: new ol.style.Stroke({
                        //    color: '#ff0000'
                        //})

                    })
                );
                featurearray.push(polygon);

            }

            //alert(featurearray.length);
            source = new ol.source.Vector({
                features: featurearray
            });
            vector_BJ_ldl_layer5_2018 = new ol.layer.Vector({
                source: source,
                zIndex: 1002
            });
            map1.addLayer(vector_BJ_ldl_layer5_2018);
        },
        error: function () {
            alert('error');
        }
    })
}


var vector_BJ_ldl_layer1_2017;
function add_BJ_ldl_layer1_2017() {
    var featurearray = [];
    var source;
    //矢量图层 获取gejson数据
    //&cql_filter=age between 0 and 60
    $.ajax({
        // url: "data/" + dataurl,
        url: server_url+'geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=forest:BJ_2017&outputFormat=application/json&srsname=EPSG:4326&cql_filter=greenrate between 0 and 0.07',
        type: "GET",
        success: function (result) {

            var features = result.features;
            var coord_first = [];


            for (var i = 0; i < features.length; i++) {
                var coord_second = [];

                for (var j = 0; j < features[i].geometry.coordinates[0][0].length; j++) {

                    coord_second.push(ol.proj.fromLonLat(features[i].geometry.coordinates[0][0][j]));
                }

                coord_first.push(coord_second);


            }
            for (var i = 0; i < coord_first.length; i++) {

                var polygon = new ol.Feature({


                    geometry: new ol.geom.Polygon([coord_first[i]]),
                    地物名称: features[i].properties.GREENNAME,
                    绿地面积:features[i].properties.SUM_绿地面,
                    绿地率:features[i].properties.greenrate,

                });


                polygon.setStyle(new ol.style.Style({


                        text: new ol.style.Text({
                            text: "" + features[i].properties.GREENNAME,
                            fill: new ol.style.Fill({
                                color: 'black'
                            })
                        }),
                        fill: new ol.style.Fill({

                            color:'rgba(236,252,204,0.8)'

                        }),
                        //stroke: new ol.style.Stroke({
                        //    color: '#ff0000'
                        //})

                    })
                );
                featurearray.push(polygon);

            }

            //alert(featurearray.length);
            source = new ol.source.Vector({
                features: featurearray
            });
            vector_BJ_ldl_layer1_2017 = new ol.layer.Vector({
                source: source,
                zIndex: 1002
            });
            map2.addLayer(vector_BJ_ldl_layer1_2017);
        },
        error: function () {
            alert('error');
        }
    })
}
var vector_BJ_ldl_layer2_2017;
function add_BJ_ldl_layer2_2017() {
    var featurearray = [];
    var source;
    //矢量图层 获取gejson数据
    //&cql_filter=age between 0 and 60
    $.ajax({
        // url: "data/" + dataurl,
        url: server_url+'geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=forest:BJ_2017&outputFormat=application/json&srsname=EPSG:4326&cql_filter=greenrate between 0.0700001 and 0.2',
        type: "GET",
        success: function (result) {

            var features = result.features;
            var coord_first = [];


            for (var i = 0; i < features.length; i++) {
                var coord_second = [];

                for (var j = 0; j < features[i].geometry.coordinates[0][0].length; j++) {

                    coord_second.push(ol.proj.fromLonLat(features[i].geometry.coordinates[0][0][j]));
                }

                coord_first.push(coord_second);


            }
            // console.log(coord_first[0]);
            for (var i = 0; i < coord_first.length; i++) {

                var polygon = new ol.Feature({


                    geometry: new ol.geom.Polygon([coord_first[i]]),
                    地物名称: features[i].properties.GREENNAME,
                    绿地面积:features[i].properties.SUM_绿地面,
                    绿地率:features[i].properties.greenrate,
                });


                polygon.setStyle(new ol.style.Style({
                        //image: new ol.style.Icon({
                        //    //color: '#4271AE',
                        //    src: 'images/olimg/park.png',
                        //    scale: 0.1
                        //}),

                        text: new ol.style.Text({
                            text: "" + features[i].properties.GREENNAME,
                            fill: new ol.style.Fill({
                                color: 'black'
                            })
                        }),
                        fill: new ol.style.Fill({

                            color:'rgba(218,240,158,0.8)'

                        }),
                        //stroke: new ol.style.Stroke({
                        //    color: '#ff0000'
                        //})

                    })
                );
                featurearray.push(polygon);

            }

            //alert(featurearray.length);
            source = new ol.source.Vector({
                features: featurearray
            });
            vector_BJ_ldl_layer2_2017 = new ol.layer.Vector({
                source: source,
                zIndex: 1002
            });
            map2.addLayer(vector_BJ_ldl_layer2_2017);
        },
        error: function () {
            alert('error');
        }
    })
}
var vector_BJ_ldl_layer3_2017;
function add_BJ_ldl_layer3_2017() {
    var featurearray = [];
    var source;
    //矢量图层 获取gejson数据
    //&cql_filter=age between 0 and 60
    $.ajax({
        // url: "data/" + dataurl,
        url: server_url+'geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=forest:BJ_2017&outputFormat=application/json&srsname=EPSG:4326&cql_filter=greenrate between 0.200001 and 0.4',
        type: "GET",
        success: function (result) {

            var features = result.features;
            var coord_first = [];


            for (var i = 0; i < features.length; i++) {
                var coord_second = [];

                for (var j = 0; j < features[i].geometry.coordinates[0][0].length; j++) {

                    coord_second.push(ol.proj.fromLonLat(features[i].geometry.coordinates[0][0][j]));
                }

                coord_first.push(coord_second);


            }
            // console.log(coord_first[0]);
            for (var i = 0; i < coord_first.length; i++) {

                var polygon = new ol.Feature({

                    geometry: new ol.geom.Polygon([coord_first[i]]),
                    地物名称: features[i].properties.GREENNAME,
                    绿地面积:features[i].properties.SUM_绿地面,
                    绿地率:features[i].properties.greenrate,
                });


                polygon.setStyle(new ol.style.Style({
                        //image: new ol.style.Icon({
                        //    //color: '#4271AE',
                        //    src: 'images/olimg/park.png',
                        //    scale: 0.1
                        //}),

                        text: new ol.style.Text({
                            text: "" + features[i].properties.GREENNAME,
                            fill: new ol.style.Fill({
                                color: 'black'
                            })
                        }),
                        fill: new ol.style.Fill({

                            color:'rgba(180,217,69,0.8)'

                        }),
                        //stroke: new ol.style.Stroke({
                        //    color: '#ff0000'
                        //})

                    })
                );
                featurearray.push(polygon);

            }

            //alert(featurearray.length);
            source = new ol.source.Vector({
                features: featurearray
            });
            vector_BJ_ldl_layer3_2017 = new ol.layer.Vector({
                source: source,
                zIndex: 1002
            });
            map2.addLayer(vector_BJ_ldl_layer3_2017);
        },
        error: function () {
            alert('error');
        }
    })
}
var vector_BJ_ldl_layer4_2017;
function add_BJ_ldl_layer4_2017() {
    var featurearray = [];
    var source;
    //矢量图层 获取gejson数据
    //&cql_filter=age between 0 and 60
    $.ajax({
        // url: "data/" + dataurl,
        url: server_url+'geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=forest:BJ_2017&outputFormat=application/json&srsname=EPSG:4326&cql_filter=greenrate between 0.400001 and 0.7',
        type: "GET",
        success: function (result) {

            var features = result.features;
            var coord_first = [];


            for (var i = 0; i < features.length; i++) {
                var coord_second = [];

                for (var j = 0; j < features[i].geometry.coordinates[0][0].length; j++) {

                    coord_second.push(ol.proj.fromLonLat(features[i].geometry.coordinates[0][0][j]));
                }

                coord_first.push(coord_second);


            }
            // console.log(coord_first[0]);
            for (var i = 0; i < coord_first.length; i++) {

                var polygon = new ol.Feature({

                    geometry: new ol.geom.Polygon([coord_first[i]]),
                    地物名称: features[i].properties.GREENNAME,
                    绿地面积:features[i].properties.SUM_绿地面,
                    绿地率:features[i].properties.greenrate,
                });


                polygon.setStyle(new ol.style.Style({
                        //image: new ol.style.Icon({
                        //    //color: '#4271AE',
                        //    src: 'images/olimg/park.png',
                        //    scale: 0.1
                        //}),

                        text: new ol.style.Text({
                            text: "" + features[i].properties.GREENNAME,
                            fill: new ol.style.Fill({
                                color: 'black'
                            })
                        }),
                        fill: new ol.style.Fill({

                            color:'rgba(180,217,69,0.8)'

                        }),
                        //stroke: new ol.style.Stroke({
                        //    color: '#ff0000'
                        //})

                    })
                );
                featurearray.push(polygon);

            }

            //alert(featurearray.length);
            source = new ol.source.Vector({
                features: featurearray
            });
            vector_BJ_ldl_layer4_2017 = new ol.layer.Vector({
                source: source,
                zIndex: 1002
            });
            map2.addLayer(vector_BJ_ldl_layer4_2017);
        },
        error: function () {
            alert('error');
        }
    })
}
var vector_BJ_ldl_layer5_2017;
function add_BJ_ldl_layer5_2017() {
    var featurearray = [];
    var source;
    //矢量图层 获取gejson数据
    //&cql_filter=age between 0 and 60
    $.ajax({
        // url: "data/" + dataurl,
        url: server_url+'geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=forest:BJ_2017&outputFormat=application/json&srsname=EPSG:4326&cql_filter=greenrate between 0.700001 and 1',
        type: "GET",
        success: function (result) {

            var features = result.features;
            var coord_first = [];


            for (var i = 0; i < features.length; i++) {
                var coord_second = [];

                for (var j = 0; j < features[i].geometry.coordinates[0][0].length; j++) {

                    coord_second.push(ol.proj.fromLonLat(features[i].geometry.coordinates[0][0][j]));
                }

                coord_first.push(coord_second);


            }
            for (var i = 0; i < coord_first.length; i++) {

                var polygon = new ol.Feature({


                    geometry: new ol.geom.Polygon([coord_first[i]]),
                    地物名称: features[i].properties.GREENNAME,
                    绿地面积:features[i].properties.SUM_绿地面,
                    绿地率:features[i].properties.greenrate,
                });


                polygon.setStyle(new ol.style.Style({
                        //image: new ol.style.Icon({
                        //    //color: '#4271AE',
                        //    src: 'images/olimg/park.png',
                        //    scale: 0.1
                        //}),

                        text: new ol.style.Text({
                            text: "" + features[i].properties.GREENNAME,
                            fill: new ol.style.Fill({
                                color: 'black'
                            })
                        }),
                        fill: new ol.style.Fill({

                            color:'rgba(157,204,16,0.8)'

                        }),
                        //stroke: new ol.style.Stroke({
                        //    color: '#ff0000'
                        //})

                    })
                );
                featurearray.push(polygon);

            }

            //alert(featurearray.length);
            source = new ol.source.Vector({
                features: featurearray
            });
            vector_BJ_ldl_layer5_2017 = new ol.layer.Vector({
                source: source,
                zIndex: 1002
            });
            map2.addLayer(vector_BJ_ldl_layer5_2017);
        },
        error: function () {
            alert('error');
        }
    })
}




var vector_BJ_ldl_layer1_plan;
function add_BJ_ldl_layer1_plan() {
    var featurearray = [];
    var source;
    //矢量图层 获取gejson数据
    //&cql_filter=age between 0 and 60
    $.ajax({
        // url: "data/" + dataurl,
        url: server_url+'geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=forest:BJ_plan&outputFormat=application/json&srsname=EPSG:4326&cql_filter=greenrate between 0 and 0.07',
        type: "GET",
        success: function (result) {

            var features = result.features;
            var coord_first = [];


            for (var i = 0; i < features.length; i++) {
                var coord_second = [];

                for (var j = 0; j < features[i].geometry.coordinates[0][0].length; j++) {

                    coord_second.push(ol.proj.fromLonLat(features[i].geometry.coordinates[0][0][j]));
                }

                coord_first.push(coord_second);


            }
            for (var i = 0; i < coord_first.length; i++) {

                var polygon = new ol.Feature({


                    geometry: new ol.geom.Polygon([coord_first[i]]),
                    地物名称: features[i].properties.GREENNAME,
                    //绿地面积:features[i].properties.greenArea,
                    绿地率:features[i].properties.greenrate,

                });


                polygon.setStyle(new ol.style.Style({


                        text: new ol.style.Text({
                            text: "" + features[i].properties.GREENNAME,
                            fill: new ol.style.Fill({
                                color: 'black'
                            })
                        }),
                        fill: new ol.style.Fill({

                            color:'rgba(236,252,204,0.8)'

                        }),
                        //stroke: new ol.style.Stroke({
                        //    color: '#ff0000'
                        //})

                    })
                );
                featurearray.push(polygon);

            }

            //alert(featurearray.length);
            source = new ol.source.Vector({
                features: featurearray
            });
            vector_BJ_ldl_layer1_plan = new ol.layer.Vector({
                source: source,
                zIndex: 1002
            });
            map3.addLayer(vector_BJ_ldl_layer1_plan);
        },
        error: function () {
            alert('error');
        }
    })
}
var vector_BJ_ldl_layer2_plan;
function add_BJ_ldl_layer2_plan() {
    var featurearray = [];
    var source;
    //矢量图层 获取gejson数据
    //&cql_filter=age between 0 and 60
    $.ajax({
        // url: "data/" + dataurl,
        url: server_url+'geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=forest:BJ_plan&outputFormat=application/json&srsname=EPSG:4326&cql_filter=greenrate between 0.0700001 and 0.2',
        type: "GET",
        success: function (result) {

            var features = result.features;
            var coord_first = [];


            for (var i = 0; i < features.length; i++) {
                var coord_second = [];

                for (var j = 0; j < features[i].geometry.coordinates[0][0].length; j++) {

                    coord_second.push(ol.proj.fromLonLat(features[i].geometry.coordinates[0][0][j]));
                }

                coord_first.push(coord_second);


            }
            // console.log(coord_first[0]);
            for (var i = 0; i < coord_first.length; i++) {

                var polygon = new ol.Feature({


                    geometry: new ol.geom.Polygon([coord_first[i]]),
                    地物名称: features[i].properties.GREENNAME,
                    //绿地面积:features[i].properties.greenArea,
                    绿地率:features[i].properties.greenrate,
                });


                polygon.setStyle(new ol.style.Style({
                        //image: new ol.style.Icon({
                        //    //color: '#4271AE',
                        //    src: 'images/olimg/park.png',
                        //    scale: 0.1
                        //}),

                        text: new ol.style.Text({
                            text: "" + features[i].properties.GREENNAME,
                            fill: new ol.style.Fill({
                                color: 'black'
                            })
                        }),
                        fill: new ol.style.Fill({

                            color:'rgba(218,240,158,0.8)'

                        }),
                        //stroke: new ol.style.Stroke({
                        //    color: '#ff0000'
                        //})

                    })
                );
                featurearray.push(polygon);

            }

            //alert(featurearray.length);
            source = new ol.source.Vector({
                features: featurearray
            });
            vector_BJ_ldl_layer2_plan = new ol.layer.Vector({
                source: source,
                zIndex: 1002
            });
            map3.addLayer(vector_BJ_ldl_layer2_plan);
        },
        error: function () {
            alert('error');
        }
    })
}
var vector_BJ_ldl_layer3_plan;
function add_BJ_ldl_layer3_plan() {
    var featurearray = [];
    var source;
    //矢量图层 获取gejson数据
    //&cql_filter=age between 0 and 60
    $.ajax({
        // url: "data/" + dataurl,
        url: server_url+'geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=forest:BJ_plan&outputFormat=application/json&srsname=EPSG:4326&cql_filter=greenrate between 0.200001 and 0.4',
        type: "GET",
        success: function (result) {

            var features = result.features;
            var coord_first = [];


            for (var i = 0; i < features.length; i++) {
                var coord_second = [];

                for (var j = 0; j < features[i].geometry.coordinates[0][0].length; j++) {

                    coord_second.push(ol.proj.fromLonLat(features[i].geometry.coordinates[0][0][j]));
                }

                coord_first.push(coord_second);


            }
            // console.log(coord_first[0]);
            for (var i = 0; i < coord_first.length; i++) {

                var polygon = new ol.Feature({

                    geometry: new ol.geom.Polygon([coord_first[i]]),
                    地物名称: features[i].properties.GREENNAME,
                    //绿地面积:features[i].properties.greenArea,
                    绿地率:features[i].properties.greenrate,
                });


                polygon.setStyle(new ol.style.Style({
                        //image: new ol.style.Icon({
                        //    //color: '#4271AE',
                        //    src: 'images/olimg/park.png',
                        //    scale: 0.1
                        //}),

                        text: new ol.style.Text({
                            text: "" + features[i].properties.GREENNAME,
                            fill: new ol.style.Fill({
                                color: 'black'
                            })
                        }),
                        fill: new ol.style.Fill({

                            color:'rgba(180,217,69,0.8)'

                        }),
                        //stroke: new ol.style.Stroke({
                        //    color: '#ff0000'
                        //})

                    })
                );
                featurearray.push(polygon);

            }

            //alert(featurearray.length);
            source = new ol.source.Vector({
                features: featurearray
            });
            vector_BJ_ldl_layer3_plan = new ol.layer.Vector({
                source: source,
                zIndex: 1002
            });
            map3.addLayer(vector_BJ_ldl_layer3_plan);
        },
        error: function () {
            alert('error');
        }
    })
}
var vector_BJ_ldl_layer4_plan;
function add_BJ_ldl_layer4_plan() {
    var featurearray = [];
    var source;
    //矢量图层 获取gejson数据
    //&cql_filter=age between 0 and 60
    $.ajax({
        // url: "data/" + dataurl,
        url: server_url+'geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=forest:BJ_plan&outputFormat=application/json&srsname=EPSG:4326&cql_filter=greenrate between 0.400001 and 0.7',
        type: "GET",
        success: function (result) {

            var features = result.features;
            var coord_first = [];


            for (var i = 0; i < features.length; i++) {
                var coord_second = [];

                for (var j = 0; j < features[i].geometry.coordinates[0][0].length; j++) {

                    coord_second.push(ol.proj.fromLonLat(features[i].geometry.coordinates[0][0][j]));
                }

                coord_first.push(coord_second);


            }
            // console.log(coord_first[0]);
            for (var i = 0; i < coord_first.length; i++) {

                var polygon = new ol.Feature({

                    geometry: new ol.geom.Polygon([coord_first[i]]),
                    地物名称: features[i].properties.GREENNAME,
                    //绿地面积:features[i].properties.greenArea,
                    绿地率:features[i].properties.greenrate,
                });


                polygon.setStyle(new ol.style.Style({
                        //image: new ol.style.Icon({
                        //    //color: '#4271AE',
                        //    src: 'images/olimg/park.png',
                        //    scale: 0.1
                        //}),

                        text: new ol.style.Text({
                            text: "" + features[i].properties.GREENNAME,
                            fill: new ol.style.Fill({
                                color: 'black'
                            })
                        }),
                        fill: new ol.style.Fill({

                            color:'rgba(180,217,69,0.8)'

                        }),
                        //stroke: new ol.style.Stroke({
                        //    color: '#ff0000'
                        //})

                    })
                );
                featurearray.push(polygon);

            }

            //alert(featurearray.length);
            source = new ol.source.Vector({
                features: featurearray
            });
            vector_BJ_ldl_layer4_plan = new ol.layer.Vector({
                source: source,
                zIndex: 1002
            });
            map3.addLayer(vector_BJ_ldl_layer4_plan);
        },
        error: function () {
            alert('error');
        }
    })
}
var vector_BJ_ldl_layer5_plan;
function add_BJ_ldl_layer5_plan() {
    var featurearray = [];
    var source;
    //矢量图层 获取gejson数据
    //&cql_filter=age between 0 and 60
    $.ajax({
        // url: "data/" + dataurl,
        url: server_url+'geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=forest:BJ_plan&outputFormat=application/json&srsname=EPSG:4326&cql_filter=greenrate between 0.700001 and 1',
        type: "GET",
        success: function (result) {

            var features = result.features;
            var coord_first = [];


            for (var i = 0; i < features.length; i++) {
                var coord_second = [];

                for (var j = 0; j < features[i].geometry.coordinates[0][0].length; j++) {

                    coord_second.push(ol.proj.fromLonLat(features[i].geometry.coordinates[0][0][j]));
                }

                coord_first.push(coord_second);


            }
            for (var i = 0; i < coord_first.length; i++) {

                var polygon = new ol.Feature({


                    geometry: new ol.geom.Polygon([coord_first[i]]),
                    地物名称: features[i].properties.GREENNAME,
                    //绿地面积:features[i].properties.greenArea,
                    绿地率:features[i].properties.greenrate,
                });


                polygon.setStyle(new ol.style.Style({
                        //image: new ol.style.Icon({
                        //    //color: '#4271AE',
                        //    src: 'images/olimg/park.png',
                        //    scale: 0.1
                        //}),

                        text: new ol.style.Text({
                            text: "" + features[i].properties.GREENNAME,
                            fill: new ol.style.Fill({
                                color: 'black'
                            })
                        }),
                        fill: new ol.style.Fill({

                            color:'rgba(157,204,16,0.8)'

                        }),
                        //stroke: new ol.style.Stroke({
                        //    color: '#ff0000'
                        //})

                    })
                );
                featurearray.push(polygon);

            }

            //alert(featurearray.length);
            source = new ol.source.Vector({
                features: featurearray
            });
            vector_BJ_ldl_layer5_plan = new ol.layer.Vector({
                source: source,
                zIndex: 1002
            });
            map3.addLayer(vector_BJ_ldl_layer5_plan);
        },
        error: function () {
            alert('error');
        }
    })
}
function add_BJ_ldl_layer(){

    add_BJ_ldl_layer1_2018();
    add_BJ_ldl_layer2_2018();
    add_BJ_ldl_layer3_2018();
    add_BJ_ldl_layer4_2018();
    add_BJ_ldl_layer5_2018()

    add_BJ_ldl_layer1_2017();
    add_BJ_ldl_layer2_2017();
    add_BJ_ldl_layer3_2017();
    add_BJ_ldl_layer4_2017();
    add_BJ_ldl_layer5_2017()

    add_BJ_ldl_layer1_plan();
    add_BJ_ldl_layer2_plan();
    add_BJ_ldl_layer3_plan();
    add_BJ_ldl_layer4_plan();
    add_BJ_ldl_layer5_plan()



}

function delete_BJ_ldl_layer(){

    delete_layer(vector_BJ_ldl_layer1_2018);
    delete_layer(vector_BJ_ldl_layer2_2018);
    delete_layer(vector_BJ_ldl_layer3_2018);
    delete_layer(vector_BJ_ldl_layer4_2018);
    delete_layer(vector_BJ_ldl_layer5_2018);

    delete_layer(vector_BJ_ldl_layer1_2017);
    delete_layer(vector_BJ_ldl_layer2_2017);
    delete_layer(vector_BJ_ldl_layer3_2017);
    delete_layer(vector_BJ_ldl_layer4_2017);
    delete_layer(vector_BJ_ldl_layer5_2017);


    delete_layer(vector_BJ_ldl_layer1_plan);
    delete_layer(vector_BJ_ldl_layer2_plan);
    delete_layer(vector_BJ_ldl_layer3_plan);
    delete_layer(vector_BJ_ldl_layer4_plan);
    delete_layer(vector_BJ_ldl_layer5_plan);


}