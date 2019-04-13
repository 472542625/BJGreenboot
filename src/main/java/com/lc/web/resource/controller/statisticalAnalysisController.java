package com.lc.web.resource.controller;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.lc.web.resource.entity.*;
import com.lc.web.resource.service.impl.lyr_ld_gardenpServiceImpl;
import com.lc.web.util.JsonMsg;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.Row;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;

@Controller
public class statisticalAnalysisController {

	@Autowired
	lyr_ld_gardenpServiceImpl lyr_ld_gardenppointService;

	@RequestMapping(value = "/statisticalAnalysisIndex")
	public String statisticalAnalysisIndex() {

		return "index/mlayui_statis";

	}
	@RequestMapping(value = "/statisticalAnalysisDataTable")
	public String statisticalAnalysisDataTable() {

		return "statics/datatablepage/staticsAnalysisList";

	}

	@RequestMapping(value = "/selectStatisticalAnalysis_positioning_bygid", method = RequestMethod.GET)
	public @ResponseBody
	lyr_ld_gardenp selectStatisticalAnalysis_detail(Integer gid) {


		lyr_ld_gardenp  point = lyr_ld_gardenppointService.selectStatisticalAnalysis_positioning_bygid(gid);


		return point;
	}


	@RequestMapping(value = "/selectStatisticalAnalysis_detail", method = RequestMethod.GET)
	public @ResponseBody
	JsonMsg selectStatisticalAnalysis_detail(lyr_ld_gardenp lyr_ld_gardenp,@RequestParam(value = "pn", defaultValue = "1") Integer pn) {

		PageHelper.startPage(pn, 10);
		List<lyr_ld_gardenp> list = lyr_ld_gardenppointService.selectStatisticalAnalysis_detail(lyr_ld_gardenp);

		// /使用PageInfo包装查询后的结果，只需要将PageInfo交给页面就行了，封装了详细的分页信息
		// 传入连续显示的页数
		PageInfo page = new PageInfo(list, 10);

		//System.out.println(lyr_ld_gardenp.toString());
		return JsonMsg.success().add("pageInfo", page);
	}


	@RequestMapping(value = "/selectStatisticalAnalysis", method = RequestMethod.GET)
	public @ResponseBody
	JsonMsg selectStatisticalAnalysis(lyr_ld_gardenp lyr_ld_gardenp,@RequestParam(value = "pn", defaultValue = "1") Integer pn) {

		PageHelper.startPage(pn, 20);
		List<lyr_ld_gardenpStatisticalAnalysis> list = lyr_ld_gardenppointService.selectStatisticalAnalysis(lyr_ld_gardenp);

		// /使用PageInfo包装查询后的结果，只需要将PageInfo交给页面就行了，封装了详细的分页信息
		// 传入连续显示的页数
		PageInfo page = new PageInfo(list, 20);

		return JsonMsg.success().add("pageInfo", page);
	}

	/*绿地类型下拉菜单信息*/
	@RequestMapping(value = "/selectGreentype1", method = RequestMethod.GET)
	public @ResponseBody
	List<String> selectGreentype1(
	) {

		return lyr_ld_gardenppointService.selectGreentype1();

	}
	/*根据绿地类型得到绿地性质下拉菜单信息*/
		@RequestMapping(value = "/selectGreentype/{greentype1}", method = RequestMethod.GET)
	public @ResponseBody
	List<String> selectGreentype(@PathVariable("greentype1") String greentype1) {

		return lyr_ld_gardenppointService.selectGreentype(greentype1);

	}
	/*根据绿地性质得到街道下拉菜单信息*/
	@RequestMapping(value = "/selectStreet", method = RequestMethod.GET)
	public @ResponseBody
	List<String> selectStreet() {

		return lyr_ld_gardenppointService.selectStreet();

	}


