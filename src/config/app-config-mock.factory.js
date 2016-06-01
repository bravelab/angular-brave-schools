(function () {

  'use strict';

  angular
    .module('brave.schools')
    .factory('appConfigMock', [function () {

      var factory = {
        skin: {
          name: 'smart-style-egrad',
          logo: 'themes/egrad/assets/img/logo.png',
          class: 'btn btn-block btn-xs txt-color-white margin-right-5',
          style: 'background-color:#4E653F;',
          label: 'Default Egrad Style'
        }
      };
      return factory;

    }]);

})();
