(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name app [ngBraveDocs]
   * @description Docs module for SmartAdmin
   */
  angular
    .module('ngBraveDocs', ['ui.router'])
    .value('version', '0.0.4');

})();

(function () {
  'use strict';


  /**
   * @ngdoc routes
   * @name app [ngBraveDocs]
   * @description Routes configuration ngBraveDocs
   * @see http://stackoverflow.com/questions/15286588/how-to-inject-dependency-into-module-configconfigfn-in-angular
   */
  angular
    .module('ngBraveDocs')
    .config(routes);

  routes.$inject = ['$stateProvider', 'BraveDocsProvider'];

  /*
   * @name routes
   * @desc Define valid application routes.
   */
  function routes($stateProvider, braveDocsProvider) {

    $stateProvider.state('ngBraveDocs', {
      url: '/docs',
      views: {
        'content@app': {
          templateUrl: function(){
            return braveDocsProvider.templates['index'];
          },
          controller: 'DocsController',
          controllerAs: 'vm'
        }
      }
    });

    $stateProvider.state('ngBraveDocs.list', {
      parent: 'ngBraveDocs',
      url: '/all',
      templateUrl: function(){
        return braveDocsProvider.templates['list'];
      },
      controller: 'DocsListController',
      controllerAs: 'vm'
    });

    $stateProvider.state('ngBraveDocs.detail', {
      parent: 'ngBraveDocs',
      url: '/:id/:slug',
      templateUrl: function(){
        return braveDocsProvider.templates['detail'];
      },
      controller: 'DocsDetailController',
      controllerAs: 'vm'
    });

  }

})();

(function () {
  'use strict';

  angular
    .module('ngBraveDocs')
    .controller('DocsDetailController', DocsDetailController);

  DocsDetailController.$inject = ['$scope', '$stateParams', 'DocsService'];

  /**
   *
   * @param {Object} $scope - Scope
   * @param {Object} $stateParams - State
   * @param {Object} docsService - Service
   * @constructor
   */
  function DocsDetailController($scope, $stateParams, docsService) {
    var vm = this;
    vm.doc = null;

    activate();

    /**
     * @name activate
     * @desc Actions to be performed when this controller is instantiated
     * @memberOf ngBraveDocs.DocsDetailController
     */
    function activate() {
      docsService.get($stateParams.id).then(function (doc) {
        vm.doc = doc;
      });
    }
  }

})();

(function () {
  'use strict';

  angular
    .module('ngBraveDocs')
    .controller('DocsListController', DocsListController);

  DocsListController.$inject = ['$scope'];

  /**
   *
   * @param {Object} $scope - Scope
   * @constructor
   */
  function DocsListController($scope) {
    var vm = this;

    vm.docs = $scope.docs;

    activate();

    /**
     * @name activate
     * @desc Actions to be performed when this controller is instantiated
     * @memberOf ngBraveDocs.DocsListController
     */
    function activate() {
      $scope.$watch('docs', function (newValue, oldValue) {
        if (newValue !== oldValue) {
          vm.docs = newValue;
        }
      });
    }
  }

})();

(function () {
  'use strict';

  angular
    .module('ngBraveDocs')
    .controller('DocsController', DocsController);

  DocsController.$inject = ['$scope', '$state', 'DocsService'];

  /**
   *
   * @param {Object} $scope - Scope
   * @param {Object} $state - State
   * @param {Object} docsService - Docs service
   * @constructor
   */
  function DocsController($scope, $state, docsService) {

    activate();

    /**
     * @name activate
     * @desc Actions to be performed when this controller is instantiated
     * @memberOf ngBraveDocs.DocsController
     */
    function activate() {

      // authService.getToken().then(tokenSuccessFn);

      /**
       * @name tokenSuccessFn
       * @param {string} token - Auth token
       * @desc Calls docsService.getAll()
       */
        // function tokenSuccessFn(token) {
      docsService.getAll().then(docSuccessFn, docErrorFn);
      // }

      /**
       * @name docsSuccessFn
       * @param {object} data - Response data
       * @desc Update `docs` on viewmodel
       */
      function docSuccessFn(data) {
        $scope.docs = data.data;
        // $state.transitionTo('ngBraveDocs.list');
      }

      /**
       * @name docErrorFn
       * @desc Redirect to index and show error Snackbar
       */
      function docErrorFn() {
        $state.transitionTo('ngBraveDocs');
      }
    }
  }

})();

/**
 * Doc
 * @namespace ngBraveDocs
 */
(function () {
  'use strict';

  angular
    .module('ngBraveDocs')
    .factory('Doc', Doc);

  Doc.$inject = [];

  function Doc() {

    var factory = function (data) {
      this.id = data.id;
      this.type = data.type;
      this.name = data.name;
      this.slug = data.slug;
      this.content = data.content;
    };

    return factory;
  }

}());

(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name app [ngBraveDocs]
   * @description Config provider for ngBraveDocs
   */
  angular
    .module('ngBraveDocs')
    .provider('BraveDocs', function () {

      this.apiUrl = '/api';

      this.templates = {
        index: 'templates/docs.html',
        list: 'templates/docs-list.html',
        detail: 'templates/docs-detail.html'
      };

      this.$get = function () {
        var apiUrl = this.apiUrl;
        var templates = this.templates;

        return {
          getApiUrl: function () {
            return apiUrl;
          },
          getTemplates: function () {
            return templates;
          }
        };
      };

      this.setApiUrl = function (apiUrl) {
        this.apiUrl = apiUrl;
      };

      this.setTemplates = function (templates) {
        this.templates = templates;
      };

      this.getTemplates = function () {
        return this.templates;
      };

    });

})();


(function () {

  'use strict';

  angular
    .module('ngBraveDocs')
    .factory('DocsServiceMock', ['$q', 'Doc', function ($q, Doc) {

      var mock = {
        id: '89f7191e-d455-42c6-80cd-58ed48bd54b3',
        name: 'Collections',
        slug: 'collections',
        type: 'page',
        content: '-some content-'
      };

      var factory = {
        detail: new Doc(mock),
        list: {
          data: [
            new Doc(mock)
          ],
          meta: {
            totalAmount: 1
          }
        }
      };

      return factory;

    }]);

})();

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

/**
 * DocListTransformer
 * @namespace ngBraveDocs
 */
(function () {
  'use strict';

  angular
    .module('ngBraveDocs')
    .factory('DocListTransformer', DocListTransformer);

  DocListTransformer.$inject = ['Doc'];

  function DocListTransformer(Doc) {
    return function (response) {
      var data = response.data;
      var result = (typeof data === 'string') ? JSON.parse(data) : data;
      if (result.length) {
        data = _.map(result, function (item) {
          return new Doc(item);
        });
      }
      return data;
    };
  }

}());

/**
 * DocTransformer
 * @namespace ngBraveDocs
 */
(function () {
  'use strict';

  angular
    .module('ngBraveDocs')
    .factory('DocTransformer', DocTransformer);

  DocTransformer.$inject = ['Doc'];

  function DocTransformer(Doc) {
    return function (data) {
      var object = (typeof data === 'string') ? JSON.parse(data) : data;
      return new Doc(object);
    };
  }

}());
