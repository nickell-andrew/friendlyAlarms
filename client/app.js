var App = Backbone.View.extend({
  template: _.template('<div><%= html() %></div>'),

  initialize: function () {
    this.alarms = new Alarms();
    this.alarms.loadAlarms();
    setInterval( (function(){ this.alarms.loadAlarms(); }).bind(this), 60000);
    
    this.loginView = new LoginView({model: new User()});
    this.createAlarmView = new CreateAlarmView({collection: this.alarms});
    this.alarmsView = new AlarmsView({collection: this.alarms});
    
    this.messages = new Messages();
    this.activeAlarmsView = new ActiveAlarmsView({collection: this.messages});

    this.alarmsView.on('alarm', function (message) {
      // implement active alarms
      this.activeAlarmsView.renderActiveAlarm(message);
    }, this);

    this.loginView.on('user changed', function(){
      this.alarmsView.getAlarmsForUser(this.loginView.model.get('username'));
    }, this);

    this.render();
  },

  render: function () {
    this.$el.append([
      this.loginView.$el, 
      this.createAlarmView.$el, 
      this.alarmsView.$el, 
      this.activeAlarmsView.$el
    ]); 
  }
})