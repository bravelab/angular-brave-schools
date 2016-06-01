(function () {
  'use strict';

  angular
    .module('brave.schools')
    .factory('SchoolsBackend', SchoolsBackend);

  SchoolsBackend.$inject = ['$rootScope', '$state', '$localStorage', 'appConfig'];

  /**
   *
   * @param {object} $rootScope - rootScope object
   * @param {object} $state - State object
   * @param {object} $localStorage - Local storage object
   * @param {object} appConfig - app config object
   * @returns {{get: brave.schools.setSchool}} - SchoolsBackend Factory
   * @constructor
   */
  function SchoolsBackend($rootScope, $state, $localStorage, appConfig) {

    /**
     * @name SchoolsBackend
     * @desc The Factory to be returned
     */
    var factory = {
      reset: reset,
      setSchool: setSchool
    };

    return factory;

    function _setStylesheet(slug) {
      $rootScope.theme = {
        stylesheet: 'build/css/prod/' + slug + '/main.min.css'
      };

      $('head link#skin').attr('href', $rootScope.theme.stylesheet);
    }


    function reset() {
      delete $localStorage['instance'];
      $rootScope.instance = appConfig.instance;
      _setStylesheet($rootScope.instance.slug);
    }

    function setSchool(school) {
      $localStorage.instance = school;
      $rootScope.instance = school;
      _setStylesheet($rootScope.instance.slug);
      $state.transitionTo('homeHome.index');
    }
  }

})();
