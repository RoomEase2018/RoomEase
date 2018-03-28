var express = require('express');
var router = express.Router();
let db = require("../db/queries/getQueries");

/* GET goals. */
router.get("/:apt_id", db.getActiveApartmentGoals);

router.get("/recurring/:apt_id", db.getActiveRecurringApartmentGoals);


module.exports = router;