/**
 * School
 * @namespace app.schools
 */
(function () {
  'use strict';

  angular
    .module('brave.schools')
    .filter('slice', function () {
      return function (arr, start, end) {
        return arr.slice(start, end);
      };
    });

}());
