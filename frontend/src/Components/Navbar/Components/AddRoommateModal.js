import React from "react";
import { Modal, Dropdown, Icon } from "semantic-ui-react";
import Paper from 'material-ui/Paper';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
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

class AddRoommateModal extends React.Component {
    render() {
        const { active, roommates, assignedRoommate, handleClose, selectedDate, handleDate } = this.props;
        return (
            <div className="modal" onClick={handleClose}>
                <Paper className="form" zDepth={2}>
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
                        // onClick={handleSubmit}
                    />
                </Paper>
            </div>
        );
    }
}

export default AddRoommateModal;