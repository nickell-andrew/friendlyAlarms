var AlarmsView = Backbone.View.extend({
  //holds AlarmViews
  template: _.template('<div>...and some more stuff</div>'),

  initialize: function (params) {
    this.render();
  },

  getAlarmsForUser: function (username) {
    // get alarms for the current user
    this.collection
  },

  render: function () {
    this.$el.html(this.template( [1] ));
    return this.$el;
  }
})