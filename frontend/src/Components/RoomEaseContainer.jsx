import React, { Component } from "react"
import { connect } from "react-redux" // ALLOWS THE USE OF REDUC TO GET THE STATE FROM THIS.PROPS
import { Route, Switch } from "react-router-dom"

<<<<<<< HEAD
import HomepageContainer from "./Homepage/Containers/HomepageContainer";
import ProfileContainer from "./UserProfile/Containers/ProfileContainer";
// import DashboardContainer from "./Dashboard/Containers/DashboardContainer";
import Setup from "./Setup/Setup";
import Navbar from "./Navbar";
=======
import HomepageContainer from "./Homepage/Containers/HomepageContainer"
import ProfileContainer from "./UserProfile/Containers/ProfileContainer"
import Navbar from "./Navbar"
>>>>>>> 44644d272e14de8d927797ade56e5c1d54a80b61

class RoomEaseContainer extends Component {
    render() {
        return (
            <div>
                {this.props.Profile.loggedIn && <Navbar />}
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
