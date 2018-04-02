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
    describe("insertNewApartment should add a name and pic url", () => {
        describe("then return the apartment id", () => {
            it("should not return anything with ID 2", done => {
                chai
                    .request(app)
                    .get("/getRoutes/getApartmentInfo/2")
                    .end((err, res) => {
                        console.log("first")
                        let ans = res.body.data
                        expect(err).to.be.null
                        expect(ans.length).to.equal(0)
                        expect(res).to.have.status(200)
                        assert.equal(ans.length, 0)
                        done()
                    })
                    .then(() => {
                        chai
                            .request(app)
                            .get("/getRoutes/getApartmentInfo/2")
                            .post("/insertRoutes/insertNewApartment")
                            .send({
                                apt_name: "apartment name test",
                                apt_pic: "url"
                            })
                            .end((err, res) => {
                                console.log("second")
                                expect(err).to.be.null
                                expect(res.body.data.id).to.equal(2)
                                expect(res).to.have.status(200)
                                done()
                            }).then(() => {
                                
                            })
                    })
            })
        })
    })
})
