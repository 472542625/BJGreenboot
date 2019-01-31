




















var image_BJ_TB_lhfg_layer_1 = init_image_layer_CQL("BJ_TB_lhfg",'fugaiR<0.1');
var image_BJ_TB_lhfg_layer_2 = init_image_layer_CQL("BJ_TB_lhfg",'fugaiR>=0.1 and fugaiR<0.3');
var image_BJ_TB_lhfg_layer_3 = init_image_layer_CQL("BJ_TB_lhfg",'fugaiR>=0.3 and fugaiR<0.6');
var image_BJ_TB_lhfg_layer_4 = init_image_layer_CQL("BJ_TB_lhfg",'fugaiR>=0.6 and fugaiR<0.9');
var image_BJ_TB_lhfg_layer_5 = init_image_layer_CQL("BJ_TB_lhfg",'fugaiR>=0.9');


var vector_BJ_TB_lhfg_layer_clusters_1;
var vector_BJ_TB_lhfg_layer_clusters_2;
var vector_BJ_TB_lhfg_layer_clusters_3;
var vector_BJ_TB_lhfg_layer_clusters_4;
var vector_BJ_TB_lhfg_layer_clusters_5;
function add_vector_BJ_TB_lhfg_layer_1(ldl1,ldl2) {

    var featurearray = [];
    var source;
    // 矢量图层 获取gejson数据
    $.ajax({
        // url: "data/" + dataurl,
        url :  '/selectByExample_bj_tb_lhfg/'+ldl1+'/'+ldl2,
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


                    绿化覆盖率 : features[i].fugair,
                    绿地名称 : features[i].greentype


                });
                // console.log(ol.proj.fromLonLat(features[i].geometry.coordinates));

                point.setStyle(new ol.style.Style({
                    image : new ol.style.Icon({
                        // color: '#4271AE',
                        src : '/images/topic/resource_topic/park.png',
                        scale : 0.5
                    }),

                    //text : new ol.style.Text({
                    //		text : "  " + features[i].greenname + "  ",
                    //	fill : new ol.style.Fill({
                    //		color : 'white'
                    //	}),
                    //	backgroundFill : new ol.style.Fill({
                    //		color : 'rgb(0,0,0)'
                    //	}),
                    //	offsetY : 45
//
                    //	}),

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
            // vector_BJ_JD_ldl_layer = new ol.layer.Vector({
            //     source : source,
            //     zIndex : 1002
            // });
            /******聚类分析*******/


            var clusterSource = new ol.source.Cluster({
                distance: 40,
                source: source
            });

            var styleCache = {};
            vector_BJ_TB_lhfg_layer_clusters_1 =  new ol.layer.Vector({
                source: clusterSource,
                style: function(feature) {
                    var size = feature.get('features').length;

                    //console.log(feature.get('features')[0].N)
                    feature.set("绿地名称",feature.get('features')[0].N.绿地名称);
                    feature.set("绿化覆盖率",feature.get('features')[0].N.绿化覆盖率);
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
            map.addLayer(vector_BJ_TB_lhfg_layer_clusters_1);
            clusterSource.setDistance(parseInt(100, 10));
        },
        error : function() {
            alert('error');
        }
    })

}
function add_vector_BJ_TB_lhfg_layer_2(ldl1,ldl2) {

    var featurearray = [];
    var source;
    // 矢量图层 获取gejson数据
    $.ajax({
        // url: "data/" + dataurl,
        url :  '/selectByExample_bj_tb_lhfg/'+ldl1+'/'+ldl2,
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



                    绿化覆盖率 : features[i].fugair,
                    绿地名称 : features[i].greentype


                });
                // console.log(ol.proj.fromLonLat(features[i].geometry.coordinates));

                point.setStyle(new ol.style.Style({
                    image : new ol.style.Icon({
                        // color: '#4271AE',
                        src : '/images/topic/resource_topic/park.png',
                        scale : 0.5
                    }),

                    //text : new ol.style.Text({
                    //		text : "  " + features[i].greenname + "  ",
                    //	fill : new ol.style.Fill({
                    //		color : 'white'
                    //	}),
                    //	backgroundFill : new ol.style.Fill({
                    //		color : 'rgb(0,0,0)'
                    //	}),
                    //	offsetY : 45
//
                    //	}),

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
            // vector_BJ_JD_ldl_layer = new ol.layer.Vector({
            //     source : source,
            //     zIndex : 1002
            // });
            /******聚类分析*******/


            var clusterSource = new ol.source.Cluster({
                distance: 40,
                source: source
            });

            var styleCache = {};
            vector_BJ_TB_lhfg_layer_clusters_2 =  new ol.layer.Vector({
                source: clusterSource,
                style: function(feature) {
                    var size = feature.get('features').length;

                    //console.log(feature.get('features')[0].N)
                    feature.set("绿地名称",feature.get('features')[0].N.绿地名称);
                    feature.set("绿化覆盖率",feature.get('features')[0].N.绿化覆盖率);
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
            map.addLayer(vector_BJ_TB_lhfg_layer_clusters_2);
            clusterSource.setDistance(parseInt(100, 10));
        },
        error : function() {
            alert('error');
        }
    })

}
function add_vector_BJ_TB_lhfg_layer_3(ldl1,ldl2) {

    var featurearray = [];
    var source;
    // 矢量图层 获取gejson数据
    $.ajax({
        // url: "data/" + dataurl,
        url :  '/selectByExample_bj_tb_lhfg/'+ldl1+'/'+ldl2,
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



                    绿化覆盖率 : features[i].fugair,
                    绿地名称 : features[i].greentype


                });
                // console.log(ol.proj.fromLonLat(features[i].geometry.coordinates));

                point.setStyle(new ol.style.Style({
                    image : new ol.style.Icon({
                        // color: '#4271AE',
                        src : '/images/topic/resource_topic/park.png',
                        scale : 0.5
                    }),

                    //text : new ol.style.Text({
                    //		text : "  " + features[i].greenname + "  ",
                    //	fill : new ol.style.Fill({
                    //		color : 'white'
                    //	}),
                    //	backgroundFill : new ol.style.Fill({
                    //		color : 'rgb(0,0,0)'
                    //	}),
                    //	offsetY : 45
//
                    //	}),

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
            // vector_BJ_JD_ldl_layer = new ol.layer.Vector({
            //     source : source,
            //     zIndex : 1002
            // });
            /******聚类分析*******/


            var clusterSource = new ol.source.Cluster({
                distance: 40,
                source: source
            });

            var styleCache = {};
            vector_BJ_TB_lhfg_layer_clusters_3 =  new ol.layer.Vector({
                source: clusterSource,
                style: function(feature) {
                    var size = feature.get('features').length;

                    //console.log(feature.get('features')[0].N)
                    feature.set("绿地名称",feature.get('features')[0].N.绿地名称);
                    feature.set("绿化覆盖率",feature.get('features')[0].N.绿化覆盖率);
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
            map.addLayer(vector_BJ_TB_lhfg_layer_clusters_3);
            clusterSource.setDistance(parseInt(100, 10));
        },
        error : function() {
            alert('error');
        }
    })

}
function add_vector_BJ_TB_lhfg_layer_4(ldl1,ldl2) {

    var featurearray = [];
    var source;
    // 矢量图层 获取gejson数据
    $.ajax({
        // url: "data/" + dataurl,
        url :  '/selectByExample_bj_tb_lhfg/'+ldl1+'/'+ldl2,
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


                    绿化覆盖率 : features[i].fugair,
                    绿地名称 : features[i].greentype


                });
                // console.log(ol.proj.fromLonLat(features[i].geometry.coordinates));

                point.setStyle(new ol.style.Style({
                    image : new ol.style.Icon({
                        // color: '#4271AE',
                        src : '/images/topic/resource_topic/park.png',
                        scale : 0.5
                    }),

                    //text : new ol.style.Text({
                    //		text : "  " + features[i].greenname + "  ",
                    //	fill : new ol.style.Fill({
                    //		color : 'white'
                    //	}),
                    //	backgroundFill : new ol.style.Fill({
                    //		color : 'rgb(0,0,0)'
                    //	}),
                    //	offsetY : 45
//
                    //	}),

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
            // vector_BJ_JD_ldl_layer = new ol.layer.Vector({
            //     source : source,
            //     zIndex : 1002
            // });
            /******聚类分析*******/


            var clusterSource = new ol.source.Cluster({
                distance: 40,
                source: source
            });

            var styleCache = {};
            vector_BJ_TB_lhfg_layer_clusters_4 =  new ol.layer.Vector({
                source: clusterSource,
                style: function(feature) {
                    var size = feature.get('features').length;

                    //console.log(feature.get('features')[0].N)
                    feature.set("绿地名称",feature.get('features')[0].N.绿地名称);
                    feature.set("绿化覆盖率",feature.get('features')[0].N.绿化覆盖率);
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
            map.addLayer(vector_BJ_TB_lhfg_layer_clusters_4);
            clusterSource.setDistance(parseInt(100, 10));
        },
        error : function() {
            alert('error');
        }
    })

}
function add_vector_BJ_TB_lhfg_layer_5(ldl1,ldl2) {

    var featurearray = [];
    var source;
    // 矢量图层 获取gejson数据
    $.ajax({
        // url: "data/" + dataurl,
        url :  '/selectByExample_bj_tb_lhfg/'+ldl1+'/'+ldl2,
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


                    绿化覆盖率 : features[i].fugair,
                    绿地名称 : features[i].greentype


                });
                // console.log(ol.proj.fromLonLat(features[i].geometry.coordinates));

                point.setStyle(new ol.style.Style({
                    image : new ol.style.Icon({
                        // color: '#4271AE',
                        src : '/images/topic/resource_topic/park.png',
                        scale : 0.5
                    }),

                    //text : new ol.style.Text({
                    //		text : "  " + features[i].greenname + "  ",
                    //	fill : new ol.style.Fill({
                    //		color : 'white'
                    //	}),
                    //	backgroundFill : new ol.style.Fill({
                    //		color : 'rgb(0,0,0)'
                    //	}),
                    //	offsetY : 45
//
                    //	}),

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
            // vector_BJ_JD_ldl_layer = new ol.layer.Vector({
            //     source : source,
            //     zIndex : 1002
            // });
            /******聚类分析*******/


            var clusterSource = new ol.source.Cluster({
                distance: 40,
                source: source
            });

            var styleCache = {};
            vector_BJ_TB_lhfg_layer_clusters_5 =  new ol.layer.Vector({
                source: clusterSource,
                style: function(feature) {
                    var size = feature.get('features').length;

                    //console.log(feature.get('features')[0].N)
                    feature.set("绿地名称",feature.get('features')[0].N.绿地名称);
                    feature.set("绿化覆盖率",feature.get('features')[0].N.绿化覆盖率);
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
            map.addLayer(vector_BJ_TB_lhfg_layer_clusters_5);
            clusterSource.setDistance(parseInt(100, 10));
        },
        error : function() {
            alert('error');
        }
    })

}
function add_BJ_TB_lhfg_layer() {

    map.addLayer(image_BJ_TB_lhfg_layer_1);
    map.addLayer(image_BJ_TB_lhfg_layer_2);
    map.addLayer(image_BJ_TB_lhfg_layer_3);
    map.addLayer(image_BJ_TB_lhfg_layer_4);
    map.addLayer(image_BJ_TB_lhfg_layer_5);
    add_vector_BJ_TB_lhfg_layer_1(0,0.1);
    add_vector_BJ_TB_lhfg_layer_2(0.1,0.3);
    add_vector_BJ_TB_lhfg_layer_3(0.3,0.6);
    add_vector_BJ_TB_lhfg_layer_4(0.6,0.9);
    add_vector_BJ_TB_lhfg_layer_5(0.9,4);


}

function delete_BJ_TB_lhfg_layer() {
    delete_layer(image_BJ_TB_lhfg_layer_1);
    delete_layer(image_BJ_TB_lhfg_layer_2);
    delete_layer(image_BJ_TB_lhfg_layer_3);
    delete_layer(image_BJ_TB_lhfg_layer_4);
    delete_layer(image_BJ_TB_lhfg_layer_5);
    delete_layer(vector_BJ_TB_lhfg_layer_clusters_1);
    delete_layer(vector_BJ_TB_lhfg_layer_clusters_2);
    delete_layer(vector_BJ_TB_lhfg_layer_clusters_3);
    delete_layer(vector_BJ_TB_lhfg_layer_clusters_4);
    delete_layer(vector_BJ_TB_lhfg_layer_clusters_5);

}