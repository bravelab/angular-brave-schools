/**
 * Created by msmenzyk on 26.04.2016.
 */
/**
 * Schools
 * @namespace app.schools
 */
(function () {
  'use strict';

  angular
    .module('app.schools')
    .factory('Schools', Schools);

  Schools.$inject = ['$http', '$q', 'APP_CONFIG'];

  /**
   * @namespace Schools
   * @returns {Factory}
   */
  function Schools($http, $q, APP_CONFIG) {

    var cache = {};


    /**
     * @name Schools
     * @desc The Factory to be returned
     */
    var Schools = {
      get: get,
      getAll: getAll
    };

    return Schools;

    ////////////////////

    /**
     * @name get
     * @desc Get single school
     * @param {string} id The id of th school
     * @returns {Promise}
     * @memberOf app.schools
     */
    function get(id) {
      var deferred = $q.defer();
      if (cache[id] !== undefined) {
        deferred.resolve(cache[id]);
      }
      else {
        $http({
          method: 'GET',
          url: APP_CONFIG.apiUrl + '/schools/' + id + '/'
        })
          .then(function (data, status, headers, config) {
            cache[id] = data.data;
            deferred.resolve(cache[id]);
          }, function (data, status, headers, config) {
            deferred.reject(data);
          });
      }
      return deferred.promise;
    }

    /**
     * @name getAll
     * @desc Gets all schools
     * @returns {Promise}
     * @memberOf app.schools
     */
    function getAll() {
      return $http({
        method: 'GET',
        url: APP_CONFIG.apiUrl + '/schools/'
      }).then(function (data) {
          return data.data;
        }
      );
    }
  }
})();
