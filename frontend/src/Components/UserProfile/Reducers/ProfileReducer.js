const defaultState = {
  username: "Ryry",
  pic: "https://demos.subinsb.com/isl-profile-pic/image/person.png",
  roomKarma: 3,
  chore: [{
    desc: "Take out trash",
    date: "03/25/18"
  }],
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
