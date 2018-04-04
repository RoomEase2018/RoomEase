import React, { Component } from "react";
import { connect } from "react-redux";
import Progressbar from "../Components/Progressbar";
import Checkbox from "../Components/Checkbox";
import NextTask from "../Components/NextTask";
import axios from "axios";


const mapStateToProps = state => {
  return {
    tasks: state.Dashboard.tasks,
    recurringTasks: state.Dashboard.recurringTasks,
    expenses: state.Dashboard.expenses,
    recurringExpenses: state.Dashboard.recurringExpenses,
    goals: state.Dashboard.goals,
    successQueries: state.Dashboard.successQueries
  };
};

class UpNextContainer extends Component {
  constructor() {
    super();

    this.state = {

    }
  }

  handleCompletedCheckbox = e => {
    let link = 'is recurring or not?'
    axios
      .post(link, {
        task_id: 'req.body.task_id',
        apt_id: 'req.body.apt_id',
        to_user_id: 'req.body.to_user_id',
        karma: 'req.body.karma'
      })
      .then(res => {
        //get next task
      })
      .catch(err => {
        //some err message
      })
  }

  getRecurringDate = (type, day) => {
    const date = new Date();
    
    switch (type) {
      case 'day':
        date.setHours(0, 0, 0, 0);
        return date;
      case 'week':
        date.setDate(date.getDate() + (day + (7 - date.getDay())) % 7);
        return date;
      case 'month':
        if (date.getDate() > day) {
          return new Date(date.getFullYear(), date.getMonth() + 1, day);
        }

        const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

        if (lastDay.getDate() < day) {
          return lastDay;
        }
        else {
          date.setDate(day);
          return date;
        }
    }
  }

  addDueDateToRecurring = arr => {
    let array = [];
    arr.forEach(el => {
      array.push({...el, due_date: this.getRecurringDate(el.due_date_type, el.due_date)});
    })
    return array;
  }

  findUpNext = () => {
    const { tasks, recurringTasks, goals } = this.props;
    let tasksArray = [];

    if (tasks.length) {
      tasksArray = [...tasksArray, ...tasks];
    }
    if (recurringTasks.length) {
      tasksArray = [...tasksArray, ...this.addDueDateToRecurring(recurringTasks)];
    }

    tasksArray.sort((a, b) => {
      return new Date(a.due_date) - new Date(b.due_date);
    })

    return tasksArray;
  }


  render() {
    const { tasks, recurringTasks, expenses, recurringExpenses, goals, successQueries } = this.props;
    // console.log(tasks, recurringTasks, expenses, recurringExpenses, goals, counter, successQueries );
    // console.log(successQueries)

    if ( !successQueries.fetchAllActiveTasks ||
      !successQueries.fetchAllActiveRecurringTasks ||
      !successQueries.fetchAllApartmentGoals 
      ) {
      return (<div className="up_next"><p>loading</p></div>)
    } 
    else {
      const sortedTasks = this.findUpNext();
      sortedTasks.forEach(el => {
        // console.log('due_date: ', el.due_date);
      })

      return (
        <div className="up_next">
          <Progressbar karma={sortedTasks[0].karma} />
          <div className="next_task" id="next-task">
            <NextTask title={sortedTasks[0].title} />
          </div>
          <Checkbox handleCompletedCheckbox={this.handleCompletedCheckbox} />
        </div>
      ); 
    }
  }
}

export default connect(mapStateToProps)(UpNextContainer);


















