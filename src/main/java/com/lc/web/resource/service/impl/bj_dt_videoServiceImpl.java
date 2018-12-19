package com.lc.web.resource.service.impl;

import com.lc.web.resource.dao.bj_dt_videoMapper;
import com.lc.web.resource.entity.bj_dt_video;
import com.lc.web.resource.entity.bj_dt_videoExample;
import com.lc.web.resource.entity.bj_green84p;
import com.lc.web.resource.service.bj_dt_videoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Administrator on 2018/12/19/019.
 */
@Service
public class bj_dt_videoServiceImpl implements bj_dt_videoService {
    @Autowired
    bj_dt_videoMapper bj_dt_videomapper;
    @Override
    public List<bj_dt_video> selectByExample() {
        bj_dt_videoExample bj_dt_videoexample = new bj_dt_videoExample();
        bj_dt_videoExample.Criteria criteria =  bj_dt_videoexample.createCriteria();
        return bj_dt_videomapper.selectByExample(bj_dt_videoexample);
    }
}
