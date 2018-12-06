package com.lc.web.resource.entity;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class bj_jdpExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public bj_jdpExample() {
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

        public Criteria andLvdirIsNull() {
            addCriterion("lvdir is null");
            return (Criteria) this;
        }

        public Criteria andLvdirIsNotNull() {
            addCriterion("lvdir is not null");
            return (Criteria) this;
        }

        public Criteria andLvdirEqualTo(BigDecimal value) {
            addCriterion("lvdir =", value, "lvdir");
            return (Criteria) this;
        }

        public Criteria andLvdirNotEqualTo(BigDecimal value) {
            addCriterion("lvdir <>", value, "lvdir");
            return (Criteria) this;
        }

        public Criteria andLvdirGreaterThan(BigDecimal value) {
            addCriterion("lvdir >", value, "lvdir");
            return (Criteria) this;
        }

        public Criteria andLvdirGreaterThanOrEqualTo(BigDecimal value) {
            addCriterion("lvdir >=", value, "lvdir");
            return (Criteria) this;
        }

        public Criteria andLvdirLessThan(BigDecimal value) {
            addCriterion("lvdir <", value, "lvdir");
            return (Criteria) this;
        }

        public Criteria andLvdirLessThanOrEqualTo(BigDecimal value) {
            addCriterion("lvdir <=", value, "lvdir");
            return (Criteria) this;
        }

        public Criteria andLvdirIn(List<BigDecimal> values) {
            addCriterion("lvdir in", values, "lvdir");
            return (Criteria) this;
        }

        public Criteria andLvdirNotIn(List<BigDecimal> values) {
            addCriterion("lvdir not in", values, "lvdir");
            return (Criteria) this;
        }

        public Criteria andLvdirBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("lvdir between", value1, value2, "lvdir");
            return (Criteria) this;
        }

        public Criteria andLvdirNotBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("lvdir not between", value1, value2, "lvdir");
            return (Criteria) this;
        }

        public Criteria andFugairIsNull() {
            addCriterion("fugair is null");
            return (Criteria) this;
        }

        public Criteria andFugairIsNotNull() {
            addCriterion("fugair is not null");
            return (Criteria) this;
        }

        public Criteria andFugairEqualTo(BigDecimal value) {
            addCriterion("fugair =", value, "fugair");
            return (Criteria) this;
        }

        public Criteria andFugairNotEqualTo(BigDecimal value) {
            addCriterion("fugair <>", value, "fugair");
            return (Criteria) this;
        }

        public Criteria andFugairGreaterThan(BigDecimal value) {
            addCriterion("fugair >", value, "fugair");
            return (Criteria) this;
        }

        public Criteria andFugairGreaterThanOrEqualTo(BigDecimal value) {
            addCriterion("fugair >=", value, "fugair");
            return (Criteria) this;
        }

        public Criteria andFugairLessThan(BigDecimal value) {
            addCriterion("fugair <", value, "fugair");
            return (Criteria) this;
        }

        public Criteria andFugairLessThanOrEqualTo(BigDecimal value) {
            addCriterion("fugair <=", value, "fugair");
            return (Criteria) this;
        }

        public Criteria andFugairIn(List<BigDecimal> values) {
            addCriterion("fugair in", values, "fugair");
            return (Criteria) this;
        }

        public Criteria andFugairNotIn(List<BigDecimal> values) {
            addCriterion("fugair not in", values, "fugair");
            return (Criteria) this;
        }

        public Criteria andFugairBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("fugair between", value1, value2, "fugair");
            return (Criteria) this;
        }

        public Criteria andFugairNotBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("fugair not between", value1, value2, "fugair");
            return (Criteria) this;
        }

        public Criteria andStreetnameIsNull() {
            addCriterion("streetname is null");
            return (Criteria) this;
        }

        public Criteria andStreetnameIsNotNull() {
            addCriterion("streetname is not null");
            return (Criteria) this;
        }

        public Criteria andStreetnameEqualTo(String value) {
            addCriterion("streetname =", value, "streetname");
            return (Criteria) this;
        }

        public Criteria andStreetnameNotEqualTo(String value) {
            addCriterion("streetname <>", value, "streetname");
            return (Criteria) this;
        }

        public Criteria andStreetnameGreaterThan(String value) {
            addCriterion("streetname >", value, "streetname");
            return (Criteria) this;
        }

        public Criteria andStreetnameGreaterThanOrEqualTo(String value) {
            addCriterion("streetname >=", value, "streetname");
            return (Criteria) this;
        }

        public Criteria andStreetnameLessThan(String value) {
            addCriterion("streetname <", value, "streetname");
            return (Criteria) this;
        }

        public Criteria andStreetnameLessThanOrEqualTo(String value) {
            addCriterion("streetname <=", value, "streetname");
            return (Criteria) this;
        }

        public Criteria andStreetnameLike(String value) {
            addCriterion("streetname like", value, "streetname");
            return (Criteria) this;
        }

        public Criteria andStreetnameNotLike(String value) {
            addCriterion("streetname not like", value, "streetname");
            return (Criteria) this;
        }

        public Criteria andStreetnameIn(List<String> values) {
            addCriterion("streetname in", values, "streetname");
            return (Criteria) this;
        }

        public Criteria andStreetnameNotIn(List<String> values) {
            addCriterion("streetname not in", values, "streetname");
            return (Criteria) this;
        }

        public Criteria andStreetnameBetween(String value1, String value2) {
            addCriterion("streetname between", value1, value2, "streetname");
            return (Criteria) this;
        }

        public Criteria andStreetnameNotBetween(String value1, String value2) {
            addCriterion("streetname not between", value1, value2, "streetname");
            return (Criteria) this;
        }

        public Criteria andLvdiIsNull() {
            addCriterion("lvdi is null");
            return (Criteria) this;
        }

        public Criteria andLvdiIsNotNull() {
            addCriterion("lvdi is not null");
            return (Criteria) this;
        }

        public Criteria andLvdiEqualTo(BigDecimal value) {
            addCriterion("lvdi =", value, "lvdi");
            return (Criteria) this;
        }

        public Criteria andLvdiNotEqualTo(BigDecimal value) {
            addCriterion("lvdi <>", value, "lvdi");
            return (Criteria) this;
        }

        public Criteria andLvdiGreaterThan(BigDecimal value) {
            addCriterion("lvdi >", value, "lvdi");
            return (Criteria) this;
        }

        public Criteria andLvdiGreaterThanOrEqualTo(BigDecimal value) {
            addCriterion("lvdi >=", value, "lvdi");
            return (Criteria) this;
        }

        public Criteria andLvdiLessThan(BigDecimal value) {
            addCriterion("lvdi <", value, "lvdi");
            return (Criteria) this;
        }

        public Criteria andLvdiLessThanOrEqualTo(BigDecimal value) {
            addCriterion("lvdi <=", value, "lvdi");
            return (Criteria) this;
        }

        public Criteria andLvdiIn(List<BigDecimal> values) {
            addCriterion("lvdi in", values, "lvdi");
            return (Criteria) this;
        }

        public Criteria andLvdiNotIn(List<BigDecimal> values) {
            addCriterion("lvdi not in", values, "lvdi");
            return (Criteria) this;
        }

        public Criteria andLvdiBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("lvdi between", value1, value2, "lvdi");
            return (Criteria) this;
        }

        public Criteria andLvdiNotBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("lvdi not between", value1, value2, "lvdi");
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