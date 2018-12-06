<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>


<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <!-- jq-->
    <script type="text/javascript" src="<%=path%>/lib/jquery/jquery-3.3.1.min.js"></script>
  

    <!--bootstrap3-->
    <script src="<%=path%>/lib/bootstrap-3.3.7-dist/bootstrap-3.3.7-dist/js/bootstrap.js"></script>
    <link rel="stylesheet" href="<%=path%>/lib/bootstrap-3.3.7-dist/bootstrap-3.3.7-dist/css/bootstrap.css">
    <!--图标-->
    <link rel="stylesheet" href="https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.css">

    <!--echarts-->
    <script type="text/javascript" src="http://echarts.baidu.com/gallery/vendors/echarts/echarts.min.js"></script>
    <script type="text/javascript" src="http://echarts.baidu.com/gallery/vendors/echarts-gl/echarts-gl.min.js"></script>
    <script type="text/javascript" src="http://echarts.baidu.com/gallery/vendors/echarts-stat/ecStat.min.js"></script>
    <script type="text/javascript" src="http://echarts.baidu.com/gallery/vendors/echarts/map/js/china.js"></script>
    <script type="text/javascript" src="http://echarts.baidu.com/gallery/vendors/echarts/map/js/world.js"></script>
    <script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=ZUONbpqGBsYGXNIYHicvbAbM"></script>
    <script type="text/javascript" src="http://echarts.baidu.com/gallery/vendors/simplex.js"></script>
    <script src="<%=path%>/lib/echarts/echarts.min.js"></script>
    <script type="text/javascript" charset="UTF-8" src="<%=path%>/page/user/index_main/index_echarts.js"></script>
    <!--openlayer5
    <script src="lib/ol5/v5.1.3/build/ol.js"></script>
    <link rel="stylesheet" href="lib/ol5/v5.1.3/css/ol.css"> -->
    <!--openlayer4 -->
    <script src="<%=path%>/lib/ol4/v4.6.4/v4.6.4/build/ol.js"></script>
    <link rel="stylesheet" href="<%=path%>/lib/ol4/v4.6.4/v4.6.4/css/ol.css">
    <script src="<%=path%>/page/user/second_main/olmap_init.js"></script>
    <!--绿化专题-->
    <script src="<%=path%>/page/topic/greening_topic/BJ_green84_jz1_layer.js"></script>
    <script src="<%=path%>/page/topic/greening_topic/BJ_lhfg_layer.js"></script>
    <script src="<%=path%>/page/topic/greening_topic/BJ_ldl_layer.js"></script>
    <script src="<%=path%>/page/topic/greening_topic/BJ_Graden_500Mbuffer_layer.js"></script>
    <script src="<%=path%>/page/topic/greening_topic/BJ_luliang.js"></script>
     
    <!--自定义样式-->
    <link rel="stylesheet" href="<%=path%>/css/mlayui.css">
    <link rel="stylesheet" href="<%=path%>/css/layui_rightbox.css">

    <!-- images/layui_header_bg/bg.jpg-->
</head>
<body style="width:100%; overflow:hidden; height:1100px;background-image: url('<%=path%>/images/bg/bg2.jpg');background-repeat:no-repeat; background-size:100% 100%;
">

<div class="row">
    <div class="col-md-12 "
         style=" font-size:36px;color:rgb(201,224,176);font-family:STKaiti  ;cursor:pointer;position: relative; padding-bottom: 5%;
            height: 0;
            overflow: hidden">
        <div style="position: relative;left: 10px"><i
                class="fa fa-graduation-cap" style="font-size:36px"></i><a
                style="color:rgb(201,224,176);text-decoration:none;" href="<%=path%>/page/user/index_main/index_main.jsp">绿地规划体检监测</a>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-md-12"
         style=" font-size:36px;color:rgb(201,224,176);font-family:STKaiti  ;cursor:pointer;">
        <div style="background-color:cornflowerblue;height: 2px">
        </div>
    </div>
</div>

