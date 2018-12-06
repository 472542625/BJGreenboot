/**
 * 
 */


var vector_bj_yj_space_layer;
function add_bj_yj_space_layer() {
    var featurearray = [];
    var source;
    //矢量图层 获取gejson数据
    //&cql_filter=age between 0 and 60
    $.ajax({
        // url: "data/" + dataurl,
        url: '/list_bj_yj_wz_pointAll',
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
                    绿地面积: features[i].properties.greenArea,
                    绿地率: features[i].properties.greentrate,
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
                        
                        text : new ol.style.Text({
							text : "  " + features[i].properties.GREENNAME+"  ",
							fill : new ol.style.Fill({
								color : 'white'
							}),
							backgroundFill:new ol.style.Fill({
								color : 'rgb(0,0,0)'
							}),
							offsetY : 45

						}),
                        
                        fill: new ol.style.Fill({

                            color: 'rgba(157,204,16,0.8)'

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
            vector_bj_yj_space_layer = new ol.layer.Vector({
                source: source,
                zIndex: 1002
            });
            map.addLayer(vector_bj_yj_space_layer);
        },
        error: function () {
            alert('error');
        }
    })
}