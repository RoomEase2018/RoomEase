import * as api from "../../../API/roomeaseAPI";

// action creators
export const getAllActiveTasks = tasks => {
  return {
    type: "GET_ALL_ACTIVE_TASKS",
    tasks
  };
};

export const getAllActiveRecurringTasks = tasks => {
  return {
    type: "GET_ALL_ACTIVE_RECURRING_TASKS",
    tasks
  };
};

export const getAllActiveExpenses = expenses => {
  return {
    type: "GET_ALL_ACTIVE_EXPENSES",
    expenses
  };
};

export const getAllActiveRecurringExpenses = expenses => {
  return {
    type: "GET_ALL_ACTIVE_TASKS",
    expenses
  };
};

export const getAllVisibleNotes = notes => {
  return {
    type: "GET_ALL_VISIBLE_NOTES",
    notes
  };
};

export const getAllActiveGoals = goals => {
  return {
    type: "GET_ALL_ACTIVE_GOALS",
    goals
  };
};

export const fetchAllActiveTasks = aptid => dispatch => {
  return api.fetchAllActiveApartmentTasks(aptid).then(tasks => {
    dispatch(getAllActiveTasks(tasks));
  });
};

export const fetchAllActiveRecurringTasks = aptid => dispatch => {
  return api.fetchAllApartmentActiveRecurringTasks(aptid).then(tasks => {
    dispatch(getAllActiveRecurringTasks(tasks));
  });
};

export const fetchAllActiveExpenses = userid => dispatch => {
  return api.fetchAllActiveUserExpenses(userid).then(expenses => {
    dispatch(getAllActiveExpenses(expenses));
  });
};

export const fetchAllActiveRecurringExpenses = userid => dispatch => {
  return api.fetchAllUserActiveRecurringExpenses(userid).then(expenses => {
    dispatch(getAllActiveRecurringExpenses(expenses));
  });
};

export const fetchAllVisibleNotes = aptid => dispatch => {
  return api.fetchAllApartmentVisibleNotes(aptid).then(notes => {
    dispatch(getAllVisibleNotes(notes));
  });
};

export const fetchAllApartmentGoals = aptid => dispatch => {
  return api.fetchAllApartmentActiveGoals(aptid).then(goals => {
    dispatch(getAllActiveGoals(goals));
  });
};
