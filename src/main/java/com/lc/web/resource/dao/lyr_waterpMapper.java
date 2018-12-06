package com.lc.web.resource.dao;

import com.lc.web.resource.entity.lyr_waterp;
import com.lc.web.resource.entity.lyr_waterpExample;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface lyr_waterpMapper {
    long countByExample(lyr_waterpExample example);

    int deleteByExample(lyr_waterpExample example);

    int deleteByPrimaryKey(Integer gid);

    int insert(lyr_waterp record);

    int insertSelective(lyr_waterp record);

    List<lyr_waterp> selectByExample(lyr_waterpExample example);

    lyr_waterp selectByPrimaryKey(Integer gid);

    int updateByExampleSelective(@Param("record") lyr_waterp record, @Param("example") lyr_waterpExample example);

    int updateByExample(@Param("record") lyr_waterp record, @Param("example") lyr_waterpExample example);

    int updateByPrimaryKeySelective(lyr_waterp record);

    int updateByPrimaryKey(lyr_waterp record);
}