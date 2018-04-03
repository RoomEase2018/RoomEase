import React from "react";

const Banner = ({ info }) => {
  return <div>
    {" "}
    {info ? <img alt="apt-pic" src={info[0].apt_pic} /> : <div> loading ... </div>}
  </div>;
};

export default Banner;
