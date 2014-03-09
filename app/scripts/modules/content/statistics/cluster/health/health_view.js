/*global elasticbox, Backbone, JST, _*/

elasticbox.Views = elasticbox.Views || {};

(function () {
  'use strict';

  elasticbox.Views.HealthView = Backbone.View.extend({

    template: JST['app/scripts/modules/content/statistics/cluster/health/health_template.ejs'],

    initialize: function () {
      this.cluster = elasticbox.client.cluster;
      this.collectData();
    },

    render: function () {
      this.$el.html(this.template({
        health: this.health
      }));

      return this;
    },

    collectData: function () {
      $.when(
        this.cluster.health())
        .done(function (health) {
          this.health = this.parseData(health);
          this.render();
        }.bind(this));
    },

    parseData: function (health) {
      return {
        cluster_name: health.cluster_name,
        status: health.status,
        info: _.omit(health, "cluster_name", "status")
      };
    }
  });

})();
