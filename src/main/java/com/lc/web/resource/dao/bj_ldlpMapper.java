package com.lc.web.resource.dao;

import com.lc.web.resource.entity.bj_ldlp;
import com.lc.web.resource.entity.bj_ldlpExample;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface bj_ldlpMapper {
    long countByExample(bj_ldlpExample example);

    int deleteByExample(bj_ldlpExample example);

    int deleteByPrimaryKey(Integer gid);

    int insert(bj_ldlp record);

    int insertSelective(bj_ldlp record);

    List<bj_ldlp> selectByExample(bj_ldlpExample example);

    bj_ldlp selectByPrimaryKey(Integer gid);

    int updateByExampleSelective(@Param("record") bj_ldlp record, @Param("example") bj_ldlpExample example);

    int updateByExample(@Param("record") bj_ldlp record, @Param("example") bj_ldlpExample example);

    int updateByPrimaryKeySelective(bj_ldlp record);

    int updateByPrimaryKey(bj_ldlp record);
}