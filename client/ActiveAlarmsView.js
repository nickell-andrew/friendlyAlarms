var ActiveAlarmsView = Backbone.View.extend({

  template: _.template(/* some stuff */'<div></div>'),

  initialize: function () {
    this.render();
  },

  activeAlarms: [
  
  ],

  renderActiveAlarm: function (message) {
    console.log('message in AAView is', message);
    var activeAlarm = new ActiveAlarmView({ 
      model: new Message({ 
        message: message 
      }) 
    });
    this.activeAlarms.push(activeAlarm)

    this.render();
  },

  render: function () {
    this.$el.detach().html('<div></div>');
    this.activeAlarms.forEach(function (alarmView) {
      this.$el.append(alarmView.$el);
    }, this);

    return this.$el;
  }

});