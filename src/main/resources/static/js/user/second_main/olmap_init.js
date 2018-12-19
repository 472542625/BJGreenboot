/**
 * Created by Administrator on 2018/8/11/011.
 */


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
// var server_url="http://47.92.155.94:8185/";

// var mvc_url = "http://47.92.155.94:8085/BJGreen/";

// *****东城区影像底图加载WMS
var imagelayer_dongcheng;
function add_imagemap_layer_dongcheng() {

    var wmsSource = new ol.source.TileWMS({
        url : server_url + 'geoserver/forest/wms',// 根据自己的服务器填写
        params : {
            'LAYERS' : 'forest:dongcheng',// 要加载的图层，可以为多个
            'TILED' : false
        },
        serverType : 'geoserver'// 服务器类型
    })
    imagelayer_dongcheng = new ol.layer.Tile({
        source : wmsSource
    });

    map.addLayer(imagelayer_dongcheng);

    map.getView().setCenter(
        ol.proj.transform([ 116.409, 39.923 ], 'EPSG:4326', 'EPSG:3857'));

    var view = map.getView();
    view.setZoom(15);

}

var imagelayer_beijing;
function add_imagemap_layer_beijing() {

    var wmsSource = new ol.source.TileWMS({
        url : server_url + 'geoserver/forest/wms',// 根据自己的服务器填写
        params : {
            'LAYERS' : 'forest:bjimg',// 要加载的图层，可以为多个
            'TILED' : false
        },
        serverType : 'geoserver'// 服务器类型
    })
    imagelayer_beijing = new ol.layer.Tile({
        source : wmsSource
    });

    map.addLayer(imagelayer_beijing);

    map.getView().setCenter(
        ol.proj.transform([ 116.409, 39.923 ], 'EPSG:4326', 'EPSG:3857'));

    var view = map.getView();
    view.setZoom(15);

}

var shplayer_dongcheng;
function add_shpmap_layer_dongcheng() {

    var wmsSource = new ol.source.TileWMS({
        url : server_url + 'geoserver/forest/wms',// 根据自己的服务器填写
        params : {
            'LAYERS' : 'forest:BJ_DC',// 要加载的图层，可以为多个
            'TILED' : false
        },
        serverType : 'geoserver'// 服务器类型
    })
    shplayer_dongcheng = new ol.layer.Tile({
        source : wmsSource
    });

    map.addLayer(shplayer_dongcheng);

    map.getView().setCenter(
        ol.proj.transform([ 116.409, 39.923 ], 'EPSG:4326', 'EPSG:3857'));

    var view = map.getView();
    view.setZoom(15);

}

var shplayer_beijing;
function add_shpmap_layer_beijing() {

    var wmsSource = new ol.source.TileWMS({
        url : server_url + 'geoserver/forest/wms',// 根据自己的服务器填写
        params : {
            'LAYERS' : 'forest:BJ',// 要加载的图层，可以为多个
            'TILED' : false
        },
        serverType : 'geoserver'// 服务器类型
    })
    shplayer_beijing = new ol.layer.Tile({
        source : wmsSource
    });

    map.addLayer(shplayer_beijing);

    map.getView().setCenter(
        ol.proj.transform([ 116.409, 39.923 ], 'EPSG:4326', 'EPSG:3857'));

    var view = map.getView();
    view.setZoom(15);

}

// ///wms地图服务--------------------------------------------------------------------------------------------------->
// ///wms地图服务--------------------------------------------------------------------------------------------------->
// ///wms地图服务--------------------------------------------------------------------------------------------------->
// ///wms地图服务--------------------------------------------------------------------------------------------------->
// ///wms地图服务--------------------------------------------------------------------------------------------------->
// ///wms地图服务--------------------------------------------------------------------------------------------------->
var map;

var osmLayer;

