import Homepage from "./Homepage/Reducers/HomepageReducer";
import Dashboard from './Dashboard/Reducers/DashboardReducer'
import Profile from './Profile/Reducers/ProfileReducer'
import { combineReducers } from "redux";

export default combineReducers({ Homepage, Dashboard, Profile });
