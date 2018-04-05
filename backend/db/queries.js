const { db } = require("./index")
const authHelpers = require("../auth/helpers")
const passport = require("../auth/local")

// ---------------
// FOR DASHBOARD |
// ---------------
// GETS ACTIVE TASKS AND EXPENSES
// ----------------------------------------------


function getActiveTasks(req, res, next) {
  db
  .any(
    "SELECT A.* FROM tasks A LEFT JOIN tasks_completed B ON A.id = B.task_id WHERE B.task_id IS NULL AND A.apt_id=${apt_id} ORDER BY DUE_DATE ASC",
    {
      apt_id: req.params.apt_id
    }
    )
  .then(data => {
    res.status(200).json({
      status: "sucess",
      data: data,
      message: "fetched all active tasks"
    })
  })
  .catch(err => {
    next(err)
  })
}

function getActiveRecurringTasks(req, res, next) {
  db
  .any(
    "SELECT * FROM tasks_recurring WHERE apt_id=${apt_id} AND is_recurring=TRUE",
    {
      apt_id: req.params.apt_id
    }
    )
  .then(data => {
    res.status(200).json({
      status: "sucess",
      data: data,
      message: "fetched all active recurring tasks"
    })
  })
  .catch(err => {
    next(err)
  })
}

function getAllCompletedTasksAndRecurring(req, res, next) {
  db
    .any(
      "SELECT * FROM tasks_completed WHERE apt_id=${apt_id} UNION SELECT * FROM tasks_recurring_completed WHERE apt_id=${apt_id}",
      {
        apt_id: req.params.apt_id
      }
    )
    .then(data => {
      res.status(200).json({
        status: "success",
        data: data,
        message: "fetched all completed tasks plus recurring"
      })
    })
    .catch(err => {
      next(err)
    })
}

// GETS APARTMENT GOALS
// ----------------------------------------------

function getActiveApartmentGoals(req, res, next) {
  db
  .any(
    "SELECT A.* FROM goals_apartment A LEFT JOIN goals_redeemed B ON A.id=B.goal_id WHERE A.apt_id=${apt_id} AND (A.is_recurring=TRUE OR B.goal_id IS NULL)",
    {
      apt_id: req.params.apt_id
    }
    )
  .then(data => {
    res.status(200).json({
      status: "success",
      data: data,
      message: "Fetched all active recurring apartment goals"
    })
  })
  .catch(err => {
    next(err)
  })
}

// GETS BULLETIN NOTES
// ----------------------------------------------

function getVisibleBulletinNotes(req, res, next) {
  db
  .any(
    "SELECT * FROM bulletin_notes WHERE apt_id=${apt_id} AND is_visible=TRUE",
    {
      apt_id: req.params.apt_id
    }
    )
  .then(data => {
    res.status(200).json({
      status: "success",
      data: data,
      message: "Fetched all visible bulletin notes"
    })
  })
  .catch(err => {
    next(err)
  })
}

// GETS APARTMENT INFO
// ----------------------------------------------

function getApartmentInfo(req, res, next) {
  db
  .any("SELECT * FROM apartments WHERE id=${apt_id}", {
    apt_id: req.params.apt_id
  })
  .then(data => {
    res.status(200).json({
      status: "success",
      data: data,
      message: "Fetched all apartment info"
    })
  })
  .catch(err => {
    next(err)
  })
}

function getUsersInfoInApartment(req, res, next) {
  db.
  any("SELECT * FROM users_apt A JOIN users B ON A.user_id=B.id WHERE apt_id=${apt_id} AND A.user_id=B.id", {
    apt_id: req.params.apt_id
  })
  .then(data => {
    res.status(200).json({
      status: "success",
      data: data,
      message: "Fetched all apartment info"
    })
  })
  .catch(err => {
    next(err);
  })
}

// GETS USER INFO
// ----------------------------------------------

