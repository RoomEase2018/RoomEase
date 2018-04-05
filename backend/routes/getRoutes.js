let db = require("../db/queries");
var express = require('express');
var router = express.Router();
// const { loginRequired } = require("../auth/helpers");
// const passport = require("../auth/local");

router.get("/getActiveTasks/:apt_id", db.getActiveTasks)

router.get("/getActiveRecurringTasks/:apt_id", db.getActiveRecurringTasks)

// router.get("/getActiveExpensesByUser/:user_id", db.getActiveExpensesByUser)

// router.get("/getActiveRecurringExpensesByUser/:user_id", db.getActiveRecurringExpensesByUser)

router.get("/getAllCompletedTasksAndRecurring/:apt_id", db.getAllCompletedTasksAndRecurring)

router.get("/getActiveApartmentGoals/:apt_id", db.getActiveApartmentGoals)

router.get("/getVisibleBulletinNotes/:apt_id", db.getVisibleBulletinNotes)

router.get("/getApartmentInfo/:apt_id", db.getApartmentInfo)

router.get("/getUserInfo/:username", db.getUserInfo)

router.get("/getUsersInfoInApartment/:apt_id", db.getUsersInfoInApartment)

module.exports = router;

// loginRequired,