const defaultState = {
    profile: 'test' // PROFILE PLACEHOLDER
  }
  
  export default (state = defaultState, action) => {
    let newstate = state
    switch (action.type) {
      case "PROFILE": { 
        return {
            profile: null 
        }
      }
      default:
        return newstate
    }
  }
  