var App = Backbone.View.extend({
  template: _.template('<div><%= html() %></div>'),

  initialize: function () {
    this.loginView = new loginView({model: new User()});
    this.alarmsView = new AlarmsView({collection: new Alarms(), username: this.loginView.model.username});
    this.loginView.on('user changed', function(){
      this.alarmsView.getAlarmsForUser(this.loginView.model.get('username'));
    }, this);
    this.render();
  },

  render: function () {
    this.$el.append([this.loginView.$el, this.alarmsView.$el]); 
  }
})