package com.lc.web.resource.service;

import com.lc.web.resource.entity.bj_tbp;

import java.util.List;

public interface bj_tbpService {

	public List<bj_tbp> selectByExample(Double ldl1,Double ldl2,String value) ;
}
