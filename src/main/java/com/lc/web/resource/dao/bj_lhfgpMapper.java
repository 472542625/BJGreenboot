package com.lc.web.resource.dao;

import com.lc.web.resource.entity.bj_lhfgp;
import com.lc.web.resource.entity.bj_lhfgpExample;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface bj_lhfgpMapper {
    long countByExample(bj_lhfgpExample example);

    int deleteByExample(bj_lhfgpExample example);

    int deleteByPrimaryKey(Integer gid);

    int insert(bj_lhfgp record);

    int insertSelective(bj_lhfgp record);

    List<bj_lhfgp> selectByExample(bj_lhfgpExample example);

    bj_lhfgp selectByPrimaryKey(Integer gid);

    int updateByExampleSelective(@Param("record") bj_lhfgp record, @Param("example") bj_lhfgpExample example);

    int updateByExample(@Param("record") bj_lhfgp record, @Param("example") bj_lhfgpExample example);

    int updateByPrimaryKeySelective(bj_lhfgp record);

    int updateByPrimaryKey(bj_lhfgp record);
}