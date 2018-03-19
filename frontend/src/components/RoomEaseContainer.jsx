import React, { Component } from "react"
import { connect } from "react-redux" // ALLOWS THE USE OF REDUC TO GET THE STATE FROM THIS.PROPS
import DashboardContainer from "./Dashboard/Containers/DashboardContainer"
import HomepageContainer from "./Homepage/Containers/HomepageContainer"
import ProfileContainer from "./Profile/Containers/ProfileContainer"
import Reuseables from "./Utilities/Reuseables"
import Signup from "./Utilities/Components/Signup";

class RoomEaseContainer extends Component {
  render() {
    return (
      <div className="RoomEase">
        {/* <Reuseables.logoIcon url="https://i.imgur.com/DqjYaRi.png" /> */}
        <Reuseables.navBar logoUrl="https://i.imgur.com/DqjYaRi.png" logoName="RoomEase" />
        <h1>RoomEase Container</h1>
        <Signup />
        <DashboardContainer />
        <HomepageContainer />
        <ProfileContainer />
      </div>
    )
  }
}

export default connect(state => state)(RoomEaseContainer)
