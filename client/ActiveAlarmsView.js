var ActiveAlarmsView = Backbone.View.extend({

  tagName: 'div',

  className: 'active-alarms',

  initialize: function () {
    this.render();
    this.$el.on('click', '.OK', (function (e) { this.removeAlarm(e); }).bind(this) );
  },

  activeAlarms: [ //possibly the cause, fairly jenky, but don't have any reason to use the server for collection
  
  ],

  removeAlarm: function (e) {
    e.preventDefault();
    console.log('I should remove the an alarm');
    this.activeAlarms = [];
    this.render();
  },

  renderActiveAlarm: function (message) {
    // console.log('message in AAView is', message);
    var activeAlarm = new ActiveAlarmView({ 
      model: new Message({ 
        message: message 
      }) 
    });
    this.activeAlarms.push(activeAlarm)
    this.$el.show();
    this.render();
  },

  render: function () {
    if (this.activeAlarms.length === 0) {
      this.$el.hide();
    }
    
    this.$el.html('<div>ALARM</div>');
    this.activeAlarms.forEach(function (alarmView) {
      // console.log(alarmView.el);
      this.$el.append(alarmView.$el);
    }, this);

    return this.$el;
  }

});