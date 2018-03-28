var express = require("express");
var router = express.Router();
let db = require("../db/queries/getQueries");

/* TASKS routes. */
router.get("/", function(req, res, next) {
  res.send(
    `TASKS queries are:     /active/:aptid = get active tasks --- /recurring/active/:aptid = get recurring active tasks`
  );
});

// -------   gets all active one time tasks
router.get("/:apt_id", db.getActiveTasks);

// -------   gets all active recurring tasks
router.get("/recurring/:apt_id", db.getActiveRecurringTasks);

module.exports = router;
