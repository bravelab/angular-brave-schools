(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name app [ngBraveDocs]
   * @description Config provider for ngBraveDocs
   */
  angular
    .module('ngBraveDocs')
    .provider('braveDocs', function (defaults) {

      var _config = defaults;

      this.setConfig = function (config) {
        _config = config;
      };

      this.getConfig = function () {
        return _config;
      };

      this.$get = [function () {
        return _config;
      }];

    });
})();
