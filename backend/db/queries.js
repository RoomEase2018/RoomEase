const db = require("./index");
const authHelpers = require("../auth/helpers");
const passport = require("../auth/local");

//user queries
function createUser(req, res, next) {
  console.log("createuser");
  if (req.body.password.length <= 6) {
    res.status(200).json({
      message: `password must be longer than 6 characters`
    });
    return;
  }

  const hash = authHelpers.createHash(req.body.password);
  console.log("hash", hash);
  console.log("req.body.username", req.body.username);
  db
    .none(
      "INSERT INTO users (full_name, username, password_digest, email) VALUES (${full_name}, ${username}, ${password}, ${email})",
      {
        full_name: req.body.full_name,
        username: req.body.username,
        password: hash,
        email: req.body.email
      }
    )
    .then(() => {
      res.status(200).json({
        message: `created user: ${req.body.username}`
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).send("error creating user");
    });
}

function loginUser(req, res, next) {
  passport.authenticate("local", {});
}

function logoutUser(req, res, next) {
  req.logout();
  res.status(200).send("log out success");
}

//apartment queries
// function getApartmentById(req, res, next) {
//   db
//   .any("",
//  { img_id: req.params.img_id } 
// )
//   .then(function(data) {
//     res.status(200).json({
//       status: "success",
//       data: data,
//       message: "Fetched info for single apartment"
//     });
//   })
//   .catch(function(err) {
//     return next(err);
//   });
// }

module.exports = {
  createUser,
  logoutUser,
  loginUser
};
