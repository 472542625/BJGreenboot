/**
 * Created by Administrator on 2018/8/21/021.
 */

var vector_BJ_JC_Air_layer;

function add_BJ_JC_Air_layer() {

	var featurearray = [];
	var source;

	// &cql_filter=age between 0 and 60
	$
			.ajax({
				// url: "data/" + dataurl,
				url : server_url+'geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=forest:BJ_JC_Air&outputFormat=application/json&srsname=EPSG:4326',
				type : "GET",
				success : function(result) {
					var features = result.features;
					for (var i = 0; i < features.length; i++) {
						var point = new ol.Feature(
								{

									geometry : new ol.geom.Point(
											ol.proj
													.fromLonLat(features[i].geometry.coordinates)),
									NAME : features[i].properties.NAME,
									owner : features[i].properties.owner,
									PM2_5 : features[i].properties.PM2_5,
									PM10 : features[i].properties.PM10,
									O3 : features[i].properties.O3,
									NO2 : features[i].properties.NO2,
									SO2 : features[i].properties.SO2,
									CO : features[i].properties.CO,
									temper : features[i].properties.temper,
									AQI : features[i].properties.AQI,
									x : features[i].geometry.coordinates[0],
									y : features[i].geometry.coordinates[1],
									Id : features[i].properties.Id,
									owner : features[i].properties.owner,
									state : features[i].properties.state,

								});
						// console.log(ol.proj
						// 		.fromLonLat(features[i].geometry.coordinates));
						// console.log(features[i].geometry.coordinates);

						point
								.setStyle(new ol.style.Style(
										{
											image : new ol.style.Icon(
													{
														// color: '#4271AE',
														src : '/images/topic/monitor_topic/air_point.png',
														scale : 0.1
													}),

										 

											text : new ol.style.Text(
													{
														text : "  "
																+ features[i].properties.NAME
																+ "  ",
														fill : new ol.style.Fill(
																{
																	color : 'white'
																}),
														backgroundFill : new ol.style.Fill(
																{
																	color : 'rgb(0,0,0)'
																}),
														offsetY : 45

													}),
											fill : new ol.style.Fill({
												color : '#ff0000'
											}),
											stroke : new ol.style.Stroke({
												color : '#ff0000'
											})

										}));
						featurearray.push(point);
					}

					var source = new ol.source.Vector({
						features : featurearray
					});
                    vector_BJ_JC_Air_layer = new ol.layer.Vector({
						source : source,
						zIndex : 1002
					});
					map.addLayer(vector_BJ_JC_Air_layer);
				},
				error : function() {
					alert('error');
				}
			})
	// setInterval_Point_info_change();

}

function deleteBJ_JC_Air_layer() {

	delete_layer(vector_BJ_JC_Air_layer);
}

