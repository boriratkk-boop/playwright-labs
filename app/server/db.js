const mysql = require("mysql2")

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root1234",
  database: "automation_demo"
})

db.connect(err => {
  if (err) {
    console.log("Database connection error", err)
  } else {
    console.log("MySQL Connected")
  }
})

module.exports = db