/*global elasticbox, Backbone, JST, _*/

elasticbox.Views = elasticbox.Views || {};

(function () {
  'use strict';

  elasticbox.Views.SettingsView = Backbone.View.extend({

    template: JST['app/scripts/modules/content/statistics/cluster/settings/settings_template.ejs'],

    initialize: function () {
      this.cluster = elasticbox.client.cluster;
      this.collectData();
    },

    render: function () {
      this.$el.html(this.template({
        settings: this.settings
      }));

      elasticbox.showTooltips(this.$el);

      return this;
    },

    collectData: function () {
      $.when(
        this.cluster.getSettings())
        .done(function (settings) {
          this.settings = settings;
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
