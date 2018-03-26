import React, { Component } from "react"
import { connect } from "react-redux" // ALLOWS THE USE OF REDUC TO GET THE STATE FROM THIS.PROPS
import { withRouter, Route, Switch } from "react-router-dom"

import HomepageContainer from "./Homepage/Containers/HomepageContainer"
import ProfileContainer from "./UserProfile/Containers/ProfileContainer"
import NavbarContainer from "./Navbar/Containers/NavbarContainer"
import DashboardContainer from './Dashboard/Containers/DashboardContainer'
import ApartmentContainer from './Apartment/Containers/ApartmentContainer'
import FooterContainer from "./Footer/Containers/FooterContainer";

class RoomEaseContainer extends Component {
    render() {
        return (
            <div className="RoomEase">
                {this.props.Profile.loggedIn && <NavbarContainer />}
                {this.props.Profile.loggedIn ? (
                    <Switch>
                        <Route exact path="/" component={ProfileContainer} />
                        <Route path="/dashboard" component={DashboardContainer} />
                        <Route path="/apartment" component={ApartmentContainer} />
                        <Route path="/profile" component={ProfileContainer} />
                    </Switch>
                ) : (
                    <Route component={HomepageContainer} />
                )}
                <FooterContainer />
            </div>
        )
    }
}

export default withRouter(connect(state => state)(RoomEaseContainer))
