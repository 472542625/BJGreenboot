package com.lc.web.resource.service.impl;

import com.lc.web.resource.dao.lyr_ld_gardenpMapper;
import com.lc.web.resource.entity.lyr_ld_gardenp;
import com.lc.web.resource.entity.lyr_ld_gardenpExample;
import com.lc.web.resource.entity.lyr_ld_gardenpExample.Criteria;
import com.lc.web.resource.entity.lyr_ld_gardenpStatisticalAnalysis;
import com.lc.web.resource.service.lyr_ld_gardenpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class lyr_ld_gardenpServiceImpl implements lyr_ld_gardenpService {

	@Autowired
	lyr_ld_gardenpMapper pointmapper;

	@Override
	public List<lyr_ld_gardenp> selectByExampleGreenType(String greentype1) {
		lyr_ld_gardenpExample example = new lyr_ld_gardenpExample();
		Criteria criteria = example.createCriteria();
		criteria.andGreentype1EqualTo(greentype1);
		return pointmapper.selectByExample(example);
	}

	@Override
	public List<lyr_ld_gardenp> selectByExampleGreenName(String greenname) {
		lyr_ld_gardenpExample example = new lyr_ld_gardenpExample();
		Criteria criteria = example.createCriteria();
		criteria.andGreennameLike(greenname);
		return pointmapper.selectByExample(example);
	}

	@Override
	public List<lyr_ld_gardenp> selectByExampleLikeGreenName(String greenname) {

		return pointmapper.selectByExampleLikeGreenName(greenname);
	}

	@Override
	public List<lyr_ld_gardenp> selectByExampleLikeGreenNameLimit(
			String greenname) {
		// TODO Auto-generated method stub
		return pointmapper.selectByExampleLikeGreenNameLimit(greenname);
	}

	@Override
	public List<lyr_ld_gardenp> selectByExampleFY() {
		lyr_ld_gardenpExample example = new lyr_ld_gardenpExample();
		return pointmapper.selectByExample(example);

	}

	@Override
	public List<lyr_ld_gardenp> selectStatisticalAnalysis_detail(lyr_ld_gardenp lyr_ld_gardenp) {
		lyr_ld_gardenpExample lyr_ld_gardenpExample = new lyr_ld_gardenpExample();
		lyr_ld_gardenpExample.Criteria criteria =  lyr_ld_gardenpExample.createCriteria();



		if(!lyr_ld_gardenp.getGreentype1().equals("全选")){



			criteria.andGreentype1EqualTo(lyr_ld_gardenp.getGreentype1());
		}

		if(!lyr_ld_gardenp.getGreentype().equals("全选")){


			criteria.andGreentypeEqualTo(lyr_ld_gardenp.getGreentype());
		}
		if(!lyr_ld_gardenp.getStreet().equals("全选")){


			criteria.andStreetEqualTo(lyr_ld_gardenp.getStreet());
		}
		return pointmapper.selectByExample(lyr_ld_gardenpExample);
	}

	@Override
	public List<lyr_ld_gardenpStatisticalAnalysis> selectStatisticalAnalysis(lyr_ld_gardenp lyr_ld_gardenp) {


		lyr_ld_gardenpExample lyr_ld_gardenpExample = new lyr_ld_gardenpExample();
		lyr_ld_gardenpExample.Criteria criteria =  lyr_ld_gardenpExample.createCriteria();



		if(!lyr_ld_gardenp.getGreentype1().equals("全选")){


			criteria.andGreentype1EqualTo(lyr_ld_gardenp.getGreentype1());
		}

		if(!lyr_ld_gardenp.getGreentype().equals("全选")){


			criteria.andGreentypeEqualTo(lyr_ld_gardenp.getGreentype());
		}
		if(!lyr_ld_gardenp.getStreet().equals("全选")){


			criteria.andStreetEqualTo(lyr_ld_gardenp.getStreet());
		}


		return pointmapper.selectStatisticalAnalysis(lyr_ld_gardenpExample);


	}

	@Override
	public List<String> selectGreentype1() {
		return pointmapper.selectGreentype1();
	}

	@Override
	public List<String> selectGreentype(String greentype1) {
		return pointmapper.selectGreentype(greentype1);
	}

	@Override
	public List<String> selectStreet() {
		return  pointmapper.selectStreet();
	}

	@Override
	public lyr_ld_gardenp selectStatisticalAnalysis_positioning_bygid(Integer gid) {
		return pointmapper.selectByPrimaryKey(gid);
	}


}
