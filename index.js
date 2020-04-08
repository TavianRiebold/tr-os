var http = require('http');
var bodyParser = require('body-parser');
var express = require('express');

var app = express();

app.use(function (req, res, next) {
	console.log(req.method + req.path);
	next();
});

app.use('/', require('./server/router'));

var port = process.env.TR_OS_PORT || 80;
http.createServer(app).listen(port);

console.log("Server hosted on port " + port);
