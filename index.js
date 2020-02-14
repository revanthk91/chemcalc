const express = require('express');
const path = require('path');

var port = process.env.PORT || 6969;


serverApp = express();

serverApp.listen(port);
var dir = path.join(__dirname, 'public');
serverApp.use(express.static(dir));

//done.