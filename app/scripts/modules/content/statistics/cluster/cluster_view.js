/*global elasticbox, Backbone, JST*/

elasticbox.Views = elasticbox.Views || {};

(function () {
  'use strict';

  elasticbox.Views.ClusterView = Backbone.View.extend({

    el: " .content-area",

    template: JST['app/scripts/modules/content/statistics/cluster/cluster_template.ejs'],

    initialize: function () {
      this.cluster = elasticbox.client.cluster;
      this.collectData();
    },

    render: function () {
      this.$el.html(this.template({
        settings: this.settings,
        health: this.health
      }));

      this.healthView = new elasticbox.Views.HealthView();

      this.$(".node-health").append(this.healthView.el);

      elasticbox.showTooltips(this.$el);

      return this;
    },

    collectData: function () {
      $.when(
        this.cluster.getSettings(),
        this.cluster.state())
          .done(function (settings, state) {
            this.settings = settings;
            this.state = state;
            this.render();
          }.bind(this));
    }
  });

})();
