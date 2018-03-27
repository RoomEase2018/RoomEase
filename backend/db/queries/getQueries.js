const db = require("../index");
const authHelpers = require("../../auth/helpers");
const passport = require("../../auth/local");
const utils = require("./utils");

// ---------------
// FOR DASHBOARD |
// ---------------
// GETS ACTIVE TASKS AND EXPENSES
// ----------------------------------------------
function getActiveTasks (req, res, next) {
	db
		.any('SELECT * FROM tasks A LEFT JOIN tasks_completed B ON A.id = B.task_id WHERE A.id!=B.task_id AND A.apt_id=${apt_id}', {
			apt_id: req.params.apt_id
		})
		.then(data => {
			res.status(200).json({
				status: "sucess",
				data: data,
				message: "fetched all active tasks"
			})
		})
}

function getActiveRecurringTasks (req, res, next) {
	db
		.any('SELECT * FROM tasks_recurring A LEFT JOIN tasks_recurring_completed B ON A.id = B.task_id WHERE A.id!=B.task_id AND A.apt_id=${apt_id}', {
			apt_id: req.params.apt_id
		})
		.then(data => {
			res.status(200).json({
				status: "sucess",
				data: data,
				message: "fetched all active recurring tasks"
			})
		})
}

function getActiveExpenses (req, res, next) {
	db
		.any('SELECT * FROM expenses A LEFT JOIN payments_expenses B ON A.id = B.expense_id WHERE A.id!=B.expense_id AND A.apt_id=${apt_id}', {
			apt_id: req.params.apt_id
		})		.then(data => {
			res.status(200).json({
				status: "sucess",
				data: data,
				message: "fetched all active expenses"
			})
		})
}

function getActiveRecurringExpenses (req, res, next) {
	db
		.any('SELECT * FROM expenses_recurring A LEFT JOIN payments_recurring_expenses B ON A.id = B.expense_id WHERE A.id!=B.expense_id AND A.apt_id=${apt_id}', {
			apt_id: req.params.apt_id
		})
		.then(data => {
			res.status(200).json({
				status: "sucess",
				data: data,
				message: "fetched all active recurring expenses"
			})
		})
}

// GETS APARTMENT GOALS
// ----------------------------------------------

function getActiveApartmentGoals(req, res, next) {
	db
		.any('SELECT * FROM goals_apartment WHERE apt_id=${apt_id}) AND (is_active=TRUE)', {
			apt_id: req.params.apt_id
		})
		.then(data => {
			res.status(200).json({
				status: "success",
				data: data,
				message: "Fetched all active apartment goals"
			})
		})
		.catch(err => {
			next(err);
		})
}

function getActiveRecurringApartmentGoals(req, res, next) {
	db
		.any('SELECT * FROM goals_apartment WHERE apt_id=${apt_id}) AND (is_active=TRUE)', {
			apt_id: req.params.apt_id
		})
		.then(data => {
			res.status(200).json({
				status: "success",
				data: data,
				message: "Fetched all active recurring apartment goals"
			})
		})
		.catch(err => {
			next(err);
		})
}

// GETS BULLETIN NOTES
// ----------------------------------------------

function getVisibleBulletinNotes(req, res, next) {
	db
		.any("SELECT * FROM bulletin_notes WHERE apt_id=${apt_id} AND is_visible=TRUE", {
			apt_id: req.params.apt_id
		})
		.then(data => {
			res.status(200).json({
        status: "success",
        data: data,
        message: "Fetched all visible bulletin notes"
      });
		})
		.catch(err => {
			next(err);
		})
}

// GETS APARTMENT INFO
// ----------------------------------------------

function getApartmentInfo(req, res, next) {
	db
		.any("SELECT * FROM apartments WHERE apt_id=${apt_id}", {
			apt_id: req.params.apt_id
		})
		.then(data => {
			res.status(200).json({
        status: "success",
        data: data,
        message: "Fetched all apartment info"
      });
		})
		.catch(err => {
			next(err);
		})
}

// GETS USER INFO
// ----------------------------------------------

function getUserInfo(req, res, next) {
	db
		.any("SELECT * FROM users WHERE username=${username} OR email=${email}", {
			username: req.params.username,
			email: req.params.email
		})
		.then(data => {
			res.status(200).json({
        status: "success",
        data: data,
        message: "Fetched all user info"
      });
		})
		.catch(err => {
			next(err);
		})
}

// function getAllUserApartmentInfo(req, res, next) {
// 	db
// 		.any("SELECT * FROM users_apt WHERE apt_id")
// }