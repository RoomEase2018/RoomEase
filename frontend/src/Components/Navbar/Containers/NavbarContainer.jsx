import React from "react";
import axios from "axios";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import Navbar from "../Components/Navbar";

class NavbarContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      
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

  handleClick = e => {
    const { taskButton, expenseButton, roommateButton, userEditBtn, apartmentEditBtn } = this.state;
    

  };

  render() {
    
    return (
      <Navbar 
        logout={this.logout} 
        handleClick={this.handleClick} 
      />
    );
  }
}

export default connect(state => state)(NavbarContainer);
