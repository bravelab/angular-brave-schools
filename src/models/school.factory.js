(function () {
  'use strict';

  angular
    .module('brave.schools')
    .factory('School', School);

  School.$inject = ['Skin'];

  function School(Skin) {

    var factory = function (data) {

      this.id = data.id;
      this.subdomain = data.subdomain;
      this.symbol = data.symbol;

      this.name = data.name;
      this.slug = data.slug;

      this.logoUrl = data.logo_url;
      this.siteUrl = data.site_url;
      this.letterBg = angular.isDefined(data.letter_bg) ? data.letter_bg : '/themes/egrad/assets/img/letter-bg.jpg';

      this.skin = new Skin(data.skin);
    };

    return factory;
  }

}());

