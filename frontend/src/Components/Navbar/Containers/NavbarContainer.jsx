import React from "react"
import { connect } from "react-redux"
import Navbar from "../Components/Navbar"

class NavbarContainer extends React.Component {
    logout = () => {
        const { dispatch } = this.props
        dispatch({ type: "PROFILE_USER_LOGGED_IN" })
    }

    render() {
        return <Navbar logout={this.logout} />
    }
}

export default connect(state => state)(NavbarContainer)
