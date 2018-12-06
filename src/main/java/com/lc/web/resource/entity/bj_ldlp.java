package com.lc.web.resource.entity;

import java.math.BigDecimal;

public class bj_ldlp {
    private Integer gid;

    private String greenname;

    private Double greenarea;

    private BigDecimal greentrate;

    private Integer origFid;

    private Object geom;

    public Integer getGid() {
        return gid;
    }

    public void setGid(Integer gid) {
        this.gid = gid;
    }

    public String getGreenname() {
        return greenname;
    }

    public void setGreenname(String greenname) {
        this.greenname = greenname == null ? null : greenname.trim();
    }

    public Double getGreenarea() {
        return greenarea;
    }

    public void setGreenarea(Double greenarea) {
        this.greenarea = greenarea;
    }

    public BigDecimal getGreentrate() {
        return greentrate;
    }

    public void setGreentrate(BigDecimal greentrate) {
        this.greentrate = greentrate;
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