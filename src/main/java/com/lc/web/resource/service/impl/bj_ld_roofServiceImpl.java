package com.lc.web.resource.service.impl;

import com.lc.web.resource.dao.bj_ld_roofMapper;
import com.lc.web.resource.entity.bj_ld_roof;
import com.lc.web.resource.entity.bj_ld_roofExample;
import com.lc.web.resource.service.bj_ld_roofService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class bj_ld_roofServiceImpl implements bj_ld_roofService {

	@Autowired
	bj_ld_roofMapper dao;

	@Override
	public List<bj_ld_roof> selectByExample() {
		// TODO Auto-generated method stub
		bj_ld_roofExample example = new bj_ld_roofExample();

		return dao.selectByExample(example);
	}

}
