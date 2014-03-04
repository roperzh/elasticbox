/*global elasticbox, $*/

window.elasticbox = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function() {
    'use strict';
    elasticbox.client = new $.es.Client();
    var view = new elasticbox.Views.PanelView();
    view.render();
  }
};

$(document).ready(function() {
  'use strict';
  elasticbox.init();
});
