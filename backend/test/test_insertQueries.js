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

describe("Database Insert Queries: ==============", () => {
    describe("insertNewApartment", () => {
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
    describe("insertUserIntoApartment", () => {
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
                    expect(res.text).to.equal("inserted user into apartment")
                    done()
                })
        })
    })
    describe("insertTask", () => {
        it("it will fail if message does not equal 'inserted new task'", done => {
            chai
                .request(app)
                .post("/insertRoutes/insertTask")
                .send({
                    apt_id: 1,
                    task_name: "vaccuum",
                    posted_by_id: 1,
                    assigned_to_id: 2,
                    due_date: "2018/04/09",
                    message: "",
                    karma_value: 20
                })
                .end((err, res) => {
                    expect(err).to.be.null
                    expect(res.text).to.equal("inserted new task")
                    done()
                })
        })
    })
    describe("insertTaskCompleted", () => {
        it("it will fail if message does not equal 'inserted completed task'", done => {
            chai
                .request(app)
                .post("/insertRoutes/insertTaskCompleted")
                .send({
                    task_id: 1,
                    apt_id: 1,
                    completed_by_id: 2,
                    karma: 10
                })
                .end((err, res) => {
                    expect(err).to.be.null
                    expect(res.text).to.equal("inserted completed task")
                    done()
                })
        })
    })
    describe("insertRecurringTask", () => {
        it("it will fail if message does not equal 'inserted new recurring task'", done => {
            chai
                .request(app)
                .post("/insertRoutes/insertRecurringTask")
                .send({
                    apt_id: 1,
                    task_name: "shave my back",
                    posted_by_id: 2,
                    assigned_to_id: 1,
                    due_day: "friday",
                    message: "get shaving cream and shave back",
                    karma_value: 5
                })
                .end((err, res) => {
                    expect(err).to.be.null
                    expect(res.text).to.equal("inserted new recurring task")
                    done()
                })
        })
    })
    describe("insertRecurringTaskCompleted", () => {
        it("it will fail if message does not equal 'inserted completed recurring task'", done => {
            chai
                .request(app)
                .post("/insertRoutes/insertRecurringTaskCompleted")
                .send({
                    task_id: 1,
                    apt_id: 1,
                    completed_by_id: 1,
                    karma: 10
                })
                .end((err, res) => {
                    expect(err).to.be.null
                    expect(res.text).to.equal(
                        "inserted completed recurring task"
                    )
                    done()
                })
        })
    })
    describe("updateRecurringTaskActive", () => {
        it("it will fail if message does not equal 'updated recurring task is_recurring'", done => {
            chai
                .request(app)
                .post("/insertRoutes/updateRecurringTaskActive")
                .send({
                    is_recurring: false,
                    task_id: 2
                })
                .end((err, res) => {
                    expect(err).to.be.null
                    expect(res.text).to.equal(
                        "updated recurring task is_recurring"
                    )
                    done()
                })
        })
    })
    describe("insertExpense", () => {
        it("it will fail if message does not equal 'inserted new expense'", done => {
            chai
                .request(app)
                .post("/insertRoutes/insertExpense")
                .send({
                    apt_id: 1,
                    expense_name: 'dog food',
                    message: 'only Acana brand',
                    amount: 49.99,
                    payer_id: 1,
                    payee_id: 2,
                    due_date: '2018/04/05',
                    karma_value: 10
                })
                .end((err, res) => {
                    expect(err).to.be.null
                    expect(res.text).to.equal(
                        "inserted new expense"
                    )
                    done()
                })
        })
    })
    describe("insertPayment", () => {
        it("it will fail if message does not equal 'inserted new payment'", done => {
            chai
                .request(app)
                .post("/insertRoutes/insertPayment")
                .send({
                    amount: 2.00,
                    apt_id: 1,
                    payer_id: 1,
                    payee_id: 2,
                    expense_id: 2,
                    message: 'for the toilet paper',
                    karma: 10
                })
                .end((err, res) => {
                    expect(err).to.be.null
                    expect(res.text).to.equal(
                        "inserted new payment"
                    )
                    done()
                })
        })
    })
    describe("insertRecurringExpense", () => {
        it("it will fail if message does not equal 'inserted new expense'", done => {
            chai
                .request(app)
                .post("/insertRoutes/insertRecurringExpense")
                .send({
                    apt_id: 1,
                    expense_name: 'rent',
                    message: 'rent is due',
                    amount: 500,
                    payer_id: 1,
                    payee_id: 2,
                    due_day: 'EOM',
                    karma_value: 10
                })
                .end((err, res) => {
                    expect(err).to.be.null
                    expect(res.text).to.equal(
                        "inserted new expense"
                    )
                    done()
                })
        })
    })
    describe("updateRecurringExpenseActive", () => {
        it("it will fail if message does not equal 'updated recurring expense is_recurring'", done => {
            chai
                .request(app)
                .post("/insertRoutes/updateRecurringExpenseActive")
                .send({
                    is_recurring: false,
                    expense_id: 1
                })
                .end((err, res) => {
                    expect(err).to.be.null
                    expect(res.text).to.equal(
                        "updated recurring expense is_recurring"
                    )
                    done()
                })
        })
    })
    describe("insertRecurringPayment", () => {
        it("it will fail if message does not equal 'inserted recurring payment'", done => {
            chai
                .request(app)
                .post("/insertRoutes/insertRecurringPayment")
                .send({
                    amount: 700, 
                    apt_id: 1,
                    payer_id: 1,
                    payee_id: 2,
                    expense_id: 2,
                    message: 'More utilities',
                    karma: 10
                })
                .end((err, res) => {
                    expect(err).to.be.null
                    expect(res.text).to.equal(
                        "inserted recurring payment"
                    )
                    done()
                })
        })
    })
})
