import React, { Component } from "react";
import { connect } from "react-redux";
import {
		fetchAllActiveTasks, 
		fetchAllActiveRecurringTasks, 
		fetchAllVisibleNotes,
		fetchAllApartmentGoals
	} from "./Actions/DashboardActions";

import UpNextContainer from "./Containers/UpNextContainer";
import CalendarContainer from "./Containers/CalendarContainer";
import BulletinContainer from "./Containers/BulletinContainer";

const mapDispatchToProps = dispatch => {
	return {
    fetchAllActiveTasks: aptid => {
      dispatch(fetchAllActiveTasks(aptid));
    },
    fetchAllActiveRecurringTasks: aptid => {
      dispatch(fetchAllActiveRecurringTasks(aptid));
    },
    fetchAllVisibleNotes: aptid => {
    	dispatch(fetchAllVisibleNotes(aptid));
    },
    fetchAllApartmentGoals: aptid => {
    	dispatch(fetchAllApartmentGoals(aptid));
    }
  }
}

const mapStateToProps = state => {
  return {
    allActiveTasks: state.Dashboard.allActiveTasks,
    allActiveExpenses: state.Dashboard.allActiveExpenses,
    notes: state.Dashboard.notes,
    goals: state.Dashboard.goals
  };
};

class Dashboard extends Component {
	constructor(props) {
		super(props);

		props.fetchAllActiveTasks(1);
		props.fetchAllActiveRecurringTasks(1);
		props.fetchAllVisibleNotes(1);
		props.fetchAllApartmentGoals(1);
	}

  render() {
    return (
      <div className="dashboard">
        <UpNextContainer />
        <CalendarContainer />
        <BulletinContainer />
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);