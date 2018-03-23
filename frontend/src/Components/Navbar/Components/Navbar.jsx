import React from "react"
import { Link } from "react-router-dom"
import "../Styles/Navbar.css"

const Navbar = () => (
    <div className="navbar">
        <div className="navbar_logo">
            <img
                className="navbar_logo_icon"
                src="https://i.imgur.com/m6bz64S.png"
                height="70px"
            />
            <h1 className="navbar_logo_name">RoomEase</h1>
        </div>
        <div className="navbar_buttons">
            <Link to="/dashboard">
                <i class="fas fa-tv" />
            </Link>{" "}
            <Link to="/">
                <i class="fas fa-user" />
            </Link>{" "}
            <Link to="">
                <i class="fas fa-home" />
            </Link>{" "}
            <i class="fas fa-plus" />{" "}
            <i class="fas fa-cog" />
        </div>
    </div>
)

export default Navbar
