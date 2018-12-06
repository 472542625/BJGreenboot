//得到树种函数
function getPointTreespecies(element) {
	// 清空之前下拉列表的值
	$(element).empty();
	$.ajax({
		url :   "/listPointTreespecies",
		type : "GET",
		success : function(result) {
			$.each(result, function() {
				
				
				var optiontree = $("<option></option>")
						.append(this.treespeciesname).attr("value", this.treespeciesid);
				optiontree.appendTo(element);
			})
		}
	});
}
// 得到生长势列表
function getPointgrowingPotential(element) {
	// 清空之前下拉列表的值
	$(element).empty();
	$.ajax({
		url : "/listPointgrowingPotential",
		type : "GET",
		success : function(result) {

			$.each(result, function() {
				var optiontree = $("<option></option>").append(this.growingpotential)
						.attr("value", this.gpid);
				optiontree.appendTo(element);
			})
		}
	});
}

function getPoint(gid) {
	$.ajax({
		url : "/listPointBygid/" + gid,
		type : "GET",
		// data : "gid=" + gid,
		success : function(result) {
console.log(result.contractorid);
			$("#pointx_edit_input").val(result.x);
			$("#pointy_edit_input").val(result.y);
			$("#pointarea_edit_input").val(result.area);
			$("#pointcontractor_edit_input").val(result.contractor);
			$("#pointcontractorid_edit_input").val(result.contractorid);
			$("#pointvisitage_edit_input").val(result.visitage);
			$("#pointtreeage_edit_input").val(result.treeage);
			$("#pointtreeheight_edit_input").val(result.treeheight);
			
			$("#pointgrounddiameter_edit_input").val(result.grounddiameter);
			$("#pointtreearea_edit_input").val(result.treearea);
		 

			$("#pointTreespeciesEdit_select").val([result.treespeciesvar.treespeciesid]);
			// $("#pointgrowingPotentialEdit_select").val(result.growing_potential.gpid);
			// $("#pointEditModal
			// select[name=treespecies]").val(result.treespecies);
			// $("#pointEditModal select[name=treespecies]").val('21211');
			$("#pointEditModal select[name=gpId]").val(
					[result.growingpotential.gpid]);

		}
	});
}

// +"&gid="+gid

function updatePoint(gid) {
	console.log($("#pointEditModal form").serialize());
	$.ajax({
		url :   "/updatePoint/" + gid,
		type : "PUT",
		data : $("#pointEditModal form").serialize(),
		success : function(result) {

			$("#pointEditModal").modal('hide');
			to_page_all(currentpage);
		}
	})
}

// 修改数据事件
$(document).on("click", ".edit_btn", function() {
	// 1.查出点信息
	// 2.查出生长势信息，并且显示生长势列表
	getPointTreespecies("#pointTreespeciesEdit_select");
	getPointgrowingPotential("#pointgrowingPotentialEdit_select");
	// /这个属性初始化在261行
	getPoint($(this).attr("edit-id"));
	$("#point_update_Btn").attr("edit-id", $(this).attr("edit-id"));
	$("#pointEditModal").modal({
		backdrop : "static"
	});
	
	

});
///提交更新
$(document).on("click", "#point_update_Btn", function() {
	updatePoint($("#point_update_Btn").attr("edit-id"));

});

//批量修改
$(document).on("click", "#point_BatchEdit_modalBtn", function() {
	// 1.查出点信息
	// 2.查出生长势信息，并且显示生长势列表
	getPointTreespecies("#pointTreespeciesBatchEdit_select");
	getPointgrowingPotential("#pointgrowingPotentialBatchEdit_select");
 
 
 
	$("#pointBatchEditModal").modal({
		backdrop : "static"
	});
	
	
});
function BatchupdatePoint(gids) {
	
	 $.ajax({
			url :   "/BatchupdatePoint/" + gids,
			type : "PUT",
			data : $("#pointBatchEditModal form").serialize(),
			success : function(result) {

				$("#pointBatchEditModal").modal('hide');
				to_page_all(currentpage);
			}
		})
}

///提交更新
$(document).on("click", "#point_Batchupdate_Btn", function() {
	var edit_idstr="";
	 $.each($(".check_item:checked"),function(){
		 
		 //alert($(this).parents("tr").find("td:eq(1)").text());
		 
		 
		 edit_idstr+=$(this).parents("tr").find("td:eq(1)").text()+"-";
		
		 
	 })
	 
	 edit_idstr=edit_idstr.substring(0, edit_idstr.length-1);
	
	 alert(edit_idstr);
	BatchupdatePoint(edit_idstr);

});

