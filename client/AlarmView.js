var AlarmView = Backbone.View.extend({

  template: _.template('<ul><li><%- time %></li><li><%- day %><%- year %></li><li><%- message %></li></ul>'),

  initialize: function () {
    this.render();
  },

  render: function () {
    this.$el.html(this.template(this.model.attributes));
    return this.$el
  }
});