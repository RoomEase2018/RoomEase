import React, { Component } from "react";
import { connect } from "react-redux";
import Calendar from "../Components/Calendar";

const mapStateToProps = state => {
    return {
      allActiveTasks: state.Dashboard.allActiveTasks,
      allActiveExpenses: state.Dashboard.allActiveExpenses
    };
  };

class CalendarContainer extends Component {
    state = { events: [] };
  
    //set state props to event state and pass to calendar component
    componentDidMount() {

    }
  
    render() {
      return (
        <div className="up_next">
            <Calendar events />
        </div>
      );
    }
  }
  
  export default connect(mapStateToProps)(CalendarContainer);