function getUserInfo(req, res, next) {
  db
  .any("SELECT * FROM users WHERE username=${username}", {
    username: req.params.username
  })
  .then(data => {
    res.status(200).json({
      status: "success",
      data: data,
      message: "Fetched all user info"
    })
  })
  .catch(err => {
    next(err)
  })
}

// USER LOGIN/LOGOUT QUERIES
// -----------------------------------------------

function createUser(req, res, next) {
  const hash = authHelpers.createHash(req.body.password)
  db
  .none(
    "INSERT INTO users (first_name, last_name, username, password_digest, gender, email, phone) VALUES (${first_name}, ${last_name}, ${username}, ${password}, ${gender}, ${email}, ${phone})",
    {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      username: req.body.username,
      password: hash,
      gender: req.body.gender,
      email: req.body.email,
      phone: req.body.phone
    }
    )
  .then(() => {
    res.status(200).json({
      message: `created user: ${req.body.username}`
    })
  })
  .catch(err => {
    console.log(err)
    res.status(406).send("error creating user")
  })
}

function loginUser(req, res, next) {
  passport.authenticate("local", {})
}

function logoutUser(req, res, next) {
  req.logout()
  res.status(200).send("log out success")
}

// INSERT QUERIES
// -----------------------------------------------

function insertNewApartment(req, res, next) {
  db
  .one(
    "INSERT INTO apartments (apt_name, apt_pic) VALUES (${apt_name}, ${apt_pic}) RETURNING id",
    {
      apt_name: req.body.apt_name,
      apt_pic: req.body.apt_pic
    }
    )
  .then(data => {
    res.status(200).json({
      status: "success",
      data: data,
      message: "inserted into apartments and got apartment id back"
    })
  })
  .catch(err => {
    next(err)
  })
}

function insertUserIntoApartment(req, res, next) {
  db
  .none(
    "INSERT INTO users_apt (user_id, apt_id) VALUES (${user_id}, ${apt_id})",
    {
      user_id: req.body.user_id,
      apt_id: req.body.apt_id
    }
    )
  .then(() => {
    res.status(200).send("inserted user into apartment")
  })
  .catch(err => {
    next(err)
  })
}


function insertTask(req, res, next) {
  db
  .none(
    "INSERT INTO tasks (apt_id, title, message, from_user_id, to_user_id, due_date, karma, cost) VALUES (${apt_id}, ${title}, ${message}, ${from_user_id}, ${to_user_id}, ${due_date}, ${karma}, ${cost})",
    {
      apt_id: req.body.apt_id,
      title: req.body.title,
      message: req.body.message,
      from_user_id: req.body.from_user_id,
      to_user_id: req.body.to_user_id,
      due_date: req.body.due_date,
      karma: req.body.karma,
      cost: req.body.cost

    }
    )
  .then(() => {
    res.status(200).send("inserted new task")
  })
  .catch(err => {
    next(err)
  })
}

function insertTaskCompleted(req, res, next) {
  db
  .none(
    "INSERT INTO tasks_completed (task_id, apt_id, to_user_id, karma) VALUES (${task_id}, ${apt_id}, ${to_user_id}, ${karma})",
    {
      task_id: req.body.task_id,
      apt_id: req.body.apt_id,
      to_user_id: req.body.to_user_id,
      karma: req.body.karma
    }
    )
  .then(() => {
    res.status(200).send("inserted completed task")
  })
  .catch(err => {
    next(err)
  })
}

function insertRecurringTask(req, res, next) {
  db
  .none(
    "INSERT INTO tasks_recurring (apt_id, title, message, from_user_id, to_user_id, due_date_type, due_date, karma, cost) VALUES (${apt_id}, ${title}, ${message}, ${from_user_id}, ${to_user_id}, ${due_date_type}, ${due_date}, ${karma}, ${cost})",
    {
      apt_id: req.body.apt_id,
      title: req.body.title,
      message: req.body.message,
      from_user_id: req.body.from_user_id,
      to_user_id: req.body.to_user_id,
      due_date_type: req.body.due_date_type,
      due_date: req.body.due_date,
      karma: req.body.karma,
      cost: req.body.cost
    }
    )
  .then(() => {
    res.status(200).send("inserted new recurring task")
  })
  .catch(err => {
    next(err)
  })
}

