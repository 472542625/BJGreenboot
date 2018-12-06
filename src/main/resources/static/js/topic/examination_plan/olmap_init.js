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

var osmLayer;
var map1;
var map2;
var map3;
//*****东城区影像底图加载WMS
var imagelayer;
var server_url ="http://47.92.155.94:8185/"
	
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




}
$(function () {

    add_imagemap_layer();
    //osm
    osmLayer = new ol.layer.Tile({
       source: new ol.source.OSM()
    })


    //地图初始化


    // 创建一个视图
    var view = new ol.View({
        center: ol.proj.fromLonLat([121.48, 31.22]),
        //center: [121.48, 31.22],
        zoom: 15,
        minZoom: 0,
        projection: 'EPSG:3857',
    });

    // 创建第一个地图
    map1 = new ol.Map({
        layers: [
            imagelayer
        ],
        view: view,
        target: 'map1'
    });

    // 创建第二个地图
    map2 = new ol.Map({
        layers: [
            imagelayer
        ],
        view: view,
        target: 'map2'
    });

    // 创建第三个地图
    map3 = new ol.Map({
        layers: [
            imagelayer
        ],
        view: view,
        target: 'map3'
    });
 


    add_BJ_ldl_layer();
    document.getElementById("BJ_ldl_legend1").style.display = "inline";
    document.getElementById("BJ_ldl_legend2").style.display = "inline";
    document.getElementById("BJ_ldl_legend3").style.display = "inline";
    map1.getView().setCenter(ol.proj.transform([116.409, 39.923], 'EPSG:4326', 'EPSG:3857'));
    map2.getView().setCenter(ol.proj.transform([116.409, 39.923], 'EPSG:4326', 'EPSG:3857'));
    map3.getView().setCenter(ol.proj.transform([116.409, 39.923], 'EPSG:4326', 'EPSG:3857'));
    var view1 = map1.getView();
    view1.setZoom(15);
    var view2 = map2.getView();
    view2.setZoom(15);
    var view3 = map3.getView();
    view3.setZoom(15);

});



/////打开图层事件--------------------------------------------------------------------------------------------------->
/////打开图层事件--------------------------------------------------------------------------------------------------->
/////打开图层事件--------------------------------------------------------------------------------------------------->
/////打开图层事件--------------------------------------------------------------------------------------------------->
/////打开图层事件--------------------------------------------------------------------------------------------------->
/////打开图层事件--------------------------------------------------------------------------------------------------->


function delete_layer(vector_layer) {

    map1.removeLayer(vector_layer);
    map2.removeLayer(vector_layer);
    map3.removeLayer(vector_layer);
}


