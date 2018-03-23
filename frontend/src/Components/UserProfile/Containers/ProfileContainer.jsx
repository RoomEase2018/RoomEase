import React, { Component } from 'react';
import { connect } from "react-redux";
import Profile from '../Components/Profile';
import Setup from '../Components/Setup';

class ProfileContainer extends Component {
    render() {
        return (
            <div>
                <Profile
                  user={this.props.Profile} 
                />
                <Setup />
            </div>
        );
    }
}

export default connect(state => state)(ProfileContainer);
