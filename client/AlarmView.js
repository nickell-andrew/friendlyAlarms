var AlarmView = Backbone.View.extend({

  template: _.template('<ul><li><%= moment().hours(hours).minutes(minutes).format() %></li><li><%- message %></li></ul>'),

  initialize: function () {
    this.render();
  },

  render: function () {
    this.$el.html(this.template(this.model.attributes));
    return this.$el
  }
});