function insertRecurringTaskCompleted(req, res, next) {
  db
  .none(
    "INSERT INTO tasks_recurring_completed (task_id, apt_id, to_user_id, karma) VALUES (${task_id}, ${apt_id}, ${to_user_id}, ${karma})",
    {
      task_id: req.body.task_id,
      apt_id: req.body.apt_id,
      to_user_id: req.body.to_user_id,
      karma: req.body.karma
    }
    )
  .then(() => {
    res.status(200).send("inserted completed recurring task")
  })
  .catch(err => {
    next(err)
  })
}

function updateRecurringTaskActive(req, res, next) {
  db
  .none(
    "UPDATE tasks_recurring SET is_recurring=${is_recurring} WHERE id=${task_id}",
    {
      is_recurring: req.body.is_recurring,
      task_id: req.body.task_id
    }
    )
  .then(() => {
    res.status(200).send("updated recurring task is_recurring")
  })
  .catch(err => {
    next(err)
  })
}


function insertBulletinNote(req, res, next) {
  db
  .none(
    "INSERT INTO bulletin_notes (apt_id, from_user_id, message) VALUES (${apt_id}, ${from_user_id}, ${message})",
    {
      apt_id: req.body.apt_id,
      from_user_id: req.body.from_user_id,
      message: req.body.message
    }
    )
  .then(() => {
    res.status(200).send("inserted new bulletin note")
  })
  .catch(err => {
    next(err)
  })
}

function insertGoal(req, res, next) {
  db
  .none(
    "INSERT INTO goals_apartment (apt_id, from_user_id, title, message, is_recurring, karma) VALUES (${apt_id}, ${from_user_id}, ${title}, ${message}, ${is_recurring}, ${karma})",
    {
      apt_id: req.body.apt_id,
      from_user_id: req.body.from_user_id,
      title: req.body.title,
      message: req.body.message,
      karma: req.body.karma,
      is_recurring: req.body.is_recurring
    }
    )
  .then(() => {
    res.status(200).send("inserted apt goal")
  })
  .catch(err => {
    next(err)
  })
}

function updateGoalIsRecurring(req, res, next) {
  db
  .none(
    "UPDATE goals_apartment SET is_recurring=${is_recurring} WHERE id=${goal_id}",
    {
      is_recurring: req.body.is_recurring,
      goal_id: req.body.goal_id
    }
    )
  .then(() => {
    res
    .status(200)
    .send("updated recurring apartment goal is_recurring")
  })
  .catch(err => {
    next(err)
  })
}

function insertGoalRedeemed(req, res, next) {
  db
  .none(
    "INSERT INTO goals_redeemed (apt_id, goal_id, redeemed_by_id, karma) VALUES (${apt_id}, ${goal_id}, ${redeemed_by_id}, ${karma})",
    {
      apt_id: req.body.apt_id,
      goal_id: req.body.goal_id,
      redeemed_by_id: req.body.redeemed_by_id,
      karma: req.body.karma
    }
    )
  .then(() => {
    res.status(200).send("inserted goal redeemed")
  })
  .catch(err => {
    next(err)
  })
}

module.exports = {
  getActiveTasks,
  getActiveRecurringTasks,
  getActiveApartmentGoals,
  getAllCompletedTasksAndRecurring,
  getVisibleBulletinNotes,
  getApartmentInfo,
  getUsersInfoInApartment,
  getUserInfo,
  createUser,
  logoutUser,
  loginUser,
  insertNewApartment,
  insertUserIntoApartment,
  insertTask,
  insertTaskCompleted,
  insertRecurringTask,
  insertRecurringTaskCompleted,
  updateRecurringTaskActive,
  insertBulletinNote,
  insertGoal,
  updateGoalIsRecurring,
  insertGoalRedeemed
}
