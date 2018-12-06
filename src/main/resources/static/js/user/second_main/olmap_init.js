/**
 * Created by Administrator on 2018/8/11/011.
 */
 var server_url="http://localhost:8185/";
// var server_url="http://47.92.155.94:8185/";
function checkBox(obj) {
    // 只有当选中的时候才会去掉其他已经勾选的checkbox，所以这里只判断选中的情况
    if (obj.is(":checked")) {
        // 先把所有的checkbox 都设置为不选种
        $(':input').prop('checked', false);
        // $('input.echarts_checkbox').prop('checked', false);
        // 把自己设置为选中
        obj.prop('checked', true);
    }
}



function add_geojson_heatdata_point(dataurl) {

    var heatData;
    $.ajax({
        url: "data/" + dataurl,
        type: "GET",
        success: function (result) {

            //$.each(result, function (index, item) {
            //
            // alert(index);
            //});


            console.log(result);
            heatData = result;

            var vectorSource = new ol.source.Vector({
                features: (new ol.format.GeoJSON()).readFeatures(heatData, {
                    dataProjection: 'EPSG:4326',
                    featureProjection: 'EPSG:3857'
                    //dataProjection: 'EPSG:4326',
                    //featureProjection: 'EPSG:3857'
                    //
                })
            });
            var vectorLayer = new ol.layer.Vector({
                source: vectorSource
            });
            map.addLayer(vectorLayer);


        },
        error: function () {

            alert('error');

        }
    })


}

function ajax_add_geometry() {

    var line = new ol.Feature({
        geometry: new ol.geom.LineString(
            [[121.48, 31.22], [88.48, 31.22]])
    });
    line.setStyle(new ol.style.Style({
        stroke: new ol.style.Stroke({
            width: 3,
            color: '#5298FF'
        })
    }));

    var linesource = new ol.source.Vector({
        features: [line]
    });
    var linelayer = new ol.layer.Vector({
        source: linesource
    });
    map.addLayer(linelayer);


    //var point = new ol.Feature({
    //    geometry:new ol.geom.Point(ol.proj.fromLonLat([113.5991,24.8166]))
    //});
    //point.setStyle(new ol.style.Style({
    //        image:new ol.style.Icon({
    //            color:'#4271AE',
    //            src:'images/bg/maingislogo.png'
    //        })
    //    })
    //);
    //var pointsource = new ol.source.Vector({
    //    features:[point]
    //});
    //var pointlayer = new ol.layer.Vector({
    //    source: pointsource
    //});
    // map.addLayer(pointlayer);

}


//*****东城区影像底图加载WMS
var imagelayer;
function add_imagemap_layer() {


    var wmsSource = new ol.source.TileWMS({
        url: server_url+'geoserver/forest/wms',//根据自己的服务器填写
        params: {
            'LAYERS': 'forest:dongcheng',//要加载的图层，可以为多个
            'TILED': false
        },
        serverType: 'geoserver'//服务器类型
    })
    imagelayer = new ol.layer.Tile({
            source: wmsSource
        }
    );

    map.addLayer(imagelayer);

    map.getView().setCenter(ol.proj.transform([116.409, 39.923], 'EPSG:4326', 'EPSG:3857'));

    var view = map.getView();
    view.setZoom(15);

}


