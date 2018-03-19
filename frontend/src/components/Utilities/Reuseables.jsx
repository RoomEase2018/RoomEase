import React from "react"

const Reuseables = {
    logoIcon: function getLogoIcon(props) {
        return <img src={props.url} alt="RoomEase" />
    },
    logoName:  function getLogoName(props) {
        return <img src={props.url} alt="RoomEase" />
    }
}

export default Reuseables