import React, { Component } from "react";
import UpNext from "./UpNextComponent";

class Dashboard extends Component {
    render() {
        console.log("dashboard props : ", this.props.profile)
        return (
            <div>
                <UpNext task={this.props.profile.task} karma={this.props.profile.roomKarma} />
                <div className="calendar" />
                <div className="bulletin" />
            </div>
        )
    }
}

export default Dashboard
