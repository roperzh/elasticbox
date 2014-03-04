/*global elasticbox, $, Backbone, _*/

window.elasticbox = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Services: {},

  init: function() {
    'use strict';
    elasticbox.client = new $.es.Client();

    Backbone.history.start();

    _.assign(elasticbox, Backbone.Events);
    new elasticbox.Services.StatusManager();
  },

  navigate: function(route, options) {
    'use strict';
    options = options || {};
    Backbone.history.navigate(route, options);
  }
};

$(document).ready(function() {
  'use strict';
  elasticbox.init();
});
