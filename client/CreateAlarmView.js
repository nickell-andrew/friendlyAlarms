var CreateAlarmView = Backbone.View.extend({
  
  tagName: 'div',

  events: {
    "click .create-alarm": "createAlarm",
    "click .submit-alarm": "postAlarm"
  },

  initialize: function () {
    this.render();
  },

  createAlarm: function () {
    var html = ['<div>',
                  '<form>',
                    '<label>Set alarm for </label>',
                    '<input id="targets" value="Drew, Mary"></input>',
                    '<label> in </label>',
                    '<input id="hours"> hours </input>',
                    '<label>and </label>',
                    '<input id="minutes"> minutes </input>',
                    '<input id="message" value="alert message"></input>',
                    '<button class="submit-alarm">Create Alarm</button>',
                  '</form>',
                '</div>'
                ].join('');
    this.render(html);
  },

  postAlarm: function (e) {
    e.preventDefault();

    var targets = this.$el.find('#targets').val().split(', ');

    this.collection.create({
      targets: targets,
      date: new Date(),
      hours: this.$el.find('#hours').val(), 
      minutes: this.$el.find('#minutes').val(), 
      message: this.$el.find('#message').val(),
    });
    //close alarm creation form
    this.render();
  },

  render: function (html) {
    html = html || '<button class="create-alarm">Create an Alarm</button>';
    this.$el.html(html);
    return this.$el;
  }

});