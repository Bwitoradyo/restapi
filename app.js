/**
 * Created by Bambang on 10/7/2016.
 */

var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

//create router

var bookRouter = express.Router();

bookRouter.route('/Books')
    .get(function (req, res) {
       var responseJson={hello:"this is my api"};

       res.json(responseJson);
    });
app.use('/api', bookRouter);




app.get('/', function(req, res){
   res.send('welcome to my API') ;
});

app.listen(port, function () {
   console.log('Running on PORT: ' + port);
});