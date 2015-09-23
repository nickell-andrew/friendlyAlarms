var ActiveAlarmView = Backbone.View.extend({
  
  template: _.template('<div><h1><%= message %></h1><button class="OK">OK</button><audio controls autoplay><source src="/assets/bennyhill.mp3" type="audio/mp3"></audio></div>'),

  events: {
    "click .OK": 'clearAlarmView'
  },

  clearAlarmView : function (e) {
    e.preventDefault();
    console.log(e.target);
    //emit event to parent to clear this view from the list.
  },

  initialize: function () {
    this.render();
  },

  render: function () {
    this.$el.html(this.template(this.model.attributes));

    return this.$el
  }


});