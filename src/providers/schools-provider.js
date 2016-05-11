(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name app [app.schools]
   * @description Config provider for app.schools
   */
  angular
    .module('app.schools')
    .provider('BraveSchools', function () {

      this.apiUrl = '/api';
      this.endpoint = '/schools';

      this.templates = {
        index: 'templates/schools.html',
        list: 'templates/schools-list.html',
        detail: 'templates/schools-detail.html'
      };

      this.$get = function () {
        var apiUrl = this.apiUrl;
        var templates = this.templates;
        var endpoint = this.endpoint;

        return {
          getApiUrl: function () {
            return apiUrl;
          },
          getTemplates: function () {
            return templates;
          },
          getEndpoint: function () {
            return apiUrl + endpoint;
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


