import React from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
import { Link } from 'react-router-dom';

import Dashboard from "./Dashboard/Dashboard"
>>>>>>> 44644d272e14de8d927797ade56e5c1d54a80b61

const Navbar = () => (
    <div>
        <div className="logo">
            <img src="https://i.imgur.com/m6bz64S.png" height="70px" />
            <h1>RoomEase</h1>
        </div>
<<<<<<< HEAD
        <div className="buttons">
            <Link to="/dashboard"> <i class="fas fa-tv" /> </Link>
            <Link to="/profile"> <i class="fas fa-user" /> </Link>
            <i class="fas fa-home" />
=======
        <nav className="buttons">
            <Link to="/dashboard"><i class="fas fa-tv" /></Link>
            <Link to=""><i class="fas fa-user" /></Link>
            <Link to=""><i class="fas fa-home" /></Link>
>>>>>>> 44644d272e14de8d927797ade56e5c1d54a80b61
            <i class="fas fa-plus" />
            <i class="fas fa-cog" />
        </nav>
    </div>
)

export default Navbar
