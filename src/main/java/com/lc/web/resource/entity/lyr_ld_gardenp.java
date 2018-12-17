package com.lc.web.resource.entity;

import java.math.BigDecimal;

public class lyr_ld_gardenp {
    private Integer gid;

    private String greenname;

    private String greentype;

    private String street;

    private String village;

    private String greenowner;

    private String buildyear;

    private String property;

    private String manager;

    private String managPro;

    private BigDecimal sumTub;

    private BigDecimal sumLvdi;

    private BigDecimal sumQita;

    private BigDecimal sumRofe;

    private BigDecimal sumlhf;

    private String greentype1;

    private String greentypeo;

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

    public String getGreentype() {
        return greentype;
    }

    public void setGreentype(String greentype) {
        this.greentype = greentype == null ? null : greentype.trim();
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street == null ? null : street.trim();
    }

    public String getVillage() {
        return village;
    }

    public void setVillage(String village) {
        this.village = village == null ? null : village.trim();
    }

    public String getGreenowner() {
        return greenowner;
    }

    public void setGreenowner(String greenowner) {
        this.greenowner = greenowner == null ? null : greenowner.trim();
    }

    public String getBuildyear() {
        return buildyear;
    }

    public void setBuildyear(String buildyear) {
        this.buildyear = buildyear == null ? null : buildyear.trim();
    }

    public String getProperty() {
        return property;
    }

    public void setProperty(String property) {
        this.property = property == null ? null : property.trim();
    }

    public String getManager() {
        return manager;
    }

    public void setManager(String manager) {
        this.manager = manager == null ? null : manager.trim();
    }

    public String getManagPro() {
        return managPro;
    }

    public void setManagPro(String managPro) {
        this.managPro = managPro == null ? null : managPro.trim();
    }

    public BigDecimal getSumTub() {
        return sumTub;
    }

    public void setSumTub(BigDecimal sumTub) {
        this.sumTub = sumTub;
    }

    public BigDecimal getSumLvdi() {
        return sumLvdi;
    }

    public void setSumLvdi(BigDecimal sumLvdi) {
        this.sumLvdi = sumLvdi;
    }

    public BigDecimal getSumQita() {
        return sumQita;
    }

    public void setSumQita(BigDecimal sumQita) {
        this.sumQita = sumQita;
    }

    public BigDecimal getSumRofe() {
        return sumRofe;
    }

    public void setSumRofe(BigDecimal sumRofe) {
        this.sumRofe = sumRofe;
    }

    public BigDecimal getSumlhf() {
        return sumlhf;
    }

    public void setSumlhf(BigDecimal sumlhf) {
        this.sumlhf = sumlhf;
    }

    public String getGreentype1() {
        return greentype1;
    }

    public void setGreentype1(String greentype1) {
        this.greentype1 = greentype1 == null ? null : greentype1.trim();
    }

    public String getGreentypeo() {
        return greentypeo;
    }

    public void setGreentypeo(String greentypeo) {
        this.greentypeo = greentypeo == null ? null : greentypeo.trim();
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

    @Override
    public String toString() {
        return "lyr_ld_gardenp{" +
                "gid=" + gid +
                ", greenname='" + greenname + '\'' +
                ", greentype='" + greentype + '\'' +
                ", street='" + street + '\'' +
                ", village='" + village + '\'' +
                ", greenowner='" + greenowner + '\'' +
                ", buildyear='" + buildyear + '\'' +
                ", property='" + property + '\'' +
                ", manager='" + manager + '\'' +
                ", managPro='" + managPro + '\'' +
                ", sumTub=" + sumTub +
                ", sumLvdi=" + sumLvdi +
                ", sumQita=" + sumQita +
                ", sumRofe=" + sumRofe +
                ", sumlhf=" + sumlhf +
                ", greentype1='" + greentype1 + '\'' +
                ", greentypeo='" + greentypeo + '\'' +
                ", origFid=" + origFid +
                ", geom=" + geom +
                '}';
    }
}