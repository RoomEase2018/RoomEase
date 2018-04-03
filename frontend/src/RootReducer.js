import Homepage from "./Components/Homepage/Reducers/HomepageReducer";
import Dashboard from './Components/Dashboard/Reducers/DashboardReducer'
import Profile from './Components/UserProfile/Reducers/ProfileReducer'
import { combineReducers } from "redux";

export default combineReducers({ Homepage, Dashboard, Profile });
