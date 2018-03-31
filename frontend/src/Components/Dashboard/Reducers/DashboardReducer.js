import {
  GET_ALL_ACTIVE_TASKS,
  GET_ALL_ACTIVE_RECURRING_TASKS,
  GET_ALL_ACTIVE_EXPENSES,
  GET_ALL_ACTIVE_RECURRING_EXPENSES,
  GET_ALL_VISIBLE_NOTES,
  GET_ALL_ACTIVE_GOALS
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
    case GET_ALL_ACTIVE_TASKS:
      return {
        allActiveTasks: {
          tasks: action.tasks,
          recurringTasks: newState.allActiveTasks.recurringTasks
        },
        allActiveExpenses: {
          expenses: newState.allActiveExpenses.expenses,
          recurringExpenses: newState.allActiveExpenses.recurringExpenses
        },
        notes: newState.notes,
        goals: newState.goals
      }

    case GET_ALL_ACTIVE_RECURRING_TASKS:
      return {
        allActiveTasks: {
          tasks: newState.allActiveTasks.tasks,
          recurringTasks: action.tasks
        },
        allActiveExpenses: {
          expenses: newState.allActiveExpenses.expenses,
          recurringExpenses: newState.allActiveExpenses.recurringExpenses
        },
        notes: newState.notes,
        goals: newState.goals
      }

    case GET_ALL_ACTIVE_EXPENSES:
      return {
        allActiveTasks: {
          tasks: newState.allActiveTasks.tasks,
          recurringTasks: newState.allActiveTasks.recurringTasks
        },
        allActiveExpenses: {
          expenses: action.expenses,
          recurringExpenses: newState.allActiveExpenses.recurringExpenses
        },
        notes: newState.notes,
        goals: newState.goals
      }

    case GET_ALL_ACTIVE_RECURRING_EXPENSES:
      return {
        allActiveTasks: {
          tasks: newState.allActiveTasks.tasks,
          recurringTasks: newState.allActiveTasks.recurringTasks
        },
        allActiveExpenses: {
          expenses: newState.allActiveExpenses.expenses,
          recurringExpenses: action.expenses
        },
        notes: newState.notes,
        goals: newState.goals
      }

    case GET_ALL_VISIBLE_NOTES:
      return {
        allActiveTasks: {
          tasks: newState.allActiveTasks.tasks,
          recurringTasks: newState.allActiveTasks.recurringTasks
        },
        allActiveExpenses: {
          expenses: newState.allActiveExpenses.expenses,
          recurringExpenses: newState.allActiveExpenses.recurringExpenses
        },
        notes: action.notes,
        goals: newState.goals
      }

    case GET_ALL_ACTIVE_GOALS:
      return {
        allActiveTasks: {
          tasks: newState.allActiveTasks.tasks,
          recurringTasks: newState.allActiveTasks.recurringTasks
        },
        allActiveExpenses: {
          expenses: newState.allActiveExpenses.expenses,
          recurringExpenses: newState.allActiveExpenses.recurringExpenses
        },
        notes: newState.notes,
        goals: action.goals
      }

    default:
      return newState;
  }
};
