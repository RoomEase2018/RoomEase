import React, { Component } from "react";
import moment from "moment";
import BigCalendar from "react-big-calendar";
import styles from "react-big-calendar/lib/css/react-big-calendar.css";

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

// let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

class Calendar extends Component {
  //faux events
  events = [
    {
      id: 0,
      title: "All Day 1",
      allDay: true,
      start: new Date(2015, 3, 0),
      end: new Date(2015, 3, 0)
    },
    {
      id: 1,
      title: "All Day 2",
      allDay: true,
      start: new Date(2015, 3, 1),
      end: new Date(2015, 3, 1)
    },
    {
      id: 1,
      title: "All Day 2",
      allDay: true,
      start: new Date(2015, 3, 1),
      end: new Date(2015, 3, 1)
    },
    {
      id: 2,
      title: "All Day 3",
      allDay: true,
      start: new Date(2015, 3, 1),
      end: new Date(2015, 3, 1)
    },
    {
      id: 3,
      title: "Long Event",
      start: new Date(2015, 3, 7),
      end: new Date(2015, 3, 10)
    }
  ];

  render() {
    const { tasks } = this.props;
    return (
      <div>
        <BigCalendar
          events={this.events}
          views={['week', 'month', 'agenda']}
          step={60}
          showMultiDayTimes
          defaultDate={new Date(2015, 3, 1)}
        />
      </div>
    );
  }
}

export default Calendar;
