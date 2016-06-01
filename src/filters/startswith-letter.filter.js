/**
 * School
 * @namespace brave.schools
 */
(function () {
  'use strict';

  angular
    .module('brave.schools')
    .filter('startsWithLetter', [function () {
      return function (list, letter) {
        if (typeof list === 'undefined') {
          return list;
        } else {
          var filtered = [];
          var letterMatch = new RegExp(letter, 'i');
          for (var i = 0; i < list.length; i++) {
            var item = list[i];
            if (letterMatch.test(item.name.substring(0, 1))) {
              filtered.push(item);
            }
          }
          return filtered;
        }
      };
    }]);

}());
