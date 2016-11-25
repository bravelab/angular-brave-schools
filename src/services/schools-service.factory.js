(function () {
  'use strict';

  angular
    .module('brave.schools')
    .factory('SchoolsService', SchoolsService);

  SchoolsService.$inject = ['$http', '$q', 'BraveSchools', 'SchoolTransformer', 'SchoolListTransformer'];

  /**
   *
   * @param {object} $http - Http object
   * @param {object} $q - Query object
   * @param {object} braveSchools - app config object provider
   * @param {object} schoolTransformer - school transformer object
   * @param {object} schoolListTransformer - school list transformer object
   * @returns {{get: brave.schools.get, getAll: brave.schools.getAll}} - Service Factory
   * @constructor
   */
  function SchoolsService($http, $q, braveSchools, schoolTransformer, schoolListTransformer) {

    var cache = {};

    var endpoint = braveSchools.getEndpoint();

    /**
     * @name Schools
     * @desc The Factory to be returned
     */
    var factory = {
      get: get,
      getAll: getAll
    };

    return factory;

    /**
     * @name get
     * @desc Get single school
     * @param {string} id The id of th school
     * @returns {Promise} - Promise an object
     * @memberOf brave.schools
     */
    function get(id) {
      var deferred = $q.defer();

      // if (authService.isAuthenticated()) {
      //   console.log('SchoolsService::get=>authService.isAuthenticated()', authService.isAuthenticated());
      // }

      if (typeof cache[id] !== 'undefined') {
        deferred.resolve(cache[id]);
      } else {
        $http({
          method: 'GET',
          url: endpoint + '/' + id + '/',
          transformResponse: schoolTransformer
        })
          .then(function (data) {
            cache[id] = data.data;
            deferred.resolve(cache[id]);
          }, function (data) {
            deferred.reject(data);
          });
      }

      return deferred.promise;
    }

    /**
     * @name getAll
     * @desc Gets all schools
     * @returns {Promise} - Promise an object
     * @memberOf brave.schools
     */
    function getAll() {

      var deferred = $q.defer();
      var cacheId = 'allSchools';

      if (typeof cache[cacheId] !== 'undefined') {
        deferred.resolve(cache[cacheId]);
      } else {

        $http({
          method: 'GET',
          cache: true,
          url: endpoint,
          transformResponse: schoolListTransformer
        }).then(function (data) {
          cache[cacheId] = data;
          deferred.resolve(cache[cacheId]);
        }, function (error) {
          deferred.reject(error);
        });
      }

      return deferred.promise;
    }
  }
})();
