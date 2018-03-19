
var pgp = require("pg-promise")({});
var connectionString = "postgres://localhost/roomease";
var db = pgp(connectionString);

module.exports = db;