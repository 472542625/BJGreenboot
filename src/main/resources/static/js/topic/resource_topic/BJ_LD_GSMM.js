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
		// console.log(result);
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