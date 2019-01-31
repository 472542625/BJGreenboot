package com.lc.web.resource.service;

import com.lc.web.resource.entity.bj_jdp;

import java.util.List;

public interface bj_jdpService {

	public List<bj_jdp> selectByExample(Double ldl1, Double ldl2,String value) ;
}
