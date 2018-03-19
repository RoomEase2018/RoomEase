import React from "react";
import RoomHeader from "./Components/RoomHeader";
import UserSnapshot from "./Components/UserSnapshot";

const Dashboard = (props) => {
  const {bannerPic, roomName, user} = props.store
  return (
  <div>
    <h2>Dashboard</h2>
    <RoomHeader bannerPic={bannerPic} roomName={roomName}/>
    {/* <UserSnapshot
      userPic={this.props.store.user.pic}
      userRoomKarma={this.props.store.user.roomKarma}
      userChore={this.props.store.user.chore}
    /> */}

  </div>
)}

export default Dashboard;
