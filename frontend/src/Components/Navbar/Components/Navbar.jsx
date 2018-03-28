import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Icon, Image, Dropdown } from "semantic-ui-react";
import "../Styles/Navbar.css";

const Navbar = ({ addButton, gearButton, logout, handleClick }) => {

  return (
    <div className="navbar_container">
      <div className="navbar">

        <div className="navbar_logo">
          <img
            className="navbar_logo_icon"
            src="https://i.imgur.com/m6bz64S.png"
            height="70px"
          />
          <h1 className="navbar_logo_name">RoomEase</h1>
        </div>

        <div className="navbar_buttons navbar_buttons_icons">
        {/* className="navbar_buttons" */}
          {/* className="navbar_buttons_icons" */}
            <Link to="/dashboard">
              <Icon link size="large" name="dashboard" />
            </Link>{" "}
            <Link to="/profile">
              <Icon link size="large" name="user circle outline" />
            </Link>{" "}
            <Link to="/apartment">
              <Icon link size="large" name="users" />
            </Link>{" "}

            <Dropdown icon='plus' size="large" floating className='icon' direction='left'>
              <Dropdown.Menu>
                <Dropdown.Item label={<Icon name="add to calendar" color="red" />} text='Add Task' />
                <Dropdown.Item label={<Icon><Icon.Group><Icon name="dollar" color="blue" /><Icon corner name="plus" color="blue" /></Icon.Group></Icon>} text='Add Expense' />
                <Dropdown.Item label={<Icon name="add user" color="green" />} text='Add Roommate' />
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown icon='setting' size="large" floating className='icon' direction='left'>
              <Dropdown.Menu>
                <Dropdown.Item label={<Icon name="setting" color="blue" />} text='Edit Apartment Profile' />
                <Dropdown.Item label={<Icon name="setting" color="red" />} text='Edit User Profile' />
                <Dropdown.Item onClick={logout} label={<Icon name="power" color="teal" />} text='Sign out' />
              </Dropdown.Menu>
            </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
