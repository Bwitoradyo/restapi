var express = require('express'),
    bodyParser = require("body-parser");

//add mongoose ORM
var mongoose = require('mongoose');

//open connection to the database

var db = mongoose.connect('mongodb://localhost/bookAPI');


var Book = require('./models/bookModel.js');

var app = express();
var port = process.env.PORT || 3000;

//alse use urlencoded
app.use(bodyParser.urlencoded({extended:true}))
//use body parser middle ware
app.use(bodyParser.json());

var bookRouter = require("./Routes/bookRoutes.js")(Book);


app.use('/api/books', bookRouter);
//app.use('/api/authors', authorRouter);


app.get('/', function(req, res){
   res.send('Welcome to my API') ;
});

app.listen(port, function () {
   console.log('Gulp is Running on PORT: ' + port);
});