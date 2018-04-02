import React, { Component } from "react";
import UpNextContainer from "./Containers/UpNextContainer";
import CalendarContainer from "./Containers/CalendarContainer";
import BulletinContainer from "./Containers/BulletinContainer";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <UpNextContainer />
        <CalendarContainer />
        <BulletinContainer />
      </div>
    );
  }
}

export default Dashboard;