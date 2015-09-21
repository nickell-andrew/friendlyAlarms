var AlarmsView = Backbone.View.extend({
  //holds AlarmViews
  template: _.template('<div>We loaded some Stuff</div>'),

  initialize: function () {
    this.render();
  },

  render: function () {
    this.$el.html(this.template( [1] ));
  }
})