$(function() {

    // //底图控制·····························································································
    // //百度谷歌影像
    // // 自定义分辨率和瓦片坐标系
    // var resolutions = [];
    // var maxZoom = 18;
    // // 计算百度使用的分辨率
    // for (var i = 0; i <= maxZoom + 1; i++) {
    // resolutions[i] = Math.pow(2, maxZoom - i);
    // }
    // var tilegrid = new ol.tilegrid.TileGrid({
    // origin: [0, 0], // 设置原点坐标
    // resolutions: resolutions // 设置分辨率
    // });
    // // 创建百度行政区划
    // var baiduSource = new ol.source.TileImage({
    // tileGrid: tilegrid,
    // tileUrlFunction: function (tileCoord, pixelRatio, proj) {
    // var z = tileCoord[0];
    // var x = tileCoord[1];
    // var y = tileCoord[2];
    //
    // // 百度瓦片服务url将负数使用M前缀来标识
    // if (x < 0) {
    // x = 'M' + (-x);
    // }
    // if (y < 0) {
    // y = 'M' + (-y);
    // }
    //
    // // return "http://online0.map.bdimg.com/onlinelabel/?qt=tile&x=" + x +
    // "&y=" + y + "&z=" + z + "&styles=pl&udt=20170115&scaler=1&p=1";
    // //street
    // return 'http://online' + parseInt(Math.random() * 10) +
    // '.map.bdimg.com/onlinelabel/?qt=tile&x=' +
    // x + '&y=' + y + '&z=' + z + '&styles=pl&udt=20170620&scaler=1&p=1';
    // }
    // });
    // // 百度影像
    // var baiduSourceRaster = new ol.source.TileImage({
    // tileGrid: tilegrid,
    // tileUrlFunction: function (tileCoord, pixelRatio, proj) {
    // var z = tileCoord[0];
    // var x = tileCoord[1];
    // var y = tileCoord[2];
    //
    // // 百度瓦片服务url将负数使用M前缀来标识
    // if (x < 0) {
    // x = 'M' + (-x);
    // }
    // if (y < 0) {
    // y = 'M' + (-y);
    // }
    // return 'http://shangetu' + parseInt(Math.random() * 10) +
    // '.map.bdimg.com/it/u=x=' + x +
    // ';y=' + y + ';z=' + z + ';v=009;type=sate&fm=46&udt=20170606';
    // }
    // });
    // // 百度标注
    // var baiduSourceLabel = new ol.source.TileImage({
    // tileGrid: tilegrid,
    // tileUrlFunction: function (tileCoord, pixelRatio, proj) {
    // var z = tileCoord[0];
    // var x = tileCoord[1];
    // var y = tileCoord[2];
    //
    // // 百度瓦片服务url将负数使用M前缀来标识
    // if (x < 0) {
    // x = 'M' + (-x);
    // }
    // if (y < 0) {
    // y = 'M' + (-y);
    // }
    // return 'http://online' + parseInt(Math.random() * 10) +
    // '.map.bdimg.com/onlinelabel/?qt=tile&x=' +
    // x + '&y=' + y + '&z=' + z + '&styles=sl&udt=20170620&scaler=1&p=1';
    // }
    // });
    // // 百度行政区划
    // baiduMapLayer = new ol.layer.Tile({
    // source: baiduSource
    // });
    //
    // // 百度地图标注
    // baiduMapLayerLabel = new ol.layer.Tile({
    // source: baiduSourceLabel
    // });
    // //百度地图影像
    // baiduRasterLayer = new ol.layer.Tile({
    // source: baiduSourceRaster
    // });
    // //谷歌行政区划
    // googleMapLayer = new ol.layer.Tile({
    // source: new ol.source.XYZ({
    // url:
    // 'http://www.google.cn/maps/vt/pb=!1m4!1m3!1i{z}!2i{x}!3i{y}!2m3!1e0!2sm!3i345013117!3m8!2szh-CN!3scn!5e1105!12m4!1e68!2m2!1sset!2sRoadmap!4e0'
    // })
    // });
    // //谷歌影像
    // googleRasterLayer = new ol.layer.Tile({
    // source: new ol.source.TileImage({url:
    // 'http://mt2.google.cn/vt/lyrs=y&hl=zh-CN&gl=CN&src=app&x={x}&y={y}&z={z}&s=G'}),
    // visible: false
    // });
    //
    //
    // //高德地图
    // gaodeMapLayer = new ol.layer.Tile({
    // source: new ol.source.XYZ({
    // url:
    // 'http://webrd03.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1&style=8'//高德地图在线
    // }),
    // projection: 'EPSG:4326'
    // })

    // osm
    osmLayer = new ol.layer.Tile({
        source : new ol.source.OSM()
    })

    // 地图初始化

    map = new ol.Map({
        target : 'map',
        layers : [ osmLayer ],
        view : new ol.View({
            center : ol.proj.fromLonLat([  116.409, 39.923 ]),
            // center: [121.48, 31.22],
            zoom : 10,
            minZoom : 0,
            projection : 'EPSG:3857',
        }),

        // 在默认控件的基础上，再加上其他内置的控件

    });




});

// ///打开图层事件--------------------------------------------------------------------------------------------------->
// ///打开图层事件--------------------------------------------------------------------------------------------------->
// ///打开图层事件--------------------------------------------------------------------------------------------------->
// ///打开图层事件--------------------------------------------------------------------------------------------------->
// ///打开图层事件--------------------------------------------------------------------------------------------------->
// ///打开图层事件--------------------------------------------------------------------------------------------------->

function delete_layer(vector_layer) {

    map.removeLayer(vector_layer);
}

