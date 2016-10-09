var express = require('express'),
    bodyParser = require("body-parser");

//add mongoose ORM
var mongoose = require('mongoose');

//open connection to the database

var db = mongoose.connect('mongodb://localhost/bookAPI');


var Book = require('./models/bookModel.js');

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

var bookRouter = express.Router();


bookRouter.route('/Books')
//implement POST
    .post(function (req, res) {
        var book = new Book(req.body);

        book.save();
        res.status(201).send(book);

    })
//implement GET
    .get(function (req, res) {
        var query = {};
        if(req.query.genre){
            query.genre =  req.query.genre;
        }
       Book.find(query, function (err, books) {
            if(err)
                res.status(500).send(err);
            else
                res.json(books)
        });
    });


//implement GET for Book ID
bookRouter.route('/Books/:bookId')
    .get(function (req, res) {

        Book.findById(req.params.bookId, function (err, book) {
            if(err)
                res.status(500).send(err);
            else
                res.json(book)
        });
    });







app.use('/api', bookRouter);




app.get('/', function(req, res){
   res.send('Welcome to my API') ;
});

app.listen(port, function () {
   console.log('Gulp is Running on PORT: ' + port);
});