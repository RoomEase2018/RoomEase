import * as api from "../../../API/roomeaseAPI";

export const SET_ALL_ACTIVE_TASKS = "SET_ALL_ACTIVE_TASKS"
export const SET_ALL_ACTIVE_RECURRING_TASKS = "SET_ALL_ACTIVE_RECURRING_TASKS"
export const SET_ALL_VISIBLE_NOTES = "SET_ALL_VISIBLE_NOTES"
export const SET_ALL_ACTIVE_GOALS = "SET_ALL_ACTIVE_GOALS"
export const PUSH_SUCCESS_QUERY_ARRAY = "PUSH_SUCCESS_QUERY_ARRAY"


// action creators
const setAllActiveTasks = tasks => {
  return {
    type: SET_ALL_ACTIVE_TASKS,
    tasks
  };
};

const setAllActiveRecurringTasks = tasks => {
  return {
    type: SET_ALL_ACTIVE_RECURRING_TASKS,
    tasks
  };
};

const setAllVisibleNotes = notes => {
  return {
    type: SET_ALL_VISIBLE_NOTES,
    notes
  };
};

const setAllActiveGoals = goals => {
  return {
    type: SET_ALL_ACTIVE_GOALS,
    goals
  };
};

const pushSuccessQueryArray = query => {
  return {
    type: PUSH_SUCCESS_QUERY_ARRAY,
    query
  }
}

// thunk functions
export const fetchAllActiveTasks = aptid => dispatch => {
  return api.fetchAllActiveApartmentTasks(aptid).then(tasks => {
    dispatch(setAllActiveTasks(tasks.data.data));
    dispatch(pushSuccessQueryArray(['fetchAllActiveTasks']));
  });
};

export const fetchAllActiveRecurringTasks = aptid => dispatch => {
  return api.fetchAllApartmentActiveRecurringTasks(aptid).then(tasks => {
    dispatch(setAllActiveRecurringTasks(tasks.data.data));
    dispatch(pushSuccessQueryArray('fetchAllActiveRecurringTasks'));
  });
};

export const fetchAllVisibleNotes = aptid => dispatch => {
  return api.fetchAllApartmentVisibleNotes(aptid).then(notes => {
    dispatch(setAllVisibleNotes(notes.data.data));
    dispatch(pushSuccessQueryArray('fetchAllVisibleNotes'));
  });
};

export const fetchAllApartmentGoals = aptid => dispatch => {
  return api.fetchAllApartmentActiveGoals(aptid).then(goals => {
    dispatch(setAllActiveGoals(goals.data.data));
    dispatch(pushSuccessQueryArray('fetchAllApartmentGoals'));
  });
};
