import React, { Component } from "react";
import { connect } from "react-redux";
import Dashboard from "../Components/Dashboard";
import "../Styles/Dashboard.css";
import {
  fetchAllActiveTasks,
  fetchAllActiveRecurringTasks,
  fetchAllActiveExpenses,
  fetchAllActiveRecurringExpenses,
  fetchAllVisibleNotes,
  fetchAllApartmentGoals
} from "../Actions/DashboardActions";

const mapStateToProps = state => {
  console.log("dashcon state : ", state.Dashboard);
  return {
    allActiveTasks: state.Dashboard.allActiveTasks,
    allActiveExpenses: state.Dashboard.allActiveExpenses,
    goals: state.Dashboard.goals
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllActiveTasks: id => {
      dispatch(fetchAllActiveTasks(id));
    },
    fetchAllActiveRecurringTasks: id => {
        dispatch(fetchAllActiveRecurringTasks(id));
    },
    fetchAllActiveExpenses: id => {
        dispatch(fetchAllActiveExpenses(id));
    },
    fetchAllActiveRecurringExpenses: id => {
        dispatch(fetchAllActiveRecurringExpenses(id));
    },
    fetchAllVisibleNotes: id => {
        dispatch(fetchAllVisibleNotes(id));
    },
    fetchAllApartmentGoals: id => {
        dispatch(fetchAllApartmentGoals(id));
    }
  };
};

class DashboardContainer extends React.Component {
  componentDidMount() {
    this.props.fetchAllActiveTasks(1);
    this.props.fetchAllActiveRecurringTasks(1);
    this.props.fetchAllActiveExpenses(1);
    this.props.fetchAllActiveRecurringExpenses(1);
    this.props.fetchAllVisibleNotes(1);
    this.props.fetchAllApartmentGoals(1);
  }

  render() {
    return (
      <Dashboard />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
