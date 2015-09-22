var alarms = [{
    date: new Date(),
    hours: 1,
    minutes: 0,
    targets: ['anonymous'],
    message: 'Alarm for no reason!',
    audio: null
}, 
{
    date: new Date(),
    hours: 0,
    minutes: 1,
    targets: ['anonymous', 'drew'],
    message: 'Alarm for no reason!',
    audio: null
}];

var getAlarms = function () {
  return alarms;
};

var addAlarm = function (alarm, cb) {
  alarms.push(alarm);
  cb(alarm);
};


exports.getAlarms = getAlarms;
exports.addAlarm = addAlarm;