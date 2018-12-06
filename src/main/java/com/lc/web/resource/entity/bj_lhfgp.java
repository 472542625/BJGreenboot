package com.lc.web.resource.entity;

public class bj_lhfgp {
	private Integer gid;

	private String greenname;

	private Double greenarea;

	private Double greencrate;

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

	public Double getGreencrate() {
		return greencrate;
	}

	public void setGreencrate(Double greencrate) {
		this.greencrate = greencrate;
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