let db = require("../db/queries")
var express = require("express")
var router = express.Router()
// const { loginRequired } = require("../auth/helpers")
// const passport = require("../auth/local")

router.post("/insertNewApartment", db.insertNewApartment)

router.post("/insertUserIntoApartment", db.insertUserIntoApartment)

router.post("/insertTask", db.insertTask)

router.post("/insertTaskCompleted", db.insertTaskCompleted)

router.post("/insertRecurringTask", db.insertRecurringTask)

router.post("/insertRecurringTaskCompleted", db.insertRecurringTaskCompleted)

router.post("/updateRecurringTaskActive", db.updateRecurringTaskActive)

router.post("/insertBulletinNote", db.insertBulletinNote)

router.post("/insertGoal", db.insertGoal)

router.post("/updateGoalIsRecurring", db.updateGoalIsRecurring)

router.post("/insertGoalRedeemed", db.insertGoalRedeemed)

module.exports = router
