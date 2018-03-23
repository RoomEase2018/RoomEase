import React, { Component } from "react"
import { connect } from "react-redux" // ALLOWS THE USE OF REDUC TO GET THE STATE FROM THIS.PROPS
import { Route, Switch } from "react-router-dom"

import HomepageContainer from "./Homepage/Containers/HomepageContainer"
import ProfileContainer from "./UserProfile/Containers/ProfileContainer"
import Setup from "./Setup/Setup"

class RoomEaseContainer extends Component {
    render() {
        return (
            <Switch>
                {this.props.Profile.loggedIn ? (
                    <Route exact path="/" component={ProfileContainer} />
                ) : (
                    <Route exact path="/" component={HomepageContainer} />
                )}
                <Route path="/setup" component={Setup} />
            </Switch>
        )
    }
}

export default connect(state => state)(RoomEaseContainer)
