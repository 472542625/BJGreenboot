var totalpage, currentpage;


$(function () {


    //得到绿地类型
    getGreentype1("#greentype1");

    $("<option></option>").append("全选").appendTo($("#greentype"));
    // $("<option></option>").append("请选择").appendTo($("#greentype1"));
    $("<option></option>").append("全选").appendTo($("#street"));
    ///得到街道
    getStreet("#street");
    to_page_statistical_reslut(1);

    $(document).on("click", "#greentype1", function() {
        ///得到绿地性质
        getGreentype("#greentype");
    });




    $(document).on("click", "#statics_select_Btn", function() {
     //console.log( $("#statics_select_form").serialize());
        to_page_statistical_reslut(1);

    });



    // 点击跳转到详情页面事件
    $(document).on("click", ".view_btn", function() {
        var street = $(this).attr("view-id");
        to_page_statistical_detail(1,street);
        // alert(street+","+greentype1+","+greentype);
        $('#myTab a[href="#statistical_details"]').tab('show');

        // to_page_statistical_detail

    });
    $(document).on("click", ".view_all_btn", function() {

        to_page_statistical_detail(1,"全选");
        // alert(street+","+greentype1+","+greentype);
        $('#myTab a[href="#statistical_details"]').tab('show');

        // to_page_statistical_detail

    });


    // 点击跳转定位到可视化页面事件
    $(document).on("click", ".positioning_btn", function() {
        var gid = $(this).attr("positioning-id");




        $('#myTab a[href="#statistical_map"]').tab('show');
       positioning_map(gid);
         // to_page_statistical_detail

    });

})





//得到绿地类型下拉菜单
function getGreentype1(element) {
    // 清空之前下拉列表的值
    $(element).empty();
    $("<option></option>").append("全选").appendTo($("#greentype1"));
    $.ajax({
        url: "/selectGreentype1",
        type: "GET",
        success: function (result) {
            // $("<option></option>").append("请选择").appendTo(element);
            $.each(result, function () {


                var optiontree = $("<option></option>")
                    .append(this);
                optiontree.appendTo(element);
            })
        }
    });
}

//得到绿地性质下拉菜单
function getGreentype(element) {
    // 清空之前下拉列表的值
    $(element).empty();
    $("<option></option>").append("全选").appendTo($("#greentype"));
    $.ajax({
        url: "/selectGreentype/" + $("#greentype1").val(),
        type: "GET",
        success: function (result) {
            // $("<option></option>").append("请选择").appendTo(element);
            $.each(result, function () {


                var optiontree = $("<option></option>")
                    .append(this);
                optiontree.appendTo(element);
            })
        }
    });
}

//得到街道下拉菜单
function getStreet(element) {
    // 清空之前下拉列表的值
    $(element).empty();
    $("<option></option>").append("全选").appendTo($("#street"));
    $.ajax({
        url: "/selectStreet",
        type: "GET",
        success: function (result) {
            // $("<option></option>").append("请选择").appendTo(element);
            $.each(result, function () {


                var optiontree = $("<option></option>")
                    .append(this);
                optiontree.appendTo(element);
            })
        }
    });
}

//默认查询统计结果
function to_page_statistical_reslut(pn) {
    $.ajax({
        url: "/selectStatisticalAnalysis",
        data:$("#statics_select_form").serialize()+"&pn="+pn,
        type: "get",
        success: function (result) {
            //console.log(result);

            build_statistical_reslut_table(result);
            build_pages_info(result);
            build_pages_nav(result);

            addEcharts_statistical_echarts_area_box("statistical_echarts_area_box", result);
            addEcharts_statistical_echarts_count_box("statistical_echarts_count_box", result);
        }
    })
}





