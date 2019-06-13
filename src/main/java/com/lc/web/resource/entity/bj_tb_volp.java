package com.lc.web.resource.entity;

import java.math.BigDecimal;

public class bj_tb_volp {
    private Integer gid;

    private String greenId;

    private BigDecimal mapArea;

    private String greentype;

    private BigDecimal sumLvdi;

    private BigDecimal sumlhf;

    private BigDecimal lvdir;

    private BigDecimal fugair;

    private Integer origFid;

    private Object geom;

    public Integer getGid() {
        return gid;
    }

    public void setGid(Integer gid) {
        this.gid = gid;
    }

    public String getGreenId() {
        return greenId;
    }

    public void setGreenId(String greenId) {
        this.greenId = greenId == null ? null : greenId.trim();
    }

    public BigDecimal getMapArea() {
        return mapArea;
    }

    public void setMapArea(BigDecimal mapArea) {
        this.mapArea = mapArea;
    }

    public String getGreentype() {
        return greentype;
    }

    public void setGreentype(String greentype) {
        this.greentype = greentype == null ? null : greentype.trim();
    }

    public BigDecimal getSumLvdi() {
        return sumLvdi;
    }

    public void setSumLvdi(BigDecimal sumLvdi) {
        this.sumLvdi = sumLvdi;
    }

    public BigDecimal getSumlhf() {
        return sumlhf;
    }

    public void setSumlhf(BigDecimal sumlhf) {
        this.sumlhf = sumlhf;
    }

    public BigDecimal getLvdir() {
        return lvdir;
    }

    public void setLvdir(BigDecimal lvdir) {
        this.lvdir = lvdir;
    }

    public BigDecimal getFugair() {
        return fugair;
    }

    public void setFugair(BigDecimal fugair) {
        this.fugair = fugair;
    }

    public Integer getOrigFid() {
        return origFid;
    }

    public void setOrigFid(Integer origFid) {
        this.origFid = origFid;
    }

    public Object getGeom() {
        return geom;
    }

    public void setGeom(Object geom) {
        this.geom = geom;
    }
}