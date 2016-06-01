/**
 * School
 * @namespace brave.schools
 */
(function () {
  'use strict';

  angular
    .module('brave.schools')
    .factory('Config', Config);

  Config.$inject = [];

  function Config() {

    var factory = function (data) {
      this.subdomain = data.subdomain;
    };

    return factory;
  }

}());
