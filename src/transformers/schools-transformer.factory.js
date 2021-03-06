/**
 * SchoolTransformer
 * @namespace brave.schools
 */
(function () {
  'use strict';

  angular
    .module('brave.schools')
    .factory('SchoolTransformer', SchoolTransformer);

  SchoolTransformer.$inject = ['School'];

  function SchoolTransformer(School) {
    return function (response) {
      var object = (typeof response === 'string') ? angular.fromJson(response) : response;
      return new School(object);
    };
  }

}());
