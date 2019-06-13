package com.lc.web.resource.entity;

import java.math.BigDecimal;

public class bj_green84p {
    private Integer gid;

    private Integer objectid;

    private String greenname;

    private String path;

    private String greenRate;

    private BigDecimal ldl;

    private BigDecimal lhfg;

    private Integer origFid;

    private Object geom;

    public Integer getGid() {
        return gid;
    }

    public void setGid(Integer gid) {
        this.gid = gid;
    }

    public Integer getObjectid() {
        return objectid;
    }

    public void setObjectid(Integer objectid) {
        this.objectid = objectid;
    }

    public String getGreenname() {
        return greenname;
    }

    public void setGreenname(String greenname) {
        this.greenname = greenname == null ? null : greenname.trim();
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path == null ? null : path.trim();
    }

    public String getGreenRate() {
        return greenRate;
    }

    public void setGreenRate(String greenRate) {
        this.greenRate = greenRate == null ? null : greenRate.trim();
    }

    public BigDecimal getLdl() {
        return ldl;
    }

    public void setLdl(BigDecimal ldl) {
        this.ldl = ldl;
    }

    public BigDecimal getLhfg() {
        return lhfg;
    }

    public void setLhfg(BigDecimal lhfg) {
        this.lhfg = lhfg;
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