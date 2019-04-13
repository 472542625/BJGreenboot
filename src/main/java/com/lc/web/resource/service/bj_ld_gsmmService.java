package com.lc.web.resource.service;

import com.lc.web.resource.entity.bj_ld_gsmm;

import java.util.List;

public interface bj_ld_gsmmService {

	public List<bj_ld_gsmm> selectByExample();

	List<bj_ld_gsmm> selectall();
	public List<bj_ld_gsmm> selectByExampleoldTree(String treetype);
	public List<bj_ld_gsmm> selectByExampleLikeoldTreeLimit(String treetype);

}
