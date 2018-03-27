import React from 'react';
import { Circle } from 'rc-progress';

const Progressbar = ({ karma }) => {
    console.log(karma)
    return(
        <div id="progressbar" style={{height:100, width:100}}>
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