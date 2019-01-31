package com.lc.web.resource.service.impl;

import com.lc.web.resource.dao.bj_lhfgpMapper;
import com.lc.web.resource.entity.bj_ldlpExample;
import com.lc.web.resource.entity.bj_lhfgp;
import com.lc.web.resource.entity.bj_lhfgpExample;
import com.lc.web.resource.service.bj_lhfgpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
public class bj_lhfgpServiceImpl implements bj_lhfgpService {
	@Autowired
	bj_lhfgpMapper dao;

	@Override
	public List<bj_lhfgp> selectByExample(Double ldl1,Double ldl2) {
		// TODO Auto-generated method stub
		bj_lhfgpExample example = new bj_lhfgpExample();

		BigDecimal ld111 = new BigDecimal(ldl1);
		BigDecimal ld112 = new BigDecimal(ldl2);
		bj_lhfgpExample.Criteria criteria =  example.createCriteria();


		criteria.andGreencrateBetween(ldl1,ldl2);



		return dao.selectByExample(example);
	}

}
