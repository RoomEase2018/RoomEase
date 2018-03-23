import React, { Component } from "react"
import { connect } from "react-redux" // ALLOWS THE USE OF REDUC TO GET THE STATE FROM THIS.PROPS
import { Route, Switch } from "react-router-dom"

import HomepageContainer from "./Homepage/Containers/HomepageContainer"
import ProfileContainer from "./UserProfile/Containers/ProfileContainer"
import NavbarContainer from "./Navbar/Containers/NavbarContainer"

class RoomEaseContainer extends Component {
    render() {
        return (
            <div className="RoomEase">
                {this.props.Profile.loggedIn && <NavbarContainer />}
                {this.props.Profile.loggedIn ? (
                    <Switch>
                        <Route exact path="/" component={ProfileContainer} />
                        <Route path="/profile" component={ProfileContainer} />
                    </Switch>
                ) : (
                    <Route exact path="/" component={HomepageContainer} />
                )}
            </div>
        )
    }
}

export default connect(state => state)(RoomEaseContainer)
