/*global elasticbox, Backbone, JST*/

elasticbox.Views = elasticbox.Views || {};

(function () {
  'use strict';

  elasticbox.Views.GeneralView = Backbone.View.extend({

    el: " .content-area",

    template: JST['app/scripts/modules/content/statistics/general/general_template.ejs'],

    initialize: function () {
      this.render();
    },

    render: function () {
      this.$el.html(this.template);
    }

  });

})();
