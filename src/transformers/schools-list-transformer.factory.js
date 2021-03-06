/**
 * SchoolListTransformer
 * @namespace brave.schools
 */
(function () {
  'use strict';

  angular
    .module('brave.schools')
    .factory('SchoolListTransformer', SchoolListTransformer);

  SchoolListTransformer.$inject = ['$filter', 'School'];

  function SchoolListTransformer($filter, School) {
    return function (response) {
      var result = (typeof response === 'string') ? angular.fromJson(response) : response;
      var data = [];
      if (result.data.length) {
        data = _.map(result.data, function (item) {
          return new School(item);
        });

        data = $filter('orderBy')(data, 'name');
      }
      return data;
    };
  }

}());
