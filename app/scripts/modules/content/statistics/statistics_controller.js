/*global elasticbox*/

elasticbox.Controllers = elasticbox.Controllers || {};

(function() {
  'use strict';

  elasticbox.Controllers.StatiscticsController = {
    showClusterStats: function() {
      var view = new elasticbox.Views.ClusterView();
      elasticbox.bindView(view);
    },

    showNodeStats: function() {
      var view = new elasticbox.Views.NodeView();
      elasticbox.bindView(view);
    },

    showGeneralStats: function() {
      var view = new elasticbox.Views.GeneralView();
      elasticbox.bindView(view);
    }
  };

})();
