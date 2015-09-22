var alarms = [{
    year: ['2015'],
    day: ['12', '30'],
    time: ['14', '55', '54'],
    targets: ['anonymous'],
    message: 'Alarm for no reason!',
    audio: null
}, 
{
    year: ['2015'],
    day: ['12', '30'],
    time: ['14', '55', '54'],
    targets: ['anonymous', 'drew'],
    message: 'Alarm for no reason!',
    audio: null
}];

var getAlarms = function () {
  return alarms;
};

var addAlarm = function (alarm) {
  alarms.push(alarm);
};


exports.getAlarms = getAlarms;
exports.addAlarm = addAlarm;