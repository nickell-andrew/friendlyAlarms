var Alarm = Backbone.Model.extend({
  // holds a data object with audio and/or text, a list of recipients, and a time for delivery
  url: '127.0.0.1:3000/alarms', 
  // url: window.location.protocol + '//' + window.location.host + '/alarms',
  defaults: {
    year: ['2015'],
    day: ['12', '30'],//time that an alarm is set to go off
    time: ['14', '55', '54'],
    targets: ['anonymous'],// array of usernames to hand this object to
    message: 'Alarm for no reason!',// text to attach to the alarm
    audio: null // audio to play with this alarm
  }
})