$(function() {
    add_imagemap_layer_beijing();// 默认加载北京影像底图
    add_imagemap_layer_dongcheng();// 默认加载影像底图
    add_shpmap_layer_dongcheng();// 默认加载东城矢量
    add_shpmap_layer_beijing();
    // /osm行政底图
    $("#mapselect_map").click(function() {

        var view = map.getView();
        view.setZoom(15);

        delete_layer(imagelayer_dongcheng);
        delete_layer(imagelayer_beijing);
        // delete_layer(osmLayer);
        // map.addLayer(osmLayer);

        // console.log(map.getLayers());
    })
    // 影像底图
    $("#mapselect_image").click(function() {

        var view = map.getView();
        view.setZoom(15);

        delete_layer(imagelayer_dongcheng);
        delete_layer(imagelayer_beijing);

        // delete_layer(osmLayer);

        map.addLayer(imagelayer_beijing);
        map.addLayer(imagelayer_dongcheng);

        add_shpmap_layer_dongcheng();// 默认加载东城矢量
        add_shpmap_layer_beijing();

    })
    function deleteallLayer() {

        delete_layer(image_BJ_green84_layer);// 绿视率

        document.getElementById("green_rate_legend").style.display = "none";

        //
        // delete_BJ_JD_lhfg_layer();// 街道绿化覆盖率
        // delete_BJ_TB_lhfg_layer();// 图斑绿化覆盖率
        delete_layer(image_BJ_lhfg_layer);// 单位绿化覆盖率
        document.getElementById("BJ_lhfg_legend").style.display = "none";// 绿化覆盖率


        // delete_BJ_JD_ldl_layer();// 街道绿地率
        // delete_BJ_TB_ldl_layer();// 图斑绿地率


        delete_layer(image_BJ_ldl_layer);// 单位绿地率
        document.getElementById("BJ_ldl_legend").style.display = "none";// 绿地率


        deleteBJ_Graden_500mbuffer_layer();// 公园绿地500米辐射范围

        delete_layer(green_count_layer);// 绿量



    }

    /** 绿化指标专题* */
    // /绿量forest:BJ_luliang
    $("#green_count").click(
        function() {
            checkBox($(this));

            if($("#green_count").is(':checked')) {


                add_green_count_layer();

                map.getView().setCenter(
                    ol.proj.transform([116.409, 39.923], 'EPSG:4326',
                        'EPSG:3857'));

                var view = map.getView();
                view.setZoom(15);
            }
            else{
                deleteallLayer();// 清空图层
            }
        })
    // 绿视率
    $("#green_rate")
        .click(
            function() {

                checkBox($(this));

                if($("#green_rate").is(':checked')) {
                    deleteallLayer();// 清空图层

                    map.addLayer(image_BJ_green84_layer);
                    document.getElementById("green_rate_legend").style.display = "inline";

                    map.getView().setCenter(
                        ol.proj.transform([116.409, 39.923],
                            'EPSG:4326', 'EPSG:3857'));
                    var view = map.getView();
                    view.setZoom(15);
                }
                else{
                    deleteallLayer();// 清空图层
                }
            })
    // 绿化覆盖率
    $("#BJ_lhfg")
        .click(
            function() {
                checkBox($(this));

                if($("#BJ_lhfg").is(':checked')) {
                    deleteallLayer();// 清空图层

                    map.addLayer(image_BJ_lhfg_layer);
                    document.getElementById("BJ_lhfg_legend").style.display = "inline";





                    map.getView().setCenter(
                        ol.proj.transform([116.409, 39.923],
                            'EPSG:4326', 'EPSG:3857'));
                    var view = map.getView();
                    view.setZoom(15);
                }
                else{
                    deleteallLayer();// 清空图层
                }
            })



    // 绿地率
    $("#BJ_ldl")
        .click(
            function() {
                checkBox($(this));

                if($("#BJ_ldl").is(':checked')) {
                    deleteallLayer();// 清空图层

                    map.addLayer(image_BJ_ldl_layer);
                    document.getElementById("BJ_ldl_legend").style.display = "inline";




                    map.getView().setCenter(
                        ol.proj.transform([116.409, 39.923],
                            'EPSG:4326', 'EPSG:3857'));
                    var view = map.getView();
                    view.setZoom(15);
                }
                else{
                    deleteallLayer();// 清空图层
                }
            })





    // 公园绿地500米辐射范围
    $("#BJ_Graden_500mbuffer").click(
        function() {
            checkBox($(this));

            if($("#BJ_Graden_500mbuffer").is(':checked')) {
                deleteallLayer();// 清空图层

                addBJ_Graden_500mbuffer_layer();


                map.getView().setCenter(
                    ol.proj.transform([116.409, 39.923], 'EPSG:4326',
                        'EPSG:3857'));
                var view = map.getView();
                view.setZoom(15);
            }
            else{
                deleteallLayer();// 清空图层
            }
        })

    // 人均公园绿地面积
    $("#BJ_RJ").click(
        function() {
            checkBox($(this));

            if($("#BJ_Graden_500mbuffer").is(':checked')) {
                deleteallLayer();// 清空图层

                add_wms_BJ_RJ_layer();
                document.getElementById("BJ_RJ_layer_box").style.display = "inline";
                document.getElementById("BJ_RJ_legend").style.display = "inline";
                map.getView().setCenter(
                    ol.proj.transform([116.409, 39.923], 'EPSG:4326',
                        'EPSG:3857'));
                var view = map.getView();
                view.setZoom(15);
            }
            else{
                deleteallLayer();// 清空图层
            }
        })







})
