// Create web server
// Import express module
var express = require('express');
// Create express application
var app = express();
// Import the comments module
var comments = require('./comments');
// Create the get request for the comments
app.get('/comments', function(req, res) {
    // Send the comments as a response
    res.json(comments.getComments());
});
// Create the post request for the comments
app.post('/comments', function(req, res) {
    // Send the comments as a response
    res.json(comments.addComment(req.body));
});
// Set the port to 3000
app.listen(3000);