import React, { Component } from "react"
import { connect } from "react-redux" // ALLOWS THE USE OF REDUC TO GET THE STATE FROM THIS.PROPS
import Homepage from "../Components/Homepage"

class HomepageContainer extends Component {
  render() {
    return (
      <div>
        <Homepage />
      </div>
    )
  }
}

export default connect(state => state)(HomepageContainer)
