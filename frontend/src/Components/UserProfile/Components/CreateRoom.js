import React from 'react';


class CreateRoom extends React.Component {
    render() {
        const { roommateInputs, addInput, removeInput, resetButton, handleInput, handleCreate } = this.props;
        return (
            <div className='setup-modal' onClick={resetButton}>
                <form onSubmit={handleCreate}>
                    <span className='reset' onClick={resetButton}>&times;</span>
                    <label>
                        Room Name: {' '}
                        <input type='text' name='roomName' onChange={handleInput} />
                    </label>
                    {roommateInputs.map((input, idx) => {
                        return(
                            <label key={idx}>
                                Roommate {idx + 1}: {" "}
                                {input} {" "}
                                <span onClick={() => removeInput(idx)}>&times;</span>
                            </label>
                        );
                    })}
                    <span onClick={addInput}> add roommate </span> {/* adds roommate label onClick (refer to label below)  */}
                    
                    <input type='submit' onClick={handleCreate} />
                </form>
            </div>
        );
    }
}

export default CreateRoom;