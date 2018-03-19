import React, { Component } from "react"
import { connect } from "react-redux" // ALLOWS THE USE OF REDUC TO GET THE STATE FROM THIS.PROPS
import Dashboard from "../Components/Dashboard"

class DashboardContainer extends Component {
  render() {
    return (
      <div>
        <Dashboard />
      </div>
    )
  }
}

export default connect(state => state)(DashboardContainer)
