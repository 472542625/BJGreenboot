package com.lc.web.resource.controller;

import com.lc.web.resource.entity.*;
import com.lc.web.resource.service.bj_green84pService;
import com.lc.web.resource.service.impl.bj_jdpServiceImpl;
import com.lc.web.resource.service.impl.bj_ldlpServiceImpl;
import com.lc.web.resource.service.impl.bj_lhfgpServiceImpl;
import com.lc.web.resource.service.impl.bj_tbpServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class GreenTitleController {

	@Autowired
	bj_jdpServiceImpl bj_jdppointService;// 街道绿地率及覆盖率

	@RequestMapping(value = "/selectByExample_bj_jd", method = RequestMethod.GET)
	public @ResponseBody
	List<bj_jdp> selectByExample_bj_jd() {

		return bj_jdppointService.selectByExample();
	}

	@Autowired
	bj_ldlpServiceImpl bj_ldlppointService;// 单位绿地率

	@RequestMapping(value = "/selectByExample_bj_ldl", method = RequestMethod.GET)
	public @ResponseBody
	List<bj_ldlp> selectByExample_bj_ldl() {

		return bj_ldlppointService.selectByExample();
	}

	@Autowired
	bj_lhfgpServiceImpl bj_lhfgppointService;// 单位绿覆盖率

	@RequestMapping(value = "/selectByExample_bj_lhfg", method = RequestMethod.GET)
	public @ResponseBody
	List<bj_lhfgp> selectByExample_bj_lhfg() {

		return bj_lhfgppointService.selectByExample();
	}

	@Autowired
	bj_tbpServiceImpl bj_tbppointService;// 图斑绿地率及覆盖率

	@RequestMapping(value = "/selectByExample_bj_tb", method = RequestMethod.GET)
	public @ResponseBody
	List<bj_tbp> selectByExample_bj_tbp() {

		return bj_tbppointService.selectByExample();
	}
	@Autowired
	bj_green84pService bj_green84pService;
	@RequestMapping(value = "/selectByExample_BJ_green84", method = RequestMethod.GET)
	public @ResponseBody
	List<bj_green84p> selectByExample_BJ_green84() {

		return bj_green84pService.selectByExample();
	}



}
