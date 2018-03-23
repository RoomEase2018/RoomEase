import React from 'react';
import axios from 'axios';
import '../Styles/Setup.css';

import CreateRoom from './CreateRoom';
import JoinRoom from './JoinRoom';

class Setup extends React.Component {
    constructor() {
        super();
        this.state = {
            roomID: '',
            roommateInputs: [],
            roomName: '',
            button: '',
        };
    };

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    addInput = (e) => {
        let { roommateInputs } = this.state;

        this.setState({
            roommateInputs: [...roommateInputs, <input type='text' name={`roommate${ roommateInputs.length + 1 }`} onChange={this.handleInput} />],
        });
    };

    removeInput = idx => {
        let { roommateInputs } = this.state;
        roommateInputs = roommateInputs.filter((input, arrIdx) => arrIdx !== idx);

        this.setState({
            roommateInputs: roommateInputs,
        });

    }

    resetButton = (e) => {
        e.target.className === 'reset' || e.target.className === 'setup-modal' 
            ? this.setState({
                button: ''
            }) : '';
    };

    handleCreate = e => {
        e.preventDefault();
        // axios post takes roommates array and user id
    };

    handleJoin = e => {
        e.preventDefault();
        // axios post takes room id and user id
    };

    render() {
        const { roommateInputs, button } = this.state;
        console.log(this.state);
        return (
            <div className='setup'>
                <h2> Don't Have a Room? </h2>
                <button onClick={(button) => { this.setState({ button: button === 'create' ? '' : 'create' }) }}> Create room </button>
                <button onClick={(button) => { this.setState({ button: button === 'join' ? '' : 'join' }) }}> Join room </button>
                { button === 'create' 
                    ? <CreateRoom 
                        roommateInputs={roommateInputs} 
                        addInput={this.addInput} 
                        removeInput={this.removeInput}
                        resetButton={this.resetButton} 
                        handleInput={this.handleInput} 
                        handleCreate={this.handleCreate} /> 
                    : '' }
                { button === 'join' 
                    ? <JoinRoom 
                        resetButton={this.resetButton} 
                        handleInput={this.handleInput} 
                        handleJoin={this.handleJoin} /> 
                    : '' }
            </div>
        );
    }
}

export default Setup;