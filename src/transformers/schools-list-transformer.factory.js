/**
 * SchoolListTransformer
 * @namespace app.schools
 */
(function () {
  'use strict';

  angular
    .module('app.schools')
    .factory('SchoolListTransformer', SchoolListTransformer);

  SchoolListTransformer.$inject = ['School'];

  function SchoolListTransformer(School) {
    return function (response) {
      var result = (typeof response === 'string') ? angular.fromJson(response) : response;
      var data = [];
      if (result.data.length) {
        data = _.map(result.data, function (item) {
          return new School(item);
        });
      }
      return data;
    };
  }

}());
