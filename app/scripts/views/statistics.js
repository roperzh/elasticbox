/*global elasticbox, Backbone, JST*/

elasticbox.Views = elasticbox.Views || {};

(function () {
  'use strict';

  elasticbox.Views.StatisticsView = Backbone.View.extend({

    el: "#content-area",

    template: JST['app/scripts/templates/statistics.ejs'],

    initialize: function () {
      this.render();
    },

    render: function () {
      this.$el.html(this.template);
    }

  });

})();
