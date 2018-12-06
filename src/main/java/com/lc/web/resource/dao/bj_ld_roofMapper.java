package com.lc.web.resource.dao;

import com.lc.web.resource.entity.bj_ld_roof;
import com.lc.web.resource.entity.bj_ld_roofExample;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface bj_ld_roofMapper {
    long countByExample(bj_ld_roofExample example);

    int deleteByExample(bj_ld_roofExample example);

    int deleteByPrimaryKey(Integer gid);

    int insert(bj_ld_roof record);

    int insertSelective(bj_ld_roof record);

    List<bj_ld_roof> selectByExample(bj_ld_roofExample example);

    bj_ld_roof selectByPrimaryKey(Integer gid);

    int updateByExampleSelective(@Param("record") bj_ld_roof record, @Param("example") bj_ld_roofExample example);

    int updateByExample(@Param("record") bj_ld_roof record, @Param("example") bj_ld_roofExample example);

    int updateByPrimaryKeySelective(bj_ld_roof record);

    int updateByPrimaryKey(bj_ld_roof record);
}