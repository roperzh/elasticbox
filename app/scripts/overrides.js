(function () {
  'use strict';

  String.prototype.titleize = function () {
    var words = this.split("_");
    var wordCount = words.length;

    for (var i = 0; i < wordCount; i++) {
      if (i === 0 || !isArticle(words[i])) {
        words[i] = words[i].capitalize();
      }
    }

    return words.join(" ");
  };

  String.prototype.capitalize = function () {
    var word = this;
    if (word[0] && word.toUpperCase) {
      return word[0].toUpperCase() + word.slice(1);
    }
  };

  function isArticle(word) {
    return (word === "a" || word === "an") ? true : false;
  }

})();
