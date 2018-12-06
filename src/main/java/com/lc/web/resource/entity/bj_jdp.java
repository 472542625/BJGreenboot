package com.lc.web.resource.entity;

import java.math.BigDecimal;

public class bj_jdp {
    private Integer gid;

    private BigDecimal lvdir;

    private BigDecimal fugair;

    private String streetname;

    private BigDecimal lvdi;

    private Integer origFid;

    private Object geom;

    public Integer getGid() {
        return gid;
    }

    public void setGid(Integer gid) {
        this.gid = gid;
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

    public String getStreetname() {
        return streetname;
    }

    public void setStreetname(String streetname) {
        this.streetname = streetname == null ? null : streetname.trim();
    }

    public BigDecimal getLvdi() {
        return lvdi;
    }

    public void setLvdi(BigDecimal lvdi) {
        this.lvdi = lvdi;
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