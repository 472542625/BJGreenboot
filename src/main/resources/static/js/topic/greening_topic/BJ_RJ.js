/**
 * Created by Administrator on 2018/8/27/027.
 */
var wms_BJ_RJ_layer;
function add_wms_BJ_RJ_layer() {


    var wmsSource = new ol.source.TileWMS({
        url: server_url+'geoserver/forest/wms',//����Լ��ķ�������д
        params: {
            'LAYERS': 'forest:BJ_RJ',//Ҫ���ص�ͼ�㣬����Ϊ���
            'TILED': false
        },
        serverType: 'geoserver'//����������
    })
    wms_BJ_RJ_layer = new ol.layer.Tile({
            source: wmsSource,
            zIndex:999
        }
    );

    map.addLayer(wms_BJ_RJ_layer);



}



function delete_wms_BJ_RJ_layer(){

    delete_layer(wms_BJ_RJ_layer);
}

