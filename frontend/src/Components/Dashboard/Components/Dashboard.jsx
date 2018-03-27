import React, { Component } from "react";
import UpNext from "./UpNextComponent";
import Calendar from "./Calendar";

class Dashboard extends Component {
    render() {
        return (
            <div>
                <UpNext task={this.props.profile.task} karma={this.props.profile.roomKarma} />
                <Calendar />
                <div className="bulletin" />
            </div>
        )
    }
}

export default Dashboard
