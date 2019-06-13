package com.lc.web.resource.entity;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class bj_green84pExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public bj_green84pExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        public Criteria andGidIsNull() {
            addCriterion("gid is null");
            return (Criteria) this;
        }

        public Criteria andGidIsNotNull() {
            addCriterion("gid is not null");
            return (Criteria) this;
        }

        public Criteria andGidEqualTo(Integer value) {
            addCriterion("gid =", value, "gid");
            return (Criteria) this;
        }

        public Criteria andGidNotEqualTo(Integer value) {
            addCriterion("gid <>", value, "gid");
            return (Criteria) this;
        }

        public Criteria andGidGreaterThan(Integer value) {
            addCriterion("gid >", value, "gid");
            return (Criteria) this;
        }

        public Criteria andGidGreaterThanOrEqualTo(Integer value) {
            addCriterion("gid >=", value, "gid");
            return (Criteria) this;
        }

        public Criteria andGidLessThan(Integer value) {
            addCriterion("gid <", value, "gid");
            return (Criteria) this;
        }

        public Criteria andGidLessThanOrEqualTo(Integer value) {
            addCriterion("gid <=", value, "gid");
            return (Criteria) this;
        }

        public Criteria andGidIn(List<Integer> values) {
            addCriterion("gid in", values, "gid");
            return (Criteria) this;
        }

        public Criteria andGidNotIn(List<Integer> values) {
            addCriterion("gid not in", values, "gid");
            return (Criteria) this;
        }

        public Criteria andGidBetween(Integer value1, Integer value2) {
            addCriterion("gid between", value1, value2, "gid");
            return (Criteria) this;
        }

        public Criteria andGidNotBetween(Integer value1, Integer value2) {
            addCriterion("gid not between", value1, value2, "gid");
            return (Criteria) this;
        }

        public Criteria andObjectidIsNull() {
            addCriterion("objectid is null");
            return (Criteria) this;
        }

        public Criteria andObjectidIsNotNull() {
            addCriterion("objectid is not null");
            return (Criteria) this;
        }

        public Criteria andObjectidEqualTo(Integer value) {
            addCriterion("objectid =", value, "objectid");
            return (Criteria) this;
        }

        public Criteria andObjectidNotEqualTo(Integer value) {
            addCriterion("objectid <>", value, "objectid");
            return (Criteria) this;
        }

        public Criteria andObjectidGreaterThan(Integer value) {
            addCriterion("objectid >", value, "objectid");
            return (Criteria) this;
        }

        public Criteria andObjectidGreaterThanOrEqualTo(Integer value) {
            addCriterion("objectid >=", value, "objectid");
            return (Criteria) this;
        }

        public Criteria andObjectidLessThan(Integer value) {
            addCriterion("objectid <", value, "objectid");
            return (Criteria) this;
        }

        public Criteria andObjectidLessThanOrEqualTo(Integer value) {
            addCriterion("objectid <=", value, "objectid");
            return (Criteria) this;
        }

        public Criteria andObjectidIn(List<Integer> values) {
            addCriterion("objectid in", values, "objectid");
            return (Criteria) this;
        }

        public Criteria andObjectidNotIn(List<Integer> values) {
            addCriterion("objectid not in", values, "objectid");
            return (Criteria) this;
        }

        public Criteria andObjectidBetween(Integer value1, Integer value2) {
            addCriterion("objectid between", value1, value2, "objectid");
            return (Criteria) this;
        }

        public Criteria andObjectidNotBetween(Integer value1, Integer value2) {
            addCriterion("objectid not between", value1, value2, "objectid");
            return (Criteria) this;
        }

        public Criteria andGreennameIsNull() {
            addCriterion("greenname is null");
            return (Criteria) this;
        }

        public Criteria andGreennameIsNotNull() {
            addCriterion("greenname is not null");
            return (Criteria) this;
        }

        public Criteria andGreennameEqualTo(String value) {
            addCriterion("greenname =", value, "greenname");
            return (Criteria) this;
        }

        public Criteria andGreennameNotEqualTo(String value) {
            addCriterion("greenname <>", value, "greenname");
            return (Criteria) this;
        }

        public Criteria andGreennameGreaterThan(String value) {
            addCriterion("greenname >", value, "greenname");
            return (Criteria) this;
        }

        public Criteria andGreennameGreaterThanOrEqualTo(String value) {
            addCriterion("greenname >=", value, "greenname");
            return (Criteria) this;
        }

        public Criteria andGreennameLessThan(String value) {
            addCriterion("greenname <", value, "greenname");
            return (Criteria) this;
        }

        public Criteria andGreennameLessThanOrEqualTo(String value) {
            addCriterion("greenname <=", value, "greenname");
            return (Criteria) this;
        }

        public Criteria andGreennameLike(String value) {
            addCriterion("greenname like", value, "greenname");
            return (Criteria) this;
        }

        public Criteria andGreennameNotLike(String value) {
            addCriterion("greenname not like", value, "greenname");
            return (Criteria) this;
        }

        public Criteria andGreennameIn(List<String> values) {
            addCriterion("greenname in", values, "greenname");
            return (Criteria) this;
        }

        public Criteria andGreennameNotIn(List<String> values) {
            addCriterion("greenname not in", values, "greenname");
            return (Criteria) this;
        }

        public Criteria andGreennameBetween(String value1, String value2) {
            addCriterion("greenname between", value1, value2, "greenname");
            return (Criteria) this;
        }

        public Criteria andGreennameNotBetween(String value1, String value2) {
            addCriterion("greenname not between", value1, value2, "greenname");
            return (Criteria) this;
        }

        public Criteria andPathIsNull() {
            addCriterion("path is null");
            return (Criteria) this;
        }

        public Criteria andPathIsNotNull() {
            addCriterion("path is not null");
            return (Criteria) this;
        }

        public Criteria andPathEqualTo(String value) {
            addCriterion("path =", value, "path");
            return (Criteria) this;
        }

        public Criteria andPathNotEqualTo(String value) {
            addCriterion("path <>", value, "path");
            return (Criteria) this;
        }

        public Criteria andPathGreaterThan(String value) {
            addCriterion("path >", value, "path");
            return (Criteria) this;
        }

        public Criteria andPathGreaterThanOrEqualTo(String value) {
            addCriterion("path >=", value, "path");
            return (Criteria) this;
        }

        public Criteria andPathLessThan(String value) {
            addCriterion("path <", value, "path");
            return (Criteria) this;
        }

        public Criteria andPathLessThanOrEqualTo(String value) {
            addCriterion("path <=", value, "path");
            return (Criteria) this;
        }

        public Criteria andPathLike(String value) {
            addCriterion("path like", value, "path");
            return (Criteria) this;
        }

        public Criteria andPathNotLike(String value) {
            addCriterion("path not like", value, "path");
            return (Criteria) this;
        }

        public Criteria andPathIn(List<String> values) {
            addCriterion("path in", values, "path");
            return (Criteria) this;
        }

        public Criteria andPathNotIn(List<String> values) {
            addCriterion("path not in", values, "path");
            return (Criteria) this;
        }

        public Criteria andPathBetween(String value1, String value2) {
            addCriterion("path between", value1, value2, "path");
            return (Criteria) this;
        }

        public Criteria andPathNotBetween(String value1, String value2) {
            addCriterion("path not between", value1, value2, "path");
            return (Criteria) this;
        }

        public Criteria andGreenRateIsNull() {
            addCriterion("green_rate is null");
            return (Criteria) this;
        }

        public Criteria andGreenRateIsNotNull() {
            addCriterion("green_rate is not null");
            return (Criteria) this;
        }

        public Criteria andGreenRateEqualTo(String value) {
            addCriterion("green_rate =", value, "greenRate");
            return (Criteria) this;
        }

        public Criteria andGreenRateNotEqualTo(String value) {
            addCriterion("green_rate <>", value, "greenRate");
            return (Criteria) this;
        }

        public Criteria andGreenRateGreaterThan(String value) {
            addCriterion("green_rate >", value, "greenRate");
            return (Criteria) this;
        }

        public Criteria andGreenRateGreaterThanOrEqualTo(String value) {
            addCriterion("green_rate >=", value, "greenRate");
            return (Criteria) this;
        }

        public Criteria andGreenRateLessThan(String value) {
            addCriterion("green_rate <", value, "greenRate");
            return (Criteria) this;
        }

        public Criteria andGreenRateLessThanOrEqualTo(String value) {
            addCriterion("green_rate <=", value, "greenRate");
            return (Criteria) this;
        }

        public Criteria andGreenRateLike(String value) {
            addCriterion("green_rate like", value, "greenRate");
            return (Criteria) this;
        }

        public Criteria andGreenRateNotLike(String value) {
            addCriterion("green_rate not like", value, "greenRate");
            return (Criteria) this;
        }

        public Criteria andGreenRateIn(List<String> values) {
            addCriterion("green_rate in", values, "greenRate");
            return (Criteria) this;
        }

        public Criteria andGreenRateNotIn(List<String> values) {
            addCriterion("green_rate not in", values, "greenRate");
            return (Criteria) this;
        }

        public Criteria andGreenRateBetween(String value1, String value2) {
            addCriterion("green_rate between", value1, value2, "greenRate");
            return (Criteria) this;
        }

        public Criteria andGreenRateNotBetween(String value1, String value2) {
            addCriterion("green_rate not between", value1, value2, "greenRate");
            return (Criteria) this;
        }

        public Criteria andLdlIsNull() {
            addCriterion("ldl is null");
            return (Criteria) this;
        }

        public Criteria andLdlIsNotNull() {
            addCriterion("ldl is not null");
            return (Criteria) this;
        }

        public Criteria andLdlEqualTo(BigDecimal value) {
            addCriterion("ldl =", value, "ldl");
            return (Criteria) this;
        }

        public Criteria andLdlNotEqualTo(BigDecimal value) {
            addCriterion("ldl <>", value, "ldl");
            return (Criteria) this;
        }

        public Criteria andLdlGreaterThan(BigDecimal value) {
            addCriterion("ldl >", value, "ldl");
            return (Criteria) this;
        }

        public Criteria andLdlGreaterThanOrEqualTo(BigDecimal value) {
            addCriterion("ldl >=", value, "ldl");
            return (Criteria) this;
        }

        public Criteria andLdlLessThan(BigDecimal value) {
            addCriterion("ldl <", value, "ldl");
            return (Criteria) this;
        }

        public Criteria andLdlLessThanOrEqualTo(BigDecimal value) {
            addCriterion("ldl <=", value, "ldl");
            return (Criteria) this;
        }

        public Criteria andLdlIn(List<BigDecimal> values) {
            addCriterion("ldl in", values, "ldl");
            return (Criteria) this;
        }

        public Criteria andLdlNotIn(List<BigDecimal> values) {
            addCriterion("ldl not in", values, "ldl");
            return (Criteria) this;
        }

        public Criteria andLdlBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("ldl between", value1, value2, "ldl");
            return (Criteria) this;
        }

        public Criteria andLdlNotBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("ldl not between", value1, value2, "ldl");
            return (Criteria) this;
        }

        public Criteria andLhfgIsNull() {
            addCriterion("lhfg is null");
            return (Criteria) this;
        }

        public Criteria andLhfgIsNotNull() {
            addCriterion("lhfg is not null");
            return (Criteria) this;
        }

        public Criteria andLhfgEqualTo(BigDecimal value) {
            addCriterion("lhfg =", value, "lhfg");
            return (Criteria) this;
        }

        public Criteria andLhfgNotEqualTo(BigDecimal value) {
            addCriterion("lhfg <>", value, "lhfg");
            return (Criteria) this;
        }

        public Criteria andLhfgGreaterThan(BigDecimal value) {
            addCriterion("lhfg >", value, "lhfg");
            return (Criteria) this;
        }

        public Criteria andLhfgGreaterThanOrEqualTo(BigDecimal value) {
            addCriterion("lhfg >=", value, "lhfg");
            return (Criteria) this;
        }

        public Criteria andLhfgLessThan(BigDecimal value) {
            addCriterion("lhfg <", value, "lhfg");
            return (Criteria) this;
        }

        public Criteria andLhfgLessThanOrEqualTo(BigDecimal value) {
            addCriterion("lhfg <=", value, "lhfg");
            return (Criteria) this;
        }

        public Criteria andLhfgIn(List<BigDecimal> values) {
            addCriterion("lhfg in", values, "lhfg");
            return (Criteria) this;
        }

        public Criteria andLhfgNotIn(List<BigDecimal> values) {
            addCriterion("lhfg not in", values, "lhfg");
            return (Criteria) this;
        }

        public Criteria andLhfgBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("lhfg between", value1, value2, "lhfg");
            return (Criteria) this;
        }

        public Criteria andLhfgNotBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("lhfg not between", value1, value2, "lhfg");
            return (Criteria) this;
        }

        public Criteria andOrigFidIsNull() {
            addCriterion("orig_fid is null");
            return (Criteria) this;
        }

        public Criteria andOrigFidIsNotNull() {
            addCriterion("orig_fid is not null");
            return (Criteria) this;
        }

        public Criteria andOrigFidEqualTo(Integer value) {
            addCriterion("orig_fid =", value, "origFid");
            return (Criteria) this;
        }

        public Criteria andOrigFidNotEqualTo(Integer value) {
            addCriterion("orig_fid <>", value, "origFid");
            return (Criteria) this;
        }

        public Criteria andOrigFidGreaterThan(Integer value) {
            addCriterion("orig_fid >", value, "origFid");
            return (Criteria) this;
        }

        public Criteria andOrigFidGreaterThanOrEqualTo(Integer value) {
            addCriterion("orig_fid >=", value, "origFid");
            return (Criteria) this;
        }

        public Criteria andOrigFidLessThan(Integer value) {
            addCriterion("orig_fid <", value, "origFid");
            return (Criteria) this;
        }

        public Criteria andOrigFidLessThanOrEqualTo(Integer value) {
            addCriterion("orig_fid <=", value, "origFid");
            return (Criteria) this;
        }

        public Criteria andOrigFidIn(List<Integer> values) {
            addCriterion("orig_fid in", values, "origFid");
            return (Criteria) this;
        }

        public Criteria andOrigFidNotIn(List<Integer> values) {
            addCriterion("orig_fid not in", values, "origFid");
            return (Criteria) this;
        }

        public Criteria andOrigFidBetween(Integer value1, Integer value2) {
            addCriterion("orig_fid between", value1, value2, "origFid");
            return (Criteria) this;
        }

        public Criteria andOrigFidNotBetween(Integer value1, Integer value2) {
            addCriterion("orig_fid not between", value1, value2, "origFid");
            return (Criteria) this;
        }

        public Criteria andGeomIsNull() {
            addCriterion("geom is null");
            return (Criteria) this;
        }

        public Criteria andGeomIsNotNull() {
            addCriterion("geom is not null");
            return (Criteria) this;
        }

        public Criteria andGeomEqualTo(Object value) {
            addCriterion("geom =", value, "geom");
            return (Criteria) this;
        }

        public Criteria andGeomNotEqualTo(Object value) {
            addCriterion("geom <>", value, "geom");
            return (Criteria) this;
        }

        public Criteria andGeomGreaterThan(Object value) {
            addCriterion("geom >", value, "geom");
            return (Criteria) this;
        }

        public Criteria andGeomGreaterThanOrEqualTo(Object value) {
            addCriterion("geom >=", value, "geom");
            return (Criteria) this;
        }

        public Criteria andGeomLessThan(Object value) {
            addCriterion("geom <", value, "geom");
            return (Criteria) this;
        }

        public Criteria andGeomLessThanOrEqualTo(Object value) {
            addCriterion("geom <=", value, "geom");
            return (Criteria) this;
        }

        public Criteria andGeomIn(List<Object> values) {
            addCriterion("geom in", values, "geom");
            return (Criteria) this;
        }

        public Criteria andGeomNotIn(List<Object> values) {
            addCriterion("geom not in", values, "geom");
            return (Criteria) this;
        }

        public Criteria andGeomBetween(Object value1, Object value2) {
            addCriterion("geom between", value1, value2, "geom");
            return (Criteria) this;
        }

        public Criteria andGeomNotBetween(Object value1, Object value2) {
            addCriterion("geom not between", value1, value2, "geom");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}