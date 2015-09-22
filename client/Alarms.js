var Alarms = Backbone.Collection.extend({
  
  model: Alarm,
  
  url: window.location.protocol + '//' + window.location.host + '/alarms',

  loadAlarms: function () {
    this.fetch({data: {  }, 
    error: function(e){ console.log('error: ', e); }, 
    success: function (data) {
      console.log('alarms fetched');
    }
  });
  },

  parse: function (response, options) {
    var results = [];
    for (var i=0; i < response.length; i++) {
      results.push(response[i]);
    }
    // console.log(results);
    return results;
  }
})