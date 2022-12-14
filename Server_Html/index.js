const mongoose = require("mongoose");
const express = require('express');
const methodOverride = require("method-override");
const app = express();
app.set('views', './Views');
app.set('view engine', 'ejs');
const Controller = require('./Controllers/Controller1');
app.use('/Public/images', express.static('./Public/images'))
const Books = require('./models/books.js');


//##############################################################################################
//MongoDb
mongoose.connect(
  "mongodb+srv://Omar:WAS500@was500.pvqj6ck.mongodb.net/?retryWrites=true&w=majority",
  { useUnifiedTopology: true }
);

const db = mongoose.connection;

db.once("open", () => {
  console.log("Ah! connected to MongoDB using Mongoose!!");
});

//##############################################################################################
//Index Declaration
app.listen(3000, function(req, res) {
  console.log("Connected on port:3000");
});

app.use(express.json());
app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"]
  })
);

app.get("/", (req, res) => {
  res.render("index");
});


//##############################################################################################
//Books Pages
app.get("/BooksList", (req, res) => {
  res.render("Books");
});

app.get("/bookslist/:_id", Controller.getBookID, (req, res) => {
  res.render('temp', {books: req.data});
});


//##############################################################################################
//admin Page
app.get("/admin", Controller.getBooks, (req, res) => {
  res.render("admin", {books: req.data});
});

app.get("/edit/:_id", Controller.getBookID, (req, res) => {
  res.render('edit', {books: req.data});
});



app.get("/books/:id/delete", Controller.deleteBook, Controller.redirectView);

//##############################################################################################
//Add books Page

app.get("/addnewbook", (req, res) => {
  res.render('add');
});

app.post("/create", Controller.createNewBook, Controller.redirectView);

//##############################################################################################
// Error Page

app.get("*", (req,res) => {
  res.render("Error");
});

