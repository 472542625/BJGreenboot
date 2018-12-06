/**
 * 
 */


var vector_bj_yj_wz_layer;
function add_bj_yj_wz_layer() {

	// /{geompoint}
	// $("#select_species").empty();
	var selected = $(this).children('option:selected').val();
	var geom;
	var coordinates;

	var featurearray = [];
	$
			.ajax({
				url : "/BJGreen/list_bj_yj_wz_pointAll",
				type : "GET",
				success : function(result) {
					console.log(result);
					for (var i = 0; i < result.length; i++) {
						var geom = result[i].geom.substring(6,
								result[i].geom.length - 1);
						coordinates = geom.split(" ");
						coordinates[0] = coordinates[0] * 1;
						coordinates[1] = coordinates[1] * 1;

						var point = new ol.Feature({
							bj_yj_wz : 'bj_yj_wz',
							geometry : new ol.geom.Point(ol.proj
									.fromLonLat(coordinates)),

							gid : result[i].gid,
							name : result[i].name,

						});

						point
								.setStyle(new ol.style.Style(
										{
											image : new ol.style.Icon(
													{
														// color: '#4271AE',
														src : '/images/topic/resource_topic/park.png',
														scale : 1
													}),

											text : new ol.style.Text(
													{
														text : "  "
																+ result[i].name
																+ "  ",
														fill : new ol.style.Fill(
																{
																	color : 'white'
																}),
														backgroundFill : new ol.style.Fill(
																{
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
					vector_bj_yj_jkd_layer = new ol.layer.Vector({
						source : source,
						zIndex : 1299
					});
					map.addLayer(vector_bj_yj_jkd_layer);

				},
				error : function() {
					alert('error');
				}

			});

}

function delete_bj_yj_wz_layer() {

	delete_layer(vector_bj_yj_wz_layer);
}