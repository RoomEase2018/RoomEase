import React, { Component } from "react";
import UpNext from "./UpNextComponent";
import Calendar from "./Calendar";
import Bulletin from "../Containers/BulletinContainer"

class Dashboard extends Component {
    render() {
        return (
            <div>
                <UpNext task={this.props.profile.task} karma={this.props.profile.roomKarma} />
                <Calendar />
                <Bulletin />
            </div>
        )
    }
}

export default Dashboard
