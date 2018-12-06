package com.lc.web.resource.service;

import com.lc.web.resource.entity.bj_ld_gsmm;

import java.util.List;

public interface bj_ld_gsmmService {

	public List<bj_ld_gsmm> selectByExample();

	List<bj_ld_gsmm> selectByLimit1000();
}
