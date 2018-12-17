package com.lc.web.resource.service.impl;

import com.lc.web.resource.entity.lyr_ld_gardenp;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.*;

/**
 * Created by Administrator on 2018/12/10/010.
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class lyr_ld_gardenpServiceImplTest {

    @Autowired
    lyr_ld_gardenpServiceImpl lyr_ld_gardenpServiceImpl;

    @Autowired
    bj_tb_volpServiceImpl bj_tb_volpServiceImpl;
    @Test
    public void selectStatisticalAnalysis() throws Exception {
//        lyr_ld_gardenp lyr_ld_gardenp = new lyr_ld_gardenp();
//        lyr_ld_gardenp.setGreentype1("附属绿地");
//        lyr_ld_gardenp.setGreentype("请选择");
//        lyr_ld_gardenp.setStreet("请选择");
//
//
//        System.out.println( lyr_ld_gardenpServiceImpl.selectStatisticalAnalysis(lyr_ld_gardenp).size());

      ;
        System.out.println(  bj_tb_volpServiceImpl.selectBybj_tb_volp_plantExample("1071042005008").size());
    }


}