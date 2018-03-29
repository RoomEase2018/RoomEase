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
    case "GET_ALL_ACTIVE_TASK":
      return {
        allActiveTasks: {
          tasks: [ ...newState.allActiveTasks.tasks, {}],
          recurringTasks: newState.allActiveTasks.recurringTasks
        },
        allActiveExpenses: {
          expenses: newState.allActiveExpenses.expenses,
          recurringExpenses: newState.allActiveExpenses.recurringExpenses
        },
        notes: newState.notes,
        goals: newState.goals
      }

    case "GET_ALL_ACTIVE_RECURRING_TASK":
      return newState.allActiveTasks.recurringTasks = action.tasks

    case "GET_ALL_ACTIVE_EXPENSES":
      return newState.allActiveExpenses.expenses = action.expenses

    case "GET_ALL_ACTIVE_RECURRING_EXPENSES":
      return newState.allActiveExpenses.recurringExpenses = action.expenses

    case "GET_ALL_VISIBLE_NOTES":
      return newState.notes = action.notes

    case "GET_ALL_ACTIVE_GOALS":
      return newState.goals = action.goals

    default:
      return newState;
  }
};
