import React from "react";
import { Grid, Image } from "semantic-ui-react";

const UserSnapshot = ({ username, userPic, userRoomKarma, userTask }) => (
    <Grid.Column className='user-snapshot'>
        <Image alt="Profile Picture" src={userPic} size='medium' avatar />
        <span>
            @{username}
            <p> Karma Points: {userRoomKarma} </p>
            <p> Upcoming Task: {`${userTask[0].desc} ${userTask[0].date}`} </p>
        </span>
    </Grid.Column>
);

export default UserSnapshot;