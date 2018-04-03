import React, { Component } from "react";
import { connect } from "react-redux";
import Calendar from "../Components/Calendar";
import { fetchAllActiveTasks, fetchAllActiveRecurringTasks, fetchAllActiveExpenses, fetchAllActiveRecurringExpenses } from "../Actions/DashboardActions";

const mapStateToProps = state => {
  return {
    tasks: state.Dashboard.tasks,
    recurringTasks: state.Dashboard.recurringTasks,
    expenses: state.Dashboard.expenses,
    recurringExpenses: state.Dashboard.recurringExpenses
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