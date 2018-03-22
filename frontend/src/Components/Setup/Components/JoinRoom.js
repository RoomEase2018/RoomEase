import React from 'react';


class JoinRoom extends React.Component {
    

    render() {
        const { resetButton, handleInput, handleJoin } = this.props;
        return (
            <div className='setup-modal' onClick={resetButton}>
                <form onSubmit={handleJoin}>
                <span className='reset' onClick={resetButton}>&times;</span>
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
