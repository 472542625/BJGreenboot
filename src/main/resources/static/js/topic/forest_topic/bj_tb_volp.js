/**
 * Created by Administrator on 2018/8/15/015.
 */

var vector_bj_tb_vol_layer;
function add_bj_tb_vol_layer() {

	var wmsSource = new ol.source.TileWMS({
		url : server_url + 'geoserver/forest/wms',
		params : {
			'LAYERS' : 'forest:BJ_TB_vol',
			'TILED' : false
		},
		serverType : 'geoserver'
	})
    vector_bj_tb_vol_layer = new ol.layer.Tile({
		source : wmsSource,
		zIndex : 999
	});

	map.addLayer(vector_bj_tb_vol_layer);
}
var vector_bj_tb_volp_layer;
function add_bj_tb_volp_layer() {

	var featurearray = [];
	var source;
	// 矢量图层 获取gejson数据
	// &cql_filter=age between 0 and 60
	$.ajax({
		// url: "data/" + dataurl,
		url :'/selectbj_tb_volp',
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
                    greenId : features[i].greenId,
                    mapArea : features[i].mapArea,
                    greentype : features[i].greentype,
                    sumLvdi : features[i].sumLvdi,
                    sumlhf : features[i].sumlhf,
                    lvdir : features[i].lvdir,
                    fugair : features[i].fugair,
                    origFid : features[i].origFid,

				});
				// console.log(ol.proj.fromLonLat(features[i].geometry.coordinates));

				point.setStyle(new ol.style.Style({
					image : new ol.style.Icon({
						// color: '#4271AE',
						src : '/images/topic/resource_topic/park.png',
						scale : 0.5
					}),

					// text : new ol.style.Text({
					// 	text : "  " + features[i].greenId + "  ",
					// 	fill : new ol.style.Fill({
					// 		color : 'white'
					// 	}),
					// 	backgroundFill : new ol.style.Fill({
					// 		color : 'rgb(0,0,0)'
					// 	}),
					// 	offsetY : 45
                    //
					// }),

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
            vector_bj_tb_volp_layer = new ol.layer.Vector({
				source : source,
				zIndex : 1002
			});
			map.addLayer(vector_bj_tb_volp_layer);
		},
		error : function() {
			alert('error');
		}
	})
}
// function del_LYR_LD_GardenP_layertest() {
//
// delete_layer(vector_LYR_LD_GardenP_layertest);
// }

function select_bj_tb_volp_plant(greenid){
    $("#bj_tb_volp_plant_click_property_table tbody").empty();
    $.ajax({
        // url: "data/" + dataurl,
        url :'/selectbj_tb_volp_plant'+"?greenid="+greenid,
        type : "GET",
        success : function(result) {
        	// console.log(result);
			if(result.length>0){
            $
                .each(
                    result,
                    function (index, item) {



                        var plantname = $("<td  align='center'></td>").append(item.plantname);
                        var planttype = $("<td  align='center'></td>").append(item.planttype);
                        var plantAr = $("<td  align='center'></td>").append(item.plantAr);
                        var plantNum = $("<td  align='center'></td>").append(item.plantNum);

                        var dbh = $("<td  align='center'></td>").append(item.dbh);

                        var plantVol = $("<td  align='center'></td>").append(item.plantVol);

                        $("<tr class='info'></tr>").append(plantname)
                            .append(planttype).append(plantAr).append(plantNum).append(dbh).append(plantVol).appendTo("#bj_tb_volp_plant_click_property_table");

                    });
            }
            if(result.length==0){
                document.getElementById("bj_tb_volp_plant_click_property").style.display = "none";

                alerterror("查询失败");
			}
        },
        error : function() {
            alert('error');
        }
    })

};

function addbj_tb_vol_layer() {

	add_bj_tb_volp_layer();

	add_bj_tb_vol_layer();
}

function deletebj_tb_vol_layer() {

	delete_layer(vector_bj_tb_vol_layer);
	delete_layer(vector_bj_tb_volp_layer);
}
