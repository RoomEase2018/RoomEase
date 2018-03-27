const db = require("../index");
const authHelpers = require("../../auth/helpers");
const passport = require("../../auth/local");
const utils = require("./utils");



// function getActiveApartmentGoals(req, res, next) {
// 	db
// 		.any('SELECT * FROM apartment_goals FROM apartment_goals WHERE apt_id=${apt_id}) AND is_redeemed=FALSE', {
// 			apt_id: req.params.apt_id
// 		})
// 		.then(data => {
// 			res.status(200).json({
// 				status: "success",
// 				data: data,
// 				message: "Fetched all active apartment goals"
// 			})
// 		})
// 		.catch(err => {
// 			next(err);
// 		})
// }

// function getAllTasksAndExpensesMonth (req, res, next) {
// 	db.
// 		any("SELECT * FROM tasks AND expenses WHERE apt_id={apt_id} AND due_date={due_date}", {
// 			apt_id: req.params.apt_id,
// 			due_date: 
// 		})
// }



function getUserById(req, res, next) {
  db
    .one("select * from users where id = ${id}", {
      id: req.params.id
    })
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Fetched info for single user"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}

// apartment queries
function getApartmentById(req, res, next) {
  db
    .one("select * from apartments where id = ${id}", {
      id: req.params.id
    })
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Fetched info for single apartment"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}