	/*导出绿地资源详情excel*/
	@RequestMapping(value = "/Select_PoiExcel_GreenResource_detail", method = RequestMethod.GET)
	public void Select_PoiExcel_GreenResource_detail(lyr_ld_gardenp lyr_ld_gardenp,HttpServletRequest req,
								 HttpServletResponse resp) throws IOException {

//String path = req.getSession().getServletContext().getRealPath("/");

		List<lyr_ld_gardenp> list = lyr_ld_gardenppointService.selectStatisticalAnalysis_detail(lyr_ld_gardenp);

		if(null!=list&&list.size()>0){
			String fileName="账户数据.xls";
			resp.setHeader("Content-disposition","attachment;filename="
					+new String(fileName.getBytes("gb2312"),"ISO8859-1"));    //设置文件头编码格式
			resp.setContentType("APPLICATION/OCTET-STREAM;charset=UTF-8");//设置类型
			resp.setHeader("Cache-Control","no-cache");//设置头
			resp.setDateHeader("Expires", 0);//设置日期头
			HSSFWorkbook book=new HSSFWorkbook();

			HSSFSheet sheet=book.createSheet();
			CellStyle cellStyle=book.createCellStyle();
			Row row0=sheet.createRow(0);
			Cell id0=row0.createCell(0);
			id0.setCellValue("序号");

			Cell greenname0=row0.createCell(1);
			greenname0.setCellValue("绿地名称");

			Cell greentype10=row0.createCell(2);
			greentype10.setCellValue("绿地分类");

			Cell greentype0=row0.createCell(3);
			greentype0.setCellValue("绿地性质");

			Cell SumTub0=row0.createCell(4);
			SumTub0.setCellValue("图斑面积（M2）");

			Cell SumLvdi0=row0.createCell(5);
			SumLvdi0.setCellValue("绿化面积（M2）");

			Cell Sumlhf0=row0.createCell(6);
			Sumlhf0.setCellValue("绿化覆盖面积（M2）");

			Cell SumRofe0=row0.createCell(7);
			SumRofe0.setCellValue("屋顶绿化面积（M2）");

			Cell sum_qita0 =row0.createCell(8);
			sum_qita0.setCellValue("其他面积（M2）");

			Cell street0 =row0.createCell(9);
			street0.setCellValue("所属街道");

			Cell village0 =row0.createCell(10);
			village0.setCellValue("居委会");

			Cell greenowner0 =row0.createCell(11);
			greenowner0.setCellValue("绿地归属");

			Cell Buildyear0 =row0.createCell(12);
			Buildyear0.setCellValue("建成时间");

			Cell Property0 =row0.createCell(13);
			Property0.setCellValue("产权单位");

			Cell Manager0 =row0.createCell(14);
			Manager0.setCellValue("管养单位");

			Cell ManagPro0 =row0.createCell(15);
			ManagPro0.setCellValue("管养性质");

			Cell Geom0 =row0.createCell(16);
			Geom0.setCellValue("坐标");
			for(int i=1;i<list.size();i++){

				lyr_ld_gardenp entity = list.get(i);
				Row row=sheet.createRow(i);

				Cell id=row.createCell(0);
				id.setCellValue(i);

				Cell greenname=row.createCell(1);
				greenname.setCellValue(entity.getGreenname());

				Cell greentype1=row.createCell(2);
				greentype1.setCellValue(entity.getGreentype1());

				Cell greentype=row.createCell(3);
				greentype.setCellValue(entity.getGreentype());

				Cell SumTub=row.createCell(4);
				SumTub.setCellValue(entity.getSumTub().toString());

				Cell SumLvdi=row.createCell(5);
				SumLvdi.setCellValue(entity.getSumLvdi().toString());

				Cell Sumlhf=row.createCell(6);
				Sumlhf.setCellValue(entity.getSumlhf().toString());

				Cell SumRofe=row.createCell(7);
				SumRofe.setCellValue(entity.getSumRofe().toString());

				Cell sum_qita =row.createCell(8);
				sum_qita.setCellValue(entity.getSumQita().toString());

				Cell street =row.createCell(9);
				street.setCellValue(entity.getStreet().toString());

				Cell village =row.createCell(10);
				village.setCellValue(entity.getVillage());

				Cell greenowner =row.createCell(11);
				greenowner.setCellValue(entity.getGreenowner());

				Cell Buildyear =row.createCell(12);
				Buildyear.setCellValue(entity.getBuildyear());

				Cell Property =row.createCell(13);
				Property.setCellValue(entity.getProperty());

				Cell Manager =row.createCell(14);
				Manager.setCellValue(entity.getManager());

				Cell ManagPro =row.createCell(15);
				ManagPro.setCellValue(entity.getManagPro());

				Cell Geom =row.createCell(16);
				Geom.setCellValue(entity.getGeom().toString());
			}



			resp.setContentType("application/octet-stream");
			resp.setHeader("Content-disposition", "attachment;filename=greenResourcesOut.xls");//默认Excel名称
			resp.flushBuffer();
			book.write(resp.getOutputStream());
			FileOutputStream fos = new FileOutputStream(fileName);
			book.write(fos);
			fos.flush();
			fos.close();
			resp.getOutputStream().flush();
			resp.getOutputStream().close();
		}



	}

	/*导出绿地资源excel*/
	@RequestMapping(value = "/Select_PoiExcel_GreenResource", method = RequestMethod.GET)
	public void Select_PoiExcel_GreenResource(lyr_ld_gardenp lyr_ld_gardenp,HttpServletRequest req,
											  HttpServletResponse resp) throws IOException {

//String path = req.getSession().getServletContext().getRealPath("/");
		List<lyr_ld_gardenpStatisticalAnalysis> list = lyr_ld_gardenppointService.selectStatisticalAnalysis(lyr_ld_gardenp);



		if(null!=list&&list.size()>0){
			String fileName="账户数据.xls";
			resp.setHeader("Content-disposition","attachment;filename="
					+new String(fileName.getBytes("gb2312"),"ISO8859-1"));    //设置文件头编码格式
			resp.setContentType("APPLICATION/OCTET-STREAM;charset=UTF-8");//设置类型
			resp.setHeader("Cache-Control","no-cache");//设置头
			resp.setDateHeader("Expires", 0);//设置日期头
			HSSFWorkbook book=new HSSFWorkbook();

			HSSFSheet sheet=book.createSheet();
			CellStyle cellStyle=book.createCellStyle();
			for(int i=0;i<list.size();i++){

				lyr_ld_gardenpStatisticalAnalysis entity = list.get(i);
				Row row=sheet.createRow(i);

				Cell cell1=row.createCell(0);
				cell1.setCellValue(entity.getStreet());
			}



			resp.setContentType("application/octet-stream");
			resp.setHeader("Content-disposition", "attachment;filename=greenResourcesOut.xls");//默认Excel名称
			resp.flushBuffer();
			book.write(resp.getOutputStream());
			FileOutputStream fos = new FileOutputStream(fileName);
			book.write(fos);
			fos.flush();
			fos.close();
			resp.getOutputStream().flush();
			resp.getOutputStream().close();
		}



	}






}
