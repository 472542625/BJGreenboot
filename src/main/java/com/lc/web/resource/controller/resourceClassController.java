package com.lc.web.resource.controller;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.lc.web.resource.entity.bj_ld_gsmm;
import com.lc.web.resource.entity.bj_ld_roof;
import com.lc.web.resource.entity.lyr_ld_gardenp;
import com.lc.web.resource.entity.lyr_waterp;
import com.lc.web.resource.service.impl.bj_ld_gsmmServiceImpl;
import com.lc.web.resource.service.impl.bj_ld_roofServiceImpl;
import com.lc.web.resource.service.impl.lyr_ld_gardenpServiceImpl;
import com.lc.web.resource.service.impl.lyr_waterServiceImpl;
import com.lc.web.util.JsonMsg;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class resourceClassController {

	@Autowired
	lyr_ld_gardenpServiceImpl lyr_ld_gardenppointService;
	@Autowired
	bj_ld_gsmmServiceImpl bj_ld_gsmmServiceImpl;

	@Autowired
	bj_ld_roofServiceImpl bj_ld_roofServiceImpl;
	@Autowired
	lyr_waterServiceImpl lyr_waterServiceImpl;
    /*根据绿地类型查询*/
	@RequestMapping(value = "/selectByExamplegreentype1/{greentype1}", method = RequestMethod.GET)
	public @ResponseBody
	List<lyr_ld_gardenp> selectByExamplegreentype1(
			@PathVariable("greentype1") String greentype1) {

		return lyr_ld_gardenppointService.selectByExampleGreenType(greentype1);
	}
	/*根据绿地名称查询*/
	@RequestMapping(value = "/selectByExampleGreenName/{greenname}", method = RequestMethod.GET)
	public @ResponseBody
	List<lyr_ld_gardenp> selectByExampleGreenName(
			@PathVariable("greenname") String greenname) {

		return lyr_ld_gardenppointService
				.selectByExampleLikeGreenName(greenname);
	}
	/*根据古树名称查询*/
	@RequestMapping(value = "/selectByExampleoldTree/{treetype}", method = RequestMethod.GET)
	public @ResponseBody
	List<bj_ld_gsmm> selectByExampleoldTree(
			@PathVariable("treetype") String treetype) {

		return bj_ld_gsmmServiceImpl
				.selectByExampleoldTree(treetype);
	}
	/*根据屋顶绿化查询*/
	@RequestMapping(value = "/selectByExampleroofGreen/{greenname}", method = RequestMethod.GET)
	public @ResponseBody
	List<bj_ld_roof> selectByExampleroofGreen(
			@PathVariable("greenname") String greenname) {

		return bj_ld_roofServiceImpl
				.selectByExampleLikeGreenName(greenname);
	}
	/*根据水资源查询*/
	@RequestMapping(value = "/selectByExamplewaterResource/{greenname}", method = RequestMethod.GET)
	public @ResponseBody
	List<lyr_waterp> selectByExamplewaterResource(
			@PathVariable("greenname") String greenname) {

		return lyr_waterServiceImpl
				.selectByExampleLikeGreenName(greenname);
	}


	/*根据绿地名称查询下拉菜单信息，类似百度搜索功能*/
	@RequestMapping(value = "/selectByExampleLikeGreenNameLimit/{greenname}", method = RequestMethod.GET)
	public @ResponseBody
	List<lyr_ld_gardenp> selectByExampleLikeGreenNameLimit(
			@PathVariable("greenname") String greenname) {

		return lyr_ld_gardenppointService
				.selectByExampleLikeGreenNameLimit(greenname);
	}
	/*根据古树名称查询下拉菜单信息，类似百度搜索功能*/
	@RequestMapping(value = "/selectByExampleLikeoldTreeLimit/{treetype}", method = RequestMethod.GET)
	public @ResponseBody
	List<bj_ld_gsmm> selectByExampleLikeoldTreeLimit(
			@PathVariable("treetype") String treetype) {

		return bj_ld_gsmmServiceImpl
				.selectByExampleLikeoldTreeLimit(treetype);
	}
	/*根据屋顶绿化查询下拉菜单信息，类似百度搜索功能*/
	@RequestMapping(value = "/selectByExampleLikeGreenNameLimit_bj_ld_roof/{greenname}", method = RequestMethod.GET)

	public @ResponseBody
	List<bj_ld_roof> selectByExampleLikeGreenNameLimit_bj_ld_roof(
			@PathVariable("greenname") String greenname) {

		return bj_ld_roofServiceImpl
				.selectByExampleLikeGreenNameLimit(greenname);
	}
	/*根据水资源查询下拉菜单信息，类似百度搜索功能*/
	@RequestMapping(value = "/selectByExampleLikeGreenNameLimit_waterResource/{greenname}", method = RequestMethod.GET)

	public @ResponseBody
	List<lyr_waterp> selectByExampleLikeGreenNameLimit_waterResource(
			@PathVariable("greenname") String greenname) {

		return lyr_waterServiceImpl
				.selectByExampleLikeGreenNameLimit(greenname);
	}



	/*分页*/
	@RequestMapping(value = "/selectByExamplelyr_ld_gardenpFY")
	public @ResponseBody
	JsonMsg selectByExamplelyr_ld_gardenpFY(
			@RequestParam(value = "pn", defaultValue = "1") Integer pn) {
		// 传入页码以及size
		PageHelper.startPage(pn, 5);
		List<lyr_ld_gardenp> points = lyr_ld_gardenppointService.selectByExampleFY();
		// /使用PageInfo包装查询后的结果，只需要将PageInfo交给页面就行了，封装了详细的分页信息
		// 传入连续显示的页数
		PageInfo page = new PageInfo(points, 5);

		return JsonMsg.success().add("pageInfo", page);
	}





	@Autowired
	lyr_waterServiceImpl lyr_waterpointService;
	/*水专题*/
	@RequestMapping(value = "/selectByExamplelyr_water", method = RequestMethod.GET)
	public @ResponseBody
	List<lyr_waterp> selectByExamplelyr_water() {

		return lyr_waterpointService.selectByExample();
	}

	@Autowired
	bj_ld_gsmmServiceImpl bj_ld_gsmmpointService;
	/*古树名木专题*/
	@RequestMapping(value = "/selectByExamplebj_ld_gsmm", method = RequestMethod.GET)
	public @ResponseBody
	List<bj_ld_gsmm> selectByExamplebj_ld_gsmm() {

		return bj_ld_gsmmpointService.selectall();
	}

	@Autowired
	bj_ld_roofServiceImpl bj_ld_roofpointService;
	/*屋顶绿化专题*/
	@RequestMapping(value = "/selectByExamplebj_ld_roof", method = RequestMethod.GET)
	public @ResponseBody
	List<bj_ld_roof> selectByExamplebj_ld_roof() {

		return bj_ld_roofpointService.selectByExample();
	}

}
