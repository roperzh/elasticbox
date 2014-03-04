/*global elasticbox, $, Backbone*/

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
    var view = new elasticbox.Views.PanelView();
    view.render();
  }
};

$(document).ready(function() {
  'use strict';
  elasticbox.init();
});
