package com.lc.web.resource.service.impl;

import com.lc.web.resource.dao.bj_lhfgpMapper;
import com.lc.web.resource.entity.bj_lhfgp;
import com.lc.web.resource.entity.bj_lhfgpExample;
import com.lc.web.resource.service.bj_lhfgpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class bj_lhfgpServiceImpl implements bj_lhfgpService {
	@Autowired
	bj_lhfgpMapper dao;

	@Override
	public List<bj_lhfgp> selectByExample() {
		// TODO Auto-generated method stub
		bj_lhfgpExample example = new bj_lhfgpExample();
		return dao.selectByExample(example);
	}

}
