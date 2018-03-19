import React, { Component } from "react"
import { connect } from "react-redux" // ALLOWS THE USE OF REDUC TO GET THE STATE FROM THIS.PROPS
import Profile from "../Components/Profile"

class ProfileContainer extends Component {
  render() {
    return (
      <div>
        <Profile />
      </div>
    )
  }
}

export default connect(state => state)(ProfileContainer)
