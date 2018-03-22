let db = require('../db/queries');
let mocks = require('node-mocks-http');

var assert = require('assert');


describe('Database Init', function() {
  describe('When we call create user', function() {
    it('will fail if password is less than 6', function() {
        let req = mocks.createRequest({
            body: {
                full_name: 'Eric2',
                password: "12345",
                email: 'eric@email.com',
                phone: '12345678'
            }
        });
        let res = mocks.createResponse({});   
      db.createUser(req, res);

      assert.equal(res.statusCode, 400)
    });
  });
  describe('When we call create user', function() {
    it('will be ok if password is at least 6', function() {
        let req = mocks.createRequest({
            body: {
                full_name: 'Eric3',
                password: "123456",
                email: 'eric@email.com',
                phone: '12345678'
            }
        });
        let res = mocks.createResponse({});   
      db.createUser(req, res);
      assert.equal(res.statusCode, 200)
    });
  });
});

