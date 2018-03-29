const db = require("../index");
const authHelpers = require("../../auth/helpers");
const passport = require("../../auth/local");
const utils = require("./utils");

// USER LOGIN/LOGOUT QUERIES
// -----------------------------------------------

function insertNewApartment(req, res, next) {
  db
    .one("INSERT INTO apartments (apt_name, apt_pic) VALUES (${apt_name} RETURNING id, ${apt_pic})", {
      apt_id: req.params.apt_id,
      apt_name: req.params.apt_name
    })
    .then(data => {
      res.status(200).json({
        status: "success",
        data: data,
        message: "inserted into apartments and got apartment id back"
      })
    })
    .catch(err => {
      next(err);
    })
}

function insertUserIntoApartment(req, res, next) {
  db
    .none("INSERT INTO users_apt (user_id, apt_id) VALUES (${user_id}, ${apt_id})", {
      user_id: req.params.user_id,
      apt_id: req.params.apt_id
    })
    .then(() => {
      res.status(200).send('inserted user into apartment')
    })
    .catch(err => {
      next(err);
    })
}

function insertTask(req, res, next) {
  db
    .none("INSERT INTO tasks (apt_id, task_name, posted_by_id, assigned_to_id, due_date, due_time, message, karma_value) VALUES ($(apt_id), $(task_name), $(posted_by_id), $(assigned_to_id), $(due_date), $(due_time), $(message), $(karma_value))", {
      apt_id: req.params.apt_id,
      task_name: req.params.task_name,
      posted_by_id: req.params.posted_by_id,
      assigned_to_id: req.params.assigned_to_id,
      due_date: req.params.due_date,
      due_time: req.params.due_time,
      messsage: req.params.message,
      karma_value: req.params.karma_value
    })
    .then(() => {
      res.status(200).send('inserted new task')
    })
    .catch(err => {
      next(err);
    })
}

function insertTaskCompleted(req, res, next) {
  db
    .none("INSERT INTO tasks_completed (task_id, apt_id, completed_by_id, karma) VALUES (${task_id}, ${apt_id}, ${completed_by_id}, ${karma})", {
      task_id: req.params.task_id,
      apt_id: req.params.apt_id,
      completed_by_id: req.params.completed_by_id,
      karma: req.params.karma,
    })
    .then(() => {
      res.status(200).send('inserted completed task');
    })
    .catch(err => {
      next(err);
    })
}

function insertRecurringTask(req, res, next) {
  db
    .none("INSERT INTO tasks_recurring (apt_id, task_name, posted_by_id, assigned_to_id, due_day, due_time, message, karma_value) VALUES ($(apt_id), $(task_name), $(posted_by_id), $(assigned_to_id), $(due_date), $(due_time), $(message), $(karma_value))", {
      apt_id: req.params.apt_id,
      task_name: req.params.task_name,
      posted_by_id: req.params.posted_by_id,
      assigned_to_id: req.params.assigned_to_id,
      due_day: req.params.due_day,
      due_time: req.params.due_time,
      messsage: req.params.message,
      karma_value: req.params.karma_value
    })
    .then(() => {
      res.status(200).send('inserted new recurring task')
    })
    .catch(err => {
      next(err);
    })
}

function insertRecurringTaskCompleted(req, res, next) {
  db
    .none("INSERT INTO tasks_recurring_completed (task_id, apt_id, completed_by_id, karma) VALUES (${task_id}, ${apt_id}, ${completed_by_id}, ${karma})", {
      task_id: req.params.task_id,
      apt_id: req.params.apt_id,
      completed_by_id: req.params.completed_by_id,
      karma: req.params.karma,
    })
    .then(() => {
      res.status(200).send('inserted completed recurring task');
    })
    .catch(err => {
      next(err);
    })
}

function updateRecurringTaskActive(req, res, next) {
  db
    .none("UPDATE tasks_recurring SET is_active=${is_active} WHERE id={task_id}", {
      is_active: req.params.is_active,
      task_id: req.params.task_id
    })
    .then(() => {
      res.status(200).send('updated recurring task is_active');
    })
    .catch(err => {
      next(err);
    })
}

function insertExpense(req, res, next) {
  db
    .none("INSERT INTO expenses (apt_id, expense_name, message, amount, payer_id, payee_id, due_date, due_time, karma_value) VALUES (${apt_id}, ${expense_name}, ${message}, ${amount}, ${payer_id}, ${payee_id}, ${due_date}, ${due_time}, ${karma_value})", {
      apt_id: req.params.apt_id,
      expense_name: req.params.expense_name,
      message: req.params.message,
      amount: req.params.amount,
      payer_id: req.params.payer_id,
      payee_id: req.params.payee_id,
      due_date: req.params.due_date,
      karma_value: req.params.karma_value
    })
    .then(() => {
      res.status(200).send('inserted new expense');
    })
    .catch(err => {
      next(err);
    })
}

