var AlarmsView = Backbone.View.extend({
  //holds AlarmViews
  template: _.template('<div>...and some more stuff</div>'),

  initialize: function (params) {
    this.render();
  },

  getAlarmsForUser: function (username) {
    // get alarms for the current user
    this.render();
  },

  render: function () {
    _.each(this.collection, function (alarm){
      this.$el.append(this.template( new AlarmView({model:alarm}) ));
    })
    return this.$el;
  }
})