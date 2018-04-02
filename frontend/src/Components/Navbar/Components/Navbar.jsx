import React from "react";
import { Link } from "react-router-dom";
import { Menu, Item, Grid, Icon, Dropdown, DropdownMenu, Modal, Popup } from "semantic-ui-react";
import "../Styles/Navbar.css";
import AddTaskModal from "./AddTaskModal";

const styles = {
  backgroundColor: "lightcoral",
  width: "100%"
};

const Navbar = ({ logout, active, handleClick }) => {
  const linkButtons = [
    { name: "dashboard", icon: "dashboard" },
    { name: "profile", icon: "user circle outline" },
    { name: "apartment", icon: "users" }
  ];

  return (
    // className="navbar_container"
    <div style={styles}>
      <Grid columns="equal" verticalAlign="middle" relaxed centered padded>
         <Grid.Column>
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
        {linkButtons.map((button, idx) => (
          <Menu.Item
            key={idx}
            link={`/${button.name}`}
            name={`${button.name}`}
            active={active === button.name}
            onClick={this.handleClick}
          >
            <Link to={`/${button.name}`}>
              <Icon link size="large" name={`${button.icon}`} />
              {button.name}
            </Link>
          </Menu.Item>
        ))}
        </Menu>
          </Grid.Column>
        <Grid.Column width={13}/>

        <Grid.Column>
          <Dropdown icon="plus" size="large" floating direction="left">
            <DropdownMenu>
              <Modal
              trigger={
                <Dropdown.Item
                  label={<Icon name="add to calendar" color="red" />}
                  text="Add Task"
                />
              }
            >
              <AddTaskModal />
              {/* <Modal.Header>Add a Task</Modal.Header> */}
            </Modal>
            <Modal
              trigger={
                <Dropdown.Item
                  label={
                    <Icon>
                      <Icon.Group>
                        <Icon name="dollar" color="blue" />
                        <Icon corner name="plus" color="blue" />
                      </Icon.Group>
                    </Icon>
                  }
                  text="Add Expense"
                />
              }
            >
              <Modal.Header>Add an Expense</Modal.Header>
            </Modal>
            <Modal
              trigger={
                <Dropdown.Item
                  label={<Icon name="add user" color="green" />}
                  text="Add Roommate"
                />
              }
            >
              <AddTaskModal />
              <Modal.Header>Add a Roommate</Modal.Header>
            </Modal>
          </DropdownMenu>
        </Dropdown>

        <Dropdown icon="setting" size="large" floating direction="left">
          <DropdownMenu>
            <Dropdown.Item
              label={<Icon name="setting" color="blue" />}
              text="Edit Apartment Profile"
            />
            <Dropdown.Item
              label={<Icon name="setting" color="red" />}
              text="Edit User Profile"
            />
            <Dropdown.Item
              onClick={logout}
              label={<Icon name="power" color="teal" />}
              text="Sign Out"
            />
          </DropdownMenu>
        </Dropdown>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Navbar;

// <Grid columns="equal" verticalAlign="middle" relaxed centered padded>
//         <Grid.Column>
//           <Item>
//             <Item.Content>
//             <Link to="/">
//                 <img
//                   className="navbar_logo_icon"
//                   src="https://i.imgur.com/m6bz64S.png"
//                   height="70px"
//                 />
//               </Link>
//             </Item.Content>
//           </Item>
//           {linkButtons.map((button, idx) => (
//               <Item
//                 key={idx}
//                 name={`${button.name}`}
//                 link
//               >
//                 <Item.Content>
//                   <Link to={`/${button.name}`}>
//                     <Icon link size="large" name={`${button.icon}`} />
//                     {button.name}
//                   </Link>
//                 </Item.Content>
//               </Item>
//             ))}
//           </Grid.Column>
//         <Grid.Column width={13}/>

//         <Grid.Column>
//           <Dropdown icon="plus" size="large" floating direction="left">
//             <DropdownMenu>
//               <Modal
//               trigger={
//                 <Dropdown.Item
//                   label={<Icon name="add to calendar" color="red" />}
//                   text="Add Task"
//                 />
//               }
//             >
//               <AddTaskModal />
//               {/* <Modal.Header>Add a Task</Modal.Header> */}
//             </Modal>
//             <Modal
//               trigger={
//                 <Dropdown.Item
//                   label={
//                     <Icon>
//                       <Icon.Group>
//                         <Icon name="dollar" color="blue" />
//                         <Icon corner name="plus" color="blue" />
//                       </Icon.Group>
//                     </Icon>
//                   }
//                   text="Add Expense"
//                 />
//               }
//             >
//               <Modal.Header>Add an Expense</Modal.Header>
//             </Modal>
//             <Modal
//               trigger={
//                 <Dropdown.Item
//                   label={<Icon name="add user" color="green" />}
//                   text="Add Roommate"
//                 />
//               }
//             >
//               <AddTaskModal />
//               <Modal.Header>Add a Roommate</Modal.Header>
//             </Modal>
//           </DropdownMenu>
//         </Dropdown>

//         <Dropdown icon="setting" size="large" floating direction="left">
//           <DropdownMenu>
//             <Dropdown.Item
//               label={<Icon name="setting" color="blue" />}
//               text="Edit Apartment Profile"
//             />
//             <Dropdown.Item
//               label={<Icon name="setting" color="red" />}
//               text="Edit User Profile"
//             />
//             <Dropdown.Item
//               onClick={logout}
//               label={<Icon name="power" color="teal" />}
//               text="Sign Out"
//             />
//           </DropdownMenu>
//         </Dropdown>
//         </Grid.Column>
//       </Grid>

{/* <Menu secondary>
         <Menu.Item>
           <Link to="/">
             <img
              className="navbar_logo_icon"
              src="https://i.imgur.com/m6bz64S.png"
              height="70px"
            />
          </Link>
        </Menu.Item>
        {linkButtons.map((button, idx) => (
          <Menu.Item
            key={idx}
            link
            name={`${button.name}`}
            active={active === button.name}
            onClick={this.handleClick}
          >
            <Link to={`/${button.name}`}>
              <Icon link size="large" name={`${button.icon}`} />
              {button.name}
            </Link>
          </Menu.Item>
        ))}

        <Menu.Menu position="right">
          <Menu.Item>
            <Dropdown item icon="plus" size="large" floating direction="left">
              <Dropdown.Menu>
                <Modal
                  trigger={
                    <Dropdown.Item
                      label={<Icon name="add to calendar" color="red" />}
                      text="Add Task"
                    />
                  }
                >
                  <Modal.Header>Add a Task</Modal.Header>
                </Modal>
                <Modal
                  trigger={
                    <Dropdown.Item
                      label={
                        <Icon>
                          <Icon.Group>
                            <Icon name="dollar" color="blue" />
                            <Icon corner name="plus" color="blue" />
                          </Icon.Group>
                        </Icon>
                      }
                      text="Add Expense"
                    />
                  }
                >
                  <Modal.Header>Add an Expense</Modal.Header>
                </Modal>
                <Modal
                  trigger={
                    <Dropdown.Item
                      label={<Icon name="add user" color="green" />}
                      text="Add Roommate"
                    />
                  }
                >
                  <AddTaskModal />
                  <Modal.Header>Add a Roommate</Modal.Header>
                </Modal>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>

          <Menu.Item>
            <Dropdown item icon="setting" size="large" floating direction="left">
              <Dropdown.Menu>
                <Dropdown.Item
                  label={<Icon name="setting" color="blue" />}
                  text="Edit Apartment Profile"
                />
                <Dropdown.Item
                  label={<Icon name="setting" color="red" />}
                  text="Edit User Profile"
                />
                <Dropdown.Item
                  onClick={logout}
                  label={<Icon name="power" color="teal" />}
                  text="Sign Out"
                />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        </Menu.Menu>
      </Menu> */}