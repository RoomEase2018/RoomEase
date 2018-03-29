import React from "react";
import { Link } from "react-router-dom";
import { Icon, Dropdown, Modal, Popup } from "semantic-ui-react";
import "../Styles/Navbar.css";

const Navbar = ({ logout, handleClick }) => {
  const linkButtons = [
    { name: "dashboard", icon: "dashboard" }, 
    { name: "profile", icon: "user circle outline" }, 
    { name: "apartment", icon: "users" }
  ];

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
          {linkButtons.map((button, idx) => 
            <Popup 
              key={idx}
              trigger={
                <Link to={`/${button.name}`}>
                  <Icon link size="large" name={`${button.icon}`} />
                </Link>}
              content={`${button.name}`}
              position='bottom center'
              size='tiny'
              basic
            /> 
          )}

            <Dropdown icon='plus' size="large" floating className='icon' direction='left'>
              <Dropdown.Menu>
                <Modal trigger={<Dropdown.Item label={<Icon name="add to calendar" color="red" />} text='Add Task' />}>
                  <Modal.Header>Add a Task</Modal.Header>
                </Modal>
                <Modal trigger={<Dropdown.Item label={<Icon><Icon.Group><Icon name="dollar" color="blue" /><Icon corner name="plus" color="blue" /></Icon.Group></Icon>} text='Add Expense' />}>
                  <Modal.Header>Add an Expense</Modal.Header>
                </Modal>
                <Modal style={{display:"flex", justifyContent:"center"}} trigger={<Dropdown.Item label={<Icon name="add user" color="green" />} text='Add Roommate' />}>
                  <Modal.Header>Add a Roommate</Modal.Header>
                </Modal>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown icon='setting' size="large" floating className='icon' direction='left'>
              <Dropdown.Menu>
                <Dropdown.Item label={<Icon name="setting" color="blue" />} text='Edit Apartment Profile' />
                <Dropdown.Item label={<Icon name="setting" color="red" />} text='Edit User Profile' />
                <Dropdown.Item onClick={logout} label={<Icon name="power" color="teal" />} text='Sign Out' />
              </Dropdown.Menu>
            </Dropdown>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
