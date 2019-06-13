package com.lc.web.resource.dao;

import com.lc.web.resource.entity.bj_tb_volp_plant;
import com.lc.web.resource.entity.bj_tb_volp_plantExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface bj_tb_volp_plantMapper {
    long countByExample(bj_tb_volp_plantExample example);

    int deleteByExample(bj_tb_volp_plantExample example);

    int insert(bj_tb_volp_plant record);

    int insertSelective(bj_tb_volp_plant record);

    List<bj_tb_volp_plant> selectByExample(bj_tb_volp_plantExample example);

    int updateByExampleSelective(@Param("record") bj_tb_volp_plant record, @Param("example") bj_tb_volp_plantExample example);

    int updateByExample(@Param("record") bj_tb_volp_plant record, @Param("example") bj_tb_volp_plantExample example);
}