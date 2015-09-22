var Alarms = Backbone.Collection.extend({
  // some stuff
  model: Alarm,
  
  url: '127.0.0.1:3000/alarms',
  // window.location.protocol + '//' + window.location.host + '/alarms',

  loadAlarms: function () {
    this.fetch({data: {}});
  },

  parse: function (response, options) {
    var results = [];
    for (var i=0; i < response.length; i++) {
      results.push(response.results[i]);
    }
    return results;
  }
})