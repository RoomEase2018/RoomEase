import React from 'react';
import { Circle, Line } from 'rc-progress';

const Progressbar = ({ karma }) => {
    return (
        <div id="progressbar">
            karma: {karma} points
            <Line
                percent={karma}
                strokeWidth="2"
                strokeColor="#3FC7FA"
            />
        </div>
    )
}

export default Progressbar;