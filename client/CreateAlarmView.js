var CreateAlarmView = Backbone.View.extend({
  
  template: _.template('<div>Some more more stuff</div>'),

  initialize: function () {
    this.render();
  },

  render: function () {
    this.$el.html(this.template([1]));
    return this.$el;
  }

});