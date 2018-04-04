import React, { Component } from "react";
import moment from "moment";
import BigCalendar from "react-big-calendar";
import styles from "react-big-calendar/lib/css/react-big-calendar.css";

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

// let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

class Calendar extends Component {
  //faux events for render
  events = [
    {
      id: 0,
      title: "buy milk",
      allDay: true,
      start: new Date(2015, 3, 0),
      end: new Date(2015, 3, 0)
    },
    {
      id: 1,
      title: "wash dishes",
      allDay: true,
      start: new Date(2015, 3, 1),
      end: new Date(2015, 3, 1)
    },
    {
      id: 1,
      title: "pay bills",
      allDay: true,
      start: new Date(2015, 3, 2),
      end: new Date(2015, 3, 2)
    },
    {
      id: 2,
      title: "parents coming",
      allDay: true,
      start: new Date(2015, 3, 4),
      end: new Date(2015, 3, 4)
    },
    {
      id: 3,
      title: "get a pet rooster",
      start: new Date(2015, 3, 7),
      end: new Date(2015, 3, 10)
    }
  ];

  render() {
    const { tasks } = this.props;
    return (
      <BigCalendar
        events={this.events}
        views={["week", "month", "agenda"]}
        defaultView={"week"}
        step={60}
        showMultiDayTimes
        defaultDate={new Date(2015, 3, 1)}
      />
    );
  }
}

export default Calendar;
