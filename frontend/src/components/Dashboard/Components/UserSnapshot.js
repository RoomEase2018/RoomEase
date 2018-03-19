import React from "react";

const UserSnapshot = ({ userPic, userRoomKarma, userChore }) => (
    <div>
        <img alt="Profile Picture" src={userPic} />
        <p> Karma Points: {userRoomKarma} </p>
        <p> Upcoming Chore: {userChore} </p>
    </div>
);

export default UserSnapshot;