
 

var vector_bj_dt_video_layer;
function add_vector_bj_dt_video_layer() {

	var featurearray = [];
	var source;
	// 矢量图层 获取gejson数据
	$.ajax({
		// url: "data/" + dataurl,
		url : '/selectExamplebj_dt_video',
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
                    bj_dt_video:"bj_dt_video",
                    path : features[i].path,
                    name:features[i].name,
					 
				});
				// console.log(ol.proj.fromLonLat(features[i].geometry.coordinates));

				point.setStyle(new ol.style.Style({
					image : new ol.style.Icon({
						// color: '#4271AE',
						src : '/images/topic/resource_topic/park.png',
						scale : 0.5
					}),

					text : new ol.style.Text({
						text : "  " + features[i].name + "  ",
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
			vector_BJ_TB_ldl_layer = new ol.layer.Vector({
				source : source,
				zIndex : 1002
			});
			 map.addLayer(vector_BJ_TB_ldl_layer);
		},
		error : function() {
			alert('error');
		}
	})
	 
}
function add_bj_dt_video_layer() {


	 add_vector_bj_dt_video_layer()
 
}

function delete_bj_dt_video_layer() {

	delete_layer(vector_bj_dt_video_layer);
}