import Homepage from "./Homepage/HomepageReducer";
import Dashboard from './Dashboard/DashboardReducer'
import Profile from './Profile/ProfileReducer'
import { combineReducers } from "redux";

export default combineReducers({ Homepage, Dashboard, Profile });
