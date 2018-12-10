var image_BJ_JD_lhfg_layer = init_image_layer("BJ_JD_lhfg");
 

var vector_BJ_JD_lhfg_layer;
function add_vector_BJ_JD_lhfg_layer() {

	var featurearray = [];
	var source;
	// 矢量图层 获取gejson数据
	$.ajax({
		// url: "data/" + dataurl,
		url :  '/selectByExample_bj_jd',
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
                    绿地名称 : features[i].streetname,
					 
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

				//	}),
//
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
			vector_BJ_JD_lhfg_layer = new ol.layer.Vector({
				source : source,
				zIndex : 1002
			});
				 map.addLayer(vector_BJ_JD_lhfg_layer);
		},
		error : function() {
			alert('error');
		}
	})
	 
}
function add_BJ_JD_lhfg_layer() {

	 map.addLayer(image_BJ_JD_lhfg_layer);
	 add_vector_BJ_JD_lhfg_layer();

 
}

function delete_BJ_JD_lhfg_layer() {
    delete_layer(image_BJ_JD_lhfg_layer);
	delete_layer(vector_BJ_JD_lhfg_layer);
}