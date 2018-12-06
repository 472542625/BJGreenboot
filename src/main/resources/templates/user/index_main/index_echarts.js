function addcontainer_index(echarts_contain, dataurl, title) {

    var legenddata = [];
    var data2 = [];


    $.ajax({
        url:  dataurl,
        type: "GET",
        success: function (result) {

            $.each(result, function (index, item) {

                legenddata.push(item.name);


                data2 = result;


            });

            var dom = document.getElementById(echarts_contain);
            var myChart = echarts.init(dom);
            var app = {};
            var option = null;
            app.title = '1';

            option = {
                title: {
                    text: title,
                    left: 'center',
                    top: '84%',
                    textStyle: {
                        color: '#ccc'
                    }
                },
                grid:
                {
                    right:120
                }

                ,
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    x : 0,
                    y :0 ,
                    data: legenddata,
                    left: '0px',
                    //padding:'10px'
                    // show:false
                    textStyle: {
                        color: 'rgb(129,183,69)',
                        //fontSize:15
                        // shadowColor:'rgb(255,183,69)'

                    },
                    padding: [
                        0,  // ��
                        0, // ��
                        0,  // ��
                        0 // ��
                    ]
                },
                color: ['rgb(114,162,62)','rgb(66,118,188)', 'rgb(129,185,69)', 'rgb(12,157,64)', 'rgb(225,210,60)', 'rgb(146,172,223)', 'rgb(121,174,65)', '#bda29a', '#6e7074', '#546570', '#c4ccd3'],
                series: [
                    {
                        name: title,
                        type: 'pie',
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '10',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: data2
                    }
                ]
            };


            if (option && typeof option === "object") {
                myChart.setOption(option, true);
                window.onresize = myChart.resize;
            }


        }
    })


}



function addcontainer(echarts_contain, dataurl, title) {

    var legenddata = [];
    var data2 = [];


    $.ajax({
        url: dataurl,
        type: "GET",
        success: function (result) {

            $.each(result, function (index, item) {

                legenddata.push(item.name);


                data2 = result;


            });

            var dom = document.getElementById(echarts_contain);
            var myChart = echarts.init(dom);
            var app = {};
            var option = null;
            app.title = '1';

            option = {

                title: {
                    text: title,
                    left: 'center',
                    top: '84%',
                    textStyle: {
                        color: '#ccc'
                    }
                },
                grid:
                    {
                        right:300
                    }

                ,
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {

                    orient: 'vertical',
                    x : 0,
                    y :0 ,
                    data: legenddata,
                    left: '-12px',
                    //padding:'10px'
                    // show:false
                    textStyle: {
                        color: 'rgb(129,183,69)',
                        //fontSize:15
                        // shadowColor:'rgb(255,183,69)'

                    },
                    padding: [
                        0,  // ��
                        0, // ��
                        0,  // ��
                        0 // ��
                    ]
                },
                color: ['rgb(114,162,62)', 'rgb(66,118,188)', 'rgb(129,185,69)', 'rgb(12,157,64)', 'rgb(225,210,60)', 'rgb(146,172,223)', 'rgb(121,174,65)', '#bda29a', '#6e7074', '#546570', '#c4ccd3'],
                series: [
                    {
                        name: title,
                        type: 'pie',
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '15',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: data2
                    }
                ],

            };


            if (option && typeof option === "object") {
                myChart.setOption(option, true);
                window.onresize = myChart.resize;
            }


        }
    })


}

