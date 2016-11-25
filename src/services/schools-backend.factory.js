(function () {
  'use strict';

  angular
    .module('brave.schools')
    .factory('SchoolsBackend', SchoolsBackend);

  SchoolsBackend.$inject = ['$rootScope', '$timeout', '$state', '$localStorage', '$window', '$q', 'appConfig', 'SchoolsService'];

  /**
   *
   * @param {object} $rootScope - rootScope object
   * @param {object} $timeout - State object
   * @param {object} $state - State object
   * @param {object} $localStorage - Local storage object
   * @param {object} $window - $window object
   * @param {object} $q - $q object
   * @param {object} appConfig - app config object
   * @param {object} schoolsService - SchoolsService factory
   * @returns {{get: brave.schools.setSchoolConfig}} - SchoolsBackend Factory
   * @constructor
   */
  function SchoolsBackend($rootScope, $timeout, $state, $localStorage, $window, $q, appConfig, schoolsService) {

    /**
     * @name SchoolsBackend
     * @desc The Factory to be returned
     */
    var factory = {
      reset: reset,
      setSchoolConfig: setSchoolConfig,
      selectSchool: selectSchool,
      getSchoolConfig: getSchoolConfig
    };

    return factory;

    function _setStylesheet(slug) {
      $rootScope.theme = {
        stylesheet: 'build/css/prod/' + slug + '/main.min.css'
      };

      $('head link#skin').attr('href', $rootScope.theme.stylesheet);
    }

    function getSchoolConfig(subdomain) {

      var deferred = $q.defer();

      schoolsService.getAll().then(function (result) {

        var schoolList = result.data;
        var config = _.find(schoolList, {'subdomain': subdomain});

        if (config) {
          deferred.resolve(config);
        } else {
          deferred.reject('config not found');
        }
      }, function (error) {
        deferred.reject(error);
      });

      return deferred.promise;
    }

    function reset() {
      delete $localStorage['instance'];
      $rootScope.instance = appConfig.instance;
      _setStylesheet($rootScope.instance.slug);
    }

    function setSchoolConfig(school) {
      $localStorage.instance = school;
      _setStylesheet(school.slug);

      $state.transitionTo('homeHome.index');
    }

    function selectSchool(school) {
      $timeout(function () {
        $window.location.href = 'http://' + school.subdomain + '.' + appConfig.mainDomain + '/#/loading';
      });
    }
  }

})();
