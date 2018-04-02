const {db} = require("../index")
const authHelpers = require("../../auth/helpers")
const passport = require("../../auth/local")

function insertNewApartment(req, res, next) {
    db
      .one("INSERT INTO apartments (apt_name, apt_pic) VALUES (${apt_name}, ${apt_pic}) RETURNING id", {
        apt_name: req.body.apt_name,
        apt_pic: req.body.apt_pic
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
        user_id: req.body.user_id,
        apt_id: req.body.apt_id
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
      .none("INSERT INTO tasks (apt_id, task_name, posted_by_id, assigned_to_id, due_date, due_time, message, karma_value) VALUES (${apt_id}, ${task_name}, ${posted_by_id}, ${assigned_to_id}, ${due_date}, ${due_time}, ${message}, ${karma_value})", {
        apt_id: req.body.apt_id,
        task_name: req.body.task_name,
        posted_by_id: req.body.posted_by_id,
        assigned_to_id: req.body.assigned_to_id,
        due_date: req.body.due_date,
        due_time: req.body.due_time,
        message: req.body.message,
        karma_value: req.body.karma_value
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
        task_id: req.body.task_id,
        apt_id: req.body.apt_id,
        completed_by_id: req.body.completed_by_id,
        karma: req.body.karma,
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
      .none("INSERT INTO tasks_recurring (apt_id, task_name, posted_by_id, assigned_to_id, due_day, due_time, message, karma_value) VALUES ($(apt_id), $(task_name), $(posted_by_id), $(assigned_to_id), $(due_day), $(due_time), $(message), $(karma_value))", {
        apt_id: req.body.apt_id,
        task_name: req.body.task_name,
        posted_by_id: req.body.posted_by_id,
        assigned_to_id: req.body.assigned_to_id,
        due_day: req.body.due_day,
        due_time: req.body.due_time,
        message: req.body.message,
        karma_value: req.body.karma_value
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
        task_id: req.body.task_id,
        apt_id: req.body.apt_id,
        completed_by_id: req.body.completed_by_id,
        karma: req.body.karma,
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
      .none("UPDATE tasks_recurring SET is_recurring=${is_recurring} WHERE id=${task_id}", {
        is_recurring: req.body.is_recurring,
        task_id: req.body.task_id
      })
      .then(() => {
        res.status(200).send('updated recurring task is_recurring');
      })
      .catch(err => {
        next(err);
      })
  }
  
  function insertExpense(req, res, next) {
    db
      .none("INSERT INTO expenses (apt_id, expense_name, message, amount, payer_id, payee_id, due_date, due_time, karma_value) VALUES (${apt_id}, ${expense_name}, ${message}, ${amount}, ${payer_id}, ${payee_id}, ${due_date}, ${due_time}, ${karma_value})", {
        apt_id: req.body.apt_id,
        expense_name: req.body.expense_name,
        message: req.body.message,
        amount: req.body.amount,
        payer_id: req.body.payer_id,
        payee_id: req.body.payee_id,
        due_date: req.body.due_date,
        due_time: req.body.due_time,
        karma_value: req.body.karma_value
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
      .none("INSERT INTO payments_expenses (amount, apt_id, payer_id, payee_id, expense_id, message, karma) VALUES (${amount}, ${apt_id}, ${payer_id}, ${payee_id}, ${expense_id}, ${message}, ${karma})", {
        amount: req.body.amount,
        apt_id: req.body.apt_id,
        payer_id: req.body.payer_id,
        payee_id: req.body.payee_id,
        expense_id: req.body.expense_id,
        message: req.body.message,
        karma: req.body.karma
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
      .none("INSERT INTO expenses_recurring (apt_id, expense_name, message, amount, payer_id, payee_id, due_day, due_time, karma_value) VALUES (${apt_id}, ${expense_name}, ${message}, ${amount}, ${payer_id}, ${payee_id}, ${due_day}, ${due_time}, ${karma_value})", {
        apt_id: req.body.apt_id,
        expense_name: req.body.expense_name,
        message: req.body.message,
        amount: req.body.amount,
        payer_id: req.body.payer_id,
        payee_id: req.body.payee_id,
        due_day: req.body.due_day,
        due_time: req.body.due_time,
        karma_value: req.body.karma_value
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
      .none("UPDATE expenses_recurring SET is_recurring=${is_recurring} WHERE id=${expense_id}", {
        is_recurring: req.body.is_recurring,
        expense_id: req.body.expense_id
      })
      .then(() => {
        res.status(200).send('updated recurring expense is_recurring');
      })
      .catch(err => {
        next(err);
      })
  }
  
  function insertRecurringPayment(req, res, next) {
    db
      .none("INSERT INTO payments_recurring_expenses (amount, apt_id, payer_id, payee_id, expense_id, message, karma) VALUES (${amount}, ${apt_id}, ${payer_id}, ${payee_id}, ${expense_id}, ${message}, ${karma})", {
          amount: req.body.amount, 
          apt_id: req.body.apt_id,
          payer_id: req.body.payer_id,
          payee_id: req.body.payee_id,
          expense_id: req.body.expense_id,
          message: req.body.message,
          karma: req.body.karma
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
        apt_id: req.body.apt_id,
        posted_by: req.body.posted_by,
        note: req.body.note
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
      .none("INSERT INTO goals_apartment (apt_id, posted_by, title, note, is_recurring, karma_cost) VALUES (${apt_id}, ${posted_by}, ${title}, ${note}, ${is_recurring}, ${karma_cost})", {
        apt_id: req.body.apt_id,
        posted_by: req.body.posted_by,
        title: req.body.title,
        note: req.body.note,
        karma_cost: req.body.karma_cost,
        is_recurring: req.body.is_recurring
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
      .none("UPDATE goals_apartment SET is_recurring=${is_recurring} WHERE id=${goal_id}", {
        is_recurring: req.body.is_recurring,
        goal_id: req.body.goal_id
      })
      .then(() => {
        res.status(200).send('updated recurring apartment goal is_recurring');
      })
      .catch(err => {
        next(err);
      })
  }
  
  function insertGoalRedeemed(req, res, next) {
    db
      .none("INSERT INTO goals_redeemed (apt_id, goal_id, redeemed_by_id, karma) VALUES (${apt_id}, ${goal_id}, ${redeemed_by_id}, ${karma}", {
        apt_id: req.body.apt_id,
        goal_id: req.body.goal_id,
        redeemed_by_id: req.body.redeemed_by_id,
        karma: req.body.karma
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
}
