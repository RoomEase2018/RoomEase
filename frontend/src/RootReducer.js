import Homepage from "./Components/Homepage/Reducers/HomepageReducer";
import Dashboard from './Components/Dashboard/Reducers/DashboardReducer';
import Profile from './Components/UserProfile/Reducers/ProfileReducer';
import Apartment from "./Components/Apartment/Reducers/ApartmentReducers";
import { combineReducers } from "redux";

export default combineReducers({ Homepage, Dashboard, Profile, Apartment });