<div class="row" style="position: relative;top:5px">

    <!--左侧栏目----------------------------------------------------------------------------------------->
    <!--左侧栏目----------------------------------------------------------------------------------------->
    <!--左侧栏目----------------------------------------------------------------------------------------->
    <!--左侧栏目----------------------------------------------------------------------------------------->
    <!--左侧栏目----------------------------------------------------------------------------------------->
    <!--左侧栏目----------------------------------------------------------------------------------------->

    <div class="col-md-7"
         style=" font-size:36px;color:white;font-family:Microsoft YaHei ;">
        <!--左上栏目-------------------------->
        <div class="row" style="">

            <div class="col-md-6"
                 style="font-size:36px;color:white;font-family:Microsoft YaHei ;line-height: 60px;position: relative;top:5px;left: 70px;position: relative; padding-bottom: 30%;
            height: 0;
           overflow: hidden; ">
                <div style="height:100%; line-height: 90% ">
                    <div style="position: relative;left: 40px;font-size:21px;color: rgb(182,213,147)">公园绿地<span
                            style="color: yellow">467.48</span>hm2
                    </div>
                    <div style="position: relative;left: 40px; font-size:21px;color: rgb(182,213,147)">防护绿地<span
                            style="color: yellow">91.28</span>hm2
                    </div>
                    <div style="position: relative;left: 40px; font-size:21px;color: rgb(182,213,147)">广场用地<span
                            style="color: yellow">4,35</span>hm2
                    </div>
                    <div style="position: relative;left: 40px; font-size:21px;color: rgb(182,213,147)">区域绿地<span
                            style="color: yellow">5.12</span>hm2
                    </div>
                    <div style="position: relative;left: 40px; font-size:21px;color: rgb(182,213,147)">附属绿地<span
                            style="color: yellow">12.23</span>hm2
                    </div>
                    <div style="position: relative;left: 40px; font-size:21px;color: rgb(182,213,147)">古树名木<span
                            style="color: yellow">6735</span>株
                    </div>
                </div>
            </div>
            <div class="col-md-6"
                 style="font-size:36px;color:white;font-family:Microsoft YaHei ;background-color: rgba(96,96,96,0.3); ;position: relative; padding-bottom: 37%;
            height: 0;
            overflow: hidden">


                <div class="row ">
                    <div class="col-md-12">
                        <div id="container1" style="height: 150%"></div>
                    </div>

                </div>
                <div class="row ">
                    <div class="col-md-12">
                        <div id="container2" style="height: 150%"></div>
                    </div>

                </div>


            </div>
        </div>
        <div class="row" style="background-color:cornflowerblue;height: 2px;position: relative;top:5px;">
            <div class="col-md-12"
                 style=" color:rgb(201,224,176) ;cursor:pointer; ">
                <!--<div style="background-color:cornflowerblue;height: 2px">-->
                <!--</div>-->
            </div>
        </div>

        <!--左下栏目-------------------------->
        <div class="row" style="background-color: rgba(96,96,96,0.3);position: relative;top:10px;">
            <div class="col-md-4"
                 style=" font-size:36px;color:white;font-family:Microsoft YaHei ; position: relative; padding-bottom: 50%;
            height: 0;">
                <div id="container3" style="height: 280%   "></div>
            </div>
            <div class="col-md-4"
                 style=" font-size:36px;color:white;font-family:Microsoft YaHei ;position: relative; padding-bottom: 50%;
            height: 0;">

                <div id="container4" style="height: 280%  "></div>
            </div>
            <div class="col-md-4"
                 style=" font-size:36px;color:white;font-family:Microsoft YaHei ;position: relative; padding-bottom: 50%;
            height: 0; ">


                <div id="container5" style="height: 280%  ;background-color: red"></div>
            </div>
        </div>
    </div>

    <!--右侧栏目----------------------------------------------------------------------------------------->
    <!--右侧栏目----------------------------------------------------------------------------------------->
    <!--右侧栏目----------------------------------------------------------------------------------------->
    <!--右侧栏目----------------------------------------------------------------------------------------->
    <!--右侧栏目----------------------------------------------------------------------------------------->
    <!--右侧栏目----------------------------------------------------------------------------------------->
    <!--右侧栏目----------------------------------------------------------------------------------------->
    <div class="col-md-5"
         style=" font-size:36px;color:white;font-family:Microsoft YaHei ;">
        <!--右上栏目-------------------------->
        <div class="row" style="position: relative; height: 400px;right: 5px">

            <div class="col-md-12"
                 style="">
                <div id="map" class="map" style="height: 400px;width: 120%">

                    <!--右侧图层选择栏-->
                    <!--右侧图层选择栏-->
                    <!--右侧图层选择栏-->
                    <!--右侧图层选择栏-->
                    <!--右侧图层选择栏-->
                    <div id="layer_select"
                         style="position: absolute; z-index: 99999;bottom: 10px;left: 20px;background: rgba(0,0,0,.8); border-radius: 3px;box-shadow: 1px 1px 0 1px rgba(0, 0, 0, 0.01);padding: 10px;color: white;">
                        <table>
                            <thead>
                            <tr>
                                <th colspan="2">图层选择</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>


                                <td width="50"><input type="checkbox" id="green_rate"></td>
                                <td style="position:relative;left: -30px">绿视率</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" id="BJ_lhfg"></td>
                                <td style="position:relative;left: -30px"> 绿化覆盖率</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" id="BJ_ldl"></td>
                                <td style="position:relative;left: -30px">绿地率</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" id="BJ_Graden_500mbuffer"></td>
                                <td style="position:relative;left: -30px">公园绿地500米辐射范围</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" id="green_count"></td>
                                <td style="position:relative;left: -30px"   >绿量</td>
                            </tr>

                            </tbody>
                        </table>
                    </div>
                    <!--绿视率图例栏-->
                    <!--绿视率图例栏-->
                    <!--绿视率图例栏-->
                    <!--绿视率图例栏-->
                    <!--绿视率图例栏-->
                    <div id="green_rate_legend"
                         style="position: absolute; z-index: 99999;bottom: 10px;right: 10px;background: rgba(0,0,0,.8); border-radius: 3px;box-shadow: 1px 1px 0 1px rgba(0, 0, 0, .15);padding: 10px;display: none;color: white;">
                        <table>
                            <thead>
                            <tr>
                                <th colspan="2">绿视率(单位:%)</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td width="50"><i style="background:#B0E000;  display: block;
    height: 12px;
    width: 90%;"></i></td>
                                <td>很好(>35%)</td>
                            </tr>
                            <tr>
                                <td><i style="background:#FFAA01;  display: block;
    height: 12px;
    width: 90%;"></i></td>
                                <td>较好(25%-35%)</td>
                            </tr>
                            <tr>
                                <td><i style="background:#38A700;  display: block;
    height: 12px;
    width: 90%;"></i></td>
                                <td>一般(15%-25%)</td>
                            </tr>
                            <tr>
                                <td><i style="background:#FE0000;  display: block;
    height: 12px;
    width: 90%;"></i></td>
                                <td>较差(0-15%)</td>
                            </tr>

                            </tbody>
                        </table>
                    </div>
                    <!--绿化覆盖率图例栏-->
                    <!--绿化覆盖率图例栏-->
                    <!--绿化覆盖率图例栏-->
                    <!--绿化覆盖率图例栏-->
                    <!--绿化覆盖率图例栏-->
                    <div id="BJ_lhfg_legend"
                         style="position: absolute; z-index: 99999;bottom: 10px;right: 10px;background: rgba(0,0,0,.8); border-radius: 3px;box-shadow: 1px 1px 0 1px rgba(0, 0, 0, .15);padding: 10px;display: none;color: white;">
                        <table>
                            <thead>
                            <tr>
                                <th colspan="2">绿化覆盖率(单位:%)</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td width="50"><i style="background:rgb(204,255,204);  display: block;
    height: 12px;
    width: 90%;"></i></td>
                                <td>0~10</td>
                            </tr>
                            <tr>
                                <td><i style="background:rgb(164,245,157);  display: block;
    height: 12px;
    width: 90%;"></i></td>
                                <td>10~30</td>
                            </tr>
                            <tr>
                                <td><i style="background:rgb(123,232,111);  display: block;
    height: 12px;
    width: 90%;"></i></td>
                                <td>30~60</td>
                            </tr>
                            <tr>
                                <td><i style="background:rgb(77,217,67);  display: block;
    height: 12px;
    width: 90%;"></i></td>
                                <td>60~90</td>
                            </tr>
                            <tr>
                                <td><i style="background:rgb(14,204,14);  display: block;
    height: 12px;
    width: 90%;"></i></td>
                                <td>90~400</td>
                            </tr>


                            </tbody>
                        </table>
                    </div>
                    <!--绿地率图例栏-->
                    <!--绿地率图例栏-->
                    <!--绿地率图例栏-->
                    <!--绿地率图例栏-->
                    <!--绿地率图例栏-->
                    <div id="BJ_ldl_legend"
                         style="position: absolute; z-index: 99999;bottom: 10px;right: 10px;background: rgba(0,0,0,.8); border-radius: 3px;box-shadow: 1px 1px 0 1px rgba(0, 0, 0, .15);padding: 10px;display: none;color: white;">
                        <table>
                            <thead>
                            <tr>
                                <th colspan="2">绿地率(单位:%)</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td width="50"><i style="background:rgb(236,252,204);  display: block;
    height: 12px;
    width: 90%;"></i></td>
                                <td>0~7</td>
                            </tr>
                            <tr>
                                <td><i style="background:rgb(218,240,158);  display: block;
    height: 12px;
    width: 90%;"></i></td>
                                <td>7~20</td>
                            </tr>
                            <tr>
                                <td><i style="background:rgb(199,227,113);  display: block;
    height: 12px;
    width: 90%;"></i></td>
                                <td>20~40</td>
                            </tr>
                            <tr>
                                <td><i style="background:rgb(180,217,69);  display: block;
    height: 12px;
    width: 90%;"></i></td>
                                <td>40~70</td>
                            </tr>
                            <tr>
                                <td><i style="background:rgb(157,204,16);  display: block;
    height: 12px;
    width: 90%;"></i></td>
                                <td>70~100</td>
                            </tr>


                            </tbody>
                        </table>
                    </div>


                    <!--右上角地图选择栏-->
                    <!--右上角地图选择栏-->
                    <!--右上角地图选择栏-->
                    <!--右上角地图选择栏-->
                    <!--右上角地图选择栏-->
                    <div id="mapselect"
                    style="position: absolute; z-index: 99999;top: 5px;right: 10px;background: rgba(0,0,0,.8); border-radius: 3px;box-shadow: 1px 1px 0 1px rgba(0, 0, 0, .15);padding: 5px;border: medium double rgb(250,255,255);height: 55px;width: 118px">
                    <img id="mapselect_image" style="cursor: pointer;position:relative;margin-top: -20px" src="<%=path%>/images/layui_header_bg/mapselect.png"> <img
                    id="mapselect_map" style="cursor: pointer;position:relative;left: 55px;bottom: 61px" src="<%=path%>/images/layui_header_bg/mapselect2.png">
                    </div>

                </div>
            </div>


        </div>
        <div class="row" style="background-color:cornflowerblue;height: 2px;position: relative;top:5px;left:10px">
            <div class="col-md-12"
                 style=" color:rgb(201,224,176) ;cursor:pointer; ">
                <!--<div style="background-color:cornflowerblue;height: 2px">-->
                <!--</div>-->
            </div>
        </div>
        <!--右下栏目--------position: relative; padding-bottom: 40%;
        height: 100px;----------------15,54,140-->


        <div class="row"
             style="background-color: rgba(96,96,96,0.3);position: relative;top:10px;height: 1900px;left: 10px">

            <div class="col-md-5"
                 style=" font-size:36px;color:white;font-family:Microsoft YaHei ;position: relative; padding-bottom: 40%;
        height: 0; ">
                <div id="container6" style="height: 200px; "></div>
            </div>
            <div class="col-md-5"
                 style="  position: relative; padding-bottom: 40%;
        height:0;">
                <div id="container7" style="height: 200px; "></div>
            </div>

        </div>


    </div>
</div>


<script type="text/javascript">
    //    var map;
    //
    //
    //    $(function () {
    //
    //
    //        map = new ol.Map({
    //            target: 'map',
    //            layers: [
    //                new ol.layer.Tile({
    //                    source: new ol.source.OSM()
    //                })
    //            ],
    //            view: new ol.View({
    //                center: ol.proj.fromLonLat([121.48, 31.22]),
    //                zoom: 4
    //            })
    //        });
    //
    //
    //    })

    $(function () {

        addcontainer("container1", "<%=path%>/data/test1.json", "绿地率");
        addcontainer("container2", "<%=path%>/data/test2.json", "绿地率");
        addcontainer("container3", "<%=path%>/data/test3.json", "公园绿地");
        addcontainer("container4", "<%=path%>/data/test4.json", "区域绿地");
        addcontainer("container5", "<%=path%>/data/test5.json", "附属绿地");
        addcontainer("container6", "<%=path%>/data/test6.json", "现状公园300米服务范围");
        addcontainer("container7", "<%=path%>/data/test7.json", "现状公园500米服务范围");
        //   init__openlayer5();

        //add_heatmap("heatdata.json");
        // add_geojson("linet.json");


    })


</script>

</body>
</html>