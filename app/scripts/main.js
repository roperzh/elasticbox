/*global elasticbox, $*/


window.elasticbox = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function () {
    'use strict';
    console.log('Hello from Backbone!');
  }
};

$(document).ready(function () {
  'use strict';
  elasticbox.init();
  window.client = new $.es.Client();
});
