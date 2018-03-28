var express = require('express');
var router = express.Router();
let db = require("../db/queries/getQueries");
const passport = require("../auth/local");

/* USERS routes. */
router.get('/', function(req, res, next) {
  res.send(`USERS queries are:     /new = create a user --- /login = login a user --- /logout = log out a user --- /:username = get a user's info`);
});

router.post("/new", db.createUser);

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.json(req.user);
});

router.get("/logout", db.logoutUser);

router.get("/:username", db.getUserInfo);

module.exports = router;
