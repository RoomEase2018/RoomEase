const db = require("../index");
const authHelpers = require("../../auth/helpers");
const passport = require("../../auth/local");

function validateUsername(username) {
  if (!username) { return 'need a username to check'; }
  db.any('SELECT * FROM users WHERE username=${username}', { username: username })
    .then(data => {
      if(data.length) { return 'username is taken'; }
      else { return false; }
    })
    .catch(err => {
      res.status(400).send('error checking username')
    })
}

function validateEmail(email) {
  if (!email) { return 'need an email to check' }
  db.any('SELECT * FROM users WHERE email WHERE email=${email}', { email: email })
    .then(data => {
      if (data.length) { return 'email is taken'; }
      else { return false; }
    })
    .catch(err => {
      res.status(400).send('error checking email')
    })
}

function validatePhone(phoneNum) {
  if (!phoneNum) { return 'need a phone number to check' }
  db.any('SELECT * FROM users WHERE phone=${phone}', { phone: phoneNum })
    .then(data => {
      if (data.length) { return 'phone number is taken'; }
      else { return false; }
    })
    .catch(err => {
      res.status(400).send('error checking phone number');
    })
}

// function validateUsername(username) {
//   if (!username) { return 'need a username'}
//   db.any('SELECT * FROM users WHERE username=${username}', { username: username })
//     .then(data => {
//       if(data.length) { return false; }
//       else { return 'username is taken'; }
//     })
//     .catch(err => {
//       res.status(400).send('error checking username')
//     })
// }

// function validateApartment(apt) {
//   if (!apt) { return 'need a username'}
//   db.any('SELECT * FROM apartment WHERE id=${apt}', { apt: apt })
//     .then(data => {
//       if(data.length) { return false; }
//       else { return 'username is taken'; }
//     })
//     .catch(err => {
//       res.status(400).send('error checking username')
//     })
// }

//user queries

module.exports {
  validateUsername,
  validateEmail,
  validatePhone
}