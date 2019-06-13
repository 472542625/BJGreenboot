package com.lc.web.resource.entity;

import java.util.ArrayList;
import java.util.List;

public class bj_tb_volp_plantExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public bj_tb_volp_plantExample() {
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

        public Criteria andPlantIsNull() {
            addCriterion("plant is null");
            return (Criteria) this;
        }

        public Criteria andPlantIsNotNull() {
            addCriterion("plant is not null");
            return (Criteria) this;
        }

        public Criteria andPlantEqualTo(Integer value) {
            addCriterion("plant =", value, "plant");
            return (Criteria) this;
        }

        public Criteria andPlantNotEqualTo(Integer value) {
            addCriterion("plant <>", value, "plant");
            return (Criteria) this;
        }

        public Criteria andPlantGreaterThan(Integer value) {
            addCriterion("plant >", value, "plant");
            return (Criteria) this;
        }

        public Criteria andPlantGreaterThanOrEqualTo(Integer value) {
            addCriterion("plant >=", value, "plant");
            return (Criteria) this;
        }

        public Criteria andPlantLessThan(Integer value) {
            addCriterion("plant <", value, "plant");
            return (Criteria) this;
        }

        public Criteria andPlantLessThanOrEqualTo(Integer value) {
            addCriterion("plant <=", value, "plant");
            return (Criteria) this;
        }

        public Criteria andPlantIn(List<Integer> values) {
            addCriterion("plant in", values, "plant");
            return (Criteria) this;
        }

        public Criteria andPlantNotIn(List<Integer> values) {
            addCriterion("plant not in", values, "plant");
            return (Criteria) this;
        }

        public Criteria andPlantBetween(Integer value1, Integer value2) {
            addCriterion("plant between", value1, value2, "plant");
            return (Criteria) this;
        }

        public Criteria andPlantNotBetween(Integer value1, Integer value2) {
            addCriterion("plant not between", value1, value2, "plant");
            return (Criteria) this;
        }

        public Criteria andPlantnameIsNull() {
            addCriterion("plantname is null");
            return (Criteria) this;
        }

        public Criteria andPlantnameIsNotNull() {
            addCriterion("plantname is not null");
            return (Criteria) this;
        }

        public Criteria andPlantnameEqualTo(String value) {
            addCriterion("plantname =", value, "plantname");
            return (Criteria) this;
        }

        public Criteria andPlantnameNotEqualTo(String value) {
            addCriterion("plantname <>", value, "plantname");
            return (Criteria) this;
        }

        public Criteria andPlantnameGreaterThan(String value) {
            addCriterion("plantname >", value, "plantname");
            return (Criteria) this;
        }

        public Criteria andPlantnameGreaterThanOrEqualTo(String value) {
            addCriterion("plantname >=", value, "plantname");
            return (Criteria) this;
        }

        public Criteria andPlantnameLessThan(String value) {
            addCriterion("plantname <", value, "plantname");
            return (Criteria) this;
        }

        public Criteria andPlantnameLessThanOrEqualTo(String value) {
            addCriterion("plantname <=", value, "plantname");
            return (Criteria) this;
        }

        public Criteria andPlantnameLike(String value) {
            addCriterion("plantname like", value, "plantname");
            return (Criteria) this;
        }

        public Criteria andPlantnameNotLike(String value) {
            addCriterion("plantname not like", value, "plantname");
            return (Criteria) this;
        }

        public Criteria andPlantnameIn(List<String> values) {
            addCriterion("plantname in", values, "plantname");
            return (Criteria) this;
        }

        public Criteria andPlantnameNotIn(List<String> values) {
            addCriterion("plantname not in", values, "plantname");
            return (Criteria) this;
        }

        public Criteria andPlantnameBetween(String value1, String value2) {
            addCriterion("plantname between", value1, value2, "plantname");
            return (Criteria) this;
        }

        public Criteria andPlantnameNotBetween(String value1, String value2) {
            addCriterion("plantname not between", value1, value2, "plantname");
            return (Criteria) this;
        }

        public Criteria andPlanttypeIsNull() {
            addCriterion("planttype is null");
            return (Criteria) this;
        }

        public Criteria andPlanttypeIsNotNull() {
            addCriterion("planttype is not null");
            return (Criteria) this;
        }

        public Criteria andPlanttypeEqualTo(String value) {
            addCriterion("planttype =", value, "planttype");
            return (Criteria) this;
        }

        public Criteria andPlanttypeNotEqualTo(String value) {
            addCriterion("planttype <>", value, "planttype");
            return (Criteria) this;
        }

