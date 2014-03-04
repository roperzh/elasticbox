/*global elasticbox, Backbone, JST*/

elasticbox.Views = elasticbox.Views || {};

(function() {
  'use strict';

  elasticbox.Views.PanelNavigationView = Backbone.View.extend({

    template: JST['app/scripts/templates/panel_navigation.ejs'],

    events: {
      "click .item": "toggleActiveView"
    },

    initialize: function() {
      this.render();
    },

    render: function() {
      this.$el.html(this.template);
    },

    toggleActiveView: function(e) {
      e.preventDefault();
      var target = $(e.currentTarget);

      this.$(".item").removeClass("active");
      target.addClass("active");
    }

  });

})();
