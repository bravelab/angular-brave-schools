(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name app [ngBraveDocs]
   * @description Config provider for ngBraveDocs
   */
  angular
    .module('ngBraveDocs')
    .provider('BraveDocs', function () {

      this.apiUrl = '/api';

      this.templates = {
        index: 'templates/docs.html',
        list: 'templates/docs-list.html',
        detail: 'templates/docs-detail.html'
      };

      this.$get = function () {
        var apiUrl = this.apiUrl;
        var templates = this.templates;

        return {
          getApiUrl: function () {
            return apiUrl;
          },
          getTemplates: function () {
            return templates;
          }
        };
      };

      this.setApiUrl = function (apiUrl) {
        this.apiUrl = apiUrl;
      };

      this.setTemplates = function (templates) {
        this.templates = templates;
      };

    });

})();


