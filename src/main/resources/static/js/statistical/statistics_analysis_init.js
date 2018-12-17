
 

function addEcharts_statistical_echarts_area_box(echarts_contain, result) {

	var legendx = [];
	var legendy = [];
	 


			$.each(result.extend.pageInfo.list, function(index, item) {
                legendx.push(item.sum_area.toFixed(2));
                legendy.push(item.street);


			});
			var dom = document.getElementById(echarts_contain);
			var myChart = echarts.init(dom);
			var app = {};
			option = null;
			app.title = '坐标轴刻度与标签对齐';

			option = {
				color : [ '#3398DB' ],
				tooltip : {
					trigger : 'axis',
					axisPointer : { // 坐标轴指示器，坐标轴触发有效
						type : 'shadow' // 默认为直线，可选为：'line' | 'shadow'
					}
				},
				grid : {
					// left: '3%',
					// right: '4%',
					// bottom: '3%',
					y2:140,
					containLabel : true
				},
				xAxis : [ {
					type : 'category',
					data : legendy,
					axisTick : {
						alignWithLabel : true
					},
					axisLabel : {
						show : true,
						textStyle : {
							color : 'black'
						},
                        interval:0,//横轴信息全部显示
                        rotate:-30,//-30度角倾斜显示
					}
				} ],
				yAxis : [ {
					type : 'value',
					axisLabel : {
						show : true,
						textStyle : {
							color : 'black'
						}
					}

				} ],

				series : [ {
					name : '面积(单位：平方米)',
					type : 'bar',
					barWidth : '60%',
					label : {
						normal : {
							show : false,
							position : 'center'
						},
						emphasis : {
							show : false
						},

					},
					data : legendx
				} ]
			};
			if (option && typeof option === "object") {
				myChart.setOption(option, true);
			}


    // var charts = [];
    // var chart1 = echarts.init(document.getElementById("statistical_echarts_box"));
    //
    // chart1.setOption(option);
    //
    // charts.push(chart1);
    //
    // $(window).resize(function() {
    //     for(var i = 0; i < charts.length; i++) {
    //         charts[i].resize();
    //     }
    // });
    // //解决tab切换不显示问题 在加载窗口后重新渲染。
    // $('a[data-toggle="pill"]').on('shown.bs.tab', function(e) {
    //     for(var i = 0; i < charts.length; i++) {
    //         charts[i].resize();
    //     }
    // });

}




function addEcharts_statistical_echarts_count_box(echarts_contain, result) {

    var legendx = [];
    var legendy = [];



    $.each(result.extend.pageInfo.list, function(index, item) {
        legendx.push(item.count);
        legendy.push(item.street);


    });
    var dom = document.getElementById(echarts_contain);
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    app.title = '坐标轴刻度与标签对齐';
    option = {
        color : [ '#3398DB' ],
        tooltip : {
            trigger : 'axis',
            axisPointer : { // 坐标轴指示器，坐标轴触发有效
                type : 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid : {
            // left: '3%',
            // right: '4%',
            // bottom: '3%',
			y2:140,
            containLabel : true
        },
        xAxis : [ {
            type : 'category',
            data : legendy,
            axisTick : {
                alignWithLabel : true
            },
            axisLabel : {
                show : true,
                textStyle : {
                    color : 'black'
                },
                interval:0,//横轴信息全部显示
                rotate:-30,//-30度角倾斜显示
            }
        } ],
        yAxis : [ {
            type : 'value',
            axisLabel : {
                show : true,
                textStyle : {
                    color : 'black'
                }
            }

        } ],

        series : [ {
            name : '数量(单位：个)',
            type : 'bar',
            barWidth : '60%',
            label : {
                normal : {
                    show : false,
                    position : 'center'
                },
                emphasis : {
                    show : true
                },

            },
            data : legendx
        } ]
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }


    // var charts = [];
    // var chart1 = echarts.init(document.getElementById("statistical_echarts_box"));
    //
    // chart1.setOption(option);
    //
    // charts.push(chart1);
    //
    // $(window).resize(function() {
    //     for(var i = 0; i < charts.length; i++) {
    //         charts[i].resize();
    //     }
    // });
    // //解决tab切换不显示问题 在加载窗口后重新渲染。
    // $('a[data-toggle="pill"]').on('shown.bs.tab', function(e) {
    //     for(var i = 0; i < charts.length; i++) {
    //         charts[i].resize();
    //     }
    // });

}