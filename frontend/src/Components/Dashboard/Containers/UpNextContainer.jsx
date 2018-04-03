import React, { Component } from "react";
import { connect } from "react-redux";
import Progressbar from "../Components/Progressbar";
import Checkbox from "../Components/Checkbox";
import NextTask from "../Components/NextTask";
import {
  fetchAllActiveTasks,
  fetchAllActiveRecurringTasks,
  fetchAllApartmentGoals
} from "../Actions/DashboardActions";

const mapStateToProps = state => {
  return {
    allActiveTasks: state.Dashboard.allActiveTasks,
    allActiveExpenses: state.Dashboard.allActiveExpenses,
    goals: state.Dashboard.goals
  };
};

class UpNextContainer extends Component {

  // findUpNext = () => {
  //   let upNext;
  //   const { allActiveExpenses, allActiveTasks } = this.props;

  //   allActiveTasks.tasks.map(task => {
  //     if (task.due_date > currentDate && task.due_date < upNext) {
  //       upNext = task.due_date;
  //     }
  //   })

  // }


  render() {
    return (
      <div className="up_next">
        <Progressbar karma={this.props.karma} />
        <div className="next_task" id="next-task">
          <NextTask nextTask={this.state.nextTask} />
        </div>
        <Checkbox handleCheckbox={this.handleCheckbox} />
      </div>
    );
  }
}

export default connect(mapStateToProps)(UpNextContainer);
