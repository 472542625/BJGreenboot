package com.lc.web.resource.service;

import com.lc.web.resource.entity.lyr_waterp;

import java.util.List;

public interface lyr_waterService {

	public List<lyr_waterp> selectByExample();

	public List<lyr_waterp> selectByExampleLikeGreenName(String greenname);
	public List<lyr_waterp> selectByExampleLikeGreenNameLimit(String greenname);
}
