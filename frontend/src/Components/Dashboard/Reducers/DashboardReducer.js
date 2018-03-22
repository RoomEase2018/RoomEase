const defaultState = {
    bannerPic: "https://static.giantbomb.com/uploads/original/15/150889/2437033-bar+too+high+banner.jpg",
    roomName: "RoomEase",  // DASHBOARD PLACEHOLDER
  };
  
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
  