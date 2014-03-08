/*global elasticbox*/

elasticbox.Controllers = elasticbox.Controllers || {};

(function() {
  'use strict';

  elasticbox.Controllers.StatiscticsController = {
    showClusterStats: function() {
      var view = new elasticbox.Views.StatisticsView();
      view.render();
      elasticbox.bindView(view);
    }
  };

})();
