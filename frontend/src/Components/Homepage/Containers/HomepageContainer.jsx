import React, { Component } from "react";
import Homepage from "../Components/Homepage";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import axios from "axios";
import "../Styles/Homepage.css";

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
            phone: "",
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLogin = e => {
        e.preventDefault();
        const { loginUsername, loginPassword} = this.state;
        axios
            .post(`/users/login`, {
                username: loginUsername,
                password: loginPassword
            })
            .then(res => {
                console.log(res.data);
                this.login(res.data);
                console.log(this.props.Profile);
                
            })
            .catch(err => {
                console.log(err);
            })
    }

    login = (user) => {
        const { dispatch } = this.props;
        dispatch({ type: "LOGIN", user });
    }

    handleSignUp = e => {
        e.preventDefault()
    }

    render() {
        const { handleChange, handleLogin, handleSignUp } = this;
        console.log(this.props);

        if (this.props.Profile.loggedIn) {
            return <Redirect to="/" />
        };

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

export default  connect(state => state)(HomepageContainer);
