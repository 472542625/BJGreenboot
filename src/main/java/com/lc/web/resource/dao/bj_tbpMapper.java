package com.lc.web.resource.dao;

import com.lc.web.resource.entity.bj_tbp;
import com.lc.web.resource.entity.bj_tbpExample;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface bj_tbpMapper {
    long countByExample(bj_tbpExample example);

    int deleteByExample(bj_tbpExample example);

    int deleteByPrimaryKey(Integer gid);

    int insert(bj_tbp record);

    int insertSelective(bj_tbp record);

    List<bj_tbp> selectByExample(bj_tbpExample example);

    bj_tbp selectByPrimaryKey(Integer gid);

    int updateByExampleSelective(@Param("record") bj_tbp record, @Param("example") bj_tbpExample example);

    int updateByExample(@Param("record") bj_tbp record, @Param("example") bj_tbpExample example);

    int updateByPrimaryKeySelective(bj_tbp record);

    int updateByPrimaryKey(bj_tbp record);
}