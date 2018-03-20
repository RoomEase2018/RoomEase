import React from "react";
import RoomHeader from "./RoomHeader";
import UserSnapshot from "./UserSnapshot";

const Dashboard = ({ store, profile }) => {
  const { bannerPic, roomName } = store;
  const { username, pic, roomKarma, chore } = profile;
  return (
  <div>
    <h2>Dashboard</h2>
    <RoomHeader bannerPic={bannerPic} roomName={roomName}/>
    <UserSnapshot
      userPic={pic}
      userRoomKarma={roomKarma}
      userChore={chore}
    />

  </div>
)}

export default Dashboard;
