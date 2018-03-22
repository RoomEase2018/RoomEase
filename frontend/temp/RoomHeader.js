import React from "react";

const RoomHeader = ({ bannerPic, roomName }) => (
    <div>
        <img alt="Room Banner" src={bannerPic} />
        <h2> {roomName} </h2>
    </div>
);

export default RoomHeader;