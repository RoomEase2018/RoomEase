let db = require("../db/queries");
var express = require('express');
var router = express.Router();
const { loginRequired } = require("../auth/helpers");
const passport = require("../auth/local");

router.post("/insertNewApartment", loginRequired, db.insertNewApartment)

router.post("/insertUserIntoApartment", loginRequired, db.insertUserIntoApartment)

router.post("/insertTask", loginRequired, db.insertTask)

router.post("/insertTaskCompleted", loginRequired, db.insertTaskCompleted)

router.post("/insertRecurringTask", loginRequired, db.insertRecurringTask)

router.post("/insertRecurringTaskCompleted", loginRequired, db.insertRecurringTaskCompleted)

router.post("/insertExpense", loginRequired, db.insertExpense)

router.post("/insertPayment", loginRequired, db.insertPayment)

router.post("/insertRecurringExpense", loginRequired, db.insertRecurringExpense)

router.post("/insertRecurringPayment", loginRequired, db.insertRecurringPayment)

router.post("/insertBulletinNote", loginRequired, db.insertBulletinNote)

router.post("/insertGoal", loginRequired, db.insertGoal)

router.post("/updateRecurringTaskActive", loginRequired, db.updateRecurringTaskActive)

router.post("/updateRecurringExpenseActive", loginRequired, db.updateRecurringExpenseActive)

router.post("/updateGoalIsRecurring", loginRequired, db.updateGoalIsRecurring)

module.exports = router;