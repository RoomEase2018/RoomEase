let db = require("../db/queries");
var express = require('express');
var router = express.Router();
const { loginRequired } = require("../auth/helpers");
const passport = require("../auth/local");

// router.post("/insertNewApartment", loginRequired, db.insertNewApartment)

// router.post("/insertUserIntoApartment", loginRequired, db.insertUserIntoApartment)

// router.post("/insertTask", loginRequired, db.insertTask)

// router.post("/insertTaskCompleted", loginRequired, db.insertTaskCompleted)

// router.post("/insertRecurringTask", loginRequired, db.insertRecurringTask)

// router.post("/insertRecurringTaskCompleted", loginRequired, db.insertRecurringTaskCompleted)

// router.post("/insertExpense", loginRequired, db.insertExpense)

// router.post("/insertPayment", loginRequired, db.insertPayment)

// router.post("/insertRecurringExpense", loginRequired, db.insertRecurringExpense)

// router.post("/insertRecurringPayment", loginRequired, db.insertRecurringPayment)

// router.post("/insertBulletinNote", loginRequired, db.insertBulletinNote)

// router.post("/insertGoal", loginRequired, db.insertGoal)

// router.post("/updateRecurringTaskActive", loginRequired, db.updateRecurringTaskActive)

// router.post("/updateRecurringExpenseActive", loginRequired, db.updateRecurringExpenseActive)

// router.post("/updateGoalIsRecurring", loginRequired, db.updateGoalIsRecurring)

// ____________________

router.post("/insertNewApartment", db.insertNewApartment)

router.post("/insertUserIntoApartment", db.insertUserIntoApartment)

router.post("/insertTask", db.insertTask)

router.post("/insertTaskCompleted", db.insertTaskCompleted)

router.post("/insertRecurringTask", db.insertRecurringTask)

router.post("/insertRecurringTaskCompleted", db.insertRecurringTaskCompleted)

router.post("/insertExpense", db.insertExpense)

router.post("/insertPayment", db.insertPayment)

router.post("/insertRecurringExpense", db.insertRecurringExpense)

router.post("/insertRecurringPayment", db.insertRecurringPayment)

router.post("/insertBulletinNote", db.insertBulletinNote)

router.post("/insertGoal", db.insertGoal)

router.post("/updateRecurringTaskActive", db.updateRecurringTaskActive)

router.post("/updateRecurringExpenseActive", db.updateRecurringExpenseActive)

router.post("/updateGoalIsRecurring", db.updateGoalIsRecurring)


module.exports = router;