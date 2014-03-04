/*global elasticbox, _, Backbone, AutoComplete*/

elasticbox.Services = elasticbox.Services || {};

(function() {
  'use strict';

  elasticbox.Services.SearchSuggester = function(element, collection, customOptions) {
    this.element = element;
    this.collection = collection;
    this.setOptions(customOptions);
    this.makeAutocomplete();
  };

  elasticbox.Services.SearchSuggester.prototype.clear = function() {
    this.autoComplete.setInput("");
    this.autoComplete.clear();
  };

  elasticbox.Services.SearchSuggester.prototype.setOptions = function(customOptions) {
    var collection = this.collection;

    this.options = _.assign({
      maxTokenGroups: 1,
      showErrors: "console",
      onChange: function(newValue) {
        this.trigger("optionSelected", newValue[0][0].value.toLowerCase());
        return [];
      },
      lists: {
        suggestions: {
          options: collection,
          matchOptions: function(input, matchedOptions) {
            return input.length ? matchedOptions : [];
          }
        }
      }
    }, customOptions, Backbone.Events);

    this.options.on("optionSelected", this.navigateTo, this);
  };

  elasticbox.Services.SearchSuggester.prototype.makeAutocomplete = function() {
    this.autoComplete = new AutoComplete(this.element, this.options);
    this.autoComplete.focus();
  };

  elasticbox.Services.SearchSuggester.prototype.navigateTo = function(route) {
    elasticbox.navigate(route);
  };
})();
