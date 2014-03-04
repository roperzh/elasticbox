/*global elasticbox, _, AutoComplete*/

elasticbox.Services = elasticbox.Services || {};

(function() {
  'use strict';

  elasticbox.Services.SearchSuggester = function(element, collection, opts) {

    this.options = _.assign({
      maxTokenGroups: 1,
      showErrors: "console",
      lists: {
        suggestions: {
          options: collection,
          matchOptions: function(input, matchedOptions) {
            return input.length ? matchedOptions : [];
          }
        }
      }
    }, opts);

    this.autoComplete = new AutoComplete(element, this.options);
    this.autoComplete.focus();
  };

  elasticbox.Services.SearchSuggester.prototype.clear = function() {
    this.autoComplete.setInput("");
    this.autoComplete.clear();
  };
})();
