import React from "react"

const Apartment = () => (
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
            <div>Progress Bar</div>
        </div>

    </div>
)

export default Apartment
