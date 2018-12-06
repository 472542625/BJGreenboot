<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>


<!DOCTYPE html>
<html>
<head lang="en">
<meta charset="UTF-8">
<title></title>
<!-- jq-->
<script type="text/javascript"
	src="<%=path%>/lib/jquery/jquery-3.3.1.min.js"></script>

<link rel="stylesheet" href="<%=path%>/lib/layui/css/layui.css">
<script type="text/javascript" src="<%=path%>/lib/layui/layui.js"></script>
<!--bootstrap3-->
<script
	src="<%=path%>/lib/bootstrap-3.3.7-dist/bootstrap-3.3.7-dist/js/bootstrap.js"></script>
<link rel="stylesheet"
	href="<%=path%>/lib/bootstrap-3.3.7-dist/bootstrap-3.3.7-dist/css/bootstrap.css"> 
<!--图标-->
<link rel="stylesheet"
	href="https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.css">


<script src="<%=path%>/page/datatablepage/datatableList.js"></script>
<script type="text/javascript"
	src="<%=path%>/lib/datatables/1.10.15/media/js/jquery.dataTables.min.js"></script>

</head>
<body
	style="width:100%; overflow:hidden; height:1100px;background-repeat:no-repeat; background-size:100% 100%;
">




	<div class="row"  >

		<div class="col-md-1"></div>

		<div class="col-md-10">


			<table  class="layui-hide" id="table_point" lay-filter="test"></table>
		</div>

		<div class="col-md-1"></div>
	</div>
	
	<div class="row" >
		<div class="col-md-6" id="fypage">2121</div>
	</div>



	<!----><script type="text/javascript">
	
	function topage(){                                //分页操作
		  $.ajax({                                        //获取数据总数
		    type:"get",
		    url:'/daxing/selectFyjsonPoint',
		    data:{page:currentPage, pageSize:pageLimit},
		    success:function(data){
		        totalData=data.count
		        layui.use(['element','laypage', 'layer'], function(){
		        var $ = layui.jquery;
		        var element = layui.element;
		        var laypage = layui.laypage
		        ,layer = layui.layer;
		        //总页数大于页码总数
		        laypage.render({
		          elem: 'demo1'
		          ,count: totalData //数据总数
		          ,limit:pageLimit
		          ,jump: function(obj,first){
		              //obj包含了当前分页的所有参数，比如：
		              var curr=obj.curr
		              var limit=obj.limit
		              // console.log(obj.curr); //得到当前页，以便向服务端请求对应页的数据。
		              // console.log(obj.limit); //得到每页显示的条数
		              if(!first){                
		                handleData(curr,limit)
		              }  
		          }
		        });
		      })
		         
		    }
		  })
		 
		}

	layui.use(['table','laypage','layer'], function(){
		  var table = layui.table;
		  var laypage = layui.laypage
		  ,layer = layui.layer; 
		//总页数大于页码总数
		  laypage.render({
		    elem: 'demo1'
		    ,count: 60000 //数据总数
		    ,jump: function(obj){
		      console.log(obj)
		    }
		  });
		  
		  table.render({
		    elem: '#table_point'
		    ,url:'/daxing/selectFyjsonPoint'
		    	,cellMinWidth: 80 //全局定义常规单元格的最小宽度，layui 2.2.1 新增
		    	 //,page: true //开启分页
		    	 ,height: 400
		    	 //, limit:20
		        ,cols: [[
		          {field:'gid', width:80, title: 'ID', sort: true}
		          ,{field:'x', width:180, title: 'x'}
		          ,{field:'y', width:180, title: 'y'}
		          ,{field:'contractor', width:80, title: '承包人' }
		          ,{field:'treespecies', width:80, title: '树种'}
		          ,{field:'recorder', width:80, title: '记录人'}
		          ,{field:'area', width:80, title: '区域'}
		          ,{field:'treeage', width:80, title: '树龄'}
		          ,{field:'treeheight', width:80, title: '树高'}
		          ,{field:'gp_id', width:80, title: '生长势'}
		         // ,{field:'tree_species.section', width:80, title: '科'}
		           
		          ,{field:'grounddiameter', width:80, title: '地径'}
		          
		        ]]
		  });
		});
	</script>
</body>
</html>