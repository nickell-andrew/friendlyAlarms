var ActiveAlarmView = Backbone.View.extend({
  
  template: _.template('<div><h1><%= message %></h1></div>'),

  initialize: function () {
    this.render();
  },

  render: function () {
    this.$el.html(this.template(this.model.attributes));

    return this.$el
  }


});