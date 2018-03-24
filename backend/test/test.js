let db = require("../db/queries/userQueries")

let mocks = require("node-mocks-http")

var assert =require("assert")

describe("Database Init", function() {
   // describe("1", function() {
   //     it("will fail if password is less than 6", function() {
   //         let req = mocks.createRequest({
   //             body: {
   //                 username: "hello2",
   //                 first_name: "Eric2",
   //                 last_name: "Eric2",
   //                 password: "12tdd345",
   //                 email:"hello2",
   //                 phone: "12",
   //                 gender: "M"
   //             }
   //         })
   //         let res = mocks.createResponse({})
   //         db.createUser(req, res)

   //         assert.equal(res.statusCode, 200)
   //     })
   // })

   describe("2", function() {
       it("will be ok if passwod is at least 6", function() {
           let req = mocks.createRequest({
               body: {
                   usename: "ericliu2",
                   password: 'asdfadsfasdf'
               }
           }) 
           let res = mocks.createResponse({})
           console.log(req);
           console.log('=================');
           console.log(res);
           db.createUser(req, res)
           assert.equal(res.statusCode, 200)
       })
   })
})