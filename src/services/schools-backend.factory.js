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

    function reset() {
      delete $localStorage.school;
      $rootScope.skin = appConfig.skin;
    }

    function setSchool(school) {
      $localStorage.school = school;
      $rootScope.skin = school.skin;
      $state.transitionTo('homeHome.index');
    }
  }

})();
