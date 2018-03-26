import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import Menu, { MenuItem } from "rc-menu";

const Navbar = ({ addButton, gearButton, logout, handleClick }) => {
  const AddMenu = () => {
    return (
      <Menu defaultActiveFirst>
        <MenuItem >add roommate</MenuItem>
        <MenuItem key="3">add chore</MenuItem>
        <MenuItem key="4">add expense</MenuItem>
      </Menu>
    );
  };

  const SettingsMenu = () => {
    return (
      <Menu defaultActiveFirst>
        <MenuItem>edit apartment profile</MenuItem>
        <MenuItem key="3">edit user profile</MenuItem>
        <MenuItem key="4">log out</MenuItem>
      </Menu>
    );
  };

  return (
    <div className="navbar_container">
      <div className="navbar">
        {/* <button onClick={logout}>Log Out Redux</button> */}
        <div className="navbar_logo">
          <img
            className="navbar_logo_icon"
            src="https://i.imgur.com/m6bz64S.png"
            height="70px"
          />
          <h1 className="navbar_logo_name">RoomEase</h1>
        </div>
        <div className="navbar_buttons">
          <div className="navbar_buttons_icons">
            <Link to="/dashboard">
              <i class="fas fa-tv" />
            </Link>{" "}
            <Link to="/profile">
              <i class="fas fa-user" />
            </Link>{" "}
            <Link to="/apartment">
              <i class="fas fa-home" />
            </Link>{" "}
            <button onClick={handleClick} name="addButton">
              <i class="fas fa-plus" />
            </button>
            <button onClick={handleClick} name="gearButton">
              <i onClick={handleClick} class="fas fa-cog" name="gearButton" />
            </button>
          </div>
          {addButton ? (
                <div>
                  <div>{AddMenu()}</div>
                </div>
              ) : (
                ""
              )}
              {gearButton ? (
                <div>
                  <div>{SettingsMenu()}</div>
                </div>
              ) : (
                ""
              )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
