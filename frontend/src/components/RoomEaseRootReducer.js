import Homepage from "./Homepage/Reducers/HomepageReducer";
import Dashboard from './Dashboard/Reducers/DashboardReducer'
import Profile from './UserProfile/Reducers/ProfileReducer'
import { combineReducers } from "redux";

export default combineReducers({ Homepage, Dashboard, Profile });