$(function () {


  
    function deleteallLayer() {




        ///***************************************绿化指标专题
         delete_BJ_green84_jz1_layer();//绿视率

        document.getElementById("green_rate_legend1").style.display = "none";
        document.getElementById("green_rate_legend2").style.display = "none";
        document.getElementById("green_rate_legend3").style.display = "none";


         delete_BJ_lhfg_layer();//绿化覆盖率
        document.getElementById("BJ_lhfg_legend1").style.display = "none";//绿化覆盖率
        document.getElementById("BJ_lhfg_legend2").style.display = "none";//绿化覆盖率
        document.getElementById("BJ_lhfg_legend3").style.display = "none";//绿化覆盖率

        delete_BJ_ldl_layer();//绿地率

        //$("BJ_ldl_legend1")
         document.getElementById("BJ_ldl_legend1").style.display = "none";//绿地率
        document.getElementById("BJ_ldl_legend2").style.display = "none";//绿地率
        document.getElementById("BJ_ldl_legend3").style.display = "none";//绿地率


        deleteBJ_Graden_500mbuffer_layer();//公园绿地500米辐射范围

         delete_layer(green_count_layer);//绿量

    }


    /** 绿化指标专题**/



    //绿地率
    $("#BJ_ldl_checkbox1").click(function () {
        checkBox($(this));
        if($("#BJ_ldl_checkbox1").is(':checked')){


            deleteallLayer();//清空图层


            add_BJ_ldl_layer();
            document.getElementById("BJ_ldl_legend1").style.display = "inline";
            document.getElementById("BJ_ldl_legend2").style.display = "inline";
            document.getElementById("BJ_ldl_legend3").style.display = "inline";
            map1.getView().setCenter(ol.proj.transform([116.409, 39.923], 'EPSG:4326', 'EPSG:3857'));
            map2.getView().setCenter(ol.proj.transform([116.409, 39.923], 'EPSG:4326', 'EPSG:3857'));
            map3.getView().setCenter(ol.proj.transform([116.409, 39.923], 'EPSG:4326', 'EPSG:3857'));
            var view1 = map1.getView();
            view1.setZoom(15);
            var view2 = map2.getView();
            view2.setZoom(15);
            var view3 = map3.getView();
            view3.setZoom(15);

        }

        else{
            deleteallLayer();//清空图层
            document.getElementById("BJ_ldl_legend1").style.display = "none";
            document.getElementById("BJ_ldl_legend2").style.display = "none";
            document.getElementById("BJ_ldl_legend3").style.display = "none";
        }


    })

    //绿视率
    $("#BJ_green84_jz1_checkbox1").click(function () {
        checkBox($(this));
        if($("#BJ_green84_jz1_checkbox1").is(':checked')){


            //
            deleteallLayer();//清空图层
            //
            //
            //add_BJ_ldl_layer();
            //document.getElementById("BJ_ldl_legend1").style.display = "inline";
            //document.getElementById("BJ_ldl_legend2").style.display = "inline";
            //document.getElementById("BJ_ldl_legend3").style.display = "inline";
            //map1.getView().setCenter(ol.proj.transform([116.409, 39.923], 'EPSG:4326', 'EPSG:3857'));
            //map2.getView().setCenter(ol.proj.transform([116.409, 39.923], 'EPSG:4326', 'EPSG:3857'));
            //map3.getView().setCenter(ol.proj.transform([116.409, 39.923], 'EPSG:4326', 'EPSG:3857'));
            //var view1 = map1.getView();
            //view1.setZoom(15);
            //var view2 = map2.getView();
            //view2.setZoom(15);
            //var view3 = map3.getView();
            //view3.setZoom(15);

        }

        else{
            //deleteallLayer();//清空图层
            //document.getElementById("BJ_ldl_legend1").style.display = "none";
            //document.getElementById("BJ_ldl_legend2").style.display = "none";
            //document.getElementById("BJ_ldl_legend3").style.display = "none";
        }


    })


    //绿化覆盖率
    $("#BJ_lhfg_checkbox1").click(function () {
        checkBox($(this));
        if($("#BJ_lhfg_checkbox1").is(':checked')){


            deleteallLayer();//清空图层
            //
            //
            //add_BJ_ldl_layer();
            //document.getElementById("BJ_ldl_legend1").style.display = "inline";
            //document.getElementById("BJ_ldl_legend2").style.display = "inline";
            //document.getElementById("BJ_ldl_legend3").style.display = "inline";
            //map1.getView().setCenter(ol.proj.transform([116.409, 39.923], 'EPSG:4326', 'EPSG:3857'));
            //map2.getView().setCenter(ol.proj.transform([116.409, 39.923], 'EPSG:4326', 'EPSG:3857'));
            //map3.getView().setCenter(ol.proj.transform([116.409, 39.923], 'EPSG:4326', 'EPSG:3857'));
            //var view1 = map1.getView();
            //view1.setZoom(15);
            //var view2 = map2.getView();
            //view2.setZoom(15);
            //var view3 = map3.getView();
            //view3.setZoom(15);

        }

        else{
            //deleteallLayer();//清空图层
            //document.getElementById("BJ_ldl_legend1").style.display = "none";
            //document.getElementById("BJ_ldl_legend2").style.display = "none";
            //document.getElementById("BJ_ldl_legend3").style.display = "none";
        }


    })


    //500米缓冲公园
    $("#BJ_Graden_500Mbuffer_checkbox1").click(function () {
        checkBox($(this));
        if($("#BJ_Graden_500Mbuffer_checkbox1").is(':checked')){


            //
            deleteallLayer();//清空图层
            //
            //
            //add_BJ_ldl_layer();
            //document.getElementById("BJ_ldl_legend1").style.display = "inline";
            //document.getElementById("BJ_ldl_legend2").style.display = "inline";
            //document.getElementById("BJ_ldl_legend3").style.display = "inline";
            //map1.getView().setCenter(ol.proj.transform([116.409, 39.923], 'EPSG:4326', 'EPSG:3857'));
            //map2.getView().setCenter(ol.proj.transform([116.409, 39.923], 'EPSG:4326', 'EPSG:3857'));
            //map3.getView().setCenter(ol.proj.transform([116.409, 39.923], 'EPSG:4326', 'EPSG:3857'));
            //var view1 = map1.getView();
            //view1.setZoom(15);
            //var view2 = map2.getView();
            //view2.setZoom(15);
            //var view3 = map3.getView();
            //view3.setZoom(15);

        }

        else{
            //deleteallLayer();//清空图层
            //document.getElementById("BJ_ldl_legend1").style.display = "none";
            //document.getElementById("BJ_ldl_legend2").style.display = "none";
            //document.getElementById("BJ_ldl_legend3").style.display = "none";
        }


    })



    //绿量
    $("#BJ_luliang_checkbox1").click(function () {
        checkBox($(this));
        if($("#BJ_luliang_checkbox1").is(':checked')){

            //
            deleteallLayer();//清空图层
            //
            //
            //add_BJ_ldl_layer();
            //document.getElementById("BJ_ldl_legend1").style.display = "inline";
            //document.getElementById("BJ_ldl_legend2").style.display = "inline";
            //document.getElementById("BJ_ldl_legend3").style.display = "inline";
            //map1.getView().setCenter(ol.proj.transform([116.409, 39.923], 'EPSG:4326', 'EPSG:3857'));
            //map2.getView().setCenter(ol.proj.transform([116.409, 39.923], 'EPSG:4326', 'EPSG:3857'));
            //map3.getView().setCenter(ol.proj.transform([116.409, 39.923], 'EPSG:4326', 'EPSG:3857'));
            //var view1 = map1.getView();
            //view1.setZoom(15);
            //var view2 = map2.getView();
            //view2.setZoom(15);
            //var view3 = map3.getView();
            //view3.setZoom(15);

        }

        else{
            //deleteallLayer();//清空图层
            //document.getElementById("BJ_ldl_legend1").style.display = "none";
            //document.getElementById("BJ_ldl_legend2").style.display = "none";
            //document.getElementById("BJ_ldl_legend3").style.display = "none";
        }


    })








    //清除图层
    $("#layer_clear").click(function () {
        deleteallLayer();//清空图层


    })


})




