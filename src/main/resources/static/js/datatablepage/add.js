//模态框增加数据弹出事件

$(function(){
	$("#point_Add_modalBtn").click(function() {
		getPointTreespecies("#pointTreespeciesAdd_select");
		getPointgrowingPotential("#pointgrowingPotentialAdd_select");
		$("#pointAddModal").modal({
			backdrop : "static"
		});
	});
	// 增加保存
	$("#point_add_Btn").click(function() {
alert($("#pointAddModal form").serialize());
		$.ajax({
			url :   "/addPoint",
			type : "POST",
			data : $("#pointAddModal form").serialize(),
			success : function(result) {

				$("#pointAddModal").modal('hide');
				to_page_all(totalpage);
			}
		})

	});

	
})
