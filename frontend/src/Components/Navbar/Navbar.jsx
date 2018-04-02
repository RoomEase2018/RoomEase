import React from "react";
import axios from "axios";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import NavbarComponent from "./Components/NavbarComponent";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      active: "",
    };
  }

  logout = () => {
    const { dispatch } = this.props;
    axios
      .get(`/users/logout`)
      .then(res => {
        dispatch({ type: "SIGN_OUT" });
        return <Redirect to="/" />
      })
      .catch(err => {
        console.log("error:", err);
      });
  };

  handleClick = (e, {name}) => {
    this.setState({ active: name })
  };

  render() {
    const { active } = this.state;

    return (
      <NavbarComponent 
        active={active}
        logout={this.logout} 
        handleClick={this.handleClick} 
      />
    );
  }
}

export default connect(state => state)(Navbar);
