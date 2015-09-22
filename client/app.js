var App = Backbone.View.extend({
  template: _.template('<div><%= html() %></div>'),

  initialize: function () {
    this.alarms = new Alarms();
    this.alarms.loadAlarms();
    this.loginView = new LoginView({model: new User()});
    this.createAlarmView = new CreateAlarmView({});
    this.alarmsView = new AlarmsView({collection: this.alarms});
    this.loginView.on('user changed', function(){
      this.alarmsView.getAlarmsForUser(this.loginView.model.get('username'));
    }, this);
    this.render();
  },

  render: function () {
    this.$el.append([this.loginView.$el, this.alarmsView.$el]); 
  }
})