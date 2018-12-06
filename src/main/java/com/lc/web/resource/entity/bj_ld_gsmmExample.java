package com.lc.web.resource.entity;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class bj_ld_gsmmExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public bj_ld_gsmmExample() {
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

        public Criteria andOrdinateIsNull() {
            addCriterion("ordinate is null");
            return (Criteria) this;
        }

        public Criteria andOrdinateIsNotNull() {
            addCriterion("ordinate is not null");
            return (Criteria) this;
        }

        public Criteria andOrdinateEqualTo(Double value) {
            addCriterion("ordinate =", value, "ordinate");
            return (Criteria) this;
        }

        public Criteria andOrdinateNotEqualTo(Double value) {
            addCriterion("ordinate <>", value, "ordinate");
            return (Criteria) this;
        }

        public Criteria andOrdinateGreaterThan(Double value) {
            addCriterion("ordinate >", value, "ordinate");
            return (Criteria) this;
        }

        public Criteria andOrdinateGreaterThanOrEqualTo(Double value) {
            addCriterion("ordinate >=", value, "ordinate");
            return (Criteria) this;
        }

        public Criteria andOrdinateLessThan(Double value) {
            addCriterion("ordinate <", value, "ordinate");
            return (Criteria) this;
        }

        public Criteria andOrdinateLessThanOrEqualTo(Double value) {
            addCriterion("ordinate <=", value, "ordinate");
            return (Criteria) this;
        }

        public Criteria andOrdinateIn(List<Double> values) {
            addCriterion("ordinate in", values, "ordinate");
            return (Criteria) this;
        }

        public Criteria andOrdinateNotIn(List<Double> values) {
            addCriterion("ordinate not in", values, "ordinate");
            return (Criteria) this;
        }

        public Criteria andOrdinateBetween(Double value1, Double value2) {
            addCriterion("ordinate between", value1, value2, "ordinate");
            return (Criteria) this;
        }

        public Criteria andOrdinateNotBetween(Double value1, Double value2) {
            addCriterion("ordinate not between", value1, value2, "ordinate");
            return (Criteria) this;
        }

        public Criteria andAbscisaIsNull() {
            addCriterion("abscisa is null");
            return (Criteria) this;
        }

        public Criteria andAbscisaIsNotNull() {
            addCriterion("abscisa is not null");
            return (Criteria) this;
        }

        public Criteria andAbscisaEqualTo(Double value) {
            addCriterion("abscisa =", value, "abscisa");
            return (Criteria) this;
        }

        public Criteria andAbscisaNotEqualTo(Double value) {
            addCriterion("abscisa <>", value, "abscisa");
            return (Criteria) this;
        }

        public Criteria andAbscisaGreaterThan(Double value) {
            addCriterion("abscisa >", value, "abscisa");
            return (Criteria) this;
        }

        public Criteria andAbscisaGreaterThanOrEqualTo(Double value) {
            addCriterion("abscisa >=", value, "abscisa");
            return (Criteria) this;
        }

        public Criteria andAbscisaLessThan(Double value) {
            addCriterion("abscisa <", value, "abscisa");
            return (Criteria) this;
        }

        public Criteria andAbscisaLessThanOrEqualTo(Double value) {
            addCriterion("abscisa <=", value, "abscisa");
            return (Criteria) this;
        }

        public Criteria andAbscisaIn(List<Double> values) {
            addCriterion("abscisa in", values, "abscisa");
            return (Criteria) this;
        }

        public Criteria andAbscisaNotIn(List<Double> values) {
            addCriterion("abscisa not in", values, "abscisa");
            return (Criteria) this;
        }

        public Criteria andAbscisaBetween(Double value1, Double value2) {
            addCriterion("abscisa between", value1, value2, "abscisa");
            return (Criteria) this;
        }

        public Criteria andAbscisaNotBetween(Double value1, Double value2) {
            addCriterion("abscisa not between", value1, value2, "abscisa");
            return (Criteria) this;
        }

        public Criteria andTreeidIsNull() {
            addCriterion("treeid is null");
            return (Criteria) this;
        }

        public Criteria andTreeidIsNotNull() {
            addCriterion("treeid is not null");
            return (Criteria) this;
        }

        public Criteria andTreeidEqualTo(String value) {
            addCriterion("treeid =", value, "treeid");
            return (Criteria) this;
        }

        public Criteria andTreeidNotEqualTo(String value) {
            addCriterion("treeid <>", value, "treeid");
            return (Criteria) this;
        }

        public Criteria andTreeidGreaterThan(String value) {
            addCriterion("treeid >", value, "treeid");
            return (Criteria) this;
        }

        public Criteria andTreeidGreaterThanOrEqualTo(String value) {
            addCriterion("treeid >=", value, "treeid");
            return (Criteria) this;
        }

        public Criteria andTreeidLessThan(String value) {
            addCriterion("treeid <", value, "treeid");
            return (Criteria) this;
        }

        public Criteria andTreeidLessThanOrEqualTo(String value) {
            addCriterion("treeid <=", value, "treeid");
            return (Criteria) this;
        }

        public Criteria andTreeidLike(String value) {
            addCriterion("treeid like", value, "treeid");
            return (Criteria) this;
        }

        public Criteria andTreeidNotLike(String value) {
            addCriterion("treeid not like", value, "treeid");
            return (Criteria) this;
        }

        public Criteria andTreeidIn(List<String> values) {
            addCriterion("treeid in", values, "treeid");
            return (Criteria) this;
        }

        public Criteria andTreeidNotIn(List<String> values) {
            addCriterion("treeid not in", values, "treeid");
            return (Criteria) this;
        }

        public Criteria andTreeidBetween(String value1, String value2) {
            addCriterion("treeid between", value1, value2, "treeid");
            return (Criteria) this;
        }

        public Criteria andTreeidNotBetween(String value1, String value2) {
            addCriterion("treeid not between", value1, value2, "treeid");
            return (Criteria) this;
        }

        public Criteria andTreetypeIsNull() {
            addCriterion("treetype is null");
            return (Criteria) this;
        }

        public Criteria andTreetypeIsNotNull() {
            addCriterion("treetype is not null");
            return (Criteria) this;
        }

        public Criteria andTreetypeEqualTo(String value) {
            addCriterion("treetype =", value, "treetype");
            return (Criteria) this;
        }

        public Criteria andTreetypeNotEqualTo(String value) {
            addCriterion("treetype <>", value, "treetype");
            return (Criteria) this;
        }

        public Criteria andTreetypeGreaterThan(String value) {
            addCriterion("treetype >", value, "treetype");
            return (Criteria) this;
        }

        public Criteria andTreetypeGreaterThanOrEqualTo(String value) {
            addCriterion("treetype >=", value, "treetype");
            return (Criteria) this;
        }

        public Criteria andTreetypeLessThan(String value) {
            addCriterion("treetype <", value, "treetype");
            return (Criteria) this;
        }

        public Criteria andTreetypeLessThanOrEqualTo(String value) {
            addCriterion("treetype <=", value, "treetype");
            return (Criteria) this;
        }

        public Criteria andTreetypeLike(String value) {
            addCriterion("treetype like", value, "treetype");
            return (Criteria) this;
        }

        public Criteria andTreetypeNotLike(String value) {
            addCriterion("treetype not like", value, "treetype");
            return (Criteria) this;
        }

        public Criteria andTreetypeIn(List<String> values) {
            addCriterion("treetype in", values, "treetype");
            return (Criteria) this;
        }

        public Criteria andTreetypeNotIn(List<String> values) {
            addCriterion("treetype not in", values, "treetype");
            return (Criteria) this;
        }

        public Criteria andTreetypeBetween(String value1, String value2) {
            addCriterion("treetype between", value1, value2, "treetype");
            return (Criteria) this;
        }

        public Criteria andTreetypeNotBetween(String value1, String value2) {
            addCriterion("treetype not between", value1, value2, "treetype");
            return (Criteria) this;
        }

        public Criteria andTownIsNull() {
            addCriterion("town is null");
            return (Criteria) this;
        }

        public Criteria andTownIsNotNull() {
            addCriterion("town is not null");
            return (Criteria) this;
        }

        public Criteria andTownEqualTo(String value) {
            addCriterion("town =", value, "town");
            return (Criteria) this;
        }

        public Criteria andTownNotEqualTo(String value) {
            addCriterion("town <>", value, "town");
            return (Criteria) this;
        }

        public Criteria andTownGreaterThan(String value) {
            addCriterion("town >", value, "town");
            return (Criteria) this;
        }

        public Criteria andTownGreaterThanOrEqualTo(String value) {
            addCriterion("town >=", value, "town");
            return (Criteria) this;
        }

        public Criteria andTownLessThan(String value) {
            addCriterion("town <", value, "town");
            return (Criteria) this;
        }

        public Criteria andTownLessThanOrEqualTo(String value) {
            addCriterion("town <=", value, "town");
            return (Criteria) this;
        }

        public Criteria andTownLike(String value) {
            addCriterion("town like", value, "town");
            return (Criteria) this;
        }

        public Criteria andTownNotLike(String value) {
            addCriterion("town not like", value, "town");
            return (Criteria) this;
        }

        public Criteria andTownIn(List<String> values) {
            addCriterion("town in", values, "town");
            return (Criteria) this;
        }

        public Criteria andTownNotIn(List<String> values) {
            addCriterion("town not in", values, "town");
            return (Criteria) this;
        }

        public Criteria andTownBetween(String value1, String value2) {
            addCriterion("town between", value1, value2, "town");
            return (Criteria) this;
        }

        public Criteria andTownNotBetween(String value1, String value2) {
            addCriterion("town not between", value1, value2, "town");
            return (Criteria) this;
        }

        public Criteria andLocationIsNull() {
            addCriterion("location is null");
            return (Criteria) this;
        }

        public Criteria andLocationIsNotNull() {
            addCriterion("location is not null");
            return (Criteria) this;
        }

        public Criteria andLocationEqualTo(String value) {
            addCriterion("location =", value, "location");
            return (Criteria) this;
        }

        public Criteria andLocationNotEqualTo(String value) {
            addCriterion("location <>", value, "location");
            return (Criteria) this;
        }

        public Criteria andLocationGreaterThan(String value) {
            addCriterion("location >", value, "location");
            return (Criteria) this;
        }

        public Criteria andLocationGreaterThanOrEqualTo(String value) {
            addCriterion("location >=", value, "location");
            return (Criteria) this;
        }

        public Criteria andLocationLessThan(String value) {
            addCriterion("location <", value, "location");
            return (Criteria) this;
        }

        public Criteria andLocationLessThanOrEqualTo(String value) {
            addCriterion("location <=", value, "location");
            return (Criteria) this;
        }

        public Criteria andLocationLike(String value) {
            addCriterion("location like", value, "location");
            return (Criteria) this;
        }

        public Criteria andLocationNotLike(String value) {
            addCriterion("location not like", value, "location");
            return (Criteria) this;
        }

        public Criteria andLocationIn(List<String> values) {
            addCriterion("location in", values, "location");
            return (Criteria) this;
        }

        public Criteria andLocationNotIn(List<String> values) {
            addCriterion("location not in", values, "location");
            return (Criteria) this;
        }

        public Criteria andLocationBetween(String value1, String value2) {
            addCriterion("location between", value1, value2, "location");
            return (Criteria) this;
        }

        public Criteria andLocationNotBetween(String value1, String value2) {
            addCriterion("location not between", value1, value2, "location");
            return (Criteria) this;
        }

        public Criteria andHeightIsNull() {
            addCriterion("height is null");
            return (Criteria) this;
        }

        public Criteria andHeightIsNotNull() {
            addCriterion("height is not null");
            return (Criteria) this;
        }

        public Criteria andHeightEqualTo(BigDecimal value) {
            addCriterion("height =", value, "height");
            return (Criteria) this;
        }

        public Criteria andHeightNotEqualTo(BigDecimal value) {
            addCriterion("height <>", value, "height");
            return (Criteria) this;
        }

        public Criteria andHeightGreaterThan(BigDecimal value) {
            addCriterion("height >", value, "height");
            return (Criteria) this;
        }

        public Criteria andHeightGreaterThanOrEqualTo(BigDecimal value) {
            addCriterion("height >=", value, "height");
            return (Criteria) this;
        }

        public Criteria andHeightLessThan(BigDecimal value) {
            addCriterion("height <", value, "height");
            return (Criteria) this;
        }

        public Criteria andHeightLessThanOrEqualTo(BigDecimal value) {
            addCriterion("height <=", value, "height");
            return (Criteria) this;
        }

        public Criteria andHeightIn(List<BigDecimal> values) {
            addCriterion("height in", values, "height");
            return (Criteria) this;
        }

        public Criteria andHeightNotIn(List<BigDecimal> values) {
            addCriterion("height not in", values, "height");
            return (Criteria) this;
        }

        public Criteria andHeightBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("height between", value1, value2, "height");
            return (Criteria) this;
        }

        public Criteria andHeightNotBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("height not between", value1, value2, "height");
            return (Criteria) this;
        }

        public Criteria andDiameterIsNull() {
            addCriterion("diameter is null");
            return (Criteria) this;
        }

        public Criteria andDiameterIsNotNull() {
            addCriterion("diameter is not null");
            return (Criteria) this;
        }

        public Criteria andDiameterEqualTo(BigDecimal value) {
            addCriterion("diameter =", value, "diameter");
            return (Criteria) this;
        }

        public Criteria andDiameterNotEqualTo(BigDecimal value) {
            addCriterion("diameter <>", value, "diameter");
            return (Criteria) this;
        }

        public Criteria andDiameterGreaterThan(BigDecimal value) {
            addCriterion("diameter >", value, "diameter");
            return (Criteria) this;
        }

        public Criteria andDiameterGreaterThanOrEqualTo(BigDecimal value) {
            addCriterion("diameter >=", value, "diameter");
            return (Criteria) this;
        }

        public Criteria andDiameterLessThan(BigDecimal value) {
            addCriterion("diameter <", value, "diameter");
            return (Criteria) this;
        }

        public Criteria andDiameterLessThanOrEqualTo(BigDecimal value) {
            addCriterion("diameter <=", value, "diameter");
            return (Criteria) this;
        }

        public Criteria andDiameterIn(List<BigDecimal> values) {
            addCriterion("diameter in", values, "diameter");
            return (Criteria) this;
        }

        public Criteria andDiameterNotIn(List<BigDecimal> values) {
            addCriterion("diameter not in", values, "diameter");
            return (Criteria) this;
        }

        public Criteria andDiameterBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("diameter between", value1, value2, "diameter");
            return (Criteria) this;
        }

        public Criteria andDiameterNotBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("diameter not between", value1, value2, "diameter");
            return (Criteria) this;
        }

        public Criteria andCrownIsNull() {
            addCriterion("crown is null");
            return (Criteria) this;
        }

        public Criteria andCrownIsNotNull() {
            addCriterion("crown is not null");
            return (Criteria) this;
        }

        public Criteria andCrownEqualTo(BigDecimal value) {
            addCriterion("crown =", value, "crown");
            return (Criteria) this;
        }

        public Criteria andCrownNotEqualTo(BigDecimal value) {
            addCriterion("crown <>", value, "crown");
            return (Criteria) this;
        }

        public Criteria andCrownGreaterThan(BigDecimal value) {
            addCriterion("crown >", value, "crown");
            return (Criteria) this;
        }

        public Criteria andCrownGreaterThanOrEqualTo(BigDecimal value) {
            addCriterion("crown >=", value, "crown");
            return (Criteria) this;
        }

        public Criteria andCrownLessThan(BigDecimal value) {
            addCriterion("crown <", value, "crown");
            return (Criteria) this;
        }

        public Criteria andCrownLessThanOrEqualTo(BigDecimal value) {
            addCriterion("crown <=", value, "crown");
            return (Criteria) this;
        }

        public Criteria andCrownIn(List<BigDecimal> values) {
            addCriterion("crown in", values, "crown");
            return (Criteria) this;
        }

        public Criteria andCrownNotIn(List<BigDecimal> values) {
            addCriterion("crown not in", values, "crown");
            return (Criteria) this;
        }

        public Criteria andCrownBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("crown between", value1, value2, "crown");
            return (Criteria) this;
        }

        public Criteria andCrownNotBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("crown not between", value1, value2, "crown");
            return (Criteria) this;
        }

        public Criteria andStateIsNull() {
            addCriterion("state is null");
            return (Criteria) this;
        }

        public Criteria andStateIsNotNull() {
            addCriterion("state is not null");
            return (Criteria) this;
        }

        public Criteria andStateEqualTo(String value) {
            addCriterion("state =", value, "state");
            return (Criteria) this;
        }

        public Criteria andStateNotEqualTo(String value) {
            addCriterion("state <>", value, "state");
            return (Criteria) this;
        }

        public Criteria andStateGreaterThan(String value) {
            addCriterion("state >", value, "state");
            return (Criteria) this;
        }

        public Criteria andStateGreaterThanOrEqualTo(String value) {
            addCriterion("state >=", value, "state");
            return (Criteria) this;
        }

        public Criteria andStateLessThan(String value) {
            addCriterion("state <", value, "state");
            return (Criteria) this;
        }

        public Criteria andStateLessThanOrEqualTo(String value) {
            addCriterion("state <=", value, "state");
            return (Criteria) this;
        }

        public Criteria andStateLike(String value) {
            addCriterion("state like", value, "state");
            return (Criteria) this;
        }

        public Criteria andStateNotLike(String value) {
            addCriterion("state not like", value, "state");
            return (Criteria) this;
        }

        public Criteria andStateIn(List<String> values) {
            addCriterion("state in", values, "state");
            return (Criteria) this;
        }

        public Criteria andStateNotIn(List<String> values) {
            addCriterion("state not in", values, "state");
            return (Criteria) this;
        }

        public Criteria andStateBetween(String value1, String value2) {
            addCriterion("state between", value1, value2, "state");
            return (Criteria) this;
        }

        public Criteria andStateNotBetween(String value1, String value2) {
            addCriterion("state not between", value1, value2, "state");
            return (Criteria) this;
        }

        public Criteria andEnvironmenIsNull() {
            addCriterion("environmen is null");
            return (Criteria) this;
        }

        public Criteria andEnvironmenIsNotNull() {
            addCriterion("environmen is not null");
            return (Criteria) this;
        }

        public Criteria andEnvironmenEqualTo(String value) {
            addCriterion("environmen =", value, "environmen");
            return (Criteria) this;
        }

        public Criteria andEnvironmenNotEqualTo(String value) {
            addCriterion("environmen <>", value, "environmen");
            return (Criteria) this;
        }

        public Criteria andEnvironmenGreaterThan(String value) {
            addCriterion("environmen >", value, "environmen");
            return (Criteria) this;
        }

        public Criteria andEnvironmenGreaterThanOrEqualTo(String value) {
            addCriterion("environmen >=", value, "environmen");
            return (Criteria) this;
        }

        public Criteria andEnvironmenLessThan(String value) {
            addCriterion("environmen <", value, "environmen");
            return (Criteria) this;
        }

        public Criteria andEnvironmenLessThanOrEqualTo(String value) {
            addCriterion("environmen <=", value, "environmen");
            return (Criteria) this;
        }

        public Criteria andEnvironmenLike(String value) {
            addCriterion("environmen like", value, "environmen");
            return (Criteria) this;
        }

        public Criteria andEnvironmenNotLike(String value) {
            addCriterion("environmen not like", value, "environmen");
            return (Criteria) this;
        }

        public Criteria andEnvironmenIn(List<String> values) {
            addCriterion("environmen in", values, "environmen");
            return (Criteria) this;
        }

        public Criteria andEnvironmenNotIn(List<String> values) {
            addCriterion("environmen not in", values, "environmen");
            return (Criteria) this;
        }

        public Criteria andEnvironmenBetween(String value1, String value2) {
            addCriterion("environmen between", value1, value2, "environmen");
            return (Criteria) this;
        }

        public Criteria andEnvironmenNotBetween(String value1, String value2) {
            addCriterion("environmen not between", value1, value2, "environmen");
            return (Criteria) this;
        }

        public Criteria andGhdwIsNull() {
            addCriterion("ghdw is null");
            return (Criteria) this;
        }

        public Criteria andGhdwIsNotNull() {
            addCriterion("ghdw is not null");
            return (Criteria) this;
        }

        public Criteria andGhdwEqualTo(String value) {
            addCriterion("ghdw =", value, "ghdw");
            return (Criteria) this;
        }

        public Criteria andGhdwNotEqualTo(String value) {
            addCriterion("ghdw <>", value, "ghdw");
            return (Criteria) this;
        }

        public Criteria andGhdwGreaterThan(String value) {
            addCriterion("ghdw >", value, "ghdw");
            return (Criteria) this;
        }

        public Criteria andGhdwGreaterThanOrEqualTo(String value) {
            addCriterion("ghdw >=", value, "ghdw");
            return (Criteria) this;
        }

        public Criteria andGhdwLessThan(String value) {
            addCriterion("ghdw <", value, "ghdw");
            return (Criteria) this;
        }

        public Criteria andGhdwLessThanOrEqualTo(String value) {
            addCriterion("ghdw <=", value, "ghdw");
            return (Criteria) this;
        }

        public Criteria andGhdwLike(String value) {
            addCriterion("ghdw like", value, "ghdw");
            return (Criteria) this;
        }

        public Criteria andGhdwNotLike(String value) {
            addCriterion("ghdw not like", value, "ghdw");
            return (Criteria) this;
        }

        public Criteria andGhdwIn(List<String> values) {
            addCriterion("ghdw in", values, "ghdw");
            return (Criteria) this;
        }

        public Criteria andGhdwNotIn(List<String> values) {
            addCriterion("ghdw not in", values, "ghdw");
            return (Criteria) this;
        }

        public Criteria andGhdwBetween(String value1, String value2) {
            addCriterion("ghdw between", value1, value2, "ghdw");
            return (Criteria) this;
        }

        public Criteria andGhdwNotBetween(String value1, String value2) {
            addCriterion("ghdw not between", value1, value2, "ghdw");
            return (Criteria) this;
        }

        public Criteria andOwnerIsNull() {
            addCriterion("owner is null");
            return (Criteria) this;
        }

        public Criteria andOwnerIsNotNull() {
            addCriterion("owner is not null");
            return (Criteria) this;
        }

        public Criteria andOwnerEqualTo(String value) {
            addCriterion("owner =", value, "owner");
            return (Criteria) this;
        }

        public Criteria andOwnerNotEqualTo(String value) {
            addCriterion("owner <>", value, "owner");
            return (Criteria) this;
        }

        public Criteria andOwnerGreaterThan(String value) {
            addCriterion("owner >", value, "owner");
            return (Criteria) this;
        }

        public Criteria andOwnerGreaterThanOrEqualTo(String value) {
            addCriterion("owner >=", value, "owner");
            return (Criteria) this;
        }

        public Criteria andOwnerLessThan(String value) {
            addCriterion("owner <", value, "owner");
            return (Criteria) this;
        }

        public Criteria andOwnerLessThanOrEqualTo(String value) {
            addCriterion("owner <=", value, "owner");
            return (Criteria) this;
        }

        public Criteria andOwnerLike(String value) {
            addCriterion("owner like", value, "owner");
            return (Criteria) this;
        }

        public Criteria andOwnerNotLike(String value) {
            addCriterion("owner not like", value, "owner");
            return (Criteria) this;
        }

        public Criteria andOwnerIn(List<String> values) {
            addCriterion("owner in", values, "owner");
            return (Criteria) this;
        }

        public Criteria andOwnerNotIn(List<String> values) {
            addCriterion("owner not in", values, "owner");
            return (Criteria) this;
        }

        public Criteria andOwnerBetween(String value1, String value2) {
            addCriterion("owner between", value1, value2, "owner");
            return (Criteria) this;
        }

        public Criteria andOwnerNotBetween(String value1, String value2) {
            addCriterion("owner not between", value1, value2, "owner");
            return (Criteria) this;
        }

        public Criteria andLevelIsNull() {
            addCriterion("level is null");
            return (Criteria) this;
        }

        public Criteria andLevelIsNotNull() {
            addCriterion("level is not null");
            return (Criteria) this;
        }

        public Criteria andLevelEqualTo(String value) {
            addCriterion("level =", value, "level");
            return (Criteria) this;
        }

        public Criteria andLevelNotEqualTo(String value) {
            addCriterion("level <>", value, "level");
            return (Criteria) this;
        }

        public Criteria andLevelGreaterThan(String value) {
            addCriterion("level >", value, "level");
            return (Criteria) this;
        }

        public Criteria andLevelGreaterThanOrEqualTo(String value) {
            addCriterion("level >=", value, "level");
            return (Criteria) this;
        }

        public Criteria andLevelLessThan(String value) {
            addCriterion("level <", value, "level");
            return (Criteria) this;
        }

        public Criteria andLevelLessThanOrEqualTo(String value) {
            addCriterion("level <=", value, "level");
            return (Criteria) this;
        }

        public Criteria andLevelLike(String value) {
            addCriterion("level like", value, "level");
            return (Criteria) this;
        }

        public Criteria andLevelNotLike(String value) {
            addCriterion("level not like", value, "level");
            return (Criteria) this;
        }

        public Criteria andLevelIn(List<String> values) {
            addCriterion("level in", values, "level");
            return (Criteria) this;
        }

        public Criteria andLevelNotIn(List<String> values) {
            addCriterion("level not in", values, "level");
            return (Criteria) this;
        }

        public Criteria andLevelBetween(String value1, String value2) {
            addCriterion("level between", value1, value2, "level");
            return (Criteria) this;
        }

        public Criteria andLevelNotBetween(String value1, String value2) {
            addCriterion("level not between", value1, value2, "level");
            return (Criteria) this;
        }

        public Criteria andHlIsNull() {
            addCriterion("hl is null");
            return (Criteria) this;
        }

        public Criteria andHlIsNotNull() {
            addCriterion("hl is not null");
            return (Criteria) this;
        }

        public Criteria andHlEqualTo(String value) {
            addCriterion("hl =", value, "hl");
            return (Criteria) this;
        }

        public Criteria andHlNotEqualTo(String value) {
            addCriterion("hl <>", value, "hl");
            return (Criteria) this;
        }

        public Criteria andHlGreaterThan(String value) {
            addCriterion("hl >", value, "hl");
            return (Criteria) this;
        }

        public Criteria andHlGreaterThanOrEqualTo(String value) {
            addCriterion("hl >=", value, "hl");
            return (Criteria) this;
        }

        public Criteria andHlLessThan(String value) {
            addCriterion("hl <", value, "hl");
            return (Criteria) this;
        }

        public Criteria andHlLessThanOrEqualTo(String value) {
            addCriterion("hl <=", value, "hl");
            return (Criteria) this;
        }

        public Criteria andHlLike(String value) {
            addCriterion("hl like", value, "hl");
            return (Criteria) this;
        }

        public Criteria andHlNotLike(String value) {
            addCriterion("hl not like", value, "hl");
            return (Criteria) this;
        }

        public Criteria andHlIn(List<String> values) {
            addCriterion("hl in", values, "hl");
            return (Criteria) this;
        }

        public Criteria andHlNotIn(List<String> values) {
            addCriterion("hl not in", values, "hl");
            return (Criteria) this;
        }

        public Criteria andHlBetween(String value1, String value2) {
            addCriterion("hl between", value1, value2, "hl");
            return (Criteria) this;
        }

        public Criteria andHlNotBetween(String value1, String value2) {
            addCriterion("hl not between", value1, value2, "hl");
            return (Criteria) this;
        }

        public Criteria andZcIsNull() {
            addCriterion("zc is null");
            return (Criteria) this;
        }

        public Criteria andZcIsNotNull() {
            addCriterion("zc is not null");
            return (Criteria) this;
        }

        public Criteria andZcEqualTo(String value) {
            addCriterion("zc =", value, "zc");
            return (Criteria) this;
        }

        public Criteria andZcNotEqualTo(String value) {
            addCriterion("zc <>", value, "zc");
            return (Criteria) this;
        }

        public Criteria andZcGreaterThan(String value) {
            addCriterion("zc >", value, "zc");
            return (Criteria) this;
        }

        public Criteria andZcGreaterThanOrEqualTo(String value) {
            addCriterion("zc >=", value, "zc");
            return (Criteria) this;
        }

        public Criteria andZcLessThan(String value) {
            addCriterion("zc <", value, "zc");
            return (Criteria) this;
        }

        public Criteria andZcLessThanOrEqualTo(String value) {
            addCriterion("zc <=", value, "zc");
            return (Criteria) this;
        }

        public Criteria andZcLike(String value) {
            addCriterion("zc like", value, "zc");
            return (Criteria) this;
        }

        public Criteria andZcNotLike(String value) {
            addCriterion("zc not like", value, "zc");
            return (Criteria) this;
        }

        public Criteria andZcIn(List<String> values) {
            addCriterion("zc in", values, "zc");
            return (Criteria) this;
        }

        public Criteria andZcNotIn(List<String> values) {
            addCriterion("zc not in", values, "zc");
            return (Criteria) this;
        }

        public Criteria andZcBetween(String value1, String value2) {
            addCriterion("zc between", value1, value2, "zc");
            return (Criteria) this;
        }

        public Criteria andZcNotBetween(String value1, String value2) {
            addCriterion("zc not between", value1, value2, "zc");
            return (Criteria) this;
        }

        public Criteria andFdsdIsNull() {
            addCriterion("fdsd is null");
            return (Criteria) this;
        }

        public Criteria andFdsdIsNotNull() {
            addCriterion("fdsd is not null");
            return (Criteria) this;
        }

        public Criteria andFdsdEqualTo(String value) {
            addCriterion("fdsd =", value, "fdsd");
            return (Criteria) this;
        }

        public Criteria andFdsdNotEqualTo(String value) {
            addCriterion("fdsd <>", value, "fdsd");
            return (Criteria) this;
        }

        public Criteria andFdsdGreaterThan(String value) {
            addCriterion("fdsd >", value, "fdsd");
            return (Criteria) this;
        }

        public Criteria andFdsdGreaterThanOrEqualTo(String value) {
            addCriterion("fdsd >=", value, "fdsd");
            return (Criteria) this;
        }

        public Criteria andFdsdLessThan(String value) {
            addCriterion("fdsd <", value, "fdsd");
            return (Criteria) this;
        }

        public Criteria andFdsdLessThanOrEqualTo(String value) {
            addCriterion("fdsd <=", value, "fdsd");
            return (Criteria) this;
        }

        public Criteria andFdsdLike(String value) {
            addCriterion("fdsd like", value, "fdsd");
            return (Criteria) this;
        }

        public Criteria andFdsdNotLike(String value) {
            addCriterion("fdsd not like", value, "fdsd");
            return (Criteria) this;
        }

        public Criteria andFdsdIn(List<String> values) {
            addCriterion("fdsd in", values, "fdsd");
            return (Criteria) this;
        }

        public Criteria andFdsdNotIn(List<String> values) {
            addCriterion("fdsd not in", values, "fdsd");
            return (Criteria) this;
        }

        public Criteria andFdsdBetween(String value1, String value2) {
            addCriterion("fdsd between", value1, value2, "fdsd");
            return (Criteria) this;
        }

        public Criteria andFdsdNotBetween(String value1, String value2) {
            addCriterion("fdsd not between", value1, value2, "fdsd");
            return (Criteria) this;
        }

        public Criteria andScIsNull() {
            addCriterion("sc is null");
            return (Criteria) this;
        }

        public Criteria andScIsNotNull() {
            addCriterion("sc is not null");
            return (Criteria) this;
        }

        public Criteria andScEqualTo(String value) {
            addCriterion("sc =", value, "sc");
            return (Criteria) this;
        }

        public Criteria andScNotEqualTo(String value) {
            addCriterion("sc <>", value, "sc");
            return (Criteria) this;
        }

        public Criteria andScGreaterThan(String value) {
            addCriterion("sc >", value, "sc");
            return (Criteria) this;
        }

        public Criteria andScGreaterThanOrEqualTo(String value) {
            addCriterion("sc >=", value, "sc");
            return (Criteria) this;
        }

        public Criteria andScLessThan(String value) {
            addCriterion("sc <", value, "sc");
            return (Criteria) this;
        }

        public Criteria andScLessThanOrEqualTo(String value) {
            addCriterion("sc <=", value, "sc");
            return (Criteria) this;
        }

        public Criteria andScLike(String value) {
            addCriterion("sc like", value, "sc");
            return (Criteria) this;
        }

        public Criteria andScNotLike(String value) {
            addCriterion("sc not like", value, "sc");
            return (Criteria) this;
        }

        public Criteria andScIn(List<String> values) {
            addCriterion("sc in", values, "sc");
            return (Criteria) this;
        }

        public Criteria andScNotIn(List<String> values) {
            addCriterion("sc not in", values, "sc");
            return (Criteria) this;
        }

        public Criteria andScBetween(String value1, String value2) {
            addCriterion("sc between", value1, value2, "sc");
            return (Criteria) this;
        }

        public Criteria andScNotBetween(String value1, String value2) {
            addCriterion("sc not between", value1, value2, "sc");
            return (Criteria) this;
        }

        public Criteria andSgIsNull() {
            addCriterion("sg is null");
            return (Criteria) this;
        }

        public Criteria andSgIsNotNull() {
            addCriterion("sg is not null");
            return (Criteria) this;
        }

        public Criteria andSgEqualTo(String value) {
            addCriterion("sg =", value, "sg");
            return (Criteria) this;
        }

        public Criteria andSgNotEqualTo(String value) {
            addCriterion("sg <>", value, "sg");
            return (Criteria) this;
        }

        public Criteria andSgGreaterThan(String value) {
            addCriterion("sg >", value, "sg");
            return (Criteria) this;
        }

        public Criteria andSgGreaterThanOrEqualTo(String value) {
            addCriterion("sg >=", value, "sg");
            return (Criteria) this;
        }

        public Criteria andSgLessThan(String value) {
            addCriterion("sg <", value, "sg");
            return (Criteria) this;
        }

        public Criteria andSgLessThanOrEqualTo(String value) {
            addCriterion("sg <=", value, "sg");
            return (Criteria) this;
        }

        public Criteria andSgLike(String value) {
            addCriterion("sg like", value, "sg");
            return (Criteria) this;
        }

        public Criteria andSgNotLike(String value) {
            addCriterion("sg not like", value, "sg");
            return (Criteria) this;
        }

        public Criteria andSgIn(List<String> values) {
            addCriterion("sg in", values, "sg");
            return (Criteria) this;
        }

        public Criteria andSgNotIn(List<String> values) {
            addCriterion("sg not in", values, "sg");
            return (Criteria) this;
        }

        public Criteria andSgBetween(String value1, String value2) {
            addCriterion("sg between", value1, value2, "sg");
            return (Criteria) this;
        }

        public Criteria andSgNotBetween(String value1, String value2) {
            addCriterion("sg not between", value1, value2, "sg");
            return (Criteria) this;
        }

        public Criteria andOldnumIsNull() {
            addCriterion("oldnum is null");
            return (Criteria) this;
        }

        public Criteria andOldnumIsNotNull() {
            addCriterion("oldnum is not null");
            return (Criteria) this;
        }

        public Criteria andOldnumEqualTo(String value) {
            addCriterion("oldnum =", value, "oldnum");
            return (Criteria) this;
        }

        public Criteria andOldnumNotEqualTo(String value) {
            addCriterion("oldnum <>", value, "oldnum");
            return (Criteria) this;
        }

        public Criteria andOldnumGreaterThan(String value) {
            addCriterion("oldnum >", value, "oldnum");
            return (Criteria) this;
        }

        public Criteria andOldnumGreaterThanOrEqualTo(String value) {
            addCriterion("oldnum >=", value, "oldnum");
            return (Criteria) this;
        }

        public Criteria andOldnumLessThan(String value) {
            addCriterion("oldnum <", value, "oldnum");
            return (Criteria) this;
        }

        public Criteria andOldnumLessThanOrEqualTo(String value) {
            addCriterion("oldnum <=", value, "oldnum");
            return (Criteria) this;
        }

        public Criteria andOldnumLike(String value) {
            addCriterion("oldnum like", value, "oldnum");
            return (Criteria) this;
        }

        public Criteria andOldnumNotLike(String value) {
            addCriterion("oldnum not like", value, "oldnum");
            return (Criteria) this;
        }

        public Criteria andOldnumIn(List<String> values) {
            addCriterion("oldnum in", values, "oldnum");
            return (Criteria) this;
        }

        public Criteria andOldnumNotIn(List<String> values) {
            addCriterion("oldnum not in", values, "oldnum");
            return (Criteria) this;
        }

        public Criteria andOldnumBetween(String value1, String value2) {
            addCriterion("oldnum between", value1, value2, "oldnum");
            return (Criteria) this;
        }

        public Criteria andOldnumNotBetween(String value1, String value2) {
            addCriterion("oldnum not between", value1, value2, "oldnum");
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