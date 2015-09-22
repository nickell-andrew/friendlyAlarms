var ActiveAlarmsView = Backbone.View.extend({

  template: _.template(/* some stuff */''),

  initialize: function () {

  },

  renderActiveAlarm: function (message) {
    this.$el.append(new ActiveAlarmView({ model: message }).$el);
  },

  render: function () {
    this.$el.html('');
    this.collection.forEach(renderActiveAlarm, this);

    return this.$el;
  }

});