/*global elasticbox, Backbone, JST*/

elasticbox.Views = elasticbox.Views || {};

(function() {
  'use strict';

  elasticbox.Views.SearchView = Backbone.View.extend({

    template: JST['app/scripts/templates/search.ejs'],

    el: ".search-bar",

    events: {
      "click .icon-close": "clearOnIconClick",
      "keydown .autocomplete-input": "clearOnEscape"
    },

    initialize: function() {
      this.collection = new elasticbox.Collections.FeatureCollection();
      this.collection.fetch()
        .then(this.render.bind(this));
    },

    render: function() {
      this.$el.html(this.template);
      this.widget = new elasticbox.Services.SearchSuggester("search-input",
        this.collection.getNames());
      return this;
    },

    clearOnEscape: function(e) {
      if (e.keyCode === 27) {
        this.widget.clear();
      }
    },

    clearOnIconClick: function(e) {
      e.preventDefault();
      this.widget.clear();
    }
  });
})();
