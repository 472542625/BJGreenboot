package com.lc.web.resource.service.impl;

import com.lc.web.resource.dao.bj_jdpMapper;
import com.lc.web.resource.entity.bj_jdp;
import com.lc.web.resource.entity.bj_jdpExample;
import com.lc.web.resource.service.bj_jdpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
public class bj_jdpServiceImpl implements bj_jdpService {

	@Autowired
	bj_jdpMapper dao;

	@Override
	public List<bj_jdp> selectByExample(Double ldl1, Double ldl2,String value) {
		bj_jdpExample example = new bj_jdpExample();

        BigDecimal ld111 = new BigDecimal(ldl1);
		BigDecimal ld112 = new BigDecimal(ldl2);
		bj_jdpExample.Criteria criteria =  example.createCriteria();

		if(value=="ldl"){
			criteria.andLvdirBetween(ld111,ld112);
		}
		if(value=="lhfg"){
			criteria.andFugairBetween(ld111,ld112);
		}



		return dao.selectByExample(example);
	}

}
