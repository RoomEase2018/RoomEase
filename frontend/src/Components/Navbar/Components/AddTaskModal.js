import React from "react";
import { Modal } from "semantic-ui-react";
import Paper from 'material-ui/Paper';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';
import "../Styles/ModalStyles.css";

const style = {
    height: 100,
    width: 100,
    margin: "auto",
    textAlign: "center",
  };

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

class AddTaskModal extends React.Component {
    render() {
        const { active, handleClose } = this.props;
        return (
            <div className="modal" onClick={handleClose}>
                <Paper className="form" zDepth={2}>
                    <TextField
                      hintText="Hint Text"
                      floatingLabelText="Floating Label Text"
                    />
                    <SelectField
                        floatingLabelText="Assign Roommate"
                        // value={this.state.value}
                        // onChange={this.handleChange}
                    >
                        <MenuItem value={1} primaryText="Benjy" />
                        <MenuItem value={2} primaryText="Aiden" />
                        <MenuItem value={3} primaryText="Eric" />
                    </SelectField>
                </Paper>
            {/* <Modal
                open={active === "task"}
                header='Reminder!'
                content='Call Benjamin regarding the reports.'
                onClose={handleClose}
                actions={[
                'Snooze',
                { key: 'done', content: 'Done', positive: true },
                ]}
            /> */}
            </div>
        );
    }
}

export default AddTaskModal;