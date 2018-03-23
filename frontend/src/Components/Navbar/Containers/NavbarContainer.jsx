import React from "react";
import { connect } from "react-redux";
import Navbar from "../Components/Navbar";

class NavbarContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      addButton: false,
      gearButton: false
    };
  }

  logout = () => {
    const { dispatch } = this.props;
    dispatch({ type: "PROFILE_USER_LOGGED_IN" });
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
    return <Navbar logout={this.logout} addButton={addButton} gearButton={gearButton} handleClick={this.handleClick} />;
  }
}

export default connect(state => state)(NavbarContainer);
