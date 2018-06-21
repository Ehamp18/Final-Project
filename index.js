const express = require("express")
const bodyParser = require('body-parser');
const app = express();
const checkNumber = require('./games');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.set("view engine", "ejs");
app.use(express.static('views'))

app.get("/games", (req, res) => {
  res.render("games")
})

app.get("/", (req, res) => {
  res.render("index")
})

app.get("/coffee", (req, res) => {
  res.render("coffee")
})

app.get("/espresso", (req, res) => {
  res.render("espresso")
})

app.get("/archery", (req, res) => {
  res.render("archery")
})

app.get("/gaming", (req, res) => {
  res.render("gaming")
})

app.get("/about", (req, res) => {
  res.render("about")
})

app.get("/contact", (req, res) => {
  res.render("contact")
})

app.get("/tattoos", (req, res) => {
  res.render("tattoos")
})


app.post("/games", (req, res) => {
  let number = req.body.number
  checkNumber(number)
})


app.listen(3002, () => console.log("LIVE on 3002"))
