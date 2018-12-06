package com.lc.web.resource.controller;

import com.lc.web.resource.entity.bj_yj_jkd_Point;
import com.lc.web.resource.entity.bj_yj_space_Point;
import com.lc.web.resource.entity.bj_yj_wz_Point;
import com.lc.web.resource.service.impl.bj_yj_jkd_PointServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
// 使用@Controller 标示控制器 就可以不实现 Controller接口或HttpRequestHandler接口了
public class bj_yj_jkd_PointController {

	@Autowired
	bj_yj_jkd_PointServiceImpl pointService;

	// // 得到树种List列表
	// @RequestMapping(value = "/listPointAll")
	// public @ResponseBody
	// List<fPoint> listPointAll() {
	//
	// return pointService.listpointAll();
	//
	// }
	// 大叔大婶多少度上的爱死 但是 的 的阿斯顿发打算打算打算打算多少度撒大的安定安定的
	// // 根据区县名称查询
	// @RequestMapping(value = "/listpointByRname/{rname}", method =
	// RequestMethod.GET)
	// public @ResponseBody
	// List<fPoint> listpointByRname(@PathVariable("rname") String rname) {
	// return pointService.listpointByRname(rname);
	// }
	//
	// 缓冲区分析
	@RequestMapping(value = "/listpointByBuffer/{gid}", method = RequestMethod.GET)
	public @ResponseBody
	List<bj_yj_jkd_Point> listpointByBuffer(@PathVariable("gid") int gid) {

		System.out.println(gid);
		return pointService.listpointByBuffer(gid);
	}

	@RequestMapping(value = "/list_bj_yj_jkd_pointAll", method = RequestMethod.GET)
	public @ResponseBody
	List<bj_yj_jkd_Point> list_bj_yj_jkd_pointAll() {

		return pointService.list_bj_yj_jkd_pointAll();
	}

	@RequestMapping(value = "/list_bj_yj_wz_pointAll", method = RequestMethod.GET)
	public @ResponseBody
	List<bj_yj_wz_Point> list_bj_yj_wz_pointAll() {

		return pointService.list_bj_yj_wz_pointAll();
	}

	@RequestMapping(value = "/list_bj_yj_space_pointAll", method = RequestMethod.GET)
	public @ResponseBody
	List<bj_yj_space_Point> list_bj_yj_space_pointAll() {

		return pointService.list_bj_yj_space_pointAll();
	}
}
