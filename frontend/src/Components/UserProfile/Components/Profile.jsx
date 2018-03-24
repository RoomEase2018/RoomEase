import React from "react";
import UserSnapshot from "./UserSnapshot";
import "../Styles/Profile.css";
import Progressbar from "./Progressbar"

const Profile = ({ user }) => {
    const { username, pic, roomKarma, task } = user
    return (
        <div className="profile">
            <Progressbar karma={roomKarma} />
            <UserSnapshot
                userPic={pic}
                userRoomKarma={roomKarma}
                userTask={task}
            />
        </div>
    )
}

export default Profile
