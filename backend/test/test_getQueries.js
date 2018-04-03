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

describe("Database Get Queries:  ==============", () => {
    describe("getActiveTasks with apt_id 1", () => {
        it("it should return with status code 200", done => {
            chai
                .request(app)
                .get("/getRoutes/getActiveTasks/1")
                .end((err, res) => {
                    expect(err).to.be.null
                    expect(res).to.have.status(200)
                    done()
                })
        })
    })
    describe("getActiveRecurringTasks with apt_id 1", () => {
        it("it should return with status code 200", done => {
            chai
                .request(app)
                .get("/getRoutes/getActiveRecurringTasks/1")
                .end((err, res) => {
                    expect(err).to.be.null
                    expect(res).to.have.status(200)
                    done()
                })
        })
    })
    describe("getActiveExpensesByUser with user_id 1", () => {
        it("it should return with status code 200", done => {
            chai
                .request(app)
                .get("/getRoutes/getActiveExpensesByUser/1")
                .end((err, res) => {
                    expect(err).to.be.null
                    expect(res).to.have.status(200)
                    done()
                })
        })
    })
    describe("getActiveRecurringExpensesByUser with user_id 1", () => {
        it("it should return with status code 200", done => {
            chai
                .request(app)
                .get("/getRoutes/getActiveRecurringExpensesByUser/1")
                .end((err, res) => {
                    expect(err).to.be.null
                    expect(res).to.have.status(200)
                    done()
                })
        })
    })
    describe("getActiveApartmentGoals with apt_id 1", () => {
        it("it should return with status code 200", done => {
            chai
                .request(app)
                .get("/getRoutes/getActiveApartmentGoals/1")
                .end((err, res) => {
                    expect(err).to.be.null
                    expect(res).to.have.status(200)
                    done()
                })
        })
    })
    describe("getVisibleBulletinNotes with apt_id 1", () => {
        it("it should return with status code 200", done => {
            chai
                .request(app)
                .get("/getRoutes/getVisibleBulletinNotes/1")
                .end((err, res) => {
                    expect(err).to.be.null
                    expect(res).to.have.status(200)
                    done()
                })
        })
    })
    describe("getApartmentInfo with apt_id 1", () => {
        it("it should return with status code 200", done => {
            chai
                .request(app)
                .get("/getRoutes/getApartmentInfo/1")
                .end((err, res) => {
                    expect(err).to.be.null
                    expect(res).to.have.status(200)
                    done()
                })
        })
    })
    describe("getUserInfo with username Aiden", () => {
        it("it should return with status code 200", done => {
            chai
                .request(app)
                .get("/getRoutes/getUserInfo/Aiden")
                .end((err, res) => {
                    expect(err).to.be.null
                    expect(res).to.have.status(200)
                    done()
                })
        })
    })
})