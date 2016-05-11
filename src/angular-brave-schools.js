(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name app [app.schools]
   * @description Schools module for SmartAdmin
   */
  angular
    .module('app.schools', ['ui.router', 'app.auth'])
    .value('version', '0.0.1');

})();
