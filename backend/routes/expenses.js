var express = require('express');
var router = express.Router();
let db = require("../db/queries/getQueries");

/* GET expenses. */
router.get("/:user_id", db.getActiveExpensesByUser);

router.get("/recurring/:userid", db.getActiveRecurringExpensesByUser);

module.exports = router;