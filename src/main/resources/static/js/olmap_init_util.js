 //var server_url = "http://47.92.155.94:8185/";
var server_url = "http://localhost:8185/";
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


 function init_image_layer_CQL(layerName,cql) {

     var wmsSource = new ol.source.TileWMS({
         url : server_url + 'geoserver/forest/wms',//
         params : {
             'LAYERS' : 'forest:'+layerName,//
             'TILED' : false,
             'CQL_FILTER':cql
         },
         serverType : 'geoserver'//
     })
     return new ol.layer.Tile({
         source : wmsSource,
         zIndex : 999
     });

 }


/**绿视率  传入cql参数报跨域问题，就写了四个函数**/
 function init_image_layer_CQL_greenrate_1(layerName) {

     var wmsSource = new ol.source.TileWMS({
         url : server_url + 'geoserver/forest/wms',//
         params : {
             'LAYERS' : 'forest:'+layerName,//
             'TILED' : false,
			 'CQL_FILTER':"rateE='good'"
         },
         serverType : 'geoserver'//
     })
     return new ol.layer.Tile({
         source : wmsSource,
         zIndex : 999
     });

 }
 function init_image_layer_CQL_greenrate_2(layerName) {

     var wmsSource = new ol.source.TileWMS({
         url : server_url + 'geoserver/forest/wms',//
         params : {
             'LAYERS' : 'forest:'+layerName,//
             'TILED' : false,
             'CQL_FILTER':"rateE='ok'"
         },
         serverType : 'geoserver'//
     })
     return new ol.layer.Tile({
         source : wmsSource,
         zIndex : 999
     });

 }
 function init_image_layer_CQL_greenrate_3(layerName) {

     var wmsSource = new ol.source.TileWMS({
         url : server_url + 'geoserver/forest/wms',//
         params : {
             'LAYERS' : 'forest:'+layerName,//
             'TILED' : false,
             'CQL_FILTER':"rateE='general'"
         },
         serverType : 'geoserver'//
     })
     return new ol.layer.Tile({
         source : wmsSource,
         zIndex : 999
     });

 }
 function init_image_layer_CQL_greenrate_4(layerName) {

     var wmsSource = new ol.source.TileWMS({
         url : server_url + 'geoserver/forest/wms',//
         params : {
             'LAYERS' : 'forest:'+layerName,//
             'TILED' : false,
             'CQL_FILTER':"rateE='poor'"
         },
         serverType : 'geoserver'//
     })
     return new ol.layer.Tile({
         source : wmsSource,
         zIndex : 999
     });

 }