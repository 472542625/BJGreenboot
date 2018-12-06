package com.lc.web.resource.dao;

import com.lc.web.resource.entity.bj_ld_gsmm;
import com.lc.web.resource.entity.bj_ld_gsmmExample;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface bj_ld_gsmmMapper {
	long countByExample(bj_ld_gsmmExample example);

	int deleteByExample(bj_ld_gsmmExample example);

	int deleteByPrimaryKey(Integer gid);

	int insert(bj_ld_gsmm record);

	int insertSelective(bj_ld_gsmm record);

	List<bj_ld_gsmm> selectByExample(bj_ld_gsmmExample example);

	bj_ld_gsmm selectByPrimaryKey(Integer gid);

	List<bj_ld_gsmm> selectByLimit1000();

	int updateByExampleSelective(@Param("record") bj_ld_gsmm record,
                                 @Param("example") bj_ld_gsmmExample example);

	int updateByExample(@Param("record") bj_ld_gsmm record,
                        @Param("example") bj_ld_gsmmExample example);

	int updateByPrimaryKeySelective(bj_ld_gsmm record);

	int updateByPrimaryKey(bj_ld_gsmm record);
}