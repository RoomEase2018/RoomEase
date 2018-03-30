import React, { Component } from "react";
import UpNext from "./UpNextComponent";
import Calendar from "./Calendar";
import BulletinContainer from '../Containers/BulletinContainer'

class Dashboard extends Component {
    render() {
        return (
            <div className='dashboard'>
                dashboard
                <UpNext task={this.props.profile.task} karma={this.props.profile.roomKarma} />
                <Calendar />
                <BulletinContainer />
            </div>
        )
    }
}

export default Dashboard
