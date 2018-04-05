import React, { Component } from "react";
import moment from "moment";
import BigCalendar from "react-big-calendar";
import styles from "react-big-calendar/lib/css/react-big-calendar.css";

// BigCalendar.momentLocalizer(moment);

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

class Calendar extends Component {
  constructor() {
    super();

    this.state = {
      events: [{
        id: 1,
        title: 'test',
        allDay: true,
        start: new Date(2018, 3, 4),
        end: new Date(2018, 3, 5)
      }]
    }
  }

  ComponentWillMount() {
  }

  render() {
    const { events } = this.state;
    if (!this.props.tasks) {
      console.log('loading');
      return (
        <div>loading</div>
      )
    } 
    else {
      console.log(this.props.tasks);
      if (events.length !== this.props.tasks.length) {
        let newEvents = [];
        this.props.tasks.forEach(task => {
          newEvents.push({
            title: task.title,
            allDay: true,
            start: new Date(task.due_date),
            end: new Date(task.due_date)
          })
        })
        this.setState({
          events: newEvents
        })
      }
      return (
        <BigCalendar
          events={this.state.events}
          views={["week", "month", "agenda"]}
          defaultView={"week"}
          step={60}
          showMultiDayTimes
          defaultDate={new Date()}
        />
      );
    }
  }
}

export default Calendar;
