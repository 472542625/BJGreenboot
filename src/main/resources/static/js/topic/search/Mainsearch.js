var vector_search_layer;

function add_search_layer() {
var coordinates = [];
var featurearray = [];
	var source;
	// 矢量图层 获取gejson数据
	$.ajax({
		// url: "data/" + dataurl,
		url :  '/selectByExampleGreenName/'+$("#likeInputVal").val(),
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



function list_search_result() {


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

									$("<li style='margin-top:5px;margin-left:10px;cursor:pointer;' class='search_list_result_li'></li>").append(item.greenname+"  "+"<a style='color: #0f9d58'>"+item.greentype1+"</a>").appendTo("#search_list_result ul");
		    })




		},
		error : function() {
			alert('error');
		}
	})
}




function delete_search_layer() {

	delete_layer(vector_search_layer);
}