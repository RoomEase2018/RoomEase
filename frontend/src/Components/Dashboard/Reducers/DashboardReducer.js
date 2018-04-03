import {
  SET_ALL_ACTIVE_TASKS,
  SET_ALL_ACTIVE_RECURRING_TASKS,
  SET_ALL_ACTIVE_EXPENSES,
  SET_ALL_ACTIVE_RECURRING_EXPENSES,
  SET_ALL_VISIBLE_NOTES,
  SET_ALL_ACTIVE_GOALS
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
  switch (action.type) {

    case SET_ALL_ACTIVE_TASKS:
      return {...state,
        allActiveTasks: {...state.allActiveTasks,
          tasks: action.tasks
        }
      }

    case SET_ALL_ACTIVE_RECURRING_TASKS:
      return {...state,
        allActiveTasks: {...state.allActiveTasks, 
          recurringTasks: action.tasks
        }
      }

    case SET_ALL_ACTIVE_EXPENSES:
      return {...state,
        allActiveExpenses: {...state.allActiveExpenses,
          expenses: action.expenses
        }
      }

    case SET_ALL_ACTIVE_RECURRING_EXPENSES:
      return {...state,
        allActiveExpenses: {...state.allActiveExpenses,
          recurringExpenses: action.expenses
        }
      }

    case SET_ALL_VISIBLE_NOTES:
      return {...state,
        notes: action.notes
      }

    case SET_ALL_ACTIVE_GOALS:
      return {...state,
        goals: action.goals
      }

    default:
      return defaultState;
  }
};
