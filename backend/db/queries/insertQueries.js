const db = require("../index");
const authHelpers = require("../../auth/helpers");
const passport = require("../../auth/local");
const utils = require("./utils");

// USER LOGIN/LOGOUT QUERIES
// -----------------------------------------------

function insertNewApartment(req, res, next) {
  db
    .any("INSERT INTO apartments (apt_name, apt_pic) VALUES ()")
}

// INSERT NEW APARTMENT

// INSERT NEW USER_APT

// INSERT NEW TASK/RECURRING

// INSERT NEW EXPENSE/RECURRING

// INSERT NEW NOTE

// INSERT NEW GOAL

// INSERT NEW REDEMEEMED GOAL
function insertNewAparasdfent(req, res, next) {
  db
    .any("SELECT * FROM bulletin_notes WHERE apt_id=${apt_id} AND is_visible=TRUE", {
      apt_id: req.params.apt_id
    })
    .then(data => {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Fetched all visible bulletin notes"
      });
    })
    .catch(err => {
      next(err);
    })
}



module.exports = {
  createUser,
  logoutUser,
  loginUser
};


const fetchNewThread = (req, res, next) => {
    let query =
        "INSERT INTO threads (user_1, user_2) VALUES (${username1}, ${username2}) RETURNING ID";
    db
        .any(query, {
            username1: req.body.username1,
            username2: req.body.username2
        })
        .then(function(data) {
            res.status(200).json({
                status: "success",
                data: data,
                message: "data is the thread ID."
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).send("Error getting thread.");
        });
};