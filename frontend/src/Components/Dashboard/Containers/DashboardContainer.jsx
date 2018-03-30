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
        console.log(this.props.allActiveTasks)
        return (
            <Dashboard
                store={this.props.Dashboard}
                profile={this.props.Profile}    
            />
        );
    }

    mapStateToProps = (state) => {
        console.log(state)
        return {
            state
        }
    }

    // mapDispachToProps = (dispatch) => {
        
    // }
}

export default connect(mapStateToProps)(DashboardContainer);
