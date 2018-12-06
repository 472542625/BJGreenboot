/**
 * Created by Administrator on 2018/8/15/015.
 */
var green_count_layer;
function add_green_count_layer() {
    //矢量图层 获取gejson数据
    var heatData;
    $.ajax({
       // url: "data/" + dataurl,

        url: server_url+'geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=forest:BJ_luliang&maxFeatures=2500&outputFormat=application/json&srsname=EPSG:4326',

        type: "GET",
        success: function (result) {

            //$.each(result, function (index, item) {
            //
            // alert(index);
            //});


            heatData = result;

            var vectorSource = new ol.source.Vector({
                features: (new ol.format.GeoJSON()).readFeatures(heatData, {
                    dataProjection: 'EPSG:4326',
                    featureProjection: 'EPSG:3857'
                })
            });
            // Heatmap热力图  blur.value
            green_count_layer = new ol.layer.Heatmap({
                source: vectorSource,
                blur: parseInt(20, 15),
                radius: parseInt(10, 10),
            });

            map.addLayer(green_count_layer);
        },
        error: function () {

            alert('error');

        }
    })


}