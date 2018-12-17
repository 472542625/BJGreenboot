package com.lc.web.resource.service.impl;

import com.lc.web.resource.dao.bj_tb_volpMapper;
import com.lc.web.resource.dao.bj_tb_volp_plantMapper;
import com.lc.web.resource.entity.bj_tb_volp;
import com.lc.web.resource.entity.bj_tb_volpExample;
import com.lc.web.resource.entity.bj_tb_volp_plant;
import com.lc.web.resource.entity.bj_tb_volp_plantExample;
import com.lc.web.resource.service.bj_tb_volpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Administrator on 2018/12/16/016.
 */
@Service
public class bj_tb_volpServiceImpl implements bj_tb_volpService {

    @Autowired
    bj_tb_volpMapper bj_tb_volpMapper;
    @Autowired
    bj_tb_volp_plantMapper bj_tb_volp_plantmapper;
    @Override
    public List<bj_tb_volp> selectByExample() {
        bj_tb_volpExample bj_tb_volpExample = new bj_tb_volpExample();
        com.lc.web.resource.entity.bj_tb_volpExample.Criteria  criteria = bj_tb_volpExample.createCriteria();

        return bj_tb_volpMapper.selectByExample(bj_tb_volpExample);
    }

    @Override
    public List<bj_tb_volp_plant> selectBybj_tb_volp_plantExample(String greenid) {
        bj_tb_volp_plantExample bj_tb_volp_plantExample = new bj_tb_volp_plantExample();
        com.lc.web.resource.entity.bj_tb_volp_plantExample.Criteria  criteria = bj_tb_volp_plantExample.createCriteria();
        criteria.andGreenIdEqualTo(greenid);
        return bj_tb_volp_plantmapper.selectByExample(bj_tb_volp_plantExample);
    }
}
