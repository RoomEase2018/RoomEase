import React from "react";
import axios from "axios";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import AddTaskModal from "./Components/AddTaskModal";
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
      .get(`/user/logout`)
      .then(res => {
        dispatch({ type: "SIGN_OUT" });
        return <Redirect to="/" />
      })
      .catch(err => {
        console.log("error:", err);
      });
  };

  handleClick = (e, {name}) => {
    console.log(name);
    this.setState({ active: name })
  };

  handleClose = (e) => {
    e.target.className === "modal" 
      ? this.setState({ active: "" })
      : "";
  };

  render() {
    const { active } = this.state;

    return (
      <div>
        <NavbarComponent 
          active={active}
          logout={this.logout} 
          handleClick={this.handleClick} 
        />
        {active === "task" ? <AddTaskModal active={active} handleClose={this.handleClose} /> : ""}
        {/* {active === "expense" ? <AddExpenseModal /> : ""} */}
      </div>
    );
  }
}

export default connect(state => state)(Navbar);
