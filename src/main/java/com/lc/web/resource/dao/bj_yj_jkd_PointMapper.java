package com.lc.web.resource.dao;

import com.lc.web.resource.entity.bj_yj_jkd_Point;
import com.lc.web.resource.entity.bj_yj_space_Point;
import com.lc.web.resource.entity.bj_yj_wz_Point;

import java.util.List;

public interface bj_yj_jkd_PointMapper {

	public List<bj_yj_jkd_Point> listpointByBuffer(int gid);// 应急管理-监控点缓冲区查询

	public List<bj_yj_jkd_Point> list_bj_yj_jkd_pointAll();// 应急管理-监控点查询

	public List<bj_yj_wz_Point> list_bj_yj_wz_pointAll();// 应急管理-物资点查询

	public List<bj_yj_space_Point> list_bj_yj_space_pointAll();// 应急管理-应急场所查询
}
