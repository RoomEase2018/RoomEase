import React from "react";
import axios from "axios";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import AddTaskModal from "./Components/AddTaskModal";
import AddExpenseModal from "./Components/AddExpenseModal";
import NavbarComponent from "./Components/NavbarComponent";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      active: "",
      assignedRoommate: [],
      checked: false,
      roommates: [
        {
          text: 'Aiden',
          value: 'Aiden',
          image: { avatar: true, src: 'https://react.semantic-ui.com/assets/images/avatar/small/justen.jpg' },
        },
        {
          text: 'Benjy',
          value: 'Benjy',
          image: { avatar: true, src: 'https://react.semantic-ui.com/assets/images/avatar/small/christian.jpg' },
        },
        {
          text: 'Eric',
          value: 'Eric',
          image: { avatar: true, src: 'https://react.semantic-ui.com/assets/images/avatar/small/matt.jpg' },
        },
      ],
      selectedDate: null,
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
    this.setState({ active: name })
  };

  handleDate = (event, date) => {
    this.setState({
      selectedDate: date,
    });
  };

  toggleCheckbox = e => {
    const { checked } = this.state;
    console.log(checked)
    this.setState({
      checked: !checked
    });
  };

  handleClose = (e) => {
    e.target.className === "modal" 
      ? this.setState({ active: "" })
      : "";
  };

  render() {
    const { active, assignedRoommate, checked, roommates, selectedDate, handleDate } = this.state;

    return (
      <div>
        <NavbarComponent 
          active={active}
          logout={this.logout} 
          handleClick={this.handleClick} 
        />
        {active === "task" 
          ? <AddTaskModal 
              active={active}  
              roommates={roommates} 
              selectedDate={selectedDate}
              handleDate={this.handleDate}
              assignedRoommate={assignedRoommate}
              handleClose={this.handleClose} /> 
          : ""}
        {active === "expense" 
          ? <AddExpenseModal 
              active={active}
              checked={checked}
              roommates={roommates}
              selectedDate={selectedDate}
              handleDate={this.handleDate}
              handleClose={this.handleClose}
              toggleCheckbox={this.toggleCheckbox}
            /> 
          : ""}
          {/* {active === "roommate" ? <AddRoommateModal active={active} handleClose={this.handleClose} /> : ""}
          {active === "apartment" ? <EditApartmentModal active={active} handleClose={this.handleClose} /> : ""}
          {active === "user" ? <EditUserModal active={active} handleClose={this.handleClose} /> : ""} */}
      </div>
    );
  }
}

export default connect(state => state)(Navbar);
