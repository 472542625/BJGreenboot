package com.lc.web.resource.dao;

import com.lc.web.resource.entity.bj_tb_volp;
import com.lc.web.resource.entity.bj_tb_volpExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface bj_tb_volpMapper {
    long countByExample(bj_tb_volpExample example);

    int deleteByExample(bj_tb_volpExample example);

    int deleteByPrimaryKey(Integer gid);

    int insert(bj_tb_volp record);

    int insertSelective(bj_tb_volp record);

    List<bj_tb_volp> selectByExample(bj_tb_volpExample example);

    bj_tb_volp selectByPrimaryKey(Integer gid);

    int updateByExampleSelective(@Param("record") bj_tb_volp record, @Param("example") bj_tb_volpExample example);

    int updateByExample(@Param("record") bj_tb_volp record, @Param("example") bj_tb_volpExample example);

    int updateByPrimaryKeySelective(bj_tb_volp record);

    int updateByPrimaryKey(bj_tb_volp record);
}