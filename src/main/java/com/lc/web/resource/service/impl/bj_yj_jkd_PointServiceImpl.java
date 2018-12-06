package com.lc.web.resource.service.impl;


import com.lc.web.resource.dao.bj_yj_jkd_PointMapper;
import com.lc.web.resource.entity.bj_yj_jkd_Point;
import com.lc.web.resource.entity.bj_yj_space_Point;
import com.lc.web.resource.entity.bj_yj_wz_Point;
import com.lc.web.resource.service.bj_yj_jkd_PointService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class bj_yj_jkd_PointServiceImpl implements bj_yj_jkd_PointService {
	@Autowired
	bj_yj_jkd_PointMapper pointmapper;

	@Override
	public List<bj_yj_jkd_Point> listpointByBuffer(int gid) {
		// TODO Auto-generated method stub
		return pointmapper.listpointByBuffer(gid);
	}

	@Override
	public List<bj_yj_jkd_Point> list_bj_yj_jkd_pointAll() {
		// TODO Auto-generated method stub
		return pointmapper.list_bj_yj_jkd_pointAll();
	}

	@Override
	public List<bj_yj_wz_Point> list_bj_yj_wz_pointAll() {
		// TODO Auto-generated method stub
		return pointmapper.list_bj_yj_wz_pointAll();
	}

	@Override
	public List<bj_yj_space_Point> list_bj_yj_space_pointAll() {
		// TODO Auto-generated method stub
		return pointmapper.list_bj_yj_space_pointAll();
	}

}
