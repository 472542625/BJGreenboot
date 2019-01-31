package com.lc.web.resource.service;

import com.lc.web.resource.entity.bj_ldlp;

import java.util.List;

public interface bj_ldlpService {

	public List<bj_ldlp>  selectByExample(Double ldl1,Double ldl2);
}
