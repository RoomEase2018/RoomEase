import React from 'react';
import axios from 'axios';


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

    handleInput = () => {
        this.setState({
            [e.target.name]: e.target.value
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
                { button === 'create' ? <CreateRoom handleInput={this.handleInput} handleCreate={this.handleCreate} /> : '' }
                { button === 'join' ? <JoinRoom handleInput={this.handleInput} handleJoin={this.handleJoin} /> : '' }
            </div>
        );
    }
}

export default Setup;
