const db = require("../db/index")
const assert = require("assert")
const chai = require("chai")
const chaitHttp = require("chai-http")
const expect = chai.expect
const chaiAsPromised = require("chai-as-promised")
const app = require("../app")
chai.use(chaiAsPromised)
chai.use(chaitHttp)

before("clone the database for testing => roomease_test", () => {
    db.createDB()
})

beforeEach("rolling the database back to default", done => {
    db.dropAllTables()
    db.createTables()
    db.insertValues()
    done()
})

describe("Database Insert Queries:", () => {
    describe("insertNewApartment should return the apartment id", () => {
        it("it should return with ID 2", done => {
            chai
                .request(app)
                .post("/insertRoutes/insertNewApartment")
                .send({
                    apt_name: "apartment name test",
                    apt_pic: "url"
                })
                .end((err, res) => {
                    expect(err).to.be.null
                    expect(res.body.data.id).to.equal(2)
                    expect(res).to.have.status(200)
                    done()
                })
        })
    })
    describe("insertUserIntoApartment will return message 'inserted user into apartment'", () => {
        it("it will fail if message does not equal 'inserted user into apartment'", done => {
            chai
                .request(app)
                .post("/insertRoutes/insertUserIntoApartment")
                .send({
                    user_id: 1,
                    apt_id: 1
                })
                .end((err, res) => {
                    expect(err).to.be.null
                    expect(res.text).to.equal('inserted user into apartment')
                    done()
                })
        })
    })
    // describe("insertTask", () => {
    //     it("placeholder", done => {
    //         chai
    //             .request(app)
    //             .post("/insertRoutes/insertTask")
    //             .send({
    //                 apt_id: 3,
    //                 task_name: 'string',
    //                 posted_by_id: 1,
    //                 assigned_to_id: 2,
    //                 due_date: '2018/04/09',
    //                 message: 'string',
    //                 karma_value: 100
    //             })
    //             .end((err, res) => {
    //                 expect(err).to.be.null
    //                 expect(res.text).to.equal('inserted new task')
    //                 done()
    //             })
    //     })
    // })
})
