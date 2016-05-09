(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name app [ngBraveDocs]
   * @description Docs module for SmartAdmin
   */
  angular
    .module('ngBraveDocs', ['ui.router'])
    .value('version', '0.0.4')
    .constant('defaults', {
      apiUrl: '/api',
      templates: {
        index: 'templates/docs.html',
        list: 'templates/docs-list.html',
        detail: 'templates/docs-detail.html'
      }
    });

})();
