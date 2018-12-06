package com.lc.web.resource.entity;

import java.math.BigDecimal;

public class bj_ld_gsmm {
    private Integer gid;

    private Double ordinate;

    private Double abscisa;

    private String treeid;

    private String treetype;

    private String town;

    private String location;

    private BigDecimal height;

    private BigDecimal diameter;

    private BigDecimal crown;

    private String state;

    private String environmen;

    private String ghdw;

    private String owner;

    private String level;

    private String hl;

    private String zc;

    private String fdsd;

    private String sc;

    private String sg;

    private String oldnum;

    private Object geom;

    public Integer getGid() {
        return gid;
    }

    public void setGid(Integer gid) {
        this.gid = gid;
    }

    public Double getOrdinate() {
        return ordinate;
    }

    public void setOrdinate(Double ordinate) {
        this.ordinate = ordinate;
    }

    public Double getAbscisa() {
        return abscisa;
    }

    public void setAbscisa(Double abscisa) {
        this.abscisa = abscisa;
    }

    public String getTreeid() {
        return treeid;
    }

    public void setTreeid(String treeid) {
        this.treeid = treeid == null ? null : treeid.trim();
    }

    public String getTreetype() {
        return treetype;
    }

    public void setTreetype(String treetype) {
        this.treetype = treetype == null ? null : treetype.trim();
    }

    public String getTown() {
        return town;
    }

    public void setTown(String town) {
        this.town = town == null ? null : town.trim();
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location == null ? null : location.trim();
    }

    public BigDecimal getHeight() {
        return height;
    }

    public void setHeight(BigDecimal height) {
        this.height = height;
    }

    public BigDecimal getDiameter() {
        return diameter;
    }

    public void setDiameter(BigDecimal diameter) {
        this.diameter = diameter;
    }

    public BigDecimal getCrown() {
        return crown;
    }

    public void setCrown(BigDecimal crown) {
        this.crown = crown;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state == null ? null : state.trim();
    }

    public String getEnvironmen() {
        return environmen;
    }

    public void setEnvironmen(String environmen) {
        this.environmen = environmen == null ? null : environmen.trim();
    }

    public String getGhdw() {
        return ghdw;
    }

    public void setGhdw(String ghdw) {
        this.ghdw = ghdw == null ? null : ghdw.trim();
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner == null ? null : owner.trim();
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level == null ? null : level.trim();
    }

    public String getHl() {
        return hl;
    }

    public void setHl(String hl) {
        this.hl = hl == null ? null : hl.trim();
    }

    public String getZc() {
        return zc;
    }

    public void setZc(String zc) {
        this.zc = zc == null ? null : zc.trim();
    }

    public String getFdsd() {
        return fdsd;
    }

    public void setFdsd(String fdsd) {
        this.fdsd = fdsd == null ? null : fdsd.trim();
    }

    public String getSc() {
        return sc;
    }

    public void setSc(String sc) {
        this.sc = sc == null ? null : sc.trim();
    }

    public String getSg() {
        return sg;
    }

    public void setSg(String sg) {
        this.sg = sg == null ? null : sg.trim();
    }

    public String getOldnum() {
        return oldnum;
    }

    public void setOldnum(String oldnum) {
        this.oldnum = oldnum == null ? null : oldnum.trim();
    }

    public Object getGeom() {
        return geom;
    }

    public void setGeom(Object geom) {
        this.geom = geom;
    }
}