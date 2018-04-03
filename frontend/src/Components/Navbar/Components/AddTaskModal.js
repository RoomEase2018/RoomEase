import React from "react";
import { Modal, Dropdown, Icon } from "semantic-ui-react";
import Paper from 'material-ui/Paper';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import ActionDone from 'material-ui/svg-icons/action/done';
import { orange500, blue500 } from 'material-ui/styles/colors';
import "../Styles/ModalStyles.css";

const styles = {
    errorStyle: {
        color: orange500,
    },
    underlineStyle: {
        borderColor: orange500,
    },
    floatingLabelStyle: {
        color: orange500,
    },
    floatingLabelFocusStyle: {
        color: blue500,
    },
};

const tasks = [
    {title: "Take out trash", KP: 5},
    {title: "Clean the dishes", KP: 5},
    {title: "Sweep the house", KP: 10},
    {title: "Clean the kitchen", KP: 15},
    {title: "Mop the floor", KP: 15},
    {title: "Clean the bathroom", KP: 25},
];

class AddTaskModal extends React.Component {
    render() {
        const { active, roommates, assignedRoommate, handleClose, selectedDate, handleDate } = this.props;
        return (
            <div className="modal" onClick={handleClose}>
                <Paper className="form" zDepth={2}>
                    {/* <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                        {tasks.map(task => (
                            <MenuItem value="" primaryText={task.title} />
                        ))}
                    </DropDownMenu> */}
                    <TextField
                      name="title"
                      hintText="Enter task"
                      floatingLabelText="Task"
                    />
                    <TextField
                      name="description"
                      hintText="Enter task description"
                      floatingLabelText="Description"
                    />
                    <br />
                    <DatePicker 
                        hintText="Select a due date"
                        value={selectedDate}
                        onChange={handleDate} />
                    <br />
                    <Dropdown 
                        placeholder='Select Roommate' 
                        options={roommates}
                        multiple  
                    />
                    <br />
                    <RaisedButton
                        label="Submit"
                        primary={true}
                        icon={<ActionDone />}
                    />
                </Paper>
            </div>
        );
    }
}

export default AddTaskModal;