var vector_BJ_LD_GSMM_layer;
function add_BJ_LD_GSMM_layer() {
var featurearray = [];
	var source;
	// 矢量图层 获取gejson数据
	$.ajax({
		// url: "data/" + dataurl,
		url : '/selectByExamplebj_ld_gsmm',
		type : "GET",
		success : function(result) {
		console.log(result);
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
					ordinate : features[i].ordinate,
					abscisa : features[i].abscisa,
					treeid : features[i].treeid,
					treetype : features[i].treetype,
					town : features[i].town,
					location: features[i].location,
					height : features[i].height,
					diameter : features[i].diameter,
					crown : features[i].crown,
				 
					state : features[i].state,
					environmen : features[i].environmen,
					ghdw : features[i].ghdw,
					owner : features[i].owner,
					level : features[i].level,
					hl : features[i].hl,
					zc : features[i].zc,
				    fdsd : features[i].fdsd,
				    sc : features[i].sc,
				    sg : features[i].sg,
					oldnum : features[i].oldnum,
					
				});
				// console.log(ol.proj.fromLonLat(features[i].geometry.coordinates));

				point.setStyle(new ol.style.Style({
					image : new ol.style.Icon({
						// color: '#4271AE',
						src : '/images/topic/resource_topic/park.png',
						scale : 0.5
					}),

					text : new ol.style.Text({
						text : "  " + features[i].location + "  ",
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
			vector_BJ_LD_GSMM_layer = new ol.layer.Vector({
				source : source,
				zIndex : 1002
			});
			map.addLayer(vector_BJ_LD_GSMM_layer);
		},
		error : function() {
			alert('error');
		}
	})
}

 

function deleteBJ_LD_GSMM_layer() {

	delete_layer(vector_BJ_LD_GSMM_layer);
}