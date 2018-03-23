import React from "react";
import UserSnapshot from "./UserSnapshot";
import "../Styles/Profile.css";

const Profile = ({ user }) => {
  const { username, pic, roomKarma, task } = user;
  return (
    <div>
      <h2>Profile</h2>
      <UserSnapshot
        userPic={pic}
        userRoomKarma={roomKarma}
        userTask={task}
      />
    </div>)
    };

export default Profile
