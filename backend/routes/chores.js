var express = require('express');
var router = express.Router();
let db = require("../db/queries");

/* GET chores. */
router.get("/user/:userid", db.getChoresByUserId);

router.get("/apartment/:aptid", db.getChoresByApartmentId);

module.exports = router;