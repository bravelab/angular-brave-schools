/**
 * DocTransformer
 * @namespace app.docs
 */
(function () {
  'use strict';

  angular
    .module('app.docs')
    .factory('DocTransformer', DocTransformer);

  DocTransformer.$inject = ['Doc'];

  function DocTransformer(Doc) {
    return function (response) {
      var object = (typeof response === 'string') ? angular.fromJson(response) : response;
      return new Doc(object);
    };
  }

}());
