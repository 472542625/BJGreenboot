$(function() {
	//var path = "http://47.92.155.94:8085/dxold/";
	var path = "http://localhost:8085/BJGreen/";

	 

	function datatableListAdd() {
		$("#main").empty();
		//var obj = $('<div ><iframe src = "http://47.92.155.94:8085/dxold/page/datatablepage/list.jsp" style="width:100%;height:1200px"  frameborder="0"></iframe></div>');
		var obj = $('<div ><iframe src = "http://localhost:8085/dxold/page/datatablepage/list.jsp" style="width:100%;height:1200px"  frameborder="0"></iframe></div>');
		$("#main").append(obj);

	}
    
	$(document).on("click", "#datatableLoad_a", function() {

		datatableListAdd();

	});

	 
})