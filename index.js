// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Star Wars Characters (DATA)
// =============================================================
var customers = [

    {
        customerID: "JohnSmith",
        customerName: "John Smith",
        phoneNumber: "55-555-5555",
        customerEmail: jos@gmail.com
    }
]

var waitList = [
    {
        customerID: "JohnSmith",
        customerName: "John Smith",
        phoneNumber: "55-555-5555",
        customerEmail: jos@gmail.com
    }
]


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'index.html'));
})



// Make a reservation
app.get('/reserve', function(req, res){
    res.sendFile(path.join(__dirname, 'add.html'));
})


//View reservations and wait list
app.get('/listView', function(req, res){
    res.sendFile(path.join(__dirname, 'add.html'));
})






// Starts the server to begin listening
// =============================================================
app.listen(PORT, function(){
    console.log('App listening on PORT ' + PORT);
})