package com.lc.web.resource.controller;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.lc.web.resource.entity.*;
import com.lc.web.resource.service.impl.lyr_ld_gardenpServiceImpl;
import com.lc.web.util.JsonMsg;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class statisticalAnalysisController {

	@Autowired
	lyr_ld_gardenpServiceImpl lyr_ld_gardenppointService;

	@RequestMapping(value = "/selectStatisticalAnalysis/{pn}", method = RequestMethod.GET)
	public @ResponseBody
	JsonMsg selectStatisticalAnalysis(lyr_ld_gardenp lyr_ld_gardenp,@RequestParam(value = "pn", defaultValue = "1") Integer pn) {

		PageHelper.startPage(pn, 5);
		List<lyr_ld_gardenpStatisticalAnalysis> list = lyr_ld_gardenppointService.selectStatisticalAnalysis(lyr_ld_gardenp);
		// /使用PageInfo包装查询后的结果，只需要将PageInfo交给页面就行了，封装了详细的分页信息
		// 传入连续显示的页数
		PageInfo page = new PageInfo(list, 5);

		return JsonMsg.success().add("pageInfo", page);
	}

	/*绿地类型下拉菜单信息*/
	@RequestMapping(value = "/selectGreentype1", method = RequestMethod.GET)
	public @ResponseBody
	List<String> selectGreentype1(
	) {

		return lyr_ld_gardenppointService.selectGreentype1();

	}
	/*根据绿地类型得到绿地性质下拉菜单信息*/
		@RequestMapping(value = "/selectGreentype/{greentype1}", method = RequestMethod.GET)
	public @ResponseBody
	List<String> selectGreentype(@PathVariable("greentype1") String greentype1) {

		return lyr_ld_gardenppointService.selectGreentype(greentype1);

	}
	/*根据绿地性质得到街道下拉菜单信息*/
	@RequestMapping(value = "/selectStreet", method = RequestMethod.GET)
	public @ResponseBody
	List<String> selectStreet() {

		return lyr_ld_gardenppointService.selectStreet();

	}







}
