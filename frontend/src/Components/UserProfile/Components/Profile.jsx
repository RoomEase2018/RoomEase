import React from "react";
import UserSnapshot from "./UserSnapshot";
import "../Styles/Profile.css";
import Progressbar from "./Progressbar";
import Setup from '../Components/Setup';
import { Grid } from "semantic-ui-react";

const Profile = ({ user }) => {
    const { username, pic, roomKarma, task, apt_id } = user;

    return (
        <Grid className="profile" centered columns={3}>
            <Grid.Row centered columns={2}> 
                <Grid.Column width={5}>
                    <UserSnapshot
                        username={username}
                        userPic={pic}
                        userRoomKarma={roomKarma}
                        userTask={task}
                    />
                </Grid.Column>
                <Grid.Column width={5}>
                    <Progressbar karma={roomKarma} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                { !apt_id ? <Setup /> : ''}
            </Grid.Row>
        </Grid>
    );
};

export default Profile;
