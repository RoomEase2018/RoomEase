import React from "react";
import UserSnapshot from "./UserSnapshot";
import "../Styles/Profile.css";
import Activity from "./Activity";
import Badges from "./Badges";
import Setup from "./Setup";
import { Grid } from "semantic-ui-react";

const Profile = ({ user }) => {
    const { username, pic, roomKarma, task, apt_id } = user;

    return (
        <Grid className="profile" container stackable centered columns={4} verticalAlign="middle">
            <Grid.Row centered columns={2}> 
                <UserSnapshot
                    username={username}
                    userPic={pic}
                    userRoomKarma={roomKarma}
                    userTask={task}
                />
                
                <Badges />
            </Grid.Row>
            <Grid.Row>
                { !apt_id ? <Setup /> : <Activity />}
            </Grid.Row>
        </Grid>
    );
};

export default Profile;