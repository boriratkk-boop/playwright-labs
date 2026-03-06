const express = require("express")
const cors = require("cors")
const db = require("./db")

const app = express()

app.use(cors())
app.use(express.json())

app.get("/products", (req, res) => {

  db.query("SELECT * FROM products", (err, result) => {

    if (err) {
      res.status(500).send(err)
    }

    res.json(result)

  })

})

app.post("/products", (req, res) => {

  const { name, price } = req.body

  db.query(
    "INSERT INTO products (name,price) VALUES (?,?)",
    [name, price],
    (err, result) => {

      if (err) return res.status(500).send(err)

      res.json(result)

    }
  )

})

app.listen(4000, () => {
  console.log("Server running on port 4000")
})