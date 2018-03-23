import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
    <div>
        <div className="logo">
            <img src="https://i.imgur.com/m6bz64S.png" height="70px" />
            <h1>RoomEase</h1>
        </div>
        <div className="buttons">
            <Link to="/dashboard"> <i class="fas fa-tv" /> </Link>
            <Link to="/profile"> <i class="fas fa-user" /> </Link>
            <i class="fas fa-home" />
            <i class="fas fa-plus" />
            <i class="fas fa-cog" />
        </div>
    </div>
)

export default Navbar
