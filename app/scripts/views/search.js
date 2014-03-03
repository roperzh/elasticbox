/*global elasticbox, Backbone, JST*/

elasticbox.Views = elasticbox.Views || {};

(function () {
  'use strict';

  elasticbox.Views.SearchView = Backbone.View.extend({

    template: JST['app/scripts/templates/search.ejs'],

    el: ".search-bar",

    initialize: function() {
      this.render();
    },

    render: function() {
      this.$el.html(this.template)
    }

  });

})();
