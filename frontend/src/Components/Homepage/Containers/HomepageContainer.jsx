import React, { Component } from "react"
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

    render() {
        const { handleChange, handleLogin, handleSignUp } = this
        console.log(this.state)
        return (
            <div className="RoomEase">
                <Homepage
                    handleChange={handleChange}
                    handleLogin={handleLogin}
                    handleSignUp={handleSignUp}
                />
            </div>
        )
    }
}

export default HomepageContainer
