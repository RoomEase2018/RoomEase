import React from "react";

const ApartmentComponent = ({ info }) => {
    // console.log(info)
  return (
    <div>
      {info ? (
        <div className="apt">
          <div className="apt_banner_container">
            <h1 className="banner">
              <span>{info[0].apt_name}</span>
            </h1>
          </div>
          <div className="apt_rankings_container">
            <h2>Apartment Rankings</h2>
            <div>Name List</div>
            <div>Karma: {info[0].karma}</div>
          </div>
          <div className="apt_rewards_container">
            <h2>Rewards</h2>
            <div>Goal List</div>
            <div>Requirements List</div>
          </div>
        </div>
      ) : (
        <div> loading ... </div>
      )}
    </div>
  );
};

export default ApartmentComponent;
