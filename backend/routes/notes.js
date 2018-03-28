var express = require('express');
var router = express.Router();
let db = require("../db/queries/getQueries");

/* GET notes. */
router.get("/:apt_id", db.getVisibleBulletinNotes);

module.exports = router;