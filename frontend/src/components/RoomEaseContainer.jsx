import React, { Component } from "react"
import DashboardContainer from "./Dashboard/Containers/DashboardContainer";
import HomepageContainer from "./Homepage/Containers/HomepageContainer";
import ProfileContainer from "./Profile/Containers/ProfileContainer";
import Reuseables from './Utilities/Reuseables'

class RoomEaseContainer extends Component {
  render() {
    return (
      <div className="RoomEase">
        <Reuseables.logoIcon url='https://i.imgur.com/DqjYaRi.png'/>
        <h1>RoomEase Container</h1>
        <DashboardContainer />
        <HomepageContainer />
        <ProfileContainer />

      </div>
    )
  }
}

export default RoomEaseContainer
