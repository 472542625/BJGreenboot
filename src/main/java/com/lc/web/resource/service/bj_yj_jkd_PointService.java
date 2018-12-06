package com.lc.web.resource.service;

import com.lc.web.resource.entity.bj_yj_jkd_Point;
import com.lc.web.resource.entity.bj_yj_space_Point;
import com.lc.web.resource.entity.bj_yj_wz_Point;

import java.util.List;

public interface bj_yj_jkd_PointService {

	public List<bj_yj_jkd_Point> listpointByBuffer(int gid);

	public List<bj_yj_jkd_Point> list_bj_yj_jkd_pointAll();

	public List<bj_yj_wz_Point> list_bj_yj_wz_pointAll();// 物资点查询

	public List<bj_yj_space_Point> list_bj_yj_space_pointAll();// 应急场所查询
}
