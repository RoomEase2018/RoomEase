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

    this.sortedTasks = []

    this.state = {
      index: 0,
      isSorted: false,
      completed: false
    }
  }

  handleCompletedCheckbox = () => {
    const taskCompleted = this.sortedTasks[this.state.index];
    let link;
    if (taskCompleted.is_recurring) {
      link = `/insertRoutes/insertRecurringTaskCompleted`;
    }
    else {
      link = `/insertRoutes/insertTaskCompleted`
    }

    axios
      .post(link, {
        task_id: taskCompleted.id,
        apt_id: taskCompleted.apt_id,
        to_user_id: taskCompleted.to_user_id,
        karma: taskCompleted.karma
      })
      .then(res => {
        // console.log(this.sortedTasks)
        this.sortedTasks.splice(this.state.index, 1);
        // console.log(this.sortedTasks)
        this.setState({
          isSorted: false,
        })
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

  sortTasks = () => {
    let tasks, recurringTasks, goals;
    let tasksArray = [];

    if (this.state.completed) {
      tasksArray = this.sortedTasks;
    }
    else {
      const { tasks, recurringTasks, goals } = this.props;

      if (tasks.length) {
        tasksArray = [...tasksArray, ...tasks];
      }
      if (recurringTasks.length) {
        tasksArray = [...tasksArray, ...this.addDueDateToRecurring(recurringTasks)];
      }
    

      tasksArray.sort((a, b) => {
        return new Date(a.due_date) - new Date(b.due_date);
      })

      this.sortedTasks = tasksArray
    }

    this.setState({
      isSorted: true,
      completed: true
    })
  }

  handleIndexButton = e => {
    let newIndex;
    const len = this.sortedTasks.length;
    const { index } = this.state;
    if (len > 5) {
      if (e.target.value === 'next') {
        newIndex = (5 + index + 1) % 5;
      } else {
        newIndex = (5 + index - 1) % 5;
      }
    } else {
      if (e.target.value === 'next') {
        newIndex = index + (len - index + 1) % len;
      } else {
        newIndex = index + (len - index - 1) % len;
      }
    }

    this.setState({
      index: newIndex
    })
  }

  render() {
    const { tasks, recurringTasks, expenses, recurringExpenses, goals, successQueries } = this.props;
    // console.log('rerender', this.state);

    if ( !successQueries.fetchAllActiveTasks ||
      !successQueries.fetchAllActiveRecurringTasks ||
      !successQueries.fetchAllApartmentGoals 
      ) {
      return (<div className="up_next"><p>loading</p></div>)
    } 
    else if (this.state.isSorted === false) {
      this.sortTasks();
      return (
        <div>loading</div>
      )
    }
    else {
      const { index } = this.state;
      // console.log(this.state, this.sortedTasks)
      return (
        <div className="up_next">
          <Progressbar karma={this.sortedTasks[index].karma} />
          <NextTask task={this.sortedTasks[index].title} handleIndexButton={this.handleIndexButton} />
          <Checkbox handleCompletedCheckbox={this.handleCompletedCheckbox} />
        </div>
      ); 
    }
  }
}

export default connect(mapStateToProps)(UpNextContainer);


















