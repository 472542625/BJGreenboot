var totalpage, currentpage;


$(function () {
    to_page_statics(1);

    //得到绿地类型
    getGreentype1("#greentype1");
    ///得到街道
    getStreet("#street");


    $(document).on("click", "#greentype1", function() {
        ///得到绿地性质
        getGreentype("#greentype");
    });




    $(document).on("click", "#statics_select_Btn", function() {
     console.log( $("#statics_select_form").serialize());
        to_page_statics(1);

    });


})





//得到绿地类型下拉菜单
function getGreentype1(element) {
    // 清空之前下拉列表的值
    $(element).empty();
    $.ajax({
        url: "/selectGreentype1",
        type: "GET",
        success: function (result) {
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
    $.ajax({
        url: "/selectGreentype/" + $("#greentype1").val(),
        type: "GET",
        success: function (result) {
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
    $.ajax({
        url: "/selectStreet",
        type: "GET",
        success: function (result) {
            $.each(result, function () {


                var optiontree = $("<option></option>")
                    .append(this);
                optiontree.appendTo(element);
            })
        }
    });
}

//默认查询所有函数
function to_page_statics(pn) {
    $.ajax({
        url: "/selectStatisticalAnalysis/"+pn,
        data:$("#statics_select_form").serialize(),
        type: "get",
        success: function (result) {
            console.log(result);

            build_points_table(result);
            build_pages_info(result);
            build_pages_nav(result);
        }
    })
}
//默认查询所有函数
function to_page_all(pn) {
    $.ajax({
        url: "/selectByExamplelyr_ld_gardenpFY",
        data: "pn=" + pn,
        type: "get",
        success: function (result) {
            //console.log(result);
            build_points_table(result);
            build_pages_info(result);
            build_pages_nav(result);
        }
    })
}
//分页查询模块数据加载函数
function build_points_table(result) {
    $("#points_table tbody").empty();
    var points = result.extend.pageInfo.list;
    $
        .each(
            points,
            function (index, item) {
                var checkboxTd = $("<td><input type='checkbox' class='check_item' /></td>")
                var id = $("<td width='30px'></td>").append(index+1);
                var street = $("<td width='200px'></td>")
                    .append(item.street);
                var sum_area = $("<td width='100px'></td>").append(item.sum_area);
                var count = $("<td width='100px'                                                                               ></td>").append(item.count);


                // var editBtn = $("<button></button>")
                // 		.addClass(
                // 				"btn btn-primary btn-sm edit_btn")
                // 		.append(
                // 				$("<span></span>")
                // 						.addClass(
                // 								"glyphicon glyphicon-pencil"))
                // 		.append("编辑");
                //自定义给这个控件一个edit-id属性,在数据修改弹出框中用到

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
                // var btn = $("<td width='150px'></td>").append(editBtn)
                // 		.append(" ").append(deleteBtn);
                $("<tr class='info'></tr>").append(checkboxTd).append(id)
                    .append(street).append(sum_area).append(count).appendTo("#points_table");
            });
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
function build_pages_nav(result) {
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
            to_page_all(1);
        });
        prePageLi.click(function () {
            to_page_all(result.extend.pageInfo.pageNum - 1);
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
            to_page_all(totalpage);
        });
        nextPageLi.click(function () {
            to_page_all(result.extend.pageInfo.pageNum + 1);
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
            to_page_all(item);
        });
        ul.append(numLi);
    });

    ul.append(nextPageLi).append(lastPageLi);//添加下一页和末页
    var navEle = $("<nav></nav>").append(ul);
    navEle.appendTo("#page_info_nav");
}

	
	

		