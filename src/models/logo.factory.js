/**
 * School
 * @namespace brave.schools
 */
(function () {
  'use strict';

  angular
    .module('brave.schools')
    .factory('Logo', Logo);

  Logo.$inject = [];

  function Logo() {

    var factory = function (data) {
      this.id = data.id;
      this.url = data.url;
    };

    return factory;
  }

}());
