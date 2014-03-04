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
      this.render();
    },

    render: function() {
      this.$el.html(this.template);
      this.widget = new AutoComplete("search-input", this.searchConfiguration);
      this.widget.focus();
      return this;
    },

    searchConfiguration: {
      maxTokenGroups: 1,
      showErrors: "console",
      lists: {
        suggestions: ["Backbone", "Angular", "Angular", "Angular", "Angular", "Angular", "Angular", "Angular", "Angular", "Angular", "Angular", "Angular"]
      },
      initialList: []
    },

    clearSearchBar: function(e) {
      e.preventDefault();
      this.widget.clear();
      this.widget.setInput("");
    }
  });
})();
