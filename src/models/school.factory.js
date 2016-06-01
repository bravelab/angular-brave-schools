(function () {
  'use strict';

  angular
    .module('brave.schools')
    .factory('School', School);

  School.$inject = ['Logo', 'Config', 'Skin'];

  function School(Logo, Config, Skin) {

    var factory = function (data) {
      this.id = data.id;
      this.name = data.name;
      this.slug = data.slug;
      this.logo = new Logo(data.logo);
      this.config = new Config(data.config);
      this.skin = new Skin(data.skin);
    };

    return factory;
  }

}());

