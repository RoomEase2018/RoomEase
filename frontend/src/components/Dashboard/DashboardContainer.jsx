import React, { Component } from 'react';
import Dashboard from './Dashboard';

class DashboardContainer extends Component {
    render() {
        return (
            <Dashboard
                store={this.props}    
            />
        );
    }
}

export default DashboardContainer;
