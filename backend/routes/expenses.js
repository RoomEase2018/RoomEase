var express = require('express');
var router = express.Router();
let db = require("../db/queries");

/* GET expenses. */
router.get("/user/:userid", db.getExpensesByUserId);

router.get("/apartment/:aptid", db.getExpensesByApartmentId);

router.get("/fixed/:aptid", db.getFixedExpensesByApartmentId);

module.exports = router;