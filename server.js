process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var mongoose = require('./config/mongoose'),
    express = require('./config/express');

var db = mongoose();
var app = express();

app.listen(8080, '127.0.4.1');
module.exports = app;

console.log('Server running at 127.0.4.1:8080');
