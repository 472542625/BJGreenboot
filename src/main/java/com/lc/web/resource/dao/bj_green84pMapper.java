package com.lc.web.resource.dao;

import com.lc.web.resource.entity.bj_green84p;
import com.lc.web.resource.entity.bj_green84pExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface bj_green84pMapper {
    long countByExample(bj_green84pExample example);

    int deleteByExample(bj_green84pExample example);

    int deleteByPrimaryKey(Integer gid);

    int insert(bj_green84p record);

    int insertSelective(bj_green84p record);

    List<bj_green84p> selectByExample(bj_green84pExample example);

    bj_green84p selectByPrimaryKey(Integer gid);

    int updateByExampleSelective(@Param("record") bj_green84p record, @Param("example") bj_green84pExample example);

    int updateByExample(@Param("record") bj_green84p record, @Param("example") bj_green84pExample example);

    int updateByPrimaryKeySelective(bj_green84p record);

    int updateByPrimaryKey(bj_green84p record);
}