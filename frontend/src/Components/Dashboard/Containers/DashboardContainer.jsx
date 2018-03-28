import React, { Component } from 'react';
import { connect } from "react-redux";
import Dashboard from '../Components/Dashboard';
import "../Styles/Dashboard.css";
import {
    fetchAllActiveTask,
    fetchAllActiveRecurrungTask,
    fetchAllActiveExpenses,
    fetc
    } from "../Actions/DashboardActions";

class DashboardContainer extends Component {

    render() {
        console.log(this.props)
        return (
            <Dashboard
                store={this.props.Dashboard}
                profile={this.props.Profile}    
            />
        );
    }
}

export default connect(state => state)(DashboardContainer);
