import * as api from "../../../API/roomeaseAPI";

export const SET_ALL_ACTIVE_TASKS = "SET_ALL_ACTIVE_TASKS"
export const SET_ALL_ACTIVE_RECURRING_TASKS = "SET_ALL_ACTIVE_RECURRING_TASKS"
export const SET_ALL_ACTIVE_EXPENSES = "SET_ALL_ACTIVE_EXPENSES"
export const SET_ALL_ACTIVE_RECURRING_EXPENSES = "SET_ALL_ACTIVE_RECURRING_EXPENSES"
export const SET_ALL_VISIBLE_NOTES = "SET_ALL_VISIBLE_NOTES"
export const SET_ALL_ACTIVE_GOALS = "SET_ALL_ACTIVE_GOALS"

// action creators
export const setAllActiveTasks = tasks => {
  return {
    type: SET_ALL_ACTIVE_TASKS,
    tasks
  };
};

export const setAllActiveRecurringTasks = tasks => {
  return {
    type: SET_ALL_ACTIVE_RECURRING_TASKS,
    tasks
  };
};

export const setAllActiveExpenses = expenses => {
  return {
    type: SET_ALL_ACTIVE_EXPENSES,
    expenses
  };
};

export const setAllActiveRecurringExpenses = expenses => {
  return {
    type: SET_ALL_ACTIVE_RECURRING_EXPENSES,
    expenses
  };
};

export const setAllVisibleNotes = notes => {
  return {
    type: SET_ALL_VISIBLE_NOTES,
    notes
  };
};

export const setAllActiveGoals = goals => {
  return {
    type: SET_ALL_ACTIVE_GOALS,
    goals
  };
};

// thunk functions
export const fetchAllActiveTasks = aptid => dispatch => {
  return api.fetchAllActiveApartmentTasks(aptid).then(tasks => {
    dispatch(setAllActiveTasks(tasks.data.data));
  });
};

export const fetchAllActiveRecurringTasks = aptid => dispatch => {
  return api.fetchAllApartmentActiveRecurringTasks(aptid).then(tasks => {
    dispatch(setAllActiveRecurringTasks(tasks.data.data));
  });
};

export const fetchAllActiveExpenses = userid => dispatch => {
  return api.fetchAllActiveUserExpenses(userid).then(expenses => {
    dispatch(setAllActiveExpenses(expenses.data.data));
  });
};

export const fetchAllActiveRecurringExpenses = userid => dispatch => {
  return api.fetchAllUserActiveRecurringExpenses(userid).then(expenses => {
    dispatch(setAllActiveRecurringExpenses(expenses.data.data));
  });
};

export const fetchAllVisibleNotes = aptid => dispatch => {
  return api.fetchAllApartmentVisibleNotes(aptid).then(notes => {
    dispatch(setAllVisibleNotes(notes.data.data));
  });
};

export const fetchAllApartmentGoals = aptid => dispatch => {
  return api.fetchAllApartmentActiveGoals(aptid).then(goals => {
    dispatch(setAllActiveGoals(goals.data.data));
  });
};
