
///加载WMS影像图函数
 function init_image_layer(layerName) {

	var wmsSource = new ol.source.TileWMS({
		url : server_url + 'geoserver/forest/wms',//  
		params : {
			'LAYERS' : 'forest:'+layerName,//  
			'TILED' : false
		},
		serverType : 'geoserver'//  
	})
	return new ol.layer.Tile({
		source : wmsSource,
		zIndex : 999
	});

}