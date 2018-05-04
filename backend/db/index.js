const pgp = require("pg-promise")({})
const { QueryFile } = require("pg-promise")
const { execSync } = require("child_process")


const initConnection = () => {
    let connectionString = process.env.DATABASE_URL
    if (process.env.npm_lifecycle_event === "test") {
        connectionString += "_test"
    }
    return pgp(connectionString)
}

const db = initConnection()

const init = () => {
    return db.result(new QueryFile(__dirname + "/test_roomEase.sql"))
}

const createDB = () => {
    execSync("psql -f " + __dirname + "/sql/test_createDB.sql")
}

const dropAllTables = () => {
    execSync("psql -f " + __dirname + "/sql/test_dropAllTables.sql")
}

const createTables = () => {
    execSync("psql -f " + __dirname + "/sql/test_createTables.sql")
}

const insertValues = () => {
    execSync("psql -f " + __dirname + "/sql/test_insertValues.sql")
}

module.exports = {
    db,
    init,
    createDB,
    dropAllTables,
    createTables,
    insertValues,
}