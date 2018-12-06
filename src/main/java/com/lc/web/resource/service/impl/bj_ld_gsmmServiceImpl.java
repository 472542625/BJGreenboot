package com.lc.web.resource.service.impl;

import com.lc.web.resource.dao.bj_ld_gsmmMapper;
import com.lc.web.resource.entity.bj_ld_gsmm;
import com.lc.web.resource.entity.bj_ld_gsmmExample;
import com.lc.web.resource.entity.bj_ld_gsmmExample.Criteria;
import com.lc.web.resource.service.bj_ld_gsmmService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class bj_ld_gsmmServiceImpl implements bj_ld_gsmmService {

	@Autowired
	bj_ld_gsmmMapper dao;

	@Override
	public List<bj_ld_gsmm> selectByExample() {
		// TODO Auto-generated method stub
		bj_ld_gsmmExample example = new bj_ld_gsmmExample();

		Criteria criteria = example.createCriteria();

		return dao.selectByExample(example);
	}

	@Override
	public List<bj_ld_gsmm> selectByLimit1000() {
		// TODO Auto-generated method stub
		return dao.selectByLimit1000();
	}

}
