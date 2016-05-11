/**
 * School
 * @namespace app.schools
 */
(function () {
  'use strict';

  angular
    .module('app.schools')
    .factory('Config', Config);

  Config.$inject = [];

  function Config() {

    var factory = function (data) {
      this.subdomain = data.subdomain;
    };

    return factory;
  }

}());
