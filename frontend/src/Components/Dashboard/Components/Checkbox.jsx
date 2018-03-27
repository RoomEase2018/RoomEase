import React from 'react';

const Checkbox = ({ karma }) => {
    return(
        <div id="checkbox" style={{ fontSize: 40 }}>
            Completed
            <input type="checkbox" name="completed" value="false" style={{zoom: 3}}/>
        </div>
    )
}

export default Checkbox;