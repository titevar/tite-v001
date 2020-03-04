var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();
var port = process.env.port || 3000;
//css
app.use(express.static('public'));

app.get('/', function(req, res){
   res.render('form');
});

app.set('view engine', 'pug');
app.set('views', './views');

// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array()); 
//app.use(express.static('public'));

app.post('/', function(req, res){
   console.log(req.body);
   //res.send("recieved your request!  "+ req.body.say); 
   res.render('answer', {
       title : req.body.say
   })
});

app.get('/answer', function(req, res) {
    res.render('answer');
})
app.listen(port);