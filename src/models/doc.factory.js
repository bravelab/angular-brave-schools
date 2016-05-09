/**
 * Doc
 * @namespace ngBraveDocs
 */
(function () {
  'use strict';

  angular
    .module('ngBraveDocs')
    .factory('Doc', Doc);

  Doc.$inject = [];

  function Doc() {

    var factory = function (data) {
      this.id = data.id;
      this.type = data.type;
      this.name = data.name;
      this.slug = data.slug;
      this.content = data.content;
    };

    return factory;
  }

}());
