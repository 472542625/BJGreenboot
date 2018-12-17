package com.lc.web.resource.service;

import com.lc.web.resource.entity.bj_tb_volp;
import com.lc.web.resource.entity.bj_tb_volp_plant;

import java.util.List;

/**
 * Created by Administrator on 2018/12/16/016.
 */
public interface bj_tb_volpService {
    public List<bj_tb_volp> selectByExample();

    public List<bj_tb_volp_plant> selectBybj_tb_volp_plantExample(String greenid);
}
