import React from "react";
import { Link } from "react-router-dom";
import { Menu, Icon, Dropdown, Modal, Popup } from "semantic-ui-react";
import "../Styles/Navbar.css";

const Navbar = ({ logout, active, handleClick }) => {
  const linkButtons = [
    { name: "dashboard", icon: "dashboard" }, 
    { name: "profile", icon: "user circle outline" }, 
    { name: "apartment", icon: "users" }
  ];

  return (
    // className="navbar_container"
    <div>
      <Menu secondary>
        <Menu.Item>
          <Link to="/">
            <img
              className="navbar_logo_icon"
              src="https://i.imgur.com/m6bz64S.png"
              height="70px"
            />
          </Link>
        </Menu.Item>
          {linkButtons.map((button, idx) => 
            <Menu.Item 
              key={idx} 
              name={`${button.name}`}
              active={active === button.name} 
              onClick={this.handleClick}>
              <Link to={`/${button.name}`}>
                <Icon link size="large" name={`${button.icon}`} />
                {button.name}
              </Link>
            </Menu.Item> 
          )}
      
      {/* <div className="navbar">
        <div className="navbar_logo">
          <img
            className="navbar_logo_icon"
            src="https://i.imgur.com/m6bz64S.png"
            height="70px"
          />
          <h1 className="navbar_logo_name">RoomEase</h1>
        </div>

         */}
         {/* <div className="navbar_buttons"> */}
        {/* className="navbar_buttons" */}
          {/* className="navbar_buttons_icons" */}
          
          <Menu.Menu position="right">
            <Menu.Item>
              <Dropdown icon='plus' size="large" floating direction='left'>
                <Dropdown.Menu>
                  <Modal trigger={<Dropdown.Item label={<Icon name="add to calendar" color="red" />} text='Add Task' />}>
                    <Modal.Header>Add a Task</Modal.Header>
                  </Modal>
                  <Modal trigger={<Dropdown.Item label={<Icon><Icon.Group><Icon name="dollar" color="blue" /><Icon corner name="plus" color="blue" /></Icon.Group></Icon>} text='Add Expense' />}>
                    <Modal.Header>Add an Expense</Modal.Header>
                  </Modal>
                  <Modal trigger={<Dropdown.Item label={<Icon name="add user" color="green" />} text='Add Roommate' />}>
                    <Modal.Header>Add a Roommate</Modal.Header>
                  </Modal>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>

            <Menu.Item>
              <Dropdown icon='setting' size="large" floating direction='left'>
                <Dropdown.Menu>
                  <Dropdown.Item label={<Icon name="setting" color="blue" />} text='Edit Apartment Profile' />
                  <Dropdown.Item label={<Icon name="setting" color="red" />} text='Edit User Profile' />
                  <Dropdown.Item onClick={logout} label={<Icon name="power" color="teal" />} text='Sign Out' />
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
  );
};

export default Navbar;
