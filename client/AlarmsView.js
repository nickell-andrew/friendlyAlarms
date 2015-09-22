var AlarmsView = Backbone.View.extend({

  template: _.template('<div> html() </div>'),

  initialize: function (params) {
    this.collection.on('sync', this.render, this);
    this.collection.on('alarmTrigger', this.alarmTriggered, this);
  },

  renderAlarmView: function (alarm) {
    // console.log('alarm is ...', alarm);
    var targets = alarm.get('targets');
    var match = false;
    console.log(targets, this.username);
    for (var i=0; i < targets.length; i++) {
      if(targets[i] === this.username) {
        match = true;
      }
    }
    if(match) {
      var view = new AlarmView({model: alarm})
      this.$el.append( view.$el.html() );
    }
  },

  alarmTriggered: function (message) {
    //implement view it gets the message from the 
    //triggered message but is only removed when the user clicks OK
    this.trigger('alarm', message);

    this.collection.loadAlarms();
  },

  getAlarmsForUser: function (username) {
    this.username = username;
    this.render();
  },

  render: function () {
    this.$el.html('');
    this.collection.forEach(this.renderAlarmView, this);
    return this.$el;
  }
})