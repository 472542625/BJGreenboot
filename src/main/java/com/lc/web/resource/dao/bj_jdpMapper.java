package com.lc.web.resource.dao;


import com.lc.web.resource.entity.bj_jdp;
import com.lc.web.resource.entity.bj_jdpExample;
import org.apache.ibatis.annotations.Param;

import java.util.List;


public interface bj_jdpMapper {
    long countByExample(bj_jdpExample example);

    int deleteByExample(bj_jdpExample example);

    int deleteByPrimaryKey(Integer gid);

    int insert(bj_jdp record);

    int insertSelective(bj_jdp record);

    List<bj_jdp> selectByExample(bj_jdpExample example);

    bj_jdp selectByPrimaryKey(Integer gid);

    int updateByExampleSelective(@Param("record") bj_jdp record, @Param("example") bj_jdpExample example);

    int updateByExample(@Param("record") bj_jdp record, @Param("example") bj_jdpExample example);

    int updateByPrimaryKeySelective(bj_jdp record);

    int updateByPrimaryKey(bj_jdp record);
}