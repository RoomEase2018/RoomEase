const defaultState = {
    dashboard: 'test' // DASHBOARD PLACEHOLDER
  }
  
  export default (state = defaultState, action) => {
    let newstate = state
    switch (action.type) {
      case "DASHBOARD": { 
        return {
            dashboard: null 
        }
      }
      default:
        return newstate
    }
  }
  