/**
 * DocListTransformer
 * @namespace app.docs
 */
(function () {
  'use strict';

  angular
    .module('app.docs')
    .factory('DocListTransformer', DocListTransformer);

  DocListTransformer.$inject = ['Doc'];

  function DocListTransformer(Doc) {
    return function (response) {
      var result = (typeof response === 'string') ? angular.fromJson(response) : response;
      var data = [];
      if (result.data.length) {
        data = _.map(result.data, function (item) {
          return new Doc(item);
        });
      }
      return data;
    };
  }

}());
