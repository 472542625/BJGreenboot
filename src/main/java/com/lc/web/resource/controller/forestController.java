package com.lc.web.resource.controller;


import com.lc.web.resource.entity.bj_tb_volp;
import com.lc.web.resource.entity.bj_tb_volp_plant;
import com.lc.web.resource.entity.lyr_ld_gardenp;

import com.lc.web.resource.service.bj_tb_volpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class forestController {

	@Autowired
	bj_tb_volpService bj_tb_volpservice;
    /*根据绿地类型查询*/
	@RequestMapping(value = "/selectbj_tb_volp", method = RequestMethod.GET)
	public @ResponseBody
	List<bj_tb_volp> selectbj_tb_volp() {

		return bj_tb_volpservice.selectByExample();
	}

	@RequestMapping(value = "/selectbj_tb_volp_plant", method = RequestMethod.GET)
	public @ResponseBody
	List<bj_tb_volp_plant> selectbj_tb_volp_plant(String greenid) {

		return bj_tb_volpservice.selectBybj_tb_volp_plantExample(greenid);
	}


}
