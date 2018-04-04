import React from "react";
import axios from "axios";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import AddTaskModal from "./Components/AddTaskModal";
import AddExpenseModal from "./Components/AddExpenseModal";
import AddRoommateModal from "./Components/AddRoommateModal";
import NavbarComponent from "./Components/NavbarComponent";
import * as api from "../../API/roomeaseAPI";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      active: "",
      isChecked: false,
      task: { title: "", description: "" },
      assignedRoommates: [],
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

  handleChange = (e, { name, key, value }) => {
    const { task } = this.state;
    console.log("name:", name, "key:", key, "value:", value);
    name === "description"
      ? this.setState({
          task: {...task, description: value}
        })
      : this.setState({
        task: {...task, title: value}
      });
  };

  handleDate = (event, date) => {
    console.log(date, typeof date);
    this.setState({
      selectedDate: date,
    });
  };

  toggleCheckbox = e => {
    const { isChecked } = this.state;
    
    this.setState({
      isChecked: !isChecked
    });
  };

  handleClose = (e) => {
    e.target.className === "modal" 
      ? this.setState({ 
          active: "", 
          selectedDate: null, 
          isChecked: false, 
          assignedRoommates: [], 
          task: { title: "", description: ""} 
        })
      : "";
  };

  handleSubmit = e => {
    const { assignedRoommates, selectedDate, isChecked } = this.state;

    if (!isChecked || e.target.name === "addTask") {
      api.addTask(`apt_id, title`, `from_user_id`, `to_user_id`, `due_date`, `message`, `karma`, `cost`); 
    } else if(e.target.name === "addRoommate") {
      api.addUserToApartment(`user_id`, `apt_id`);
    } else if (isChecked) {
      api.addRecurringTask(`apt_id, title`, `from_user_id`, `to_user_id`, `due_date`, `message`, `karma`, `cost`);
    };
  };

  render() {
    const { active, task, assignedRoommates, isChecked, roommates, selectedDate, handleDate } = this.state;

    return (
      <div>
        <NavbarComponent 
          active={active}
          logout={this.logout} 
          handleClick={this.handleClick} 
        />
        {active === "task" 
          ? <AddTaskModal 
              task={task}
              active={active}  
              roommates={roommates} 
              selectedDate={selectedDate}
              handleDate={this.handleDate}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              handleClose={this.handleClose}
              assignedRoommates={assignedRoommates} /> 
          : ""}
        {active === "expense" 
          ? <AddExpenseModal 
              active={active}
              isChecked={isChecked}
              roommates={roommates}
              selectedDate={selectedDate}
              handleDate={this.handleDate}
              handleClose={this.handleClose}
              handleSubmit={this.handleSubmit}
              toggleCheckbox={this.toggleCheckbox}
            /> 
          : ""}
          {active === "roommate" 
            ? <AddRoommateModal 
                active={active} 
                handleClose={this.handleClose} 
                handleSubmit={this.handleSubmit}
              /> 
            : ""}
          {/* {active === "apartment" ? <EditApartmentModal active={active} handleClose={this.handleClose} /> : ""}
          {active === "user" ? <EditUserModal active={active} handleClose={this.handleClose} /> : ""} */}
      </div>
    );
  }
}

export default connect(state => state)(Navbar);
