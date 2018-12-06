/**
 * 
 */

function showerror() {
	layui.use('layer', function() { // 独立版的layer无需执行这一句
		var $ = layui.jquery, layer = layui.layer; // 独立版的layer无需执行这一句

		layer.msg('查询周围1000米无此对象', {
			icon : 2
		});
	})
}