var moment = require('moment');

var alarms = [{
    date: new Date(),
    hours: 0,
    minutes: .3,
    targets: ['anonymous'],
    message: 'Alarm for no reason!',
    audio: null
}, 
{
    date: new Date(),
    hours: 0,
    minutes: .2,
    targets: ['anonymous'],
    message: 'Alarm for no reason!',
    audio: null
},
{
    date: new Date(),
    hours: 0,
    minutes: .1,
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
},
{
    date: new Date(),
    hours: 2,
    minutes: .1,
    targets: ['anonymous', 'drew', 'mary', 'Drew'],
    message: 'Alarm for no reason!',
    audio: null
}];

var getAlarms = function () {
  cleanUpAlarms();
  return alarms;
};

var cleanUpAlarms = function () {
  currTime = moment();
  for(var i=0; i < alarms.length; i++) {
    alarm = alarms[i];
    alarmTime = moment(alarm.date).add(alarm.hours, "hours").add(alarm.minutes, "minutes");
    // console.log(alarmTime.isAfter(currTime), alarmTime.format(), currTime.format());
    if( currTime.isAfter(alarmTime) ) {
      alarms.splice(i, 1);
      i--;
    }
  }
}

var addAlarm = function (alarm, cb) {
  alarms.push(alarm);
  cb(alarm);
};


exports.getAlarms = getAlarms;
exports.addAlarm = addAlarm;