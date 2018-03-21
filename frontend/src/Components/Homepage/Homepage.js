import React, { Component } from "react";

import HomepageComponent from "./Components/HomepageComponent"

class Homepage extends Component {
  constructor() {
    super();

    this.state = {

      // for login
      loginUsername: '',
      loginPassword: '',

      // for signup
      name: "",
      username: "",
      email: "",
      password: "",
      gender: "",
      phone: ''

    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleLogin = e => {
    e.preventDefault();
  }

  handleSignUp = e => {
    e.preventDefault();
  }

  render() {
    const { handleChange, handleLogin, handleSignUp } = this;
    console.log(this.state)
    return (
      <div className="RoomEase">
        <HomepageComponent handleChange={handleChange} handleLogin={handleLogin} handleSignUp={handleSignUp} />
      </div>
    )
  }
}

export default Homepage;