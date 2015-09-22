var express = require('express');
var app = express();

var router = require('./router.js')

var port = 3000;

var Cors = function (request, response, next) {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  response.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

  if(request.method === 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
}

app.use(Cors);

app.use(router)

app.listen(port);
console.log('App listening on port: '+ port);