/*global elasticbox, _, Backbone, AutoComplete*/

elasticbox.Services = elasticbox.Services || {};

(function () {
  'use strict';

  elasticbox.Services.SearchSuggester = function (element, collection, customOptions) {
    this.element = element;
    this.collection = collection;
    this.setOptions(customOptions);
    this.makeAutocomplete();
  };

  elasticbox.Services.SearchSuggester.prototype.clear = function () {
    this.autoComplete.setInput("");
    this.autoComplete.clear();
  };

  elasticbox.Services.SearchSuggester.prototype.setOptions = function (customOptions) {
    var collection = this.collection;

    this.options = _.assign({
      maxTokenGroups: 1,
      showErrors: "console",
      onChange: function (newValue) {
        this.trigger("optionSelected", collection.findWhere({ name: newValue[0][0].value }));
        return [];
      },
      lists: {
        suggestions: {
          options: collection.getNames(),
          matchOptions: function (input, matchedOptions) {
            return input.length ? matchedOptions : [];
          }
        }
      }
    }, customOptions, Backbone.Events);

    this.options.on("optionSelected", function (feature) {
      elasticbox.trigger("statusChanged", feature);
    });
  };

  elasticbox.Services.SearchSuggester.prototype.makeAutocomplete = function () {
    this.autoComplete = new AutoComplete(this.element, this.options);
    this.autoComplete.focus();
  };
})();
