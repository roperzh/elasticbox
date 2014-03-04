/*global elasticbox, Backbone, _*/

elasticbox.Services = elasticbox.Services || {};

(function() {
  'use strict';

  elasticbox.Services.StatusManager = function() {
    this.bindedViews = [];

    elasticbox.on("statusChanged", this.changeApplicationStatus, this);
  };

  elasticbox.Services.StatusManager.prototype.changeApplicationStatus = function(feature) {
    this.unbindViews();

    var newView = new elasticbox.Views[feature.get("view")]();
    this.bindedViews.push(newView);
    elasticbox.navigate(feature.get("url"));
  };

  elasticbox.Services.StatusManager.prototype.unbindViews = function() {
    for (var view in this.bindedViews) {
      view.destroy();
    }
  };

})();
