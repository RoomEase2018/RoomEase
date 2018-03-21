import React from 'react';


class CreateRoom extends React.Component {
    render() {
        const { handleInput, handleCreate } = this.props;
        return (
            <div className='setup-modal'>
                <form onSubmit={handleCreate}>
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