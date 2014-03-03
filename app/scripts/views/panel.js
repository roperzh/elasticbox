/*global elasticbox, Backbone, JST*/

elasticbox.Views = elasticbox.Views || {};

(function () {
  'use strict';

  elasticbox.Views.PanelView = Backbone.View.extend({

    template: JST['app/scripts/templates/panel.ejs'],

    el: ".panel-content",

    initialize: function() {},

    render: function() {
      this.$el.empty();
      this.$el.html(this.template);

      this.searchView = new elasticbox.Views.SearchView();

      this.$(".search-bar").append(this.searchView.el);
    }

  });

})();
