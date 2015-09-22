var express = require('express');
var alarms = require('./alarms');
var scalpel = require('scalpel');


var router = express.Router();

router.get('/', function (request, response) {
  response.redirect('/index.html');
});

router.get('/alarms', function (request, response) {
    response.status(200)
    .jsonp( alarms.getAlarms() );
  })
router.post('/alarms', function (request, response) {
    response.status(201)
    .send();
  })

module.exports = router;