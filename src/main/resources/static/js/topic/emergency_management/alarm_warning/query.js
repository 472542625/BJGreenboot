/**
 * 
 */

$(function() {

})
var vector_bj_yj_jkd_layer_buffer;

function list_vector_bj_yj_jkd_Buffer(gid) {

	var geom;
	var coordinates;

	var featurearray = [];
	$
			.ajax({
				url : "/listpointByBuffer/" + gid,
				type : "GET",
				success : function(result) {

					if (result.length > 0) {
						console.log(result);
						$("#alarm_warning_box_talbe_tbody").empty();
						for (var i = 0; i < result.length; i++) {
							var geom = result[i].geom.substring(6,
									result[i].geom.length - 1);
							coordinates = geom.split(" ");
							coordinates[0] = coordinates[0] * 1;
							coordinates[1] = coordinates[1] * 1;

							var point = new ol.Feature({
								geometry : new ol.geom.Point(ol.proj
										.fromLonLat(coordinates)),

								gid : result[i].gid,
								name : result[i].name,
								jhc : result[i].jhc,
								mhq : result[i].mhq,
								zp : result[i].zp

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

							var name = $("<td></td>").append(result[i].name);
							var jhc = $("<td></td>")
									.append(result[i].jhc + "辆");
							var distance = $("<td></td>").append(
									result[i].distance + "米");

							// 自定义给这个控件一个edit-id属性,在数据修改弹出框中用到

							$("<tr></tr>").append(name).append(jhc).append(
									distance).appendTo(
									"#alarm_warning_box_talbe_tbody");

						}
						var source_buffer = new ol.source.Vector({
							features : featurearray
						});
						vector_bj_yj_jkd_layer_buffer = new ol.layer.Vector({
							source : source_buffer,
							zIndex : 1299
						});
						map.addLayer(vector_bj_yj_jkd_layer_buffer);

						document.getElementById("alarm_warning_box").style.display = "inline";
					}
					if (result.length == 0) {
						showerror();
						document.getElementById("alarm_warning_box").style.display = "none";
					}

				},
				error : function() {
					alert('error');
				}

			});

}
var vector_bj_yj_jkd_layer;
function list_vector_bj_yj_jkd_pointAll() {
	// /{geompoint}
	// $("#select_species").empty();
	var selected = $(this).children('option:selected').val();
	var geom;
	var coordinates;

	var featurearray = [];
	$
			.ajax({
				url : "/list_bj_yj_jkd_pointAll",
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
							bj_yj_jkd : 'bj_yj_jkd',
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
														src : '/images/topic/monitor_topic/air_point.png',
														scale : 0.1
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

function deletevector_bj_yj_jkd_layer() {

	delete_layer(vector_bj_yj_jkd_layer_buffer);
	delete_layer(vector_bj_yj_jkd_layer);
}
