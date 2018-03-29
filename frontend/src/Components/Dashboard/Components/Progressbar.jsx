import React from 'react';
import { Circle } from 'rc-progress';

const Progressbar = ({ karma }) => {
    return(
        <div className='progress_bar' id="progressbar">
        <Circle
        percent={karma} 
        strokeWidth="10"
        trailWidth="10"
        strokeColor="#3FC7FA"
        />
        </div>
    )
}

export default Progressbar;