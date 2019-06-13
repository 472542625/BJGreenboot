package com.lc.web.resource.entity;

public class bj_tb_volp_plant {
    private String greenId;

    private Integer plant;

    private String plantname;

    private String planttype;

    private String plantAr;

    private Integer plantNum;

    private Integer plantId;

    private String dbh;

    private String plantVol;

    private String greenrId;

    public String getGreenId() {
        return greenId;
    }

    public void setGreenId(String greenId) {
        this.greenId = greenId == null ? null : greenId.trim();
    }

    public Integer getPlant() {
        return plant;
    }

    public void setPlant(Integer plant) {
        this.plant = plant;
    }

    public String getPlantname() {
        return plantname;
    }

    public void setPlantname(String plantname) {
        this.plantname = plantname == null ? null : plantname.trim();
    }

    public String getPlanttype() {
        return planttype;
    }

    public void setPlanttype(String planttype) {
        this.planttype = planttype == null ? null : planttype.trim();
    }

    public String getPlantAr() {
        return plantAr;
    }

    public void setPlantAr(String plantAr) {
        this.plantAr = plantAr == null ? null : plantAr.trim();
    }

    public Integer getPlantNum() {
        return plantNum;
    }

    public void setPlantNum(Integer plantNum) {
        this.plantNum = plantNum;
    }

    public Integer getPlantId() {
        return plantId;
    }

    public void setPlantId(Integer plantId) {
        this.plantId = plantId;
    }

    public String getDbh() {
        return dbh;
    }

    public void setDbh(String dbh) {
        this.dbh = dbh == null ? null : dbh.trim();
    }

    public String getPlantVol() {
        return plantVol;
    }

    public void setPlantVol(String plantVol) {
        this.plantVol = plantVol == null ? null : plantVol.trim();
    }

    public String getGreenrId() {
        return greenrId;
    }

    public void setGreenrId(String greenrId) {
        this.greenrId = greenrId == null ? null : greenrId.trim();
    }
}