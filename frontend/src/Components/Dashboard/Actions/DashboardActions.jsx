import {
  fetchAllActiveApartmentTasks,
  fetchAllApartmentActiveRecurringTasks,
  fetchAllActiveUserExpenses,
  fetchAllUserActiveRecurringExpenses,
  fetchAllApartmentVisibleNotes,
  fetchAllApartmentActiveGoals
} from "../../../API/roomeaseAPI";

// creating and exporting action types
const RECEIVE_ALL_ACTIVE_TASKS = "RECEIVE_ALL_ACTIVE_TASK";
const RECEIVE_ALL_ACTIVE_RECURRING_TASKS = "RECEIVE_ALL_ACTIVE_RECURRING_TASKS";
const RECEIVE_ALL_ACTIVE_EXPENSES = "RECEIVE_ALL_ACTIVE_EXPENSES";
const RECEIVE_ALL_ACTIVE_RECURRING_EXPENSES = "RECEIVE_ALL_ACTIVE_RECURRING_EXPENSES";
const RECEIVE_ALL_VISIBLE_NOTES = "RECEIVE_ALL_VISIBLE_NOTES";
const RECEIVE_ALL_ACTIVE_GOALS = "RECEIVE_ALL_ACTIVE_GOALS";

export {
  RECEIVE_ALL_ACTIVE_TASKS,
  RECEIVE_ALL_ACTIVE_RECURRING_TASKS,
  RECEIVE_ALL_ACTIVE_EXPENSES,
  RECEIVE_ALL_ACTIVE_RECURRING_EXPENSES,
  RECEIVE_ALL_VISIBLE_NOTES,
  RECEIVE_ALL_ACTIVE_GOALS
};

// defining action types when received
export const receiveAllActiveTasks = tasks => {
  return {
    type: RECEIVE_ALL_ACTIVE_TASKS,
    tasks
  };
};

export const receiveAllActiveRecurringTasks = tasks => {
  return {
    type: RECEIVE_ALL_ACTIVE_RECURRING_TASKS,
    tasks
  };
};

export const receiveAllActiveExpenses = expenses => {
  return {
    type: RECEIVE_ALL_ACTIVE_EXPENSES,
    expenses
  };
};

export const receiveAllActiveRecurringExpenses = expenses => {
  return {
    type: RECEIVE_ALL_ACTIVE_RECURRING_EXPENSES,
    expenses
  };
};

export const receiveAllVisibleNotes = notes => {
  return {
    type: RECEIVE_ALL_VISIBLE_NOTES,
    notes
  };
};

export const receiveAllActiveGoals = goals => {
  return {
    type: RECEIVE_ALL_ACTIVE_GOALS,
    goals
  };
};

// fetching data
export const fetchAllActiveTask = params => (dispatch) => {
  return fetchAllActiveApartmentTasks(params).then(res =>
    dispatch(receiveAllActiveTasks(res.data))
  );
};

export const fetchAllActiveRecurringTask = params => (dispatch) => {
  return fetchAllActiveApartmentTasks(params).then(res =>
    dispatch(receiveAllActiveTasks(res.data))
  );
};

export const fetchAllActiveExpenses = params => (dispatch) => {
  return fetchAllActiveUserExpenses(params).then(res =>
    dispatch(receiveAllActiveExpenses(res.data))
  );
};

export const fetchAllActiveRecurringExpenses = params => (dispatch) => {
  return fetchAllUserActiveRecurringExpenses(params).then(res =>
    dispatch(receiveAllActiveRecurringExpenses(res.data))
  );
};

export const fetchAllVisibleNotes = params => (dispatch) => {
  return fetchAllApartmentVisibleNotes(params).then(res =>
    dispatch(receiveAllVisibleNotes(res.data))
  );
};

export const fetchAllActiveGoals = params => (dispatch) => {
  return fetchAllApartmentActiveGoals(params).then(res =>
    dispatch(receiveAllActiveGoals(res.data))
  );
};
