/**
 * Created by Administrator on 2018/8/14/014.
 */
var vector_BJ_Graden_layer;
function add_BJ_Graden_layer() {

    vector_BJ_Graden_layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            format: new ol.format.GeoJSON(),
            url: server_url+'geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=forest:BJ_Graden&outputFormat=application/json&srsname=EPSG:4326'
        }),
        style: function (feature, resolution) {
            return new ol.style.Style({
                //stroke: new ol.style.Stroke({
                //    color: 'rgb(157,204,16)',
                //    width: 3
                //}),
                fill:new ol.style.Fill({

                    color:'rgba(115,178,115,0.8)'

                })
            });
        },
        zIndex: 999
    });
    map.addLayer(vector_BJ_Graden_layer);

}

var wms_BJ_Graden_layer;
function add_wms_BJ_Graden_layer() {


    var wmsSource = new ol.source.TileWMS({
        url: server_url+'geoserver/forest/wms',//根据自己的服务器填写
        params: {
            'LAYERS': 'forest:BJ_Graden',//要加载的图层，可以为多个
            'TILED': false
        },
        serverType: 'geoserver'//服务器类型
    })
    wms_BJ_Graden_layer = new ol.layer.Tile({
            source: wmsSource,
            zIndex:999
        }
    );

    map.addLayer(wms_BJ_Graden_layer);



}






var vector_BJ_Graden_500mbuffer_layer;
function add_BJ_Graden_500mbuffer_layer() {

    vector_BJ_Graden_500mbuffer_layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            format: new ol.format.GeoJSON(),
            url: server_url+'geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=forest:BJ_500MI1&outputFormat=application/json&srsname=EPSG:4326'
        }),
        style: function (feature, resolution) {
            return new ol.style.Style({
                //stroke: new ol.style.Stroke({
                //    color: 'rgb(157,204,16)',
                //    width: 3
                //}),
                fill:new ol.style.Fill({

                    color:'rgba(210,239,255,0.5)'

                })
            });
        },
        zIndex: 998
    });
    map.addLayer(vector_BJ_Graden_500mbuffer_layer);

}

















function addBJ_Graden_500mbuffer_layer(){

    add_BJ_Graden_500mbuffer_layer();

    add_BJ_Graden_layer();
    add_wms_BJ_Graden_layer();
}


function deleteBJ_Graden_500mbuffer_layer(){

    delete_layer(vector_BJ_Graden_layer);
    delete_layer(vector_BJ_Graden_500mbuffer_layer);
    delete_layer(wms_BJ_Graden_layer);
}

