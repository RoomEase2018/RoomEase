import React, { Component } from "react"
import {connect} from "react-redux"
import Homepage from "../Components/Homepage"
import "../Styles/Homepage.css"

class HomepageContainer extends Component {
    constructor() {
        super()

        this.state = {
            // for login
            loginUsername: "",
            loginPassword: "",

            // for signup
            name: "",
            username: "",
            email: "",
            password: "",
            gender: "",
            phone: ""
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLogin = e => {
        e.preventDefault()
    }

    handleSignUp = e => {
        e.preventDefault()
    }

    login = () => {
        const {dispatch} = this.props
        dispatch({type:"PROFILE_USER_LOGGED_IN"})
    }

    render() {
        const { handleChange, handleLogin, handleSignUp, login } = this
        console.log(this.state)
        return (
            <div className="RoomEase">
                <Homepage
                    handleChange={handleChange}
                    handleLogin={handleLogin}
                    handleSignUp={handleSignUp}
                    login={login}
                />
            </div>
        )
    }
}

export default connect(state => state)(HomepageContainer)

