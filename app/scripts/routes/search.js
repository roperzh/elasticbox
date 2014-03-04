/*global elasticbox, Backbone*/

elasticbox.Routers = elasticbox.Routers || {};

(function() {
  'use strict';

  elasticbox.Routers.SearchRouter = Backbone.Router.extend({

    routes: {
      "stats": "showClusterStats"
    },

    showClusterStats: function() {
      console.log("stats");
    }

  });

  new elasticbox.Routers.SearchRouter();
})();
