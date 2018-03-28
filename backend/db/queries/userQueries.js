const db = require("../index");
const authHelpers = require("../../auth/helpers");
const passport = require("../../auth/local");
const utils = require("./utils");

//user queries
function createUser(req, res, next) {  
  const hash = authHelpers.createHash(req.body.password);
  db
    .none(
      "INSERT INTO users (first_name, last_name, username, password_digest, gender, email, phone) VALUES (${first_name}, ${last_name}, ${username}, ${password}, ${gender}, ${email}, ${phone})",
      {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        username: req.body.username,
        password: hash,
        gender: req.body.gender,
        email: req.body.email,
        phone: req.body.phone
      }
    )
    .then(() => {
      res.status(200).json({
        message: `created user: ${req.body.username}`
      });
    })
    .catch(err => {
      console.log(err);
      res.status(406).send("error creating user");
    });
}

function loginUser(req, res, next) {
  passport.authenticate("local", {});
}

function logoutUser(req, res, next) {
  req.logout();
  res.status(200).send("log out success");
}


module.exports = {
  createUser,
  logoutUser,
  loginUser,
};
