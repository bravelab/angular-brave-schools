/**
 * School
 * @namespace brave.schools
 */
(function () {
  'use strict';

  angular
    .module('brave.schools')
    .factory('Skin', Skin);

  Skin.$inject = [];

  function Skin() {

    var factory = function (data) {
      this.class = data.class;
      this.label = data.label;
      this.logo = data.logo;
      this.name = data.name;
      this.style = data.style;
    };

    return factory;
  }

}());
