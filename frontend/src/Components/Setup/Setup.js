import React from 'react';
import axios from 'axios';
import './Styles/Setup.css';

import CreateRoom from './Components/CreateRoom';
import JoinRoom from './Components/JoinRoom';

class Setup extends React.Component {
    constructor() {
        super();
        this.state = {
            roomID: '',
            roommates: [],
            roomName: '',
            button: '',
        };
    };

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    resetButton = () => {
        this.setState({
            button: ''
        });
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
        const { button } = this.state;
        return (
            <div className='setup'>
                <h2> Don't Have a Room? </h2>
                <button onClick={(button) => { this.setState({ button: button === 'create' ? '' : 'create' }) }}> Create room </button>
                <button onClick={(button) => { this.setState({ button: button === 'join' ? '' : 'join' }) }}> Join room </button>
                { button === 'create' ? <CreateRoom resetButton={this.resetButton} handleInput={this.handleInput} handleCreate={this.handleCreate} /> : '' }
                { button === 'join' ? <JoinRoom resetButton={this.resetButton} handleInput={this.handleInput} handleJoin={this.handleJoin} /> : '' }
            </div>
        );
    }
}

export default Setup;
