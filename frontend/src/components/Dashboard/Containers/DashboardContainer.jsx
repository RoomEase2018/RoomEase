import React, { Component } from 'react';
import { connect } from "react-redux";
import Dashboard from '../Components/Dashboard';

class DashboardContainer extends Component {
    render() {
        return (
            <Dashboard
                store={this.props.Dashboard}
                profile={this.props.Profile}    
            />
        );
    }
}

export default connect(state => state)(DashboardContainer);
