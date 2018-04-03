import * as api from "../../../API/roomeaseAPI";

export const LOGIN_USER = "LOGIN_USER"
export const LOGOUT_USER = "LOGOUT_USER"
export const GET_USER_INFO = "GET_USER_INFO"
export const GET_USER_COMPLETED_TASKS = "GET_USER_COMPLETED_TASKS"
export const GET_USER_PAYMENTS = "GET_USER_PAYMENTS"

// action creators
export const login_User = user => {
    return {
      type: LOGIN_USER,
      user
    };
  };
  
  export const logout_User = user => {
    return {
      type: LOGOUT_USER,
      user
    };
  };
  
  export const getUserInfo = user => {
    return {
      type: GET_USER_INFO,
      user
    };
  };
  
  export const getUserCompletedTasks = user => {
    return {
      type: GET_USER_COMPLETED_TASKS,
      user
    };
  };
  
  export const getUserPayments = payments => {
    return {
      type: GET_USER_PAYMENTS,
      payments
    };
  };
  
  // thunk functions
  export const setLogin = aptid => dispatch => {
    return api.loginUser.then(tasks => {
      dispatch(getAllActiveTasks(tasks.data.data));
    });
  };
  
  export const fetchAllActiveRecurringTasks = aptid => dispatch => {
    return api.fetchAllApartmentActiveRecurringTasks(aptid).then(tasks => {
      dispatch(getAllActiveRecurringTasks(tasks.data.data));
    });
  };
  
  export const fetchAllActiveExpenses = userid => dispatch => {
    return api.fetchAllActiveUserExpenses(userid).then(expenses => {
      dispatch(getAllActiveExpenses(expenses.data.data));
    });
  };
  
  export const fetchAllActiveRecurringExpenses = userid => dispatch => {
    return api.fetchAllUserActiveRecurringExpenses(userid).then(expenses => {
      dispatch(getAllActiveRecurringExpenses(expenses.data.data));
    });
  };
  
  export const fetchAllVisibleNotes = aptid => dispatch => {
    return api.fetchAllApartmentVisibleNotes(aptid).then(notes => {
      dispatch(getAllVisibleNotes(notes.data.data));
    });
  };
  
  export const fetchAllApartmentGoals = aptid => dispatch => {
    return api.fetchAllApartmentActiveGoals(aptid).then(goals => {
      dispatch(getAllActiveGoals(goals.data.data));
    });
  };
  