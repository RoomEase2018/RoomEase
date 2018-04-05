import React, { Component } from "react";
import { connect } from "react-redux";
import Calendar from "../Components/Calendar";
import { fetchAllActiveTasks, fetchAllActiveRecurringTasks, fetchAllActiveExpenses, fetchAllActiveRecurringExpenses } from "../Actions/DashboardActions";

const mapStateToProps = state => {
  return {
    tasks: state.Dashboard.tasks,
    recurringTasks: state.Dashboard.recurringTasks,
  };
};

class CalendarContainer extends Component {
 
  render() {
    const tasks = [...this.props.tasks, ...this.props.recurringTasks]
    return (
      <div className="calendar">
        <Calendar tasks={this.props.tasks} />
      </div>
    );
  }
}
  
  export default connect(mapStateToProps)(CalendarContainer);