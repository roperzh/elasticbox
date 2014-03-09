/*global elasticbox, Backbone*/

elasticbox.Models = elasticbox.Models || {};
elasticbox.Collections = elasticbox.Collections || {};

(function () {
  'use strict';

  elasticbox.Models.FeatureModel = Backbone.Model.extend({});

  elasticbox.Collections.FeatureCollection = Backbone.Collection.extend({

    url: "features.json",

    model: elasticbox.Models.FeatureModel,

    getNames: function () {
      return this.models.map(function (model) {
        return model.get("name");
      });
    }
  });

})();
