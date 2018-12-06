package com.lc.web.resource.entity;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class bj_ld_roofExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public bj_ld_roofExample() {
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

        public Criteria andStreetIsNull() {
            addCriterion("street is null");
            return (Criteria) this;
        }

        public Criteria andStreetIsNotNull() {
            addCriterion("street is not null");
            return (Criteria) this;
        }

        public Criteria andStreetEqualTo(String value) {
            addCriterion("street =", value, "street");
            return (Criteria) this;
        }

        public Criteria andStreetNotEqualTo(String value) {
            addCriterion("street <>", value, "street");
            return (Criteria) this;
        }

        public Criteria andStreetGreaterThan(String value) {
            addCriterion("street >", value, "street");
            return (Criteria) this;
        }

        public Criteria andStreetGreaterThanOrEqualTo(String value) {
            addCriterion("street >=", value, "street");
            return (Criteria) this;
        }

        public Criteria andStreetLessThan(String value) {
            addCriterion("street <", value, "street");
            return (Criteria) this;
        }

        public Criteria andStreetLessThanOrEqualTo(String value) {
            addCriterion("street <=", value, "street");
            return (Criteria) this;
        }

        public Criteria andStreetLike(String value) {
            addCriterion("street like", value, "street");
            return (Criteria) this;
        }

        public Criteria andStreetNotLike(String value) {
            addCriterion("street not like", value, "street");
            return (Criteria) this;
        }

        public Criteria andStreetIn(List<String> values) {
            addCriterion("street in", values, "street");
            return (Criteria) this;
        }

        public Criteria andStreetNotIn(List<String> values) {
            addCriterion("street not in", values, "street");
            return (Criteria) this;
        }

        public Criteria andStreetBetween(String value1, String value2) {
            addCriterion("street between", value1, value2, "street");
            return (Criteria) this;
        }

        public Criteria andStreetNotBetween(String value1, String value2) {
            addCriterion("street not between", value1, value2, "street");
            return (Criteria) this;
        }

        public Criteria andVillageIsNull() {
            addCriterion("village is null");
            return (Criteria) this;
        }

        public Criteria andVillageIsNotNull() {
            addCriterion("village is not null");
            return (Criteria) this;
        }

        public Criteria andVillageEqualTo(String value) {
            addCriterion("village =", value, "village");
            return (Criteria) this;
        }

        public Criteria andVillageNotEqualTo(String value) {
            addCriterion("village <>", value, "village");
            return (Criteria) this;
        }

        public Criteria andVillageGreaterThan(String value) {
            addCriterion("village >", value, "village");
            return (Criteria) this;
        }

        public Criteria andVillageGreaterThanOrEqualTo(String value) {
            addCriterion("village >=", value, "village");
            return (Criteria) this;
        }

        public Criteria andVillageLessThan(String value) {
            addCriterion("village <", value, "village");
            return (Criteria) this;
        }

        public Criteria andVillageLessThanOrEqualTo(String value) {
            addCriterion("village <=", value, "village");
            return (Criteria) this;
        }

        public Criteria andVillageLike(String value) {
            addCriterion("village like", value, "village");
            return (Criteria) this;
        }

        public Criteria andVillageNotLike(String value) {
            addCriterion("village not like", value, "village");
            return (Criteria) this;
        }

        public Criteria andVillageIn(List<String> values) {
            addCriterion("village in", values, "village");
            return (Criteria) this;
        }

        public Criteria andVillageNotIn(List<String> values) {
            addCriterion("village not in", values, "village");
            return (Criteria) this;
        }

        public Criteria andVillageBetween(String value1, String value2) {
            addCriterion("village between", value1, value2, "village");
            return (Criteria) this;
        }

        public Criteria andVillageNotBetween(String value1, String value2) {
            addCriterion("village not between", value1, value2, "village");
            return (Criteria) this;
        }

        public Criteria andGreenownerIsNull() {
            addCriterion("greenowner is null");
            return (Criteria) this;
        }

        public Criteria andGreenownerIsNotNull() {
            addCriterion("greenowner is not null");
            return (Criteria) this;
        }

        public Criteria andGreenownerEqualTo(String value) {
            addCriterion("greenowner =", value, "greenowner");
            return (Criteria) this;
        }

        public Criteria andGreenownerNotEqualTo(String value) {
            addCriterion("greenowner <>", value, "greenowner");
            return (Criteria) this;
        }

        public Criteria andGreenownerGreaterThan(String value) {
            addCriterion("greenowner >", value, "greenowner");
            return (Criteria) this;
        }

        public Criteria andGreenownerGreaterThanOrEqualTo(String value) {
            addCriterion("greenowner >=", value, "greenowner");
            return (Criteria) this;
        }

        public Criteria andGreenownerLessThan(String value) {
            addCriterion("greenowner <", value, "greenowner");
            return (Criteria) this;
        }

        public Criteria andGreenownerLessThanOrEqualTo(String value) {
            addCriterion("greenowner <=", value, "greenowner");
            return (Criteria) this;
        }

        public Criteria andGreenownerLike(String value) {
            addCriterion("greenowner like", value, "greenowner");
            return (Criteria) this;
        }

        public Criteria andGreenownerNotLike(String value) {
            addCriterion("greenowner not like", value, "greenowner");
            return (Criteria) this;
        }

        public Criteria andGreenownerIn(List<String> values) {
            addCriterion("greenowner in", values, "greenowner");
            return (Criteria) this;
        }

        public Criteria andGreenownerNotIn(List<String> values) {
            addCriterion("greenowner not in", values, "greenowner");
            return (Criteria) this;
        }

        public Criteria andGreenownerBetween(String value1, String value2) {
            addCriterion("greenowner between", value1, value2, "greenowner");
            return (Criteria) this;
        }

        public Criteria andGreenownerNotBetween(String value1, String value2) {
            addCriterion("greenowner not between", value1, value2, "greenowner");
            return (Criteria) this;
        }

        public Criteria andBuildyearIsNull() {
            addCriterion("buildyear is null");
            return (Criteria) this;
        }

        public Criteria andBuildyearIsNotNull() {
            addCriterion("buildyear is not null");
            return (Criteria) this;
        }

        public Criteria andBuildyearEqualTo(String value) {
            addCriterion("buildyear =", value, "buildyear");
            return (Criteria) this;
        }

        public Criteria andBuildyearNotEqualTo(String value) {
            addCriterion("buildyear <>", value, "buildyear");
            return (Criteria) this;
        }

        public Criteria andBuildyearGreaterThan(String value) {
            addCriterion("buildyear >", value, "buildyear");
            return (Criteria) this;
        }

        public Criteria andBuildyearGreaterThanOrEqualTo(String value) {
            addCriterion("buildyear >=", value, "buildyear");
            return (Criteria) this;
        }

        public Criteria andBuildyearLessThan(String value) {
            addCriterion("buildyear <", value, "buildyear");
            return (Criteria) this;
        }

        public Criteria andBuildyearLessThanOrEqualTo(String value) {
            addCriterion("buildyear <=", value, "buildyear");
            return (Criteria) this;
        }

        public Criteria andBuildyearLike(String value) {
            addCriterion("buildyear like", value, "buildyear");
            return (Criteria) this;
        }

        public Criteria andBuildyearNotLike(String value) {
            addCriterion("buildyear not like", value, "buildyear");
            return (Criteria) this;
        }

        public Criteria andBuildyearIn(List<String> values) {
            addCriterion("buildyear in", values, "buildyear");
            return (Criteria) this;
        }

        public Criteria andBuildyearNotIn(List<String> values) {
            addCriterion("buildyear not in", values, "buildyear");
            return (Criteria) this;
        }

        public Criteria andBuildyearBetween(String value1, String value2) {
            addCriterion("buildyear between", value1, value2, "buildyear");
            return (Criteria) this;
        }

        public Criteria andBuildyearNotBetween(String value1, String value2) {
            addCriterion("buildyear not between", value1, value2, "buildyear");
            return (Criteria) this;
        }

        public Criteria andPropertyIsNull() {
            addCriterion("property is null");
            return (Criteria) this;
        }

        public Criteria andPropertyIsNotNull() {
            addCriterion("property is not null");
            return (Criteria) this;
        }

        public Criteria andPropertyEqualTo(String value) {
            addCriterion("property =", value, "property");
            return (Criteria) this;
        }

        public Criteria andPropertyNotEqualTo(String value) {
            addCriterion("property <>", value, "property");
            return (Criteria) this;
        }

        public Criteria andPropertyGreaterThan(String value) {
            addCriterion("property >", value, "property");
            return (Criteria) this;
        }

        public Criteria andPropertyGreaterThanOrEqualTo(String value) {
            addCriterion("property >=", value, "property");
            return (Criteria) this;
        }

        public Criteria andPropertyLessThan(String value) {
            addCriterion("property <", value, "property");
            return (Criteria) this;
        }

        public Criteria andPropertyLessThanOrEqualTo(String value) {
            addCriterion("property <=", value, "property");
            return (Criteria) this;
        }

        public Criteria andPropertyLike(String value) {
            addCriterion("property like", value, "property");
            return (Criteria) this;
        }

        public Criteria andPropertyNotLike(String value) {
            addCriterion("property not like", value, "property");
            return (Criteria) this;
        }

        public Criteria andPropertyIn(List<String> values) {
            addCriterion("property in", values, "property");
            return (Criteria) this;
        }

        public Criteria andPropertyNotIn(List<String> values) {
            addCriterion("property not in", values, "property");
            return (Criteria) this;
        }

        public Criteria andPropertyBetween(String value1, String value2) {
            addCriterion("property between", value1, value2, "property");
            return (Criteria) this;
        }

        public Criteria andPropertyNotBetween(String value1, String value2) {
            addCriterion("property not between", value1, value2, "property");
            return (Criteria) this;
        }

        public Criteria andManagerIsNull() {
            addCriterion("manager is null");
            return (Criteria) this;
        }

        public Criteria andManagerIsNotNull() {
            addCriterion("manager is not null");
            return (Criteria) this;
        }

        public Criteria andManagerEqualTo(String value) {
            addCriterion("manager =", value, "manager");
            return (Criteria) this;
        }

        public Criteria andManagerNotEqualTo(String value) {
            addCriterion("manager <>", value, "manager");
            return (Criteria) this;
        }

        public Criteria andManagerGreaterThan(String value) {
            addCriterion("manager >", value, "manager");
            return (Criteria) this;
        }

        public Criteria andManagerGreaterThanOrEqualTo(String value) {
            addCriterion("manager >=", value, "manager");
            return (Criteria) this;
        }

        public Criteria andManagerLessThan(String value) {
            addCriterion("manager <", value, "manager");
            return (Criteria) this;
        }

        public Criteria andManagerLessThanOrEqualTo(String value) {
            addCriterion("manager <=", value, "manager");
            return (Criteria) this;
        }

        public Criteria andManagerLike(String value) {
            addCriterion("manager like", value, "manager");
            return (Criteria) this;
        }

        public Criteria andManagerNotLike(String value) {
            addCriterion("manager not like", value, "manager");
            return (Criteria) this;
        }

        public Criteria andManagerIn(List<String> values) {
            addCriterion("manager in", values, "manager");
            return (Criteria) this;
        }

        public Criteria andManagerNotIn(List<String> values) {
            addCriterion("manager not in", values, "manager");
            return (Criteria) this;
        }

        public Criteria andManagerBetween(String value1, String value2) {
            addCriterion("manager between", value1, value2, "manager");
            return (Criteria) this;
        }

        public Criteria andManagerNotBetween(String value1, String value2) {
            addCriterion("manager not between", value1, value2, "manager");
            return (Criteria) this;
        }

        public Criteria andManagProIsNull() {
            addCriterion("manag_pro is null");
            return (Criteria) this;
        }

        public Criteria andManagProIsNotNull() {
            addCriterion("manag_pro is not null");
            return (Criteria) this;
        }

        public Criteria andManagProEqualTo(String value) {
            addCriterion("manag_pro =", value, "managPro");
            return (Criteria) this;
        }

        public Criteria andManagProNotEqualTo(String value) {
            addCriterion("manag_pro <>", value, "managPro");
            return (Criteria) this;
        }

        public Criteria andManagProGreaterThan(String value) {
            addCriterion("manag_pro >", value, "managPro");
            return (Criteria) this;
        }

        public Criteria andManagProGreaterThanOrEqualTo(String value) {
            addCriterion("manag_pro >=", value, "managPro");
            return (Criteria) this;
        }

        public Criteria andManagProLessThan(String value) {
            addCriterion("manag_pro <", value, "managPro");
            return (Criteria) this;
        }

        public Criteria andManagProLessThanOrEqualTo(String value) {
            addCriterion("manag_pro <=", value, "managPro");
            return (Criteria) this;
        }

        public Criteria andManagProLike(String value) {
            addCriterion("manag_pro like", value, "managPro");
            return (Criteria) this;
        }

        public Criteria andManagProNotLike(String value) {
            addCriterion("manag_pro not like", value, "managPro");
            return (Criteria) this;
        }

        public Criteria andManagProIn(List<String> values) {
            addCriterion("manag_pro in", values, "managPro");
            return (Criteria) this;
        }

        public Criteria andManagProNotIn(List<String> values) {
            addCriterion("manag_pro not in", values, "managPro");
            return (Criteria) this;
        }

        public Criteria andManagProBetween(String value1, String value2) {
            addCriterion("manag_pro between", value1, value2, "managPro");
            return (Criteria) this;
        }

        public Criteria andManagProNotBetween(String value1, String value2) {
            addCriterion("manag_pro not between", value1, value2, "managPro");
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

        public Criteria andSumTubIsNull() {
            addCriterion("sum_tub is null");
            return (Criteria) this;
        }

        public Criteria andSumTubIsNotNull() {
            addCriterion("sum_tub is not null");
            return (Criteria) this;
        }

        public Criteria andSumTubEqualTo(BigDecimal value) {
            addCriterion("sum_tub =", value, "sumTub");
            return (Criteria) this;
        }

        public Criteria andSumTubNotEqualTo(BigDecimal value) {
            addCriterion("sum_tub <>", value, "sumTub");
            return (Criteria) this;
        }

        public Criteria andSumTubGreaterThan(BigDecimal value) {
            addCriterion("sum_tub >", value, "sumTub");
            return (Criteria) this;
        }

        public Criteria andSumTubGreaterThanOrEqualTo(BigDecimal value) {
            addCriterion("sum_tub >=", value, "sumTub");
            return (Criteria) this;
        }

        public Criteria andSumTubLessThan(BigDecimal value) {
            addCriterion("sum_tub <", value, "sumTub");
            return (Criteria) this;
        }

        public Criteria andSumTubLessThanOrEqualTo(BigDecimal value) {
            addCriterion("sum_tub <=", value, "sumTub");
            return (Criteria) this;
        }

        public Criteria andSumTubIn(List<BigDecimal> values) {
            addCriterion("sum_tub in", values, "sumTub");
            return (Criteria) this;
        }

        public Criteria andSumTubNotIn(List<BigDecimal> values) {
            addCriterion("sum_tub not in", values, "sumTub");
            return (Criteria) this;
        }

        public Criteria andSumTubBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("sum_tub between", value1, value2, "sumTub");
            return (Criteria) this;
        }

        public Criteria andSumTubNotBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("sum_tub not between", value1, value2, "sumTub");
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

        public Criteria andSumQitaIsNull() {
            addCriterion("sum_qita is null");
            return (Criteria) this;
        }

        public Criteria andSumQitaIsNotNull() {
            addCriterion("sum_qita is not null");
            return (Criteria) this;
        }

        public Criteria andSumQitaEqualTo(BigDecimal value) {
            addCriterion("sum_qita =", value, "sumQita");
            return (Criteria) this;
        }

        public Criteria andSumQitaNotEqualTo(BigDecimal value) {
            addCriterion("sum_qita <>", value, "sumQita");
            return (Criteria) this;
        }

        public Criteria andSumQitaGreaterThan(BigDecimal value) {
            addCriterion("sum_qita >", value, "sumQita");
            return (Criteria) this;
        }

        public Criteria andSumQitaGreaterThanOrEqualTo(BigDecimal value) {
            addCriterion("sum_qita >=", value, "sumQita");
            return (Criteria) this;
        }

        public Criteria andSumQitaLessThan(BigDecimal value) {
            addCriterion("sum_qita <", value, "sumQita");
            return (Criteria) this;
        }

        public Criteria andSumQitaLessThanOrEqualTo(BigDecimal value) {
            addCriterion("sum_qita <=", value, "sumQita");
            return (Criteria) this;
        }

        public Criteria andSumQitaIn(List<BigDecimal> values) {
            addCriterion("sum_qita in", values, "sumQita");
            return (Criteria) this;
        }

        public Criteria andSumQitaNotIn(List<BigDecimal> values) {
            addCriterion("sum_qita not in", values, "sumQita");
            return (Criteria) this;
        }

        public Criteria andSumQitaBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("sum_qita between", value1, value2, "sumQita");
            return (Criteria) this;
        }

        public Criteria andSumQitaNotBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("sum_qita not between", value1, value2, "sumQita");
            return (Criteria) this;
        }

        public Criteria andSumQita2IsNull() {
            addCriterion("sum_qita2 is null");
            return (Criteria) this;
        }

        public Criteria andSumQita2IsNotNull() {
            addCriterion("sum_qita2 is not null");
            return (Criteria) this;
        }

        public Criteria andSumQita2EqualTo(BigDecimal value) {
            addCriterion("sum_qita2 =", value, "sumQita2");
            return (Criteria) this;
        }

        public Criteria andSumQita2NotEqualTo(BigDecimal value) {
            addCriterion("sum_qita2 <>", value, "sumQita2");
            return (Criteria) this;
        }

        public Criteria andSumQita2GreaterThan(BigDecimal value) {
            addCriterion("sum_qita2 >", value, "sumQita2");
            return (Criteria) this;
        }

        public Criteria andSumQita2GreaterThanOrEqualTo(BigDecimal value) {
            addCriterion("sum_qita2 >=", value, "sumQita2");
            return (Criteria) this;
        }

        public Criteria andSumQita2LessThan(BigDecimal value) {
            addCriterion("sum_qita2 <", value, "sumQita2");
            return (Criteria) this;
        }

        public Criteria andSumQita2LessThanOrEqualTo(BigDecimal value) {
            addCriterion("sum_qita2 <=", value, "sumQita2");
            return (Criteria) this;
        }

        public Criteria andSumQita2In(List<BigDecimal> values) {
            addCriterion("sum_qita2 in", values, "sumQita2");
            return (Criteria) this;
        }

        public Criteria andSumQita2NotIn(List<BigDecimal> values) {
            addCriterion("sum_qita2 not in", values, "sumQita2");
            return (Criteria) this;
        }

        public Criteria andSumQita2Between(BigDecimal value1, BigDecimal value2) {
            addCriterion("sum_qita2 between", value1, value2, "sumQita2");
            return (Criteria) this;
        }

        public Criteria andSumQita2NotBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("sum_qita2 not between", value1, value2, "sumQita2");
            return (Criteria) this;
        }

        public Criteria andSumRofeIsNull() {
            addCriterion("sum_rofe is null");
            return (Criteria) this;
        }

        public Criteria andSumRofeIsNotNull() {
            addCriterion("sum_rofe is not null");
            return (Criteria) this;
        }

        public Criteria andSumRofeEqualTo(BigDecimal value) {
            addCriterion("sum_rofe =", value, "sumRofe");
            return (Criteria) this;
        }

        public Criteria andSumRofeNotEqualTo(BigDecimal value) {
            addCriterion("sum_rofe <>", value, "sumRofe");
            return (Criteria) this;
        }

        public Criteria andSumRofeGreaterThan(BigDecimal value) {
            addCriterion("sum_rofe >", value, "sumRofe");
            return (Criteria) this;
        }

        public Criteria andSumRofeGreaterThanOrEqualTo(BigDecimal value) {
            addCriterion("sum_rofe >=", value, "sumRofe");
            return (Criteria) this;
        }

        public Criteria andSumRofeLessThan(BigDecimal value) {
            addCriterion("sum_rofe <", value, "sumRofe");
            return (Criteria) this;
        }

        public Criteria andSumRofeLessThanOrEqualTo(BigDecimal value) {
            addCriterion("sum_rofe <=", value, "sumRofe");
            return (Criteria) this;
        }

        public Criteria andSumRofeIn(List<BigDecimal> values) {
            addCriterion("sum_rofe in", values, "sumRofe");
            return (Criteria) this;
        }

        public Criteria andSumRofeNotIn(List<BigDecimal> values) {
            addCriterion("sum_rofe not in", values, "sumRofe");
            return (Criteria) this;
        }

        public Criteria andSumRofeBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("sum_rofe between", value1, value2, "sumRofe");
            return (Criteria) this;
        }

        public Criteria andSumRofeNotBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("sum_rofe not between", value1, value2, "sumRofe");
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