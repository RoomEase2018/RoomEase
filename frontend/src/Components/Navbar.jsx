import React, { Component } from "react";
import Menu, { MenuItem } from "rc-menu";

const addRoommateSubMenu = <span>add roommate</span>;
const addChoreSubMenu = <span>add chore</span>;
const addExpenseSubMenu = <span>add Expanse</span>;
const addGoalSubMenu = <span>add Goal</span>;

class Navbar extends Component {
  AddMenu = (
    <Menu>
      <MenuItem title={addRoommateSubMenu} key="1" />
      <MenuItem title={addChoreSubMenu} key="2" />
      <MenuItem title={addExpenseSubMenu} key="3" />
      <MenuItem title={addGoalSubMenu} key="4" />
    </Menu>
  );

  render() {
    const { addMenu } = this.AddMenu
    return (
      <nav>
        <div>
          <div className="logo">
            <img src="https://i.imgur.com/m6bz64S.png" height="70px" />
            <h1>RoomEase</h1>
          </div>
          <div className="buttons">
            <i className="fas fa-tv" />
            <i className="fas fa-user" />
            <i className="fas fa-home" />
            <div style={{ width: 400 }}>
              <i className="fas fa-plus" />
              {addMenu}
            </div>
            <i className="fas fa-cog" />
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
