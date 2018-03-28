const db = require("../index");
const authHelpers = require("../../auth/helpers");
const passport = require("../../auth/local");

function validateCreatinguser(req) {
  const { first_name, last_name, username, password, gender, email, phone } = req.body;
  if (!first_name) { return res.status(400).send('missing first_name'); }
  if (!last_name) { return res.status(400).send('missing last_name'); }
  if (!username) { return res.status(400).send('missing username'); }
  if (!password) { return res.status(400).send('missing password'); }
  if (!gender) { return res.status(400).send('missing gender'); }
  if (!email) { return res.status(400).send('missing email'); }
  if (!phone) { return res.status(400).send('missing phone'); }

  db.any('SELECT * FROM users WHERE username=${username}', { username: username })
    .then(data => {
      if(data.length) { return 'username is taken'; }
      else {
        db.any('SELECT * FROM users WHERE email WHERE email=${email}', { email: email })
          .then(data => {
            if (data.length) { return 'email is taken'; }
            else {
              db.any('SELECT * FROM users WHERE phone=${phone}', { phone: phoneNum })
                .then(data => {
                  if (data.length) { return 'phone number is taken'; }
                  else { return false; }
                })
                .catch(err => {
                  res.status(400).send('error checking phone number');
                })
            }
          })
          .catch(err => {
            res.status(400).send('error checking email')
          })
      }
    })
    .catch(err => {
      res.status(400).send('error checking username')
    })
}


module.exports = {
  validateCreatinguser
}