package com.lc.web.resource.service.impl;

import com.lc.web.resource.dao.lyr_waterpMapper;
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

}
