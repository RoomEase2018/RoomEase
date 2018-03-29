let db = require("../db/queries");
var express = require('express');
var router = express.Router();
const { loginRequired } = require("../auth/helpers");
const passport = require("../auth/local");

router.get("/getActiveTasks/:apt_id", loginRequired, db.getActiveTasks)

router.get("/getActiveRecurringTasks/:apt_id", loginRequired, db.getActiveRecurringTasks)

router.get("/getActiveExpensesByUser/:user_id", loginRequired, db.getActiveExpensesByUser)

router.get("/getActiveRecurringExpensesByUser/:user_id", loginRequired, db.getActiveRecurringExpensesByUser)

router.get("/getActiveApartmentGoals/:apt_id", loginRequired, db.getActiveApartmentGoals)

router.get("/getActiveRecurringApartmentGoals/:apt_id", loginRequired, db.getActiveRecurringApartmentGoals)

router.get("/getVisibleBulletinNotes/:apt_id", loginRequired, db.getVisibleBulletinNotes)

router.get("/getApartmentInfo/:apt_id", loginRequired, db.getApartmentInfo)

// router.get("/getUserInfo", loginRequired, db.getUserInfo)

module.exports = router;