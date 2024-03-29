package com.lc.web.resource.service.impl;

import com.lc.web.resource.dao.bj_tbpMapper;
import com.lc.web.resource.entity.bj_jdpExample;
import com.lc.web.resource.entity.bj_tbp;
import com.lc.web.resource.entity.bj_tbpExample;
import com.lc.web.resource.service.bj_tbpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
public class bj_tbpServiceImpl implements bj_tbpService {
	@Autowired
	bj_tbpMapper dao;

	@Override
	public List<bj_tbp> selectByExample(Double ldl1,Double ldl2,String value) {
		// TODO Auto-generated method stub
		bj_tbpExample example = new bj_tbpExample();

		BigDecimal ld111 = new BigDecimal(ldl1);
		BigDecimal ld112 = new BigDecimal(ldl2);
		bj_tbpExample.Criteria criteria =  example.createCriteria();


		if(value=="ldl"){
			criteria.andLvdirBetween(ld111,ld112);
		}
		if(value=="lhfg"){
			criteria.andFugairBetween(ld111,ld112);
		}


		return dao.selectByExample(example);
	}

}
