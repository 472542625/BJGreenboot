package com.lc.web.login.controller;


import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.*;


@Controller

public class indexController {

	@RequestMapping(value = "/index_main")
	public String index_main() {

		return "user/index_main/index_main";

	}

	@RequestMapping(value = "/second_1")
	public String second_1() {

		return "user/second_main/1";

	}










}
