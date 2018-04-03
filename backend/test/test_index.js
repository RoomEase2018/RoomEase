const {createDB, dropAllTables, createTables, insertValues} = require("../db/index")
const assert = require("assert")
const chai = require("chai")
const chaitHttp = require("chai-http")
const expect = chai.expect
const chaiAsPromised = require("chai-as-promised")
const app = require("../app")
chai.use(chaiAsPromised)
chai.use(chaitHttp)

before("clone the database for testing => roomease_test", () => {
    createDB()
})

beforeEach("rolling the database back to default", done => {
    dropAllTables()
    createTables()
    insertValues()
    done()
})

describe("Database Index Query Test:  ==============", () => {
    describe("When we hit db with a home route get request", () => {
        it("it should return OK with status 200", done => {
            chai
                .request(app)
                .get("/")
                .end((err, res) => {
                    expect(err).to.be.null
                    expect(res).to.have.status(200)
                    done()
                })
        })
    })
})