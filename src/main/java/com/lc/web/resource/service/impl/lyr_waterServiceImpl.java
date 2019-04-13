package com.lc.web.resource.service.impl;

import com.lc.web.resource.dao.lyr_waterpMapper;
import com.lc.web.resource.entity.bj_ld_roofExample;
import com.lc.web.resource.entity.lyr_waterp;
import com.lc.web.resource.entity.lyr_waterpExample;
import com.lc.web.resource.entity.lyr_waterpExample.Criteria;
import com.lc.web.resource.service.lyr_waterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class lyr_waterServiceImpl implements lyr_waterService {

	@Autowired
	lyr_waterpMapper dao;

	@Override
	public List<lyr_waterp> selectByExample() {
		lyr_waterpExample example = new lyr_waterpExample();
		Criteria criteria = example.createCriteria();

		return dao.selectByExample(example);

	}

	@Override
	public List<lyr_waterp> selectByExampleLikeGreenName(String greenname) {
		lyr_waterpExample example = new lyr_waterpExample();

		lyr_waterpExample.Criteria criteria = example.createCriteria();
		criteria.andGreennameEqualTo(greenname);
		return dao.selectByExample(example);
	}

	@Override
	public List<lyr_waterp> selectByExampleLikeGreenNameLimit(String greenname) {
		return dao.selectByExampleLikeGreenNameLimit(greenname);
	}
}
