<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";

	pageContext.setAttribute("appPath", request.getContextPath());
%>

<!DOCTYPE html>
<html>
<head>

<meta charset="UTF-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1, maximum-scale=1">
<title>GIS展示系统</title>
<!-- jq-->
<script type="text/javascript"
	src="<%=path%>/lib/jquery/jquery-3.3.1.min.js"></script>
<link rel="stylesheet" href="<%=path%>/lib/layui/css/layui.css">
<script src="<%=path%>/lib/layui/layui.js"></script>
<!--openlayer4 -->
<script src="<%=path%>/lib/ol4/v4.6.4/v4.6.4/build/ol.js"></script>
<link rel="stylesheet" href="<%=path%>/lib/ol4/v4.6.4/v4.6.4/css/ol.css">


 

<!--echarts-->
<script type="text/javascript"
	src="http://echarts.baidu.com/gallery/vendors/echarts/echarts.min.js"></script>
<script type="text/javascript"
	src="http://echarts.baidu.com/gallery/vendors/echarts-gl/echarts-gl.min.js"></script>
<script type="text/javascript"
	src="http://echarts.baidu.com/gallery/vendors/echarts-stat/ecStat.min.js"></script>
<script type="text/javascript"
	src="http://echarts.baidu.com/gallery/vendors/echarts/map/js/china.js"></script>
<script type="text/javascript"
	src="http://echarts.baidu.com/gallery/vendors/echarts/map/js/world.js"></script>
<!--<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=ZUONbpqGBsYGXNIYHicvbAbM"></script>-->
<script type="text/javascript"
	src="http://echarts.baidu.com/gallery/vendors/simplex.js"></script>
<script src="<%=path%>/lib/echarts/echarts.min.js"></script>

 
<!-- layui -->
<script src="<%=path%>/js/util/layui/config.js"></script>


</head>
<body class="layui-layout-body">
	<div class="layui-layout layui-layout-admin">
		<!-- popup -->
		<%@include file="/page/gis_main/popup.jsp"%>
		<!-- header -->
		<%@include file="/page/gis_main/header.jsp"%>
		<!-- leftside -->
		<%@include file="/page/gis_main/leftside_statis.jsp"%>
		<div class="layui-body" style="background-color: #393D49;height: 100%;overflow:hidden; " id="main">
			<div ><iframe src = "<%=path%>/page/statics/datatablepage/list.jsp" style="width:100%;height:1200px"  frameborder="0"></iframe></div>
		</div>
	</div>
	 
	
	 
	 
	
	 
 







	<script type="text/javascript">
		//JavaScript代码区域
		layui.use('element', function() {
			var element = layui.element;

		});

		//1234
	</script>

	<script type="text/javascript">
		$(function() {

		 
		
			
			
			 $(document).on("click", "#statistical_analysis_a", function() {
		    	 
		    	  window.location = "http://localhost:8085/BJGreen/page/index/mlayui_statis.jsp";
		    	
		     

		 });
		    
		    $(document).on("click", "#gis_a", function() {
		    	 
		    	  window.location = "http://localhost:8085/BJGreen/page/index/layui.html";
		    	
		     

		 });
			

		})
	</script>


</body>
</html>