//分页查询模块数据加载函数
function build_statistical_reslut_table(result) {
    $("#statistical_result_table tbody").empty();
    var points = result.extend.pageInfo.list;
    var sum_area_all=0;
    var count_all=0;

    $
        .each(
            points,
            function (index, item) {
              //  var checkboxTd = $("<td><input type='checkbox' class='check_item' /></td>")

                var id = $("<td width='60px'></td>").append(index+1);
                var street = $("<td width='200px'></td>")
                    .append(item.street);
                sum_area_all = sum_area_all+item.sum_area;
                var sum_area = $("<td width='100px'></td>").append(item.sum_area.toFixed(2));
                count_all = count_all+item.count;
                var count = $("<td width='100px'></td>").append(item.count);



                // var editBtn = $("<button></button>")
                // 		.addClass(
                // 				"btn btn-primary btn-sm edit_btn")
                // 		.append(
                // 				$("<span></span>")
                // 						.addClass(
                // 								"glyphicon glyphicon-pencil"))
                // 		.append("详情");
                var viewBtn = $("<button></button>")
                		.addClass(
                				"btn btn-primary btn-sm view_btn")
                		.append(
                				$("<span></span>")
                						.addClass(
                								"glyphicon glyphicon-play-circle"));

                //自定义给这个控件一个edit-id属性,在数据修改弹出框中用到
                viewBtn.attr("view-id", item.street);
                  // editBtn.attr("edit-id", item.gid);
                // var deleteBtn = $("<button></button>")
                // 		.addClass(
                // 				"btn btn-danger btn-sm delete_btn")
                // 		.append(
                // 				$("<span></span>")
                // 						.addClass(
                // 								"glyphicon glyphicon-trash"))
                // 		.append("删除");
                // deleteBtn.attr("delete-id", item.gid);
                  var btn = $("<td width='150px'></td>").append(viewBtn);
                // var btn = $("<td width='150px'></td>").append(editBtn);
                $("<tr class='info'></tr>").append(id)
                    .append(street).append(sum_area).append(count).append(btn).appendTo("#statistical_result_table");

            });

    var countAllblank =  $("<td width='60px'></td>").append("-");
    var  countAll = $("<td width='200px'></td>").append("合计");
    var sum_area_all_td = $("<td width='100px'></td>").append(sum_area_all.toFixed(2));
    var count_all_td = $("<td width='100px'></td>").append(count_all);
    var viewAllBtn = $("<button></button>")
        .addClass(
            "btn btn-primary btn-sm view_all_btn")
        .append(
            $("<span></span>")
                .addClass(
                    "glyphicon glyphicon-play-circle"));

    var btnall = $("<td width='150px'></td>").append(viewAllBtn);
    $("<tr class='info'></tr>").append(countAllblank)
        .append(countAll).append(sum_area_all_td).append(count_all_td).append(btnall).appendTo("#statistical_result_table");

}
//分页查询左下角记录数模块
function build_pages_info(result) {
    $("#page_info_area").empty();
    $("#page_info_area").append(
        "当前" + result.extend.pageInfo.pageNum + "页，总" + result.extend.pageInfo.pages + " 页，总"
        + result.extend.pageInfo.total + "条记录");
    totalpage = result.extend.pageInfo.pages;
    currentpage = result.extend.pageInfo.pageNum;
}
//分 页查询右下角页码切换模块
function build_pages_nav(result,street) {
    $("#page_info_nav").empty();
    var ul = $("<ul></ul>").addClass("pagination");
    var firstPageLi = $("<li></li>").append(
        $("<a></a>").append("首页"));
    var prePageLi = $("<li></li>").append(
        $("<a></a>").append("&laquo;"));
    if (result.extend.pageInfo.hasPreviousPage == false) {
        firstPageLi.addClass("disabled");
        prePageLi.addClass("disabled");
    } else {
        firstPageLi.click(function () {
            to_page_statistical_detail(1,street);
        });
        prePageLi.click(function () {
            to_page_statistical_detail(result.extend.pageInfo.pageNum - 1,street);
        });
    }
    ;

    var nextPageLi = $("<li></li>").append(
        $("<a></a>").append("&raquo;"));
    var lastPageLi = $("<li></li>").append(
        $("<a></a>").append("末页"));

    if (result.hasNextPage == false) {
        lastPageLi.addClass("disabled");
        nextPageLi.addClass("disabled");
    } else {
        lastPageLi.click(function () {
            //	result.pages
            to_page_statistical_detail(totalpage,street);
        });
        nextPageLi.click(function () {
            to_page_statistical_detail(result.extend.pageInfo.pageNum + 1,street);
        });
    }
    ;
    ul.append(firstPageLi).append(prePageLi);//添加首页和前一页


    $.each(result.extend.pageInfo.navigatepageNums, function (index, item) {
        var numLi = $("<li></li>").append($("<a></a>").append(item));
        if (result.extend.pageInfo.pageNum == item) {
            numLi.addClass("active");
        }
        numLi.click(function () {
            to_page_statistical_detail(item,street);
        });
        ul.append(numLi);
    });

    ul.append(nextPageLi).append(lastPageLi);//添加下一页和末页
    var navEle = $("<nav></nav>").append(ul);
    navEle.appendTo("#page_info_nav");
}
//穿透查询统计详情
function to_page_statistical_detail(pn,street) {


    var greentype1 =  $("#greentype1").find("option:selected").text();//绿地类型
    var greentype =  $("#greentype").find("option:selected").text();//绿地性质
    $.ajax({
        url: "/selectStatisticalAnalysis_detail",
        data:"street="+street+"&greentype1="+greentype1+"&greentype="+greentype+"&pn="+pn,
        type: "get",
        success: function (result) {


            build_statistical_detail_table(result);
            build_pages_info(result);
            build_pages_nav(result,street);


        }
    })
}
function build_statistical_detail_table(result) {
    $("#statistical_detail_table tbody").empty();
    var points = result.extend.pageInfo.list;

    $
        .each(
            points,
            function (index, item) {
                //  var checkboxTd = $("<td><input type='checkbox' class='check_item' /></td>")

                var id = $("<td width='40px'></td>").append(item.gid);
                var greenname = $("<td width='60px'></td>")
                    .append(item.greenname);
                var greentype1 = $("<td width='60px'></td>")
                    .append(item.greentype1);
                var greentype = $("<td width='60px'></td>")
                    .append(item.greentype);
                var sumTub = $("<td width='50px'></td>").append(item.sumTub.toFixed(2));
                var sumLvdi = $("<td width='50px'></td>").append(item.sumLvdi.toFixed(2));
                var sumlhf = $("<td width='50px'></td>").append(item.sumlhf.toFixed(2));
                // var sumRofe = $("<td width='50px'></td>").append(item.sumRofe.toFixed(2)+"m<sup>2</sup>");
                // var sumQita = $("<td width='50px'></td>").append(item.sumQita.toFixed(2)+"m<sup>2</sup>");
                var STREET = $("<td width='50px'></td>").append(item.street);
                // var village = $("<td width='50px'></td>").append(item.village);
                // var greenowner = $("<td width='50px'></td>").append(item.greenowner);
                // var property = $("<td width='50px'></td>").append(item.property);
                // var manager = $("<td width='50px'></td>").append(item.manager);
                // var managPro = $("<td width='50px'></td>").append(item.managPro);
                // 绿地名称 : features[i].greenname,
                //     绿地性质 : features[i].greentype,
                //     图斑面积 : features[i].sumTub+"m<sup>2</sup>",
                //     绿化面积 : features[i].sumLvdi+"m<sup>2</sup>",
                //     绿化覆盖面积 : features[i].sumlhf+"m<sup>2</sup>",
                //     屋顶绿化面积 : features[i].sumRofe+"m<sup>2</sup>",
                //     其他面积 : features[i].sumQita+"m<sup>2</sup>",
                //     所属街道 : features[i].STREET,
                //     居委会 : features[i].village,
                //     绿地归属 : features[i].greenowner,
                //     建成时间 : features[i].buildyear,
                //     产权单位 : features[i].property,
                //     管养单位 : features[i].manager,
                //     管养性质 : features[i].managPro,

                // var editBtn = $("<button></button>")
                // 		.addClass(
                // 				"btn btn-primary btn-sm edit_btn")
                // 		.append(
                // 				$("<span></span>")
                // 						.addClass(
                // 								"glyphicon glyphicon-pencil"))
                // 		.append("详情");
                var positioningBtn = $("<button></button>")
                    .addClass(
                        "btn btn-primary btn-sm positioning_btn")
                    .append(
                        $("<span></span>")
                            .addClass(
                                "glyphicon glyphicon-play-circle"));

                //自定义给这个控件一个edit-id属性,在数据修改弹出框中用到
                positioningBtn.attr("positioning-id", item.gid);
                // editBtn.attr("edit-id", item.gid);
                // var deleteBtn = $("<button></button>")
                // 		.addClass(
                // 				"btn btn-danger btn-sm delete_btn")
                // 		.append(
                // 				$("<span></span>")
                // 						.addClass(
                // 								"glyphicon glyphicon-trash"))
                // 		.append("删除");
                // deleteBtn.attr("delete-id", item.gid);
                var btn = $("<td width='150px'></td>").append(positioningBtn);
                // var btn = $("<td width='150px'></td>").append(editBtn);
                $("<tr class='info'></tr>").append(id)
                    .append(greenname).append(greentype1).append(greentype).append(sumTub).append(sumLvdi).append(sumlhf).
                append(STREET).append(btn).appendTo("#statistical_detail_table");

            });



// <button type="button"  class="btn btn-primary" >批量导出</button>
}




