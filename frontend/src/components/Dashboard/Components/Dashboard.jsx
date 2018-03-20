import React from "react";
import RoomHeader from "./RoomHeader";
import UserSnapshot from "./UserSnapshot";

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