/////wms地图服务--------------------------------------------------------------------------------------------------->
/////wms地图服务--------------------------------------------------------------------------------------------------->
/////wms地图服务--------------------------------------------------------------------------------------------------->
/////wms地图服务--------------------------------------------------------------------------------------------------->
/////wms地图服务--------------------------------------------------------------------------------------------------->
/////wms地图服务--------------------------------------------------------------------------------------------------->
var map;
var baiduMapLayer;
var baiduMapLayerLabel;
var baiduRasterLayer;
var googleMapLayer;
var googleMapLayer;
var googleRasterLayer;
var gaodeMapLayer;
var osmLayer;
$(function () {

 

    //osm
    osmLayer = new ol.layer.Tile({
        source: new ol.source.OSM()
    })


    //地图初始化

    ///////////////////////////////////////////////////////////////popup
    ///////////////////////////////////////////////////////////////popup
    ///////////////////////////////////////////////////////////////popup
    ///////////////////////////////////////////////////////////////popup
    ///////////////////////////////////////////////////////////////popup


  
 

    map = new ol.Map({
        target: 'map',
        layers: [
            osmLayer
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([121.48, 31.22]),
            //center: [121.48, 31.22],
            zoom: 10,
            minZoom: 0,
            projection: 'EPSG:3857',
        }),
        //overlays: [overlay],
        // 在默认控件的基础上，再加上其他内置的控件
        controls: ol.control.defaults().extend([

           // new ol.control.MousePosition(),
           // new ol.control.OverviewMap(),
           // new ol.control.ScaleLine(),
           // new ol.control.ZoomSlider(),
           // new ol.control.ZoomToExtent()
        ]),
    });



    ////////////////////////////////////////////////////////点击显示属性列表
    ////////////////////////////////////////////////////////点击显示属性列表
    ////////////////////////////////////////////////////////点击显示属性列表
    ////////////////////////////////////////////////////////点击显示属性列表
    ////////////////////////////////////////////////////////点击显示属性列表
    ////////////////////////////////////////////////////////点击显示属性列表
    //实现高亮显示
    var featureOverlay = new ol.layer.Vector({
        source: new ol.source.Vector(),
        map: map,
        style: new ol.style.Style({
            image: new ol.style.Circle({
                radius: 5,
                fill: null,
                stroke: new ol.style.Stroke({color: 'red', width: 1})
            })
        })
    });
    var highlight;
    var displayFeatureInfo = function (pixel) {

        var feature = map.forEachFeatureAtPixel(pixel, function (feature) {
            return feature;
        });


        if (feature) {
            //info.innerHTML = feature.getId() + '<br>';
            var keys = feature.getKeys();
            var properties = feature.getProperties();

            /*****判断第二个属性值是绿视率的话则是绿视率图层*****/
            if (keys[2] == "绿视率") {

                document.getElementById("greerate_r_box").style.display = "inline";//如果是绿视图就显示视屏
            }




            for (var i = 1; i < keys.length; i++) {
                //info.innerHTML += keys[i] + ' ： ';
                //nfo.innerHTML += properties[keys[i]] + '<br>';
                var key = $("<td></td>").append(keys[i]);
                var property = $("<td></td>").append(properties[keys[i]]);
                $("<tr></tr>").append(key).append(property).appendTo("#feeature_properties_talbe_tbody");


            }
            document.getElementById("click_property").style.display = "inline";

        } else {
            //  alert("none");
            document.getElementById("click_property").style.display = "none";

            document.getElementById("greerate_r_box").style.display = "none";//如果没点击绿视图的视屏影藏
        }

        if (feature !== highlight) {
            if (highlight) {
                featureOverlay.getSource().removeFeature(highlight);
            }
            if (feature) {
                featureOverlay.getSource().addFeature(feature);
            }
            highlight = feature;
        }
    };


    map.on('click', function (evt) {
        $("#feeature_properties_talbe_tbody").empty();
        displayFeatureInfo(evt.pixel);


    });


});


/////打开图层事件--------------------------------------------------------------------------------------------------->
/////打开图层事件--------------------------------------------------------------------------------------------------->
/////打开图层事件--------------------------------------------------------------------------------------------------->
/////打开图层事件--------------------------------------------------------------------------------------------------->
/////打开图层事件--------------------------------------------------------------------------------------------------->
/////打开图层事件--------------------------------------------------------------------------------------------------->


function delete_layer(vector_layer) {

    map.removeLayer(vector_layer);
}


