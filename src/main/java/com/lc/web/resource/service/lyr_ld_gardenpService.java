package com.lc.web.resource.service;

import com.lc.web.resource.entity.lyr_ld_gardenp;
import com.lc.web.resource.entity.lyr_ld_gardenpStatisticalAnalysis;

import java.util.List;

public interface lyr_ld_gardenpService {

	public List<lyr_ld_gardenp> selectByExampleGreenType(String greentype1);

	public List<lyr_ld_gardenp> selectByExampleGreenName(String greenname);

	public List<lyr_ld_gardenp> selectByExampleLikeGreenName(String greenname);

	public List<lyr_ld_gardenp> selectByExampleLikeGreenNameLimit(
            String greenname);

    public List<lyr_ld_gardenp> selectByExampleFY();


	public List<lyr_ld_gardenpStatisticalAnalysis> selectStatisticalAnalysis(lyr_ld_gardenp lyr_ld_gardenp);

	public List<String>  selectGreentype1();
	List<String>  selectGreentype(String greentype);
	List<String>  selectStreet();

}
