import React, { Component } from 'react';
import { connect } from "react-redux";
import Profile from '../Components/Profile';
import Setup from '../Components/Setup';

class ProfileContainer extends Component {
    setUser = (user) => {
        const { dispatch } = this.props;
        dispatch({ type:'LOGIN', user });
    };
    
    render() {
        return (
            <div className='userProfile'>
                <Profile
                  user={this.props.Profile} 
                  setUser={this.setUser}
                />
                <Setup />
            </div>
        );
    }
}

export default connect(state => state)(ProfileContainer);
