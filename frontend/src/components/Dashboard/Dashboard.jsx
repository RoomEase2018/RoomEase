import React from "react";
import RoomHeader from "./RoomHeader";
import UserSnapshot from "./"

const Dashboard = ({ bannerPic, roomName, user }) => (
  <div>
    <h2>Dashboard</h2>
    <RoomHeader bannerPic={bannerPic} roomName={roomName}/>
    <UserSnapshot
      userPic={user.pic}
      userRoomKarma={user.roomKarma}
      userChore={user.chore}
    />

  </div>
)

export default Dashboard;
