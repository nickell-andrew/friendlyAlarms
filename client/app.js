var App = Backbone.View.extend({
  template: _.template('<div><%= html() %></div>'),

  initialize: function () {
    this.alarms = new Alarms();
    this.loginView = new loginView({model: new User()});
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