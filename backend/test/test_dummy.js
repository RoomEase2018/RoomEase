const db = require("../db/index")
const assert = require("assert")
const chai = require("chai")
const chaitHttp = require("chai-http")
const expect = chai.expect
const chaiAsPromised = require("chai-as-promised")
const app = require("../app")
chai.use(chaiAsPromised)
chai.use(chaitHttp)

// const getQueriesTest = require("../db/queries/getQueriesTest")

before("clone the database for testing => roomease_test", () => {
    db.createDB()
})

beforeEach("rolling the database back to default", done => {
    db.dropAllTables()
    db.createTables()
    db.insertValues()
    done()
})

describe("Database Get Queries:", () => {
    describe("When we need to getActiveTasks", () => {
        it("should return -1 when the value is not present", () => {
            assert.equal([1, 2, 3].indexOf(4), -1)
        })
        it("hits the homepage and returns status 200", done => {
            chai
                .request(app)
                .get("/")
                .end((err, res) => {
                    console.log(err)
                    console.log(res)
                    expect(err).to.be.null
                    expect(res).to.have.status(200)
                    done()
                })
        })
    })
})