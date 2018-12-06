<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>





<div id="alarm_warning_box">
	<!--<img src="../images/monitor.png" />-->
	<div class="se-area">
		<div class="se-title">预警报警</div>

		<div>
			<span style="font-size: 15px;font-weight: 350;color:white;position: relative;left:25px">距离灾情区域1000米，范围内的</span><select
				style="background-color: black;color: white;position:relative; left:35px;top:0px;font-size: 18px;font-weight: 200">
				<option value="volvo">救护车</option>
				<option value="saab">消防车</option>
			</select>
		</div>
		<div class="se-cont" style="height:180px">

			<table id="alarm_warning_box_table" style="width: 100%">
				<thead width="100px">
					<tr>
						<td width="100px" style="color:yellow;font-size: 15px;">地点</td>
						<td style="color:yellow;font-size: 15px;">数量</td>
						<td style="color:yellow;font-size: 15px;">距离</td>
					</tr>

				</thead>
				<tbody width="100px" id="alarm_warning_box_talbe_tbody" style="">
					<tr>
						<td width="100px">单位A</td>
						<td>5辆</td>
						<td>100米</td>
					</tr>
					<tr>
						<td width="100px">单位A</td>
						<td>5辆</td>
						<td>100米</td>
					</tr>
					<tr>
						<td width="100px">单位A</td>
						<td>5辆</td>
						<td>100米</td>
					</tr>
					<tr>
						<td width="100px">单位A</td>
						<td>5辆</td>
						<td>100米</td>
					</tr>

				</tbody>
			</table>
		</div>
	</div>

</div>

