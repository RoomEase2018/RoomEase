import React, { Component } from 'react';
import { connect } from "react-redux";
import Dashboard from '../Components/Dashboard';

class DashboardContainer extends Component {
    render() {
        console.log(this.props);
        return (
            <Dashboard
                store={this.props.Dashboard}    
            />
        );
    }
}

export default connect(state => state)(DashboardContainer);
