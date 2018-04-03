import React from "react"
import AptProgress from "./AptProgress";

const ApartmentComponent = () => (
    <div className="apt">
        <div className="apt_banner_container">
            <h1 className="banner">
                <span>Room Name</span>
            </h1>
        </div>
        <div className='apt_rankings_container' >
            <h2>Apartment Rankings</h2>
            <div>Name List</div>
            <div>Karma List</div>
        </div>
        <div className='apt_rewards_container' >
            <h2>Rewards</h2>
            <div>Goal List</div>
            <div>Requirements List</div>
            <AptProgress />
        </div>

    </div>
)

export default ApartmentComponent
