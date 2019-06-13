package com.lc.web.resource.entity;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class bj_tb_volpExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public bj_tb_volpExample() {
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

        public Criteria andGreenIdIsNull() {
            addCriterion("green_id is null");
            return (Criteria) this;
        }

        public Criteria andGreenIdIsNotNull() {
            addCriterion("green_id is not null");
            return (Criteria) this;
        }

        public Criteria andGreenIdEqualTo(String value) {
            addCriterion("green_id =", value, "greenId");
            return (Criteria) this;
        }

        public Criteria andGreenIdNotEqualTo(String value) {
            addCriterion("green_id <>", value, "greenId");
            return (Criteria) this;
        }

        public Criteria andGreenIdGreaterThan(String value) {
            addCriterion("green_id >", value, "greenId");
            return (Criteria) this;
        }

        public Criteria andGreenIdGreaterThanOrEqualTo(String value) {
            addCriterion("green_id >=", value, "greenId");
            return (Criteria) this;
        }

        public Criteria andGreenIdLessThan(String value) {
            addCriterion("green_id <", value, "greenId");
            return (Criteria) this;
        }

        public Criteria andGreenIdLessThanOrEqualTo(String value) {
            addCriterion("green_id <=", value, "greenId");
            return (Criteria) this;
        }

        public Criteria andGreenIdLike(String value) {
            addCriterion("green_id like", value, "greenId");
            return (Criteria) this;
        }

        public Criteria andGreenIdNotLike(String value) {
            addCriterion("green_id not like", value, "greenId");
            return (Criteria) this;
        }

        public Criteria andGreenIdIn(List<String> values) {
            addCriterion("green_id in", values, "greenId");
            return (Criteria) this;
        }

        public Criteria andGreenIdNotIn(List<String> values) {
            addCriterion("green_id not in", values, "greenId");
            return (Criteria) this;
        }

        public Criteria andGreenIdBetween(String value1, String value2) {
            addCriterion("green_id between", value1, value2, "greenId");
            return (Criteria) this;
        }

        public Criteria andGreenIdNotBetween(String value1, String value2) {
            addCriterion("green_id not between", value1, value2, "greenId");
            return (Criteria) this;
        }

        public Criteria andMapAreaIsNull() {
            addCriterion("map_area is null");
            return (Criteria) this;
        }

        public Criteria andMapAreaIsNotNull() {
            addCriterion("map_area is not null");
            return (Criteria) this;
        }

        public Criteria andMapAreaEqualTo(BigDecimal value) {
            addCriterion("map_area =", value, "mapArea");
            return (Criteria) this;
        }

        public Criteria andMapAreaNotEqualTo(BigDecimal value) {
            addCriterion("map_area <>", value, "mapArea");
            return (Criteria) this;
        }

        public Criteria andMapAreaGreaterThan(BigDecimal value) {
            addCriterion("map_area >", value, "mapArea");
            return (Criteria) this;
        }

        public Criteria andMapAreaGreaterThanOrEqualTo(BigDecimal value) {
            addCriterion("map_area >=", value, "mapArea");
            return (Criteria) this;
        }

        public Criteria andMapAreaLessThan(BigDecimal value) {
            addCriterion("map_area <", value, "mapArea");
            return (Criteria) this;
        }

        public Criteria andMapAreaLessThanOrEqualTo(BigDecimal value) {
            addCriterion("map_area <=", value, "mapArea");
            return (Criteria) this;
        }

        public Criteria andMapAreaIn(List<BigDecimal> values) {
            addCriterion("map_area in", values, "mapArea");
            return (Criteria) this;
        }

        public Criteria andMapAreaNotIn(List<BigDecimal> values) {
            addCriterion("map_area not in", values, "mapArea");
            return (Criteria) this;
        }

        public Criteria andMapAreaBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("map_area between", value1, value2, "mapArea");
            return (Criteria) this;
        }

        public Criteria andMapAreaNotBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("map_area not between", value1, value2, "mapArea");
            return (Criteria) this;
        }

        public Criteria andGreentypeIsNull() {
            addCriterion("greentype is null");
            return (Criteria) this;
        }

        public Criteria andGreentypeIsNotNull() {
            addCriterion("greentype is not null");
            return (Criteria) this;
        }

        public Criteria andGreentypeEqualTo(String value) {
            addCriterion("greentype =", value, "greentype");
            return (Criteria) this;
        }

        public Criteria andGreentypeNotEqualTo(String value) {
            addCriterion("greentype <>", value, "greentype");
            return (Criteria) this;
        }

        public Criteria andGreentypeGreaterThan(String value) {
            addCriterion("greentype >", value, "greentype");
            return (Criteria) this;
        }

        public Criteria andGreentypeGreaterThanOrEqualTo(String value) {
            addCriterion("greentype >=", value, "greentype");
            return (Criteria) this;
        }

        public Criteria andGreentypeLessThan(String value) {
            addCriterion("greentype <", value, "greentype");
            return (Criteria) this;
        }

        public Criteria andGreentypeLessThanOrEqualTo(String value) {
            addCriterion("greentype <=", value, "greentype");
            return (Criteria) this;
        }

        public Criteria andGreentypeLike(String value) {
            addCriterion("greentype like", value, "greentype");
            return (Criteria) this;
        }

        public Criteria andGreentypeNotLike(String value) {
            addCriterion("greentype not like", value, "greentype");
            return (Criteria) this;
        }

        public Criteria andGreentypeIn(List<String> values) {
            addCriterion("greentype in", values, "greentype");
            return (Criteria) this;
        }

        public Criteria andGreentypeNotIn(List<String> values) {
            addCriterion("greentype not in", values, "greentype");
            return (Criteria) this;
        }

        public Criteria andGreentypeBetween(String value1, String value2) {
            addCriterion("greentype between", value1, value2, "greentype");
            return (Criteria) this;
        }

        public Criteria andGreentypeNotBetween(String value1, String value2) {
            addCriterion("greentype not between", value1, value2, "greentype");
            return (Criteria) this;
        }

        public Criteria andSumLvdiIsNull() {
            addCriterion("sum_lvdi is null");
            return (Criteria) this;
        }

        public Criteria andSumLvdiIsNotNull() {
            addCriterion("sum_lvdi is not null");
            return (Criteria) this;
        }

        public Criteria andSumLvdiEqualTo(BigDecimal value) {
            addCriterion("sum_lvdi =", value, "sumLvdi");
            return (Criteria) this;
        }

        public Criteria andSumLvdiNotEqualTo(BigDecimal value) {
            addCriterion("sum_lvdi <>", value, "sumLvdi");
            return (Criteria) this;
        }

        public Criteria andSumLvdiGreaterThan(BigDecimal value) {
            addCriterion("sum_lvdi >", value, "sumLvdi");
            return (Criteria) this;
        }

        public Criteria andSumLvdiGreaterThanOrEqualTo(BigDecimal value) {
            addCriterion("sum_lvdi >=", value, "sumLvdi");
            return (Criteria) this;
        }

        public Criteria andSumLvdiLessThan(BigDecimal value) {
            addCriterion("sum_lvdi <", value, "sumLvdi");
            return (Criteria) this;
        }

        public Criteria andSumLvdiLessThanOrEqualTo(BigDecimal value) {
            addCriterion("sum_lvdi <=", value, "sumLvdi");
            return (Criteria) this;
        }

        public Criteria andSumLvdiIn(List<BigDecimal> values) {
            addCriterion("sum_lvdi in", values, "sumLvdi");
            return (Criteria) this;
        }

        public Criteria andSumLvdiNotIn(List<BigDecimal> values) {
            addCriterion("sum_lvdi not in", values, "sumLvdi");
            return (Criteria) this;
        }

        public Criteria andSumLvdiBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("sum_lvdi between", value1, value2, "sumLvdi");
            return (Criteria) this;
        }

        public Criteria andSumLvdiNotBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("sum_lvdi not between", value1, value2, "sumLvdi");
            return (Criteria) this;
        }

        public Criteria andSumlhfIsNull() {
            addCriterion("sumlhf is null");
            return (Criteria) this;
        }

        public Criteria andSumlhfIsNotNull() {
            addCriterion("sumlhf is not null");
            return (Criteria) this;
        }

        public Criteria andSumlhfEqualTo(BigDecimal value) {
            addCriterion("sumlhf =", value, "sumlhf");
            return (Criteria) this;
        }

        public Criteria andSumlhfNotEqualTo(BigDecimal value) {
            addCriterion("sumlhf <>", value, "sumlhf");
            return (Criteria) this;
        }

        public Criteria andSumlhfGreaterThan(BigDecimal value) {
            addCriterion("sumlhf >", value, "sumlhf");
            return (Criteria) this;
        }

        public Criteria andSumlhfGreaterThanOrEqualTo(BigDecimal value) {
            addCriterion("sumlhf >=", value, "sumlhf");
            return (Criteria) this;
        }

        public Criteria andSumlhfLessThan(BigDecimal value) {
            addCriterion("sumlhf <", value, "sumlhf");
            return (Criteria) this;
        }

        public Criteria andSumlhfLessThanOrEqualTo(BigDecimal value) {
            addCriterion("sumlhf <=", value, "sumlhf");
            return (Criteria) this;
        }

        public Criteria andSumlhfIn(List<BigDecimal> values) {
            addCriterion("sumlhf in", values, "sumlhf");
            return (Criteria) this;
        }

        public Criteria andSumlhfNotIn(List<BigDecimal> values) {
            addCriterion("sumlhf not in", values, "sumlhf");
            return (Criteria) this;
        }

        public Criteria andSumlhfBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("sumlhf between", value1, value2, "sumlhf");
            return (Criteria) this;
        }

        public Criteria andSumlhfNotBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("sumlhf not between", value1, value2, "sumlhf");
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