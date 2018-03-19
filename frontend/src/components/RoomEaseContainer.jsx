import React, { Component } from "react"
import DashboardContainer from "./Dashboard/DashboardContainer";
import HomepageContainer from "./Homepage/HomepageContainer";
import ProfileContainer from "./Profile/ProfileContainer";

class RoomEaseContainer extends Component {
  render() {
    return (
      <div className="App">
        <h1>RoomEase Container</h1>
        <DashboardContainer />
        <HomepageContainer />
        <ProfileContainer />
      </div>
    )
  }
}

export default RoomEaseContainer
