import React from 'react';


class JoinRoom extends React.Component {
    render() {
        const { handleInput, handleJoin } = this.props;
        return (
            <div className='setup-modal'>
                <form onSubmit={handleJoin}>
                    <label>
                        Room ID: {' '}
                        <input type='text' name='roomID' onChange={handleInput} />
                    </label>
                    <input type='submit' onClick={handleJoin} />
                </form>
            </div>
        );
    }
}

export default JoinRoom;
