(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name app [brave.schools]
   * @description Schools module for SmartAdmin
   */
  angular
    .module('brave.schools', ['ui.router', 'app.auth'])
    .value('version', '0.0.4');

})();
