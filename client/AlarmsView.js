var AlarmsView = Backbone.View.extend({
  //holds AlarmViews
  template: _.template('<div> html() </div>'),

  initialize: function (params) {
    // this.collection.on('sync', this.render, this);
  },

  renderAlarmView: function (alarm) {
    // console.log('alarm is ...', alarm);
    var view = new AlarmView({model: alarm})
    this.$el.append( view.$el.html() );
  },

  getAlarmsForUser: function (username) {
    // get alarms for the current user
    // console.dir(this.collection);
    // console.log("getAlarmsRun, reRendering");
    this.render();
  },

  render: function () {
    this.$el.html('');
    this.collection.forEach(this.renderAlarmView, this);
    return this.$el;
  }
})