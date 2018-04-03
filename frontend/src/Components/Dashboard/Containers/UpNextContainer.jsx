import React, { Component } from "react";
import { connect } from "react-redux";
import Progressbar from "../Components/Progressbar";
import Checkbox from "../Components/Checkbox";
import NextTask from "../Components/NextTask";


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
      nextTask: 'eat some chocolate',
      karma: 100
    }
  }

  handleCompletedCheckbox = e => {
    

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

  findNextRecurring = arr => {
    let nextRecurring;

    arr.forEach(el => {
      let due_date = this.getRecurringDate(el.due_date_type, el.due_date);
      if (!nextRecurring || due_date < nextRecurring.due_date) {
        nextRecurring = {
          next: el,
          due_date
        }
      }
    })
    return {...nextRecurring.next, due_date: nextRecurring.due_date};
  }

  findUpNext = () => {
    const { tasks, recurringTasks, expenses, recurringExpenses, goals } = this.props;

    let dueDateArr = [];
    let dueDateRecurringArr = [];

    if (tasks.length > 0) {
      dueDateArr.push(tasks[0].due_date);
    }
    if (expenses[0]) {
      dueDateArr.push(expenses[0].due_date)
    }
    if (recurringTasks.length > 0) {
      recurringTasks.forEach(task => {
        dueDateRecurringArr.push(task);
      })
    }
    if (recurringExpenses.length > 0) {
      recurringExpenses.forEach(expenses => {
        dueDateRecurringArr.push(expenses);
      }) 
    }

    if (dueDateArr.length === 0 && dueDateRecurringArr.length === 0) {
      return null;
    }

    let next;
    let nextRecurring;

    if (dueDateArr.length > 0) {
      next = dueDateArr.reduce((acc, el) => {
        return el.due_date < acc.due_date ? el : acc;
      })
    } 

    if (dueDateRecurringArr.length > 0) {
      nextRecurring = this.findNextRecurring(dueDateRecurringArr);
    }

    if (next && nextRecurring) {
      return next.due_date < nextRecurring.due_date ? next : nextRecurring;
    }
    
    return next ? next : nextRecurring;

  }


  render() {
    const { tasks, recurringTasks, expenses, recurringExpenses, goals, successQueries } = this.props;
    // console.log(tasks, recurringTasks, expenses, recurringExpenses, goals, counter, successQueries );
    console.log(successQueries)

    if (!successQueries.fetchAllActiveExpenses || 
      !successQueries.fetchAllActiveTasks ||
      !successQueries.fetchAllActiveRecurringExpenses || 
      !successQueries.fetchAllActiveRecurringTasks ||
      !successQueries.fetchAllApartmentGoals 
      ) {
      return (<div className="up_next"><p>loading</p></div>)
    } 
    else {
      const next = this.findUpNext();
      console.log(next);
      return (
        <div className="up_next">
          <Progressbar karma={next.karma_value} />
          <div className="next_task" id="next-task">
            <NextTask title={next.title} />
          </div>
          <Checkbox handleCheckbox={this.handleCheckbox} />
        </div>
      ); 
    }
  }
}

export default connect(mapStateToProps)(UpNextContainer);


















