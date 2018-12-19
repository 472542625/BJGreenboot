package com.lc.web.resource.controller;

import com.lc.web.resource.entity.bj_dt_video;
import com.lc.web.resource.entity.bj_yj_jkd_Point;
import com.lc.web.resource.entity.bj_yj_space_Point;
import com.lc.web.resource.entity.bj_yj_wz_Point;
import com.lc.web.resource.service.bj_dt_videoService;
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
public class TimeMonitorController {


//	视频监测
	@Autowired
	bj_dt_videoService bj_dt_videoservice;



	@RequestMapping(value = "/selectExamplebj_dt_video", method = RequestMethod.GET)
	public @ResponseBody
	List<bj_dt_video> selectExamplebj_dt_video() {

		return bj_dt_videoservice.selectByExample();
	}


}
