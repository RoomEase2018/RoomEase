import React, { Component } from 'react';
import { connect } from "react-redux" // ALLOWS THE USE OF REDUC TO GET THE STATE FROM THIS.PROPS
import { withRouter, Route, Switch } from "react-router-dom"

import Homepage from "./Components/Homepage/Homepage"
import UserProfile from "./Components/UserProfile/UserProfile"
import Navbar from "./Components/Navbar/Navbar"
import Dashboard from './Components/Dashboard/Dashboard'
import Apartment from './Components/Apartment/Apartment'
import Footer from "./Components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="RoomEase">
        {this.props.Profile.loggedIn && <Navbar />}
        {this.props.Profile.loggedIn ? (
          <Switch>
            <Route exact path="/" component={UserProfile} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/apartment" component={Apartment} />
            <Route path="/profile" component={UserProfile} />
          </Switch>
        ) : (
           <Route component={Homepage} />
        )}
        <Footer />
      </div>
    )
  }
}

export default withRouter(connect(state => state)(App))
 