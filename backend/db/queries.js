const db = require("./index");
const authHelpers = require("../auth/helpers");
const passport = require("../auth/local");

//user queries
function createUser(req, res, next) {
  if (req.body.password.length <= 6) {
    res.status(200).json({
      message: `password must be longer than 6 characters`
    });
    return;
  }
  const hash = authHelpers.createHash(req.body.password);
  db
    .none(
      "INSERT INTO users (full_name, username, password_digest, email, phone) VALUES (${full_name}, ${username}, ${password}, ${email}, ${phone})",
      {
        full_name: req.body.name,
        username: req.body.username,
        password: hash,
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

function getUserById(req, res, next) {
  db
    .one("select * from users where id = ${id}", {
      id: req.params.id
    })
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Fetched info for single user"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}

// apartment queries
function getApartmentById(req, res, next) {
  db
    .one("select * from apartments where id = ${id}", {
      id: req.params.id
    })
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Fetched info for single apartment"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}

//chores queries
function getChoresByUserId(req, res, next) {
  db
    .any("select * from chores where posted_by_id = ${userid}", {
      userid: req.params.userid
    })
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Fetched user chores"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}

function getChoresByApartmentId(req, res, next) {
  db
    .any("select * from chores where apartment_id = ${aptid}", {
      aptid: req.params.aptid
    })
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Fetched chores for single apartment"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}

//expenses queries (joined with fixed expenses)
function getExpensesByUserId(req, res, next) {
  db
    .any("select * from expenses where payee_id = ${userid}", {
      userid: req.params.userid
    })
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Fetched expenses for single user"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}

function getExpensesByApartmentId(req, res, next) {
  db
    .any("select * from expenses where apartment_id = ${aptid}", {
      aptid: req.params.aptid
    })
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Fetched expenses for single user"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}

function getFixedExpensesByApartmentId(req, res, next) {
  db
    .any("select * from fixed_expenses where apartment_id = ${aptid}", {
      aptid: req.params.aptid
    })
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Fetched fixed expenses for single apartment"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}

//notes queries
function getNotesByApartmentId(req, res, next) {
  db
    .any("select * from notes where apartment_id = ${aptid}", {
      aptid: req.params.aptid
    })
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Fetched notes for single apartment"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}

module.exports = {
  createUser,
  logoutUser,
  loginUser,
  getApartmentById,
  getUserById,
  getChoresByUserId,
  getChoresByApartmentId,
  getExpensesByUserId,
  getExpensesByApartmentId,
  getFixedExpensesByApartmentId,
  getNotesByApartmentId
};
