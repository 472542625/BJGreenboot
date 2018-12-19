package com.lc.web.resource.service.impl;

import com.lc.web.resource.dao.bj_green84pMapper;
import com.lc.web.resource.entity.bj_green84p;
import com.lc.web.resource.entity.bj_green84pExample;
import com.lc.web.resource.service.bj_green84pService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Administrator on 2018/12/19/019.
 */
@Service
public class bj_green84pServiceImpl implements bj_green84pService {
    @Autowired
    bj_green84pMapper bj_green84pmapper;
    @Override
    public List<bj_green84p> selectByExample() {
        bj_green84pExample bj_green84pexample =  new bj_green84pExample();
        bj_green84pExample.Criteria criteria = bj_green84pexample.createCriteria();

        return bj_green84pmapper.selectByExample(bj_green84pexample);
    }
}
