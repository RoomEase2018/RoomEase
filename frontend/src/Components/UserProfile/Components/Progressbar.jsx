import React from 'react';
import { Circle, Line } from 'rc-progress';
import { Grid } from "semantic-ui-react";

const Progressbar = ({ karma }) => {
    return (
        <Grid.Column className="progressbar">
            karma: {karma} points
            <Line
                percent={karma}
                strokeWidth="2"
                strokeColor="#3FC7FA"
            />
        </Grid.Column>
    )
}

export default Progressbar;