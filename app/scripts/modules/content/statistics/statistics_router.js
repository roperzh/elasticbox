/*global elasticbox, Backbone*/

elasticbox.Routers = elasticbox.Routers || {};

(function() {
  'use strict';

  elasticbox.Routers.StatiscticsRouter = Backbone.Router.extend({

    routes: {
      "cluster/stats": "showClusterStats",
      "node/stats": "showNodeStats"
    },

    showClusterStats: function() {
      elasticbox.Controllers.StatiscticsController.showClusterStats();
    },

    showNodeStats: function() {
      elasticbox.Controllers.StatiscticsController.showNodeStats();
    },

    showGeneralStats: function() {
      elasticbox.Controllers.StatiscticsController.showGeneralStats();
    }

  });

  var router = new elasticbox.Routers.StatiscticsRouter();

  elasticbox.on("statistics:cluster", function() {
    elasticbox.navigate("cluster/stats");
    router.showClusterStats();
  });

  elasticbox.on("statistics:node", function() {
    elasticbox.navigate("node/stats");
    router.showNodeStats();
  });

  elasticbox.on("statistics:general", function() {
    elasticbox.navigate("/");
    router.showGeneralStats();
  });
})();
