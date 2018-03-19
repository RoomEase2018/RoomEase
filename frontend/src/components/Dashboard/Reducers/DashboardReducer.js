const defaultState = {
    bannerPic: "https://static.giantbomb.com/uploads/original/15/150889/2437033-bar+too+high+banner.jpg",
    roomName: "RoomEase",  // DASHBOARD PLACEHOLDER
    user: {
      pic: "https://demos.subinsb.com/isl-profile-pic/image/person.png",
      roomKarma: 3,
      chore: {
        desc: "Take out trash",
        date: "03/25/18"
      }
    },

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
  