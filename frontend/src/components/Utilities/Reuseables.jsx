import React from "react";
import NavBar from "./Components/NavBar";


const Reuseables = {
    logoIcon: function getLogoIcon(props) {
        return <img src={props.url} alt="RoomEase" />
    },
    logoName:  function getLogoName(props) {
        return <img src={props.url} alt="RoomEase" />
    }, 
    navBar: function getNavBar(props) {
        return <NavBar logoUrl={props.logoUrl} logoName={props.logoName} />
    },
}

export default Reuseables