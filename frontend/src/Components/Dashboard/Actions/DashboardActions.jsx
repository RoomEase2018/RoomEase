import * as api from "../../../API/roomeaseAPI";

export const GET_ALL_ACTIVE_TASKS = "GET_ALL_ACTIVE_TASKS"
export const GET_ALL_ACTIVE_RECURRING_TASKS = "GET_ALL_ACTIVE_RECURRING_TASKS"
export const GET_ALL_ACTIVE_EXPENSES = "GET_ALL_ACTIVE_EXPENSES"
export const GET_ALL_ACTIVE_RECURRING_EXPENSES = "GET_ALL_ACTIVE_RECURRING_EXPENSES"
export const GET_ALL_VISIBLE_NOTES = "GET_ALL_VISIBLE_NOTES"
export const GET_ALL_ACTIVE_GOALS = "GET_ALL_ACTIVE_GOALS"

// action creators
export const getAllActiveTasks = tasks => {
  return {
    type: GET_ALL_ACTIVE_TASKS,
    tasks
  };
};

export const getAllActiveRecurringTasks = tasks => {
  return {
    type: GET_ALL_ACTIVE_RECURRING_TASKS,
    tasks
  };
};

export const getAllActiveExpenses = expenses => {
  return {
    type: GET_ALL_ACTIVE_EXPENSES,
    expenses
  };
};

export const getAllActiveRecurringExpenses = expenses => {
  return {
    type: GET_ALL_ACTIVE_RECURRING_EXPENSES,
    expenses
  };
};

export const getAllVisibleNotes = notes => {
  return {
    type: GET_ALL_VISIBLE_NOTES,
    notes
  };
};

export const getAllActiveGoals = goals => {
  return {
    type: GET_ALL_ACTIVE_GOALS,
    goals
  };
};

// thunk functions
export const fetchAllActiveTasks = aptid => dispatch => {
  return api.fetchAllActiveApartmentTasks(aptid).then(tasks => {
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
