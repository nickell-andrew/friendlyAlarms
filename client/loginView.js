var loginView = Backbone.View.extend({
  //holds AlarmViews
  loginForm: _.template('<div><h1>Login</h1><form class="submit"><input value="<%= username %>"></input><button type="submit">submit</button>'),

  loggedIn: _.template("<div>Welcome <em><%= username %></em></div>"),

  events: {
    "submit .submit": "login"
  },

  login: function (e) {
    e.preventDefault();
    var username = $(e.target).find('input').val();
    this.model.set('username', username);
    this.trigger('user changed');
    this.render(true);
  },

  initialize: function () {
    this.render();
  },

  render: function (user) {
    if(user) {
      return this.$el.html(this.loggedIn(this.model.attributes));
    } else {
      return this.$el.html(this.loginForm(this.model.attributes));
    }
  }
})