var vector_BJ_travel_layer;
function add_BJ_travel_layer(cql_filter_age) {

    //矢量图层 获取gejson数据
    //&cql_filter=age between 0 and 60
    var heatData;
    $.ajax({
        // url: "data/" + dataurl,

        url: server_url+'geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=forest:BJ_travel&maxFeatures=2500&outputFormat=application/json&srsname=EPSG:4326',

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
            vector_BJ_travel_layer = new ol.layer.Heatmap({
                source: vectorSource,
                blur: parseInt(20, 15),
                radius: parseInt(10, 10),
            });

            map.addLayer(vector_BJ_travel_layer);
        },
        error: function () {

            alert('error');

        }
    })

    //
    //vector_BJ_travel_layer = new ol.layer.Heatmap({
    //    source: new ol.source.Vector({
    //        format: new ol.format.GeoJSON(),
    //        url: 'http://localhost:8185/geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=forest:BJ_travel&outputFormat=application/json&srsname=EPSG:4326'
    //    }),
    //
    //    blur: parseInt(20, 15),
    //    radius: parseInt(10, 10),
    //    zIndex: 999
    //});
    //map.addLayer(vector_BJ_travel_layer);

}


function deleteBJ_travel_layer() {


    delete_layer(vector_BJ_travel_layer);
}



