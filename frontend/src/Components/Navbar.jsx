import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
    <div>
        <div className="logo">
            <img src="https://i.imgur.com/m6bz64S.png" height="70px" />
            <h1>RoomEase</h1>
        </div>
        <nav className="buttons">
            <Link to="/dashboard"><i class="fas fa-tv" /></Link>
            <Link to=""><i class="fas fa-user" /></Link>
            <Link to=""><i class="fas fa-home" /></Link>
            <i class="fas fa-plus" />
            <i class="fas fa-cog" />
        </nav>
    </div>
)

export default Navbar
