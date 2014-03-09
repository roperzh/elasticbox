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

      this.showTooltips();

      return this;
    },

    collectData: function () {
      $.when(
        this.cluster.getSettings(),
        this.cluster.health(),
        this.cluster.state())
          .done(function (settings, health, state) {
            this.settings = settings;
            this.health = health;
            this.state = state;
            this.render();
          }.bind(this));
    },

    showTooltips: function() {
      this.$(".icon-tooltip").tooltip({
        theme: "tooltip-ligth",
        interactive: true,
        position: "right"
      });
    }
  });

})();