$(function () {


    add_imagemap_layer();//默认加载影像底图

    ///行政底图
    $("#mapselect_map").click(function () {


        var view = map.getView();
        view.setZoom(15);


        delete_layer(imagelayer);
        delete_layer(osmLayer);
        map.addLayer(osmLayer);

        console.log(map.getLayers());
    })
    //影像底图
    $("#mapselect_image").click(function () {

        var view = map.getView();
        view.setZoom(15);

        delete_layer(imagelayer);
        delete_layer(osmLayer);
        map.addLayer(imagelayer);
    })
    function deleteallLayer() {

      

        ///***************************************绿化指标专题
        delete_BJ_green84_jz1_layer();//绿视率
       // document.getElementById("greerate_r_box").style.display = "none";
        document.getElementById("green_rate_legend").style.display = "none";


        delete_BJ_lhfg_layer();//绿化覆盖率
        document.getElementById("BJ_lhfg_legend").style.display = "none";//绿化覆盖率


        delete_BJ_ldl_layer();//绿地率
        document.getElementById("BJ_ldl_legend").style.display = "none";//绿地率

        deleteBJ_Graden_500mbuffer_layer();//公园绿地500米辐射范围

        delete_layer(green_count_layer);//绿量

        
    }



    /** 绿化指标专题**/


        //绿视率
    $("#green_rate").click(function () {
        checkBox($(this));

       if($("#green_rate").is(':checked')){

           deleteallLayer();//清空图层


           add_BJ_green84_jz1_layer();
           document.getElementById("green_rate_legend").style.display = "inline";

           map.getView().setCenter(ol.proj.transform([116.409, 39.923], 'EPSG:4326', 'EPSG:3857'));

           var view = map.getView();
           view.setZoom(15);

        }

        else{
           deleteallLayer();//清空图层

       }


    })

    //绿化覆盖率
    $("#BJ_lhfg").click(function () {

        checkBox($(this));
        if($("#BJ_lhfg").is(':checked')){

            deleteallLayer();//清空图层

            add_BJ_lhfg_layer();
            document.getElementById("BJ_lhfg_legend").style.display = "inline";

            map.getView().setCenter(ol.proj.transform([116.409, 39.923], 'EPSG:4326', 'EPSG:3857'));
            var view = map.getView();
            view.setZoom(15);

        }

        else{
            deleteallLayer();//清空图层

        }


    })


    //绿地率
    $("#BJ_ldl").click(function () {
        checkBox($(this));

        if($("#BJ_ldl").is(':checked')){

            deleteallLayer();//清空图层


            add_BJ_ldl_layer();
            document.getElementById("BJ_ldl_legend").style.display = "inline";

            map.getView().setCenter(ol.proj.transform([116.409, 39.923], 'EPSG:4326', 'EPSG:3857'));

            var view = map.getView();
            view.setZoom(15);

        }

        else{
            deleteallLayer();//清空图层

        }


    })





    //公园绿地500米辐射范围
    $("#BJ_Graden_500mbuffer").click(function () {
        checkBox($(this));


        if($("#BJ_Graden_500mbuffer").is(':checked')){

            deleteallLayer();//清空图层

            addBJ_Graden_500mbuffer_layer();


            map.getView().setCenter(ol.proj.transform([116.409, 39.923], 'EPSG:4326', 'EPSG:3857'));
            var view = map.getView();
            view.setZoom(15);

        }

        else{
            deleteallLayer();//清空图层

        }


    })

    //绿量
    $("#green_count").click(function () {

        checkBox($(this));


        if($("#green_count").is(':checked')){

            deleteallLayer();//清空图层

            add_green_count_layer();


            map.getView().setCenter(ol.proj.transform([116.409, 39.923], 'EPSG:4326', 'EPSG:3857'));
            var view = map.getView();
            view.setZoom(15);

        }

        else{
            deleteallLayer();//清空图层

        }


    })





    //清除图层
    $("#layer_clear").click(function () {
        deleteallLayer();//清空图层


    })


})




