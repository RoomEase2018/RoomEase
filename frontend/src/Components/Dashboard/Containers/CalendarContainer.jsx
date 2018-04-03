import React, { Component } from "react";
import { connect } from "react-redux";
import Calendar from "../Components/Calendar";
import { fetchAllActiveTasks, fetchAllActiveRecurringTasks, fetchAllActiveExpenses, fetchAllActiveRecurringExpenses } from "../Actions/DashboardActions";

const mapStateToProps = state => {
  return {
    allActiveTasks: state.Dashboard.allActiveTasks,
    allActiveExpenses: state.Dashboard.allActiveExpenses
  };
};

class CalendarContainer extends Component {
 
  render() {
    return (
      <div className="up_next">
        <Calendar events />
      </div>
    );
  }
}
  
  export default connect(mapStateToProps)(CalendarContainer);