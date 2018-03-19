import React, { Component } from "react"
import DashboardContainer from "./Dashboard/Containers/DashboardContainer";
import HomepageContainer from "./Homepage/Containers/HomepageContainer";
import ProfileContainer from "./Profile/Containers/ProfileContainer";

class RoomEaseContainer extends Component {
  render() {
    return (
      <div className="App">
        {/* <Navbar /> */}
        <h1>RoomEase Container</h1>
        <DashboardContainer />
        <HomepageContainer />
        <ProfileContainer />
      </div>
    )
  }
}

export default RoomEaseContainer
