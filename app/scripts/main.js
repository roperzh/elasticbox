/*global elasticbox, $, Backbone, _*/

'use strict';

_.extend(
  window.elasticbox = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    Controllers: {},
    Services: {},

    bindedViews: [],

    init: function () {
      this.client = new $.es.Client();
      this.setLanguage("es");

      var view = new this.Views.PanelView();
      view.render();

      this.trigger("statistics:general");

      Backbone.history.start();
    },

    navigate: function (route, options) {
      options = options || {};
      Backbone.history.navigate(route, options);
    },

    bindView: function (view) {
      this.bindedViews.push(view);
    },

    unbindView: function (view) {
      view.unbind();
      view.remove();
      this.bindedViews.splice(view);
    },

    unbindAll: function () {
      for (var view in this.bindedViews) {
        this.unbindView(this.bindedViews[view]);
      }
    },

    setLanguage: function(lang) {
      window.t = window[lang];
    }
  }, Backbone.Events
);

$(document).ready(function () {
  elasticbox.init();
});
