let db = require("../db/queries");
var express = require('express');
var router = express.Router();
const passport = require("../auth/local");

router.post("/createUser", db.createUser);

router.post("/login", passport.authenticate("local"), (req, res) => {
	res.json(req.user);
})

router.get("/logout", db.logoutUser)

module.exports = router;
