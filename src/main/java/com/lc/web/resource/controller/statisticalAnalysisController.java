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

	@RequestMapping(value = "/statisticalAnalysisIndex")
	public String statisticalAnalysisIndex() {

		return "index/mlayui_statis";

	}
	@RequestMapping(value = "/statisticalAnalysisDataTable")
	public String statisticalAnalysisDataTable() {

		return "statics/datatablepage/staticsAnalysisList";

	}

	@RequestMapping(value = "/selectStatisticalAnalysis_positioning_bygid", method = RequestMethod.GET)
	public @ResponseBody
	lyr_ld_gardenp selectStatisticalAnalysis_detail(Integer gid) {


		lyr_ld_gardenp  point = lyr_ld_gardenppointService.selectStatisticalAnalysis_positioning_bygid(gid);


		return point;
	}


	@RequestMapping(value = "/selectStatisticalAnalysis_detail", method = RequestMethod.GET)
	public @ResponseBody
	JsonMsg selectStatisticalAnalysis_detail(lyr_ld_gardenp lyr_ld_gardenp,@RequestParam(value = "pn", defaultValue = "1") Integer pn) {

		PageHelper.startPage(pn, 10);
		List<lyr_ld_gardenp> list = lyr_ld_gardenppointService.selectStatisticalAnalysis_detail(lyr_ld_gardenp);

		// /使用PageInfo包装查询后的结果，只需要将PageInfo交给页面就行了，封装了详细的分页信息
		// 传入连续显示的页数
		PageInfo page = new PageInfo(list, 10);

		//System.out.println(lyr_ld_gardenp.toString());
		return JsonMsg.success().add("pageInfo", page);
	}


	@RequestMapping(value = "/selectStatisticalAnalysis", method = RequestMethod.GET)
	public @ResponseBody
	JsonMsg selectStatisticalAnalysis(lyr_ld_gardenp lyr_ld_gardenp,@RequestParam(value = "pn", defaultValue = "1") Integer pn) {

		PageHelper.startPage(pn, 20);
		List<lyr_ld_gardenpStatisticalAnalysis> list = lyr_ld_gardenppointService.selectStatisticalAnalysis(lyr_ld_gardenp);

		// /使用PageInfo包装查询后的结果，只需要将PageInfo交给页面就行了，封装了详细的分页信息
		// 传入连续显示的页数
		PageInfo page = new PageInfo(list, 20);

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
