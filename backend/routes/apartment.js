var express = require('express');
var router = express.Router();
let db = require("../db/queries/getQueries");

/* Apartment routes. */
router.get('/', function(req, res, next) {
  res.send(`APARTMENT queries are:     /:id = get apartment info`);
});

router.get('/:id', db.getApartmentInfo);

module.exports = router;