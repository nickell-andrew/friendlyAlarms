var AlarmView = Backbone.View.extend({

  template: _.template('<ul><li><%=  moment().to(moment(date).add(hours, "hours").add(minutes, "minutes")) %></li><li><%- message %></li></ul>'),
    // <%= moment(date).hours(hours).minutes(minutes).calendar() %>

  initialize: function () {
    this.setTimer();
    this.render();
  },

  setTimer: function () {
    var base = this.model.get('date');
    var hours = this.model.get('hours');
    var minutes = this.model.get('minutes');
    var time = moment(base).add(hours, 'hours').add(minutes, 'minutes');

    var currTime = moment();
    
    var timeDiff = time.diff(currTime);
    timeDiff = timeDiff > 0 ? timeDiff : 0;
    console.log(timeDiff);
    
    setTimeout(this.alarmAlert.bind(this), timeDiff);
    // this.model.get()
  },

  alarmAlert: function () {
    this.model.trigger('alarmTrigger', this.model.get('message'));
    alert(this.model.get('message'));
  },

  render: function () {
    this.$el.html(this.template(this.model.attributes));
    return this.$el
  }
});