function init_monitor_table() {

	var dom = document.getElementById("test12345");
	var myChart = echarts.init(dom);
	var app = {};
	option = null;

	// alert(new Date(2019, 9,1));
	// var now = +new Date(1997, 9, 3);
	var data = [ {
		name : '1',
		value : [ new Date(2019, 7, 1, 0), 23 ]
	}, {
		name : '2',
		value : [ new Date(2019, 7, 1, 1), 25 ]
	}, {
		name : '3',
		value : [ new Date(2019, 7, 1, 2), 26 ]
	}, {
		name : '4',
		value : [ new Date(2019, 7, 1, 3), 27 ]
	}, {
		name : '5',
		value : [ new Date(2019, 7, 1, 4), 28 ]
	}, {
		name : '6',
		value : [ new Date(2019, 7, 1, 5), 32 ]
	}, {
		name : '7',
		value : [ new Date(2019, 7, 1, 6), 25 ]
	}, {
		name : '8',
		value : [ new Date(2019, 7, 1, 7), 26 ]
	}, {
		name : '9',
		value : [ new Date(2019, 7, 1, 8), 27 ]
	},

	{
		name : '10',
		value : [ new Date(2019, 7, 1, 9), 25 ]
	}, {
		name : '11',
		value : [ new Date(2019, 7, 1, 10), 24 ]
	}, {
		name : '12',
		value : [ new Date(2019, 7, 1, 11), 23 ]
	}, {
		name : '13',
		value : [ new Date(2019, 7, 1, 12), 22 ]
	}, {
		name : '14',
		value : [ new Date(2019, 7, 1, 13), 21 ]
	}, {
		name : '15',
		value : [ new Date(2019, 7, 1, 14), 19 ]
	}, {
		name : '16',
		value : [ new Date(2019, 7, 1, 15), 29 ]
	}, {
		name : '17',
		value : [ new Date(2019, 7, 1, 16), 28 ]
	}, {
		name : '18',
		value : [ new Date(2019, 7, 1, 17), 28 ]
	}, {
		name : '19',
		value : [ new Date(2019, 7, 1, 18), 27 ]
	}, {
		name : '20',
		value : [ new Date(2019, 7, 1, 19), 22 ]
	}, {
		name : '21',
		value : [ new Date(2019, 7, 1, 20), 25 ]
	}, {
		name : '22',
		value : [ new Date(2019, 7, 1, 21), 26 ]
	}, {
		name : '23',
		value : [ new Date(2019, 7, 1, 22), 27 ]
	}, {
		name : '24',
		value : [ new Date(2019, 7, 1, 23), 29 ]
	}, {
		name : '25',
		value : [ new Date(2019, 7, 1, 24), 32 ]
	},

	];
	// var data = [];
	// for (var i = 0; i < 1000; i++) {
	// data.push(randomData());
	// }

	option = {
		// title: {
		// text: '�¶�'
		// },
		// tooltip: {
		// trigger: 'axis',
		// formatter: function (params) {
		// params = params[0];
		// var date = new Date(params.name);
		// return date.getDate() + '/' + (date.getMonth() + 1) + '/' +
		// date.getFullYear() + ' : ' + params.value[1];
		// },
		// axisPointer: {
		// animation: false
		// }
		// },
		xAxis : {
			type : 'time',
			splitLine : {
				show : false
			}
		},
		yAxis : {
			type : 'value',
			boundaryGap : [ 0, '20%' ],
			splitLine : {
				show : false
			}
		},
		series : [ {
			name : 'ģ�����',
			type : 'line',
			showSymbol : false,
			hoverAnimation : false,
			data : data
		} ],
		textStyle : {

			// color:'rgb(143,143,142)' ��ɫ
			color : 'white',
			lineHeight : '10px'
		},

		// ////////////����ǵ�������
		grid : {

			top : '3%',
			left : '5%',
			bottom : '2%',
			containLabel : true
		},
	};

	// setInterval(function () {
	//
	// //for (var i = 0; i < 5; i++) {
	// // data.shift();
	// //
	// //}
	// data = [];
	// data = [{name:'1',value:[new Date(2008, 9, 3),1211]}
	// ,{name:'2',value:[new Date(2011, 9, 3),1123]},
	// {name:'3',value:[new Date(2012, 10, 3),194]},
	// {name:'4',value:[new Date(2013, 1, 3),1998]},
	// {name:'5',value:[new Date(2013, 2, 3),1822]},
	// {name:'6',value:[new Date(2013, 3, 3),1234]},
	// {name:'7',value:[new Date(2013, 4, 3),1299]},
	// {name:'8',value:[new Date(2013, 5, 3),1390]},
	// {name:'9',value:[new Date(2013, 6, 3),1421]},
	// {name:'10',value:[new Date(2013, 7, 3),1456]},
	// {name:'11',value:[new Date(2013, 8, 3),998]},
	// {name:'12',value:[new Date(2013, 9, 3),921]},
	// {name:'13',value:[new Date(2013, 12, 3),1300]},
	// {name:'14',value:[new Date(201, 1, 3),1998]},
	// {name:'15',value:[new Date(2014, 2, 3),2998]},
	// {name:'16',value:[new Date(2014, 3, 3),998]},
	// {name:'17',value:[new Date(2014, 3, 3),998]},
	// {name:'18',value:[new Date(2014, 4, 3),998]},
	// {name:'19',value:[new Date(2014, 5, 3),998]},
	// {name:'20',value:[new Date(2014, 6, 3),998]},
	// {name:'21',value:[new Date(2018, 7, 3),1998]}
	//
	//
	//
	// ];
	// myChart.setOption({
	// series: [{
	// data: data
	// }]
	// });
	// }, 1000);;
	if (option && typeof option === "object") {
		myChart.setOption(option, true);
	}
}
function setInterval_Point_info_change() {

	setInterval(function() {
		// #num12 #num22
		// for (var i = 0; i < 5; i++) {
		// data.shift();
		//
		// }
		var text1 = (Math.random() * 1000) + "";
		var text2 = (Math.random() * 1000) + "";
		$("#num12").text(text1.slice(0, 2));
		$("#num22").text(text2.slice(0, 2));
		// alert( text.slice(0, 2));
	}, 1000);
	;

}



///专业版气象服务（cityid）-墨迹天气
function aliyun(name){

	var dataobj ;
    $.ajax({

        type : "GET",
        url:'http://ali-pm25.showapi.com/pm25-detail',//url就是api请求接口
        data:{
            'city':'北京'  //传入参数：area获取areaid必须选一个
        },

        beforeSend:function(request){	//向接口发送身份认证
            request.setRequestHeader("Authorization","APPCODE "+"ad46edb496a74883aadb28499f26d392");//注意这里APPCODE后面有一个空格，不能删掉
        },
        dataType:"json",//请求返回数据格式
        success: function (data) {


           // console.log(data.showapi_res_body.siteList);
            var obj;
			for (var i=0;i<data.showapi_res_body.siteList.length;i++)
			{

				if(name==data.showapi_res_body.siteList[i].site_name){
                    obj=data.showapi_res_body.siteList[i];
                    dataobj = obj;

                    var NAME = $("<td></td>").append(name);
                    var aqi = $("<td></td>").append(dataobj.aqi);
                    var co = $("<td></td>").append(dataobj.co);
                    var no2 = $("<td></td>").append(dataobj.no2);
                    var o3 = $("<td></td>").append(dataobj.o3);
                    var pm2_5 = $("<td></td>").append(dataobj.pm2_5);
                    var pm10 = $("<td></td>").append(dataobj.pm10);
                    var so2 = $("<td></td>").append(dataobj.so2);
                    var primary_pollutant = $("<td></td>").append(dataobj.primary_pollutant);
                    var quality = $("<td></td>").append(dataobj.quality);


                    $("<tr></tr>").append('站点名称').append(NAME).appendTo(
                    	"#feeature_properties_talbe_tbody");
                    $("<tr></tr>").append('AQI').append(aqi).appendTo(
                    	"#feeature_properties_talbe_tbody");
                    $("<tr></tr>").append('空气质量').append(quality).appendTo(
                    	"#feeature_properties_talbe_tbody");
                    $("<tr></tr>").append('pm2_5').append(pm2_5).appendTo(
                    	"#feeature_properties_talbe_tbody");
                    $("<tr></tr>").append('pm10').append(pm10).appendTo(
                        "#feeature_properties_talbe_tbody");

                    $("<tr></tr>").append('so2').append(so2).appendTo(
                        "#feeature_properties_talbe_tbody");
                    $("<tr></tr>").append('no2').append(no2).appendTo(
                        "#feeature_properties_talbe_tbody");
                    $("<tr></tr>").append('co').append(co).appendTo(
                        "#feeature_properties_talbe_tbody");
                    $("<tr></tr>").append('o3').append(o3).appendTo(
                        "#feeature_properties_talbe_tbody");
                    $("<tr></tr>").append('主要污染物').append(primary_pollutant).appendTo(
                        "#feeature_properties_talbe_tbody");
                    //
                    // $("#aqi").text(data.showapi_res_body.pm.aqi);
                    // $("#so2").text(data.showapi_res_body.pm.so2);
                    // $("#pm2_5").text(data.showapi_res_body.pm.pm2_5);
                    // $("#primary_pollutant").text(data.showapi_res_body.pm.primary_pollutant);
                    // $("#co").text(data.showapi_res_body.pm.co);
                    // $("#no2").text(data.showapi_res_body.pm.no2);
                    // $("#quality").text(data.showapi_res_body.pm.quality);
                    // $("#pm10").text(data.showapi_res_body.pm.pm10);
                    // $("#o3").text(data.showapi_res_body.pm.pm10);

                     
				}
			}
			
			//console.log(data.showapi_res_body.pm);

        },
        error:function(e){
            console.log(e.message);
        }

    })




}
