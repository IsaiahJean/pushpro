var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var users = require('./routes/users');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

var express = require('express'); 
var app = express(); 
var PORT = 3000; 
  
app.get('http://aimtell.com/files/sites.json', (req, res) => { 
  res.send("GET Request Called") 
}) 
  
app.listen(PORT, function(err){ 
    if (err) console.log(err); 
    console.log("Server listening on PORT", PORT); 
});  

module.exports = app;
