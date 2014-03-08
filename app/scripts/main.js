/*global elasticbox, $, Backbone, _*/

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
      'use strict';
      elasticbox.client = new $.es.Client();

      var view = new elasticbox.Views.PanelView();
      view.render();

      Backbone.history.start();
    },

    navigate: function (route, options) {
      'use strict';
      options = options || {};
      Backbone.history.navigate(route, options);
    },

    bindView: function(view) {
      'use strict';
      this.bindedViews.push(view);
    },

    unbindView: function(view) {
      'use strict';
      view.unbind();
      view.remove();
      this.bindedViews.splice(view);
    },

    unbindAll: function() {
      'use strict';
      for(var view in this.bindedViews) {
        this.unbindView(this.bindedViews[view]);
      }
    }

  }, Backbone.Events
);

$(document).ready(function () {
  'use strict';
  elasticbox.init();
});
