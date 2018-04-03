import React, { Component } from 'react';
import { connect } from "react-redux";
import Profile from './Components/Profile';

class UserProfile extends Component {
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
            </div>
        );
    }
}

export default connect(state => state)(UserProfile);
