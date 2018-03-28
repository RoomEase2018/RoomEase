import {
  RECEIVE_ALL_ACTIVE_TASK,
  RECEIVE_ALL_ACTIVE_RECURRING_TASKS,
  RECEIVE_ALL_ACTIVE_EXPENSES,
  RECEIVE_ALL_ACTIVE_RECURRING_EXPENSES,
  RECEIVE_ALL_VISIBLE_NOTES,
  RECEIVE_ALL_ACTIVE_GOALS
} from "../Actions/DashboardActions";

const defaultState = {
  allActiveTasks: {
    tasks: [],
    recurringTasks: []
  },
  allActiveExpenses: {
    expenses: [],
    recurringExpenses: []
  },
  notes: [],
  goals: []
};

export default (state = defaultState, action) => {
  let newState = state;

  switch (action.type) {
    case "RECEIVE_ALL_ACTIVE_TASK":
      return newState.allActiveTasks.tasks = action.tasks

    case "RECIEVE_ALL_ACTIVE_RECURRING_TASK":
      return newState.allActiveTasks.recurringTasks = action.tasks

    case "RECEIVE_ALL_ACTIVE_EXPENSES":
      return newState.allActiveExpenses.expenses = action.expenses

    case "RECEIVE_ALL_ACTIVE_RECURRING_EXPENSES":
      return newState.allActiveExpenses.recurringExpenses = action.expenses

    case "RECEIVE_ALL_VISIBLE_NOTES":
      return newState.notes = action.notes

    case "RECEIVE_ALL_ACTIVE_GOALS":
      return newState.goals = action.goals

    default:
      return newState;
  }
};