function insertPayment(req, res, next) {
  db
    .none("INSERT INTO expenses (amount, apt_id, payer_id, payee_id, expense_id, message, karma) VALUES (${amount}, ${apt_id}, ${payer_id}, ${payee_id}, ${expense_id}, ${message}, ${karma})", {
      amount: req.params.amount,
      apt_id: req.params.apt_id,
      payer_id: req.params.payer_id,
      payee_id: req.params.payee_id,
      message: req.params.message,
      karma: req.params.karma
    })
    .then(() => {
      res.status(200).send('inserted new payment');
    })
    .catch(err => {
      next(err);
    })
}

function insertRecurringExpense(req, res, next) {
  db
    .none("INSERT INTO expenses (apt_id, expense_name, message, amount, payer_id, payee_id, due_day, due_time, karma_value) VALUES (${apt_id}, ${expense_name}, ${message}, ${amount}, ${payer_id}, ${payee_id}, ${due_day}, ${due_time}, ${karma_value})", {
      apt_id: req.params.apt_id,
      expense_name: req.params.expense_name,
      message: req.params.message,
      amount: req.params.amount,
      payer_id: req.params.payer_id,
      payee_id: req.params.payee_id,
      due_day: req.params.due_day,
      karma_value: req.params.karma_value
    })
    .then(() => {
      res.status(200).send('inserted new expense');
    })
    .catch(err => {
      next(err);
    })
}

function updateRecurringExpenseActive(req, res, next) {
  db
    .none("UPDATE expenses_recurring SET is_active=${is_active} WHERE id={expense_id}", {
      is_active: req.params.is_active,
      expense_id: req.params.expense_id
    })
    .then(() => {
      res.status(200).send('updated recurring expense is_active');
    })
    .catch(err => {
      next(err);
    })
}

function insertRecurringPayment(req, res, next) {
  db
    .none("INSERT INTO payments_recurring_expenses (amount, apt_id, payer_id, payee_id, expense_id, message, karma) VALUES (${amount}, ${apt_id}, ${payer_id}, ${payee_id}, ${expense_id}, ${message}, ${karma}", {
        amount: req.params.amount, 
        apt_id: req.params.apt_id,
        payer_id: req.params.payer_id,
        payee_id: req.params.payee_id,
        expense_id: req.params.expense_id,
        message: req.params.message,
        karma: req.params.karma
    })
    .then(() => {
      res.status(200).send('inserted recurring payment');
    })
    .catch(err => {
      next(err);
    })
}

function insertBulletinNote(req, res, next) {
  db
    .none("INSERT INTO bulletin_notes (apt_id, posted_by, note) VALUES (${apt_id}, ${posted_by}, ${note})", {
      apt_id: req.params.apt_id,
      posted_by: req.params.posted_by,
      note: req.params.note
    })
    .then(() => {
      res.status(200).send('inserted new bulletin note');
    })
    .catch(err => {
      next(err);
    })
}

function insertGoal(req, res, next) {
  db
    .none("INSERT INTO goals_apartment (apt_id, posted_by, title, note, is_recurring) VALUES (${apt_id}, ${posted_by}, ${title}, ${note}, ${is_recurring})", {
      apt_id: req.params.apt_id,
      posted_by: req.params.posted_by,
      title: req.params.title,
      note: req.params.note,
      is_recurring: req.params.is_recurring
    })
    .then(() => {
      res.status(200).send('inserted apt goal');
    })
    .catch(err => {
      next(err);
    })
}

function updateGoalIsRecurring(req, res, next) {
  db
    .none("UPDATE goals_apartment SET is_active=${is_active} WHERE id={goal_id}", {
      is_active: req.params.is_active,
      goal_id: req.params.goal_id
    })
    .then(() => {
      res.status(200).send('updated recurring apartment goal is_active');
    })
    .catch(err => {
      next(err);
    })
}

function insertGoalRedeemed(req, res, next) {
  db
    .none("INSERT INTO goals_redeemed (apt_id, goal_id, redeemed_by_id, karma) VALUES (${apt_id}, ${goal_id}, ${redeemed_by_id}, ${karma}", {
      apt_id: req.params.apt_id,
      goal_id: req.params.goal_id,
      redeemed_by_id: req.params.redeemed_by_id,
      karma: req.params.karma
    })
}

module.exports = {
insertNewApartment,
insertUserIntoApartment,
insertTask,
insertTaskCompleted,
insertRecurringTask,
insertRecurringTaskCompleted,
updateRecurringTaskActive,
insertExpense,
insertPayment,
insertRecurringExpense,
updateRecurringExpenseActive,
insertRecurringPayment,
insertBulletinNote,
insertGoal,
updateGoalIsRecurring,
insertGoalRedeemed
};
