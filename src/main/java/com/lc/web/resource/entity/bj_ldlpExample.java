package com.lc.web.resource.entity;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class bj_ldlpExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public bj_ldlpExample() {
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

        public Criteria andGreenareaIsNull() {
            addCriterion("greenarea is null");
            return (Criteria) this;
        }

        public Criteria andGreenareaIsNotNull() {
            addCriterion("greenarea is not null");
            return (Criteria) this;
        }

        public Criteria andGreenareaEqualTo(Double value) {
            addCriterion("greenarea =", value, "greenarea");
            return (Criteria) this;
        }

        public Criteria andGreenareaNotEqualTo(Double value) {
            addCriterion("greenarea <>", value, "greenarea");
            return (Criteria) this;
        }

        public Criteria andGreenareaGreaterThan(Double value) {
            addCriterion("greenarea >", value, "greenarea");
            return (Criteria) this;
        }

        public Criteria andGreenareaGreaterThanOrEqualTo(Double value) {
            addCriterion("greenarea >=", value, "greenarea");
            return (Criteria) this;
        }

        public Criteria andGreenareaLessThan(Double value) {
            addCriterion("greenarea <", value, "greenarea");
            return (Criteria) this;
        }

        public Criteria andGreenareaLessThanOrEqualTo(Double value) {
            addCriterion("greenarea <=", value, "greenarea");
            return (Criteria) this;
        }

        public Criteria andGreenareaIn(List<Double> values) {
            addCriterion("greenarea in", values, "greenarea");
            return (Criteria) this;
        }

        public Criteria andGreenareaNotIn(List<Double> values) {
            addCriterion("greenarea not in", values, "greenarea");
            return (Criteria) this;
        }

        public Criteria andGreenareaBetween(Double value1, Double value2) {
            addCriterion("greenarea between", value1, value2, "greenarea");
            return (Criteria) this;
        }

        public Criteria andGreenareaNotBetween(Double value1, Double value2) {
            addCriterion("greenarea not between", value1, value2, "greenarea");
            return (Criteria) this;
        }

        public Criteria andGreentrateIsNull() {
            addCriterion("greentrate is null");
            return (Criteria) this;
        }

        public Criteria andGreentrateIsNotNull() {
            addCriterion("greentrate is not null");
            return (Criteria) this;
        }

        public Criteria andGreentrateEqualTo(BigDecimal value) {
            addCriterion("greentrate =", value, "greentrate");
            return (Criteria) this;
        }

        public Criteria andGreentrateNotEqualTo(BigDecimal value) {
            addCriterion("greentrate <>", value, "greentrate");
            return (Criteria) this;
        }

        public Criteria andGreentrateGreaterThan(BigDecimal value) {
            addCriterion("greentrate >", value, "greentrate");
            return (Criteria) this;
        }

        public Criteria andGreentrateGreaterThanOrEqualTo(BigDecimal value) {
            addCriterion("greentrate >=", value, "greentrate");
            return (Criteria) this;
        }

        public Criteria andGreentrateLessThan(BigDecimal value) {
            addCriterion("greentrate <", value, "greentrate");
            return (Criteria) this;
        }

        public Criteria andGreentrateLessThanOrEqualTo(BigDecimal value) {
            addCriterion("greentrate <=", value, "greentrate");
            return (Criteria) this;
        }

        public Criteria andGreentrateIn(List<BigDecimal> values) {
            addCriterion("greentrate in", values, "greentrate");
            return (Criteria) this;
        }

        public Criteria andGreentrateNotIn(List<BigDecimal> values) {
            addCriterion("greentrate not in", values, "greentrate");
            return (Criteria) this;
        }

        public Criteria andGreentrateBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("greentrate between", value1, value2, "greentrate");
            return (Criteria) this;
        }

        public Criteria andGreentrateNotBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("greentrate not between", value1, value2, "greentrate");
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