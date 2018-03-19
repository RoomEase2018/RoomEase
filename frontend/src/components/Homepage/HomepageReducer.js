const defaultState = {
    homepage: 'test' // HOMEPAGE PLACEHOLDER
  }
  
  export default (state = defaultState, action) => {
    let newstate = state
    switch (action.type) {
      case "HOMEPAGE": {
        return {
            homepage: null
        }
      }
      default:
        return newstate
    }
  }
  