/*global elasticbox, Backbone, JST*/

elasticbox.Views = elasticbox.Views || {};

(function() {
  'use strict';

  elasticbox.Views.SearchView = Backbone.View.extend({

    template: JST['app/scripts/templates/search.ejs'],

    el: ".search-bar",

    events: {
      "click .icon-close": "clearSearchBar"
    },

    initialize: function() {
      this.collection = new elasticbox.Collections.FeatureCollection();
      this.collection.fetch()
        .then(this.render.bind(this));
    },

    render: function() {
      this.$el.html(this.template);
      this.widget = new AutoComplete("search-input", this.searchConfiguration());
      this.widget.focus();
      return this;
    },

    searchConfiguration: function() {
      return {
        maxTokenGroups: 1,
        showErrors: "console",
        lists: {
          suggestions: {
            options: this.collection.getNames(),
            matchOptions: function(input, matchedOptions) {
              return input.length ? matchedOptions : [];
            }
          }
        }
      };
    },

    clearSearchBar: function(e) {
      e.preventDefault();
      this.widget.clear();
      this.widget.setInput("");
    }
  });
})();
