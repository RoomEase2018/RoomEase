import React from "react";
import axios from "react";
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
    dispatch({ type: "SIGN_OUT" });
    // axios
    //   .get(`/users/logout`)
    //   .then(res => {
    //   })
    //   .catch(err => {
    //     console.log("error:", err);
    //   });
  };

  handleClick = e => {
    const { addButton, gearButton } = this.state;
    console.log(e.target)
    e.target.name === "addButton"
      ? this.setState({
          [e.target.name]: !addButton
        })
      : this.setState({
          [e.target.name]: !gearButton
        });
  };

  render() {
    const { addButton, gearButton } = this.state;
    return <Navbar logout={this.logout} handleClick={this.handleClick} />;
  }
}

export default connect(state => state)(NavbarContainer);
