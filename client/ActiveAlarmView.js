var ActiveAlarmView = Backbone.View.extend({
  
  tagName: 'div',

  initialize: function () {
    this.render();
  },

  render: function () {
    this.$el.html('<h1>' + this.model.get('message') + '</h1>');

    return this.$el
  }


});