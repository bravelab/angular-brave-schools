/**
 * School
 * @namespace brave.schools
 */
(function () {
  'use strict';

  angular
    .module('brave.schools')
    .filter('firstLetters', [function () {
      return function (list, key) {
        if (typeof list === 'undefined') {
          return list;
        } else {
          var firstLetters = [];
          list.forEach(function (item) {
            var firstLetter = item[key].charAt(0);
            if (firstLetters.indexOf(firstLetter) === -1) {
              firstLetters.push(firstLetter);
            }
          });
          return firstLetters;
        }
      };
    }]);

}());
