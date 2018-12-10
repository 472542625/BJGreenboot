package com.lc.web.resource.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;



@Controller
public class examinationPlanController {



	@RequestMapping(value = "/examination_plan")
	public String examination_plan() {

		return "topic/examination_plan/image_comparison";

	}








}