        public Criteria andPlanttypeGreaterThan(String value) {
            addCriterion("planttype >", value, "planttype");
            return (Criteria) this;
        }

        public Criteria andPlanttypeGreaterThanOrEqualTo(String value) {
            addCriterion("planttype >=", value, "planttype");
            return (Criteria) this;
        }

        public Criteria andPlanttypeLessThan(String value) {
            addCriterion("planttype <", value, "planttype");
            return (Criteria) this;
        }

        public Criteria andPlanttypeLessThanOrEqualTo(String value) {
            addCriterion("planttype <=", value, "planttype");
            return (Criteria) this;
        }

        public Criteria andPlanttypeLike(String value) {
            addCriterion("planttype like", value, "planttype");
            return (Criteria) this;
        }

        public Criteria andPlanttypeNotLike(String value) {
            addCriterion("planttype not like", value, "planttype");
            return (Criteria) this;
        }

        public Criteria andPlanttypeIn(List<String> values) {
            addCriterion("planttype in", values, "planttype");
            return (Criteria) this;
        }

        public Criteria andPlanttypeNotIn(List<String> values) {
            addCriterion("planttype not in", values, "planttype");
            return (Criteria) this;
        }

        public Criteria andPlanttypeBetween(String value1, String value2) {
            addCriterion("planttype between", value1, value2, "planttype");
            return (Criteria) this;
        }

        public Criteria andPlanttypeNotBetween(String value1, String value2) {
            addCriterion("planttype not between", value1, value2, "planttype");
            return (Criteria) this;
        }

        public Criteria andPlantArIsNull() {
            addCriterion("plant_ar is null");
            return (Criteria) this;
        }

        public Criteria andPlantArIsNotNull() {
            addCriterion("plant_ar is not null");
            return (Criteria) this;
        }

        public Criteria andPlantArEqualTo(String value) {
            addCriterion("plant_ar =", value, "plantAr");
            return (Criteria) this;
        }

        public Criteria andPlantArNotEqualTo(String value) {
            addCriterion("plant_ar <>", value, "plantAr");
            return (Criteria) this;
        }

        public Criteria andPlantArGreaterThan(String value) {
            addCriterion("plant_ar >", value, "plantAr");
            return (Criteria) this;
        }

        public Criteria andPlantArGreaterThanOrEqualTo(String value) {
            addCriterion("plant_ar >=", value, "plantAr");
            return (Criteria) this;
        }

        public Criteria andPlantArLessThan(String value) {
            addCriterion("plant_ar <", value, "plantAr");
            return (Criteria) this;
        }

        public Criteria andPlantArLessThanOrEqualTo(String value) {
            addCriterion("plant_ar <=", value, "plantAr");
            return (Criteria) this;
        }

        public Criteria andPlantArLike(String value) {
            addCriterion("plant_ar like", value, "plantAr");
            return (Criteria) this;
        }

        public Criteria andPlantArNotLike(String value) {
            addCriterion("plant_ar not like", value, "plantAr");
            return (Criteria) this;
        }

        public Criteria andPlantArIn(List<String> values) {
            addCriterion("plant_ar in", values, "plantAr");
            return (Criteria) this;
        }

        public Criteria andPlantArNotIn(List<String> values) {
            addCriterion("plant_ar not in", values, "plantAr");
            return (Criteria) this;
        }

        public Criteria andPlantArBetween(String value1, String value2) {
            addCriterion("plant_ar between", value1, value2, "plantAr");
            return (Criteria) this;
        }

        public Criteria andPlantArNotBetween(String value1, String value2) {
            addCriterion("plant_ar not between", value1, value2, "plantAr");
            return (Criteria) this;
        }

        public Criteria andPlantNumIsNull() {
            addCriterion("plant_num is null");
            return (Criteria) this;
        }

        public Criteria andPlantNumIsNotNull() {
            addCriterion("plant_num is not null");
            return (Criteria) this;
        }

        public Criteria andPlantNumEqualTo(Integer value) {
            addCriterion("plant_num =", value, "plantNum");
            return (Criteria) this;
        }

        public Criteria andPlantNumNotEqualTo(Integer value) {
            addCriterion("plant_num <>", value, "plantNum");
            return (Criteria) this;
        }

        public Criteria andPlantNumGreaterThan(Integer value) {
            addCriterion("plant_num >", value, "plantNum");
            return (Criteria) this;
        }

        public Criteria andPlantNumGreaterThanOrEqualTo(Integer value) {
            addCriterion("plant_num >=", value, "plantNum");
            return (Criteria) this;
        }

