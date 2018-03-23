import React, { Component } from 'react';
import { connect } from "react-redux";
import Profile from '../Components/Profile';

class ProfileContainer extends Component {
    render() {
        return (
            <div>
                <Profile
                  user={this.props.Profile} 
                />
            </div>
        );
    }
}

export default connect(state => state)(ProfileContainer);
