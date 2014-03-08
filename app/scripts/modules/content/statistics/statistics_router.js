/*global elasticbox, Backbone*/

elasticbox.Routers = elasticbox.Routers || {};

(function() {
  'use strict';

  elasticbox.Routers.StatiscticsRouter = Backbone.Router.extend({

    routes: {
      "cluster/stats": "showClusterStats"
    },

    showClusterStats: function() {
      elasticbox.Controllers.StatiscticsController.showClusterStats();
    }

  });

  var router = new elasticbox.Routers.StatiscticsRouter();

  elasticbox.on("statistics:cluster", function() {
    elasticbox.navigate("cluster/stats");
    router.showClusterStats();
  });
})();
