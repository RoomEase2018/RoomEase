const defaultState = {
  loggedIn: false,
  username: "Ryry",
  pic: "https://demos.subinsb.com/isl-profile-pic/image/person.png",
  roomKarma: 3,
  task: [{
    desc: "Take out trash",
  date: "03/25/18"
  }],
}

export default (state = defaultState, action) => {
  let newstate = state
  switch (action.type) {
    case "LOGIN": {
      const user = action.user;

      return {
        loggedIn: true,
        username: user.username,
        id: user.id,
        pic: user.profile_pic,
        roomKarma: user.karma,
        task: [{
          desc: state.task.desc,
          date: state.task.date
        }]
      }
    }
    default:
      return newstate
  }
}
