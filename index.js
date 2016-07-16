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
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Star Wars Characters (DATA)
// =============================================================
var customer = [

    {
        customerID: "JohnSmith",
        customerName: "John Smith",
        phoneNumber: "55-555-5555",
        customerEmail: "jos@gmail.com"
    }
]

var waitList = [{
    customerID: "JohnSmith",
    customerName: "John Smith",
    phoneNumber: "55-555-5555",
    customerEmail: "jos@gmail.com"
}]


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'home.html'));
})



// Make a reservation
app.get('/reserve', function(req, res) {
    res.sendFile(path.join(__dirname, 'reserve.html'));
})


//View reservations and wait list
app.get('/tables', function(req, res) {
    res.sendFile(path.join(__dirname, 'tables.html'));
})



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
})




app.get('/api/:customer?', function(req, res) {
    var chosen = req.params.customer;
    if (chosen) {
        console.log(chosen);
        for (var i = 0; i < customer.length; i++) {

            if (chosen == customer[i].routeName) {
                res.json(customer[i]);
                return;
            }
        }
        res.json(false);
    } else {
        res.json(customer);
    }
})


// Create New customer - takes in JSON input
app.post('/api/new', function(req, res) {

    var newCustomer = req.body;
    newCustomer.routeName = newCustomer.customerName.replace(/\s+/g, '');
    customer.push(newCustomer);
    res.json(newCustomer);
})
// Create New customer - takes in JSON input
app.post('/api/newWait', function(req, res) {

    var newWait = req.body;
    newWait.routeName = newWait.customerName.replace(/\s+/g, '');
    waitList.push(newWait);
    res.json(newWait);
})

// Create New customer - takes in JSON input
app.post('/api/clear', function(req, res) {

    for (var i = customer.length - 1; i >= 0; i--) {
        customer.pop();
    }
    res.json(customer);


})
