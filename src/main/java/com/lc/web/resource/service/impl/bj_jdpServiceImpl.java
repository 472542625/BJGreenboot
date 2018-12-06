package com.lc.web.resource.service.impl;

import com.lc.web.resource.dao.bj_jdpMapper;
import com.lc.web.resource.entity.bj_jdp;
import com.lc.web.resource.entity.bj_jdpExample;
import com.lc.web.resource.service.bj_jdpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class bj_jdpServiceImpl implements bj_jdpService {

	@Autowired
	bj_jdpMapper dao;

	@Override
	public List<bj_jdp> selectByExample() {
		bj_jdpExample example = new bj_jdpExample();

		return dao.selectByExample(example);
	}

}
