import React from "react";
import { Grid, Image, Segment } from "semantic-ui-react";

const UserSnapshot = ({ username, userPic, userRoomKarma, userTask }) => (
    <Grid.Column className='user-snapshot' width={8}>
        <h2>Welcome back, @{username}!</h2>
        <Image 
            alt="Profile Picture" 
            src={userPic} 
            size="small" 
            floated="left"
            spaced
            centered
            circular />
        <Segment compact color="pink" floated="left">
            <span>@{username}</span> <br />
            <span>{userRoomKarma} Karma Points</span> <br />
            <span> Upcoming Task: {`${userTask[0].desc} ${userTask[0].date}`} </span>
        </Segment>
    </Grid.Column>
);

export default UserSnapshot;