var Alarms = Backbone.Collection.extend({
  // some stuff
  model: Alarm,
  
  url: window.location.protocol + '//' + window.location.host + '/alarms',
  // window.location.protocol + '//' + window.location.host + '/alarms',

  loadAlarms: function () {
    this.fetch({data: {  }});
  },

  parse: function (response, options) {
    var results = [];
    for (var i=0; i < response.length; i++) {
      results.push(response[i]);
    }
    console.log(results);
    return results;
  }
})