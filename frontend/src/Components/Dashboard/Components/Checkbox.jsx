import React from 'react';

const Checkbox = ({ karma }) => {
    return(
        <div className="checkbox" id="checkbox" >
            <input type="checkbox" name="completed" value="false"/>
            Done
        </div>
    )
}

export default Checkbox;