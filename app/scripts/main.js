/*global elasticbox, $*/


window.elasticbox = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function () {
    'use strict';
    elasticbox.client = new $.es.Client();
  }
};

$(document).ready(function () {
  'use strict';
  elasticbox.init();
});
