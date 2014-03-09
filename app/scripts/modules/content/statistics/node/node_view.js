/*global elasticbox, Backbone, JST*/

elasticbox.Views = elasticbox.Views || {};

(function () {
  'use strict';

  elasticbox.Views.NodeView = Backbone.View.extend({

    el: " .content-area",

    template: JST['app/scripts/modules/content/statistics/node/node_template.ejs'],

    initialize: function () {
      this.cluster = elasticbox.client.cluster;
      this.render();
    },

    render: function () {
      this.$el.html(this.template);
    },

  });

})();
