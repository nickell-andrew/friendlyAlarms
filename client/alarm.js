var Alarm = Backbone.Model.extend({
  // holds a data object with audio and/or text, a list of recipients, and a time for delivery
  url: window.location.protocol + '//' + window.location.host + '/alarms', 
  // url: window.location.protocol + '//' + window.location.host + '/alarms',
  defaults: {
    date: new Date(),
    hours: 0, // hours after date
    minutes: 1, // minutes after date
    targets: ['anonymous'],// array of usernames to hand this object to
    message: 'Alarm for no reason!',// text to attach to the alarm
    audio: null // audio to play with this alarm
  }
})