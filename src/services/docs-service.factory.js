(function () {
  'use strict';

  angular
    .module('ngBraveDocs')
    .factory('DocsService', DocsService);

  DocsService.$inject = ['$http', '$q', 'BraveDocs', 'DocTransformer', 'DocListTransformer'];

  /**
   *
   * @param {object} $http - Http object
   * @param {object} $q - Query object
   * @param {object} braveDocs - app config object provider
   * @param {object} docTransformer - doc transformer object
   * @param {object} docListTransformer - doc list transformer object
   * @returns {{get: ngBraveDocs.get, getAll: ngBraveDocs.getAll}} - Service Factory
   * @constructor
   */
  function DocsService($http, $q, braveDocs, docTransformer, docListTransformer) {

    var cache = {};

    var apiUrl = braveDocs.getApiUrl();

    console.log(apiUrl);

    /**
     * @name Docs
     * @desc The Factory to be returned
     */
    var factory = {
      get: get,
      getAll: getAll
    };

    return factory;

    /**
     * @name get
     * @desc Get single doc
     * @param {string} id The id of th doc
     * @returns {Promise} - Promise an object
     * @memberOf ngBraveDocs
     */
    function get(id) {
      var deferred = $q.defer();
      if (typeof cache[id] !== 'undefined') {
        deferred.resolve(cache[id]);
      } else {
        $http({
          method: 'GET',
          url: apiUrl + '/docs/' + id + '/',
          transformResponse: docTransformer
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
     * @desc Gets all docs
     * @returns {Promise} - Promise an object
     * @memberOf ngBraveDocs
     */
    function getAll() {
      return $http({
        method: 'GET',
        url: apiUrl + '/docs/',
        transformResponse: docListTransformer
      })
        .then(function (data) {
          return data;
        });
    }
  }
})();
