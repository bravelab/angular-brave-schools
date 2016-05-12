/**
 * School
 * @namespace app.schools
 */
(function () {
  'use strict';

  angular
    .module('app.schools')
    .factory('School', School);

  School.$inject = ['Logo', 'Config'];

  function School(Logo, Config) {

    var factory = function (data) {
      this.id = data.id;
      this.name = data.name;
      this.slug = data.slug;
      this.logo = new Logo(data.logo);
      this.config = new Config(data.config);
    };

    return factory;
  }

}());
