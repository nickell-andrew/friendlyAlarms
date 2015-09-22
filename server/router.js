var express = require('express');
var alarms = require('./alarms');
var scalpel = require('scalpel');


var router = express.Router();

router.get('/alarms', function (request, response) {
    response.status(200)
    .send( JSON.stringify( alarms.getAlarms() ) );
  })
router.post('/alarms', function (request, response) {
    response.status(201)
    .send();
  })

module.exports = router;