$(function() {
	//datatableMainList();

});

function LayuitableMainList() {

}

function datatableMainList() {
	var PageHelperListData;

	$
			.ajax({
				url : "/daxing/selectFyjsonPoint",
				type : "GET",
				success : function(result) {
					PageHelperListData = result.extend.data;

					$("#table_point")
							.DataTable(
									{
										"aLengthMenu" : [ 10, 20, 50, 100 ],
										// "searching" : true,//禁用搜索
										// "lengthChange" : true,
										// //"paging" : true,//开启表格分页
										// "bProcessing" : true,
										// //"bServerSide" : true,
										// //"bAutoWidth" : false,
										// //"sScrollY" : 400,
										// "oredering" : false,
										data : PageHelperListData,
										columns : [
												{
													title : "<input type='checkbox' id='checkboxAll'>全选/取消全选",
													data : null,
													width : "12%"
												}, {
													title : "序号",
													data : "gid"
												}, {
													title : "x",
													data : "x"
												}, {
													title : "y",
													data : "y"
												}, {
													title : "承包人",
													data : "contractor"
												}, {
													title : "树种",
													data : "treespecies"
												}, {
													title : "记录人",
													data : "recorder"
												}, {
													title : "区域",
													data : "area"
												}, {
													title : "树龄",
													data : "treeage"
												}, {
													title : "操作",
													data : null,
													width : "25%"

												} ],
										columnDefs : [
												{
													orderable : false,
													targets : [ 0 ],
													render : function(data,
															type, row, meta) {
														return "<input type='checkbox' class='checkbox' name='checklist' value="
																+ row.id + ">"
													}
												},
												{
													orderable : false,
													targets : [ 9 ],
													render : function(data,
															type, row, meta) {
														return '<a style="text-decoration:none" onClick=article_shenhe(this,"'
																+ row.id
																+ '") href="javascript:;" title="查看">查看</a> '
																+ '<a style="text-decoration:none" class="ml-5" onClick=edit_model("'
																+ row.id
																+ '","'
																+ row.id
																+ '") href="javascript:;" title="编辑">编辑</a>'
																+ '<a style="text-decoration:none" class="ml-5" onClick=article_del(this,"'
																+ row.id
																+ '")   title="删除">删除</a>'

													}
												} ],
										language : {
											"sProcessing" : "处理中...",
											"sLengthMenu" : "显示 _MENU_ 项结果",
											"sZeroRecords" : "没有匹配结果",
											"sInfo" : "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
											"sInfoEmpty" : "显示第 0 至 0 项结果，共 0 项",
											"sInfoFiltered" : "(由 _MAX_ 项结果过滤)",
											"sInfoPostFix" : "",
											"sSearch" : "搜索:",
											"sUrl" : "",
											"sEmptyTable" : "表中数据为空",
											"sLoadingRecords" : "载入中...",
											"sInfoThousands" : ",",
											"oPaginate" : {
												"sFirst" : "首页",
												"sPrevious" : "上页",
												"sNext" : "下页",
												"sLast" : "末页"
											},
											"oAria" : {
												"sSortAscending" : ": 以升序排列此列",
												"sSortDescending" : ": 以降序排列此列"
											}
										}

									});

				}
			});
}

/* 单个-删除 */
function article_del(obj, id) {
	layer
			.confirm(
					'确认要删除吗？',
					function(index) {
						$
								.ajax({
									type : 'POST',
									url : '/ylrrms/landSourceMainController/deleteLandSourceMain/'
											+ id,
									// data : "id=" + id,
									dataType : 'json',
									success : function(data) {
										$(obj).parents("tr").remove();
										layer.msg('已删除!', {
											icon : 1,
											time : 1000
										});
										setTimeout(
												function() {
													window.location.href = "/ylrrms/landSourceMainController/viewPage"
												}, 800);
									},
									error : function(data) {
										console.log(data.msg);
									},
								});
					});
}

/* 批量-删除 */

function datadel() {
	var l = new Array();

	$("#landSourceMainList .checkbox:checked").each(function() {
		l.push($(this).val());

	});

	if (l.length > 0) {
		layer.confirm("确认要删除 " + l.length + " 条记录吗？", function(index) {

			sumbitDel(l);
		});
	} else {
		layer.msg('无选中的项!', {
			icon : 0,
			time : 1000
		});
	}
}

function sumbitDel(ids) {
	$
			.ajax({
				url : "/ylrrms/landSourceMainController/deleteListLandSourceMain",
				traditional : true,
				dataType : 'json',
				data : {
					"ids" : ids
				},
				type : "post",
				cache : false,
				async : false,
				success : function(data) {

					layer.msg('已删除!', {
						icon : 1,
						time : 1000
					});

					setTimeout(
							function() {
								window.location.href = "/ylrrms/landSourceMainController/viewPage"
							}, 800);

				},
				error : function(error) {
					alert(error);
				}
			});

}