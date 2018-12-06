package com.lc.web.resource.dao;

import com.lc.web.resource.entity.lyr_ld_gardenp;
import com.lc.web.resource.entity.lyr_ld_gardenpExample;
import com.lc.web.resource.entity.lyr_ld_gardenpStatisticalAnalysis;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface lyr_ld_gardenpMapper {
	long countByExample(lyr_ld_gardenpExample example);

	int deleteByExample(lyr_ld_gardenpExample example);

	int deleteByPrimaryKey(Integer gid);

	int insert(lyr_ld_gardenp record);

	int insertSelective(lyr_ld_gardenp record);

	List<lyr_ld_gardenp> selectByExample(lyr_ld_gardenpExample example);
	/*绿地名称模糊查询*/
	List<lyr_ld_gardenp> selectByExampleLikeGreenName(String greenname);
	/*下拉菜单的绿地名称模糊查询*/
	List<lyr_ld_gardenp> selectByExampleLikeGreenNameLimit(String greenname);

	lyr_ld_gardenp selectByPrimaryKey(Integer gid);
	/*查询统计分析分页*/
	List<lyr_ld_gardenpStatisticalAnalysis>  selectStatisticalAnalysis(lyr_ld_gardenp example);

	/*查询绿地类型名称*/
	List<String>  selectGreentype1();
	/*根据绿地类型查询绿地性质*/
	List<String>  selectGreentype(String greentype1);
	List<String>  selectStreet();

	int updateByExampleSelective(@Param("record") lyr_ld_gardenp record,
                                 @Param("example") lyr_ld_gardenpExample example);

	int updateByExample(@Param("record") lyr_ld_gardenp record,
                        @Param("example") lyr_ld_gardenpExample example);

	int updateByPrimaryKeySelective(lyr_ld_gardenp record);

	int updateByPrimaryKey(lyr_ld_gardenp record);
}