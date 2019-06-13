package com.lc.web.resource.dao;

import com.lc.web.resource.entity.bj_dt_video;
import com.lc.web.resource.entity.bj_dt_videoExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface bj_dt_videoMapper {
    long countByExample(bj_dt_videoExample example);

    int deleteByExample(bj_dt_videoExample example);

    int deleteByPrimaryKey(Integer gid);

    int insert(bj_dt_video record);

    int insertSelective(bj_dt_video record);

    List<bj_dt_video> selectByExample(bj_dt_videoExample example);

    bj_dt_video selectByPrimaryKey(Integer gid);

    int updateByExampleSelective(@Param("record") bj_dt_video record, @Param("example") bj_dt_videoExample example);

    int updateByExample(@Param("record") bj_dt_video record, @Param("example") bj_dt_videoExample example);

    int updateByPrimaryKeySelective(bj_dt_video record);

    int updateByPrimaryKey(bj_dt_video record);
}