        public Criteria andPlantNumLessThan(Integer value) {
            addCriterion("plant_num <", value, "plantNum");
            return (Criteria) this;
        }

        public Criteria andPlantNumLessThanOrEqualTo(Integer value) {
            addCriterion("plant_num <=", value, "plantNum");
            return (Criteria) this;
        }

        public Criteria andPlantNumIn(List<Integer> values) {
            addCriterion("plant_num in", values, "plantNum");
            return (Criteria) this;
        }

        public Criteria andPlantNumNotIn(List<Integer> values) {
            addCriterion("plant_num not in", values, "plantNum");
            return (Criteria) this;
        }

        public Criteria andPlantNumBetween(Integer value1, Integer value2) {
            addCriterion("plant_num between", value1, value2, "plantNum");
            return (Criteria) this;
        }

        public Criteria andPlantNumNotBetween(Integer value1, Integer value2) {
            addCriterion("plant_num not between", value1, value2, "plantNum");
            return (Criteria) this;
        }

        public Criteria andPlantIdIsNull() {
            addCriterion("plant_id is null");
            return (Criteria) this;
        }

        public Criteria andPlantIdIsNotNull() {
            addCriterion("plant_id is not null");
            return (Criteria) this;
        }

        public Criteria andPlantIdEqualTo(Integer value) {
            addCriterion("plant_id =", value, "plantId");
            return (Criteria) this;
        }

        public Criteria andPlantIdNotEqualTo(Integer value) {
            addCriterion("plant_id <>", value, "plantId");
            return (Criteria) this;
        }

        public Criteria andPlantIdGreaterThan(Integer value) {
            addCriterion("plant_id >", value, "plantId");
            return (Criteria) this;
        }

        public Criteria andPlantIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("plant_id >=", value, "plantId");
            return (Criteria) this;
        }

        public Criteria andPlantIdLessThan(Integer value) {
            addCriterion("plant_id <", value, "plantId");
            return (Criteria) this;
        }

        public Criteria andPlantIdLessThanOrEqualTo(Integer value) {
            addCriterion("plant_id <=", value, "plantId");
            return (Criteria) this;
        }

        public Criteria andPlantIdIn(List<Integer> values) {
            addCriterion("plant_id in", values, "plantId");
            return (Criteria) this;
        }

        public Criteria andPlantIdNotIn(List<Integer> values) {
            addCriterion("plant_id not in", values, "plantId");
            return (Criteria) this;
        }

        public Criteria andPlantIdBetween(Integer value1, Integer value2) {
            addCriterion("plant_id between", value1, value2, "plantId");
            return (Criteria) this;
        }

        public Criteria andPlantIdNotBetween(Integer value1, Integer value2) {
            addCriterion("plant_id not between", value1, value2, "plantId");
            return (Criteria) this;
        }

        public Criteria andDbhIsNull() {
            addCriterion("dbh is null");
            return (Criteria) this;
        }

        public Criteria andDbhIsNotNull() {
            addCriterion("dbh is not null");
            return (Criteria) this;
        }

        public Criteria andDbhEqualTo(String value) {
            addCriterion("dbh =", value, "dbh");
            return (Criteria) this;
        }

        public Criteria andDbhNotEqualTo(String value) {
            addCriterion("dbh <>", value, "dbh");
            return (Criteria) this;
        }

        public Criteria andDbhGreaterThan(String value) {
            addCriterion("dbh >", value, "dbh");
            return (Criteria) this;
        }

        public Criteria andDbhGreaterThanOrEqualTo(String value) {
            addCriterion("dbh >=", value, "dbh");
            return (Criteria) this;
        }

        public Criteria andDbhLessThan(String value) {
            addCriterion("dbh <", value, "dbh");
            return (Criteria) this;
        }

        public Criteria andDbhLessThanOrEqualTo(String value) {
            addCriterion("dbh <=", value, "dbh");
            return (Criteria) this;
        }

        public Criteria andDbhLike(String value) {
            addCriterion("dbh like", value, "dbh");
            return (Criteria) this;
        }

        public Criteria andDbhNotLike(String value) {
            addCriterion("dbh not like", value, "dbh");
            return (Criteria) this;
        }

        public Criteria andDbhIn(List<String> values) {
            addCriterion("dbh in", values, "dbh");
            return (Criteria) this;
        }

        public Criteria andDbhNotIn(List<String> values) {
            addCriterion("dbh not in", values, "dbh");
            return (Criteria) this;
        }

        public Criteria andDbhBetween(String value1, String value2) {
            addCriterion("dbh between", value1, value2, "dbh");
            return (Criteria) this;
        }

        public Criteria andDbhNotBetween(String value1, String value2) {
            addCriterion("dbh not between", value1, value2, "dbh");
            return (Criteria) this;
        }

        public Criteria andPlantVolIsNull() {
            addCriterion("plant_vol is null");
            return (Criteria) this;
        }

        public Criteria andPlantVolIsNotNull() {
            addCriterion("plant_vol is not null");
            return (Criteria) this;
        }

        public Criteria andPlantVolEqualTo(String value) {
            addCriterion("plant_vol =", value, "plantVol");
            return (Criteria) this;
        }

        public Criteria andPlantVolNotEqualTo(String value) {
            addCriterion("plant_vol <>", value, "plantVol");
            return (Criteria) this;
        }

        public Criteria andPlantVolGreaterThan(String value) {
            addCriterion("plant_vol >", value, "plantVol");
            return (Criteria) this;
        }

        public Criteria andPlantVolGreaterThanOrEqualTo(String value) {
            addCriterion("plant_vol >=", value, "plantVol");
            return (Criteria) this;
        }

        public Criteria andPlantVolLessThan(String value) {
            addCriterion("plant_vol <", value, "plantVol");
            return (Criteria) this;
        }

        public Criteria andPlantVolLessThanOrEqualTo(String value) {
            addCriterion("plant_vol <=", value, "plantVol");
            return (Criteria) this;
        }

        public Criteria andPlantVolLike(String value) {
            addCriterion("plant_vol like", value, "plantVol");
            return (Criteria) this;
        }

        public Criteria andPlantVolNotLike(String value) {
            addCriterion("plant_vol not like", value, "plantVol");
            return (Criteria) this;
        }

        public Criteria andPlantVolIn(List<String> values) {
            addCriterion("plant_vol in", values, "plantVol");
            return (Criteria) this;
        }

        public Criteria andPlantVolNotIn(List<String> values) {
            addCriterion("plant_vol not in", values, "plantVol");
            return (Criteria) this;
        }

        public Criteria andPlantVolBetween(String value1, String value2) {
            addCriterion("plant_vol between", value1, value2, "plantVol");
            return (Criteria) this;
        }

        public Criteria andPlantVolNotBetween(String value1, String value2) {
            addCriterion("plant_vol not between", value1, value2, "plantVol");
            return (Criteria) this;
        }

        public Criteria andGreenrIdIsNull() {
            addCriterion("greenr_id is null");
            return (Criteria) this;
        }

        public Criteria andGreenrIdIsNotNull() {
            addCriterion("greenr_id is not null");
            return (Criteria) this;
        }

        public Criteria andGreenrIdEqualTo(String value) {
            addCriterion("greenr_id =", value, "greenrId");
            return (Criteria) this;
        }

        public Criteria andGreenrIdNotEqualTo(String value) {
            addCriterion("greenr_id <>", value, "greenrId");
            return (Criteria) this;
        }

        public Criteria andGreenrIdGreaterThan(String value) {
            addCriterion("greenr_id >", value, "greenrId");
            return (Criteria) this;
        }

        public Criteria andGreenrIdGreaterThanOrEqualTo(String value) {
            addCriterion("greenr_id >=", value, "greenrId");
            return (Criteria) this;
        }

        public Criteria andGreenrIdLessThan(String value) {
            addCriterion("greenr_id <", value, "greenrId");
            return (Criteria) this;
        }

        public Criteria andGreenrIdLessThanOrEqualTo(String value) {
            addCriterion("greenr_id <=", value, "greenrId");
            return (Criteria) this;
        }

        public Criteria andGreenrIdLike(String value) {
            addCriterion("greenr_id like", value, "greenrId");
            return (Criteria) this;
        }

        public Criteria andGreenrIdNotLike(String value) {
            addCriterion("greenr_id not like", value, "greenrId");
            return (Criteria) this;
        }

        public Criteria andGreenrIdIn(List<String> values) {
            addCriterion("greenr_id in", values, "greenrId");
            return (Criteria) this;
        }

        public Criteria andGreenrIdNotIn(List<String> values) {
            addCriterion("greenr_id not in", values, "greenrId");
            return (Criteria) this;
        }

        public Criteria andGreenrIdBetween(String value1, String value2) {
            addCriterion("greenr_id between", value1, value2, "greenrId");
            return (Criteria) this;
        }

        public Criteria andGreenrIdNotBetween(String value1, String value2) {
            addCriterion("greenr_id not between", value1, value2, "greenrId");
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