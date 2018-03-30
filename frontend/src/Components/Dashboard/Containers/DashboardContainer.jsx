import React, { Component } from "react";
import { connect } from "react-redux";
import Dashboard from "../Components/Dashboard";
import "../Styles/Dashboard.css";
import {
  fetchAllActiveTasks,
  fetchAllActiveRecurrungTask,
  fetchAllActiveExpenses,
  fetc
} from "../Actions/DashboardActions";

const mapStateToProps = state => {
  console.log("state : ", state.Dashboard);
  return {
    allActiveTasks: state.Dashboard.allActiveTasks,
    allActiveExpenses: state.Dashboard.allActiveExpenses,
    goals: state.Dashboard.goals
  };
};

const mapDispatchToProps = dispatch => {
  console.log("dispatch : ", dispatch);
  return {
    fetchAllActiveTasks: id => {
      dispatch(fetchAllActiveTasks(id));
    }
  };
};

class DashboardContainer extends React.Component {
  componentDidMount() {
    this.props.fetchAllActiveTasks(1);
  }

  render() {
    return (
      <Dashboard store={this.props.Dashboard} profile={this.props.Profile} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);

// store={this.props.Dashboard}
// profile={this.props.Profile}
