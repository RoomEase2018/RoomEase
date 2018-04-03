import update from "react-addons-update"

const defaultState = {
  loggedIn: true,
  username: "Ryry",
  user_id: 1,
  apt_id: 1,
  pic: "https://demos.subinsb.com/isl-profile-pic/image/person.png",
  roomKarma: 3,
  task: [{
    desc: "Take out the trash",
    date: "04/12/18"
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
        user_id: user.id,
        apt_id: state.apt_id,
        pic: user.profile_pic,
        roomKarma: user.karma,
        task: [{
          desc: state.task[0].desc,
          date: state.task[0].date
        }]
      }
    };
    
    case "SIGN_OUT": {
      return update(newstate, {
        loggedIn: {
          $apply: function (x) {
            return !x
          }
        }
      })
    }
    default:
      return newstate
  }
}
