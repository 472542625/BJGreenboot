package com.lc.web.resource.service.impl;

import com.lc.web.resource.dao.bj_tbpMapper;
import com.lc.web.resource.entity.bj_tbp;
import com.lc.web.resource.entity.bj_tbpExample;
import com.lc.web.resource.service.bj_tbpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class bj_tbpServiceImpl implements bj_tbpService {
	@Autowired
	bj_tbpMapper dao;

	@Override
	public List<bj_tbp> selectByExample() {
		// TODO Auto-generated method stub
		bj_tbpExample example = new bj_tbpExample();
		return dao.selectByExample(example);
	}

}
