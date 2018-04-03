const {
    createDB,
    dropAllTables,
    createTables,
    insertValues
} = require("../db/index")
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

describe("Database User Query Test:  ==============", () => {
    it("Create New User", done => {
        chai
            .request(app)
            .post("/user/createUser")
            .send({
                first_name: "aiden",
                last_name: "shih",
                username: "test_username",
                password: "password",
                gender: "M",
                email: "unique@email.com",
                phone: "1224567890"
            })
            .end((err, res) => {
                expect(err).to.be.null
                expect(res).to.have.status(200)
                done()
            })
    })
    // it("Login User", done => {
    //     chai
    //         .request(app)
    //         .post("/user/login")
    //         .send({
    //             username: "Aiden",
    //             password: "a",
    //         })
    //         .end((err, res) => {
    //             expect(err).to.be.null
    //             expect(res).to.have.status(200)
    //             done()
    //         })
    // })
    it("Logout User", done => {
        chai
            .request(app)
            .get("/user/logout")
            .end((err, res) => {
                expect(err).to.be.null
                expect(res).to.have.status(200)
                done()
            })
    })
})
