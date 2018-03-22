import React from 'react';


class CreateRoom extends React.Component {
    render() {
        const { resetButton, handleInput, handleCreate } = this.props;
        return (
            <div className='setup-modal' onClick={resetButton}>
                <form onSubmit={handleCreate}>
                    <span onClick={resetButton}>&times;</span>
                    <label>
                        Room Name: {' '}
                        <input type='text' name='roomName' onChange={handleInput} />
                    </label>
                    <button> add roommate </button> {/* adds roommate label onCLick (refer to label below)  */}
                    <label>
                        Roommate: {' '}
                        <input type='text' name='roommates' onChange={handleInput} />
                    </label>
                    <input type='submit' onClick={handleCreate} />
                </form>
            </div>
        );
    }
}

export default CreateRoom;