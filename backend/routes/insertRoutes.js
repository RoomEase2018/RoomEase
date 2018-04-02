let db = require("../db/queries/insertQueries")
var express = require("express")
var router = express.Router()
const { loginRequired } = require("../auth/helpers")
const passport = require("../auth/local")

router.post("/insertNewApartment", db.insertNewApartment)

router.post("/insertUserIntoApartment", db.insertUserIntoApartment)

router.post("/insertTask", db.insertTask)

router.post("/insertTaskCompleted", db.insertTaskCompleted)

router.post("/insertRecurringTask", db.insertRecurringTask)

router.post("/insertRecurringTaskCompleted", db.insertRecurringTaskCompleted)

router.post("/updateRecurringTaskActive", db.updateRecurringTaskActive)

router.post("/insertExpense", db.insertExpense)

router.post("/insertPayment", db.insertPayment)

router.post("/insertRecurringExpense", db.insertRecurringExpense)

router.post("/updateRecurringExpenseActive", db.updateRecurringExpenseActive)

router.post("/insertRecurringPayment", db.insertRecurringPayment)

router.post("/insertBulletinNote", db.insertBulletinNote)

router.post("/insertGoal", db.insertGoal)

router.post("/updateGoalIsRecurring", db.updateGoalIsRecurring)

router.post("/insertGoalRedeemed", db.insertGoalRedeemed)

module.exports = router
