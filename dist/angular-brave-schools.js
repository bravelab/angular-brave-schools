(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name app [app.schools]
   * @description Schools module for SmartAdmin
   */
  angular
    .module('app.schools', ['ui.router', 'app.auth'])
    .value('version', '0.0.1');

})();

(function () {
  'use strict';


  /**
   * @ngdoc routes
   * @name app [app.schools]
   * @description Routes configuration app.schools
   * @see http://stackoverflow.com/questions/15286588/how-to-inject-dependency-into-module-configconfigfn-in-angular
   */
  angular
    .module('app.schools')
    .config(routes);

  routes.$inject = ['$stateProvider', 'BraveSchoolsProvider'];

  /*
   * @name routes
   * @desc Define valid application routes.
   */
  function routes($stateProvider, braveSchoolsProvider) {

    $stateProvider.state('app.schools', {
      url: '/schools',
      views: {
        'content@app': {
          templateUrl: function () {
            return braveSchoolsProvider.templates['index'];
          },
          controller: 'SchoolsController',
          controllerAs: 'vm'
        }
      }
    });

    $stateProvider.state('app.schools.list', {
      parent: 'app.schools',
      url: '/all',
      templateUrl: function () {
        return braveSchoolsProvider.templates['list'];
      },
      controller: 'SchoolsListController',
      controllerAs: 'vm'
    });

    $stateProvider.state('app.schools.detail', {
      parent: 'app.schools',
      url: '/:id/:slug',
      templateUrl: function () {
        return braveSchoolsProvider.templates['detail'];
      },
      controller: 'SchoolsDetailController',
      controllerAs: 'vm'
    });

  }

})();

(function () {
  'use strict';

  angular
    .module('app.schools')
    .controller('SchoolsDetailController', SchoolsDetailController);

  SchoolsDetailController.$inject = ['$scope', '$stateParams', 'SchoolsService'];

  /**
   *
   * @param {Object} $scope - Scope
   * @param {Object} $stateParams - State
   * @param {Object} schoolsService - Service
   * @constructor
   */
  function SchoolsDetailController($scope, $stateParams, schoolsService) {
    var vm = this;
    vm.school = null;

    activate();

    /**
     * @name activate
     * @desc Actions to be performed when this controller is instantiated
     * @memberOf app.schools.SchoolsDetailController
     */
    function activate() {
      schoolsService.get($stateParams.id).then(function (school) {
        console.log(school);
        vm.school = school;
      });
    }
  }

})();

(function () {
  'use strict';

  angular
    .module('app.schools')
    .controller('SchoolsListController', SchoolsListController);

  SchoolsListController.$inject = ['$scope'];

  /**
   *
   * @param {Object} $scope - Scope
   * @constructor
     */
  function SchoolsListController($scope) {
    var vm = this;

    vm.schools = $scope.schools;

    activate();

    /**
     * @name activate
     * @desc Actions to be performed when this controller is instantiated
     * @memberOf app.schools.SchoolsListController
     */
    function activate() {
      $scope.$watch('schools', function (newValue, oldValue) {
        if (newValue !== oldValue) {
          vm.schools = newValue;
        }
      });
    }
  }

})();

(function () {
  'use strict';

  angular
    .module('app.schools')
    .controller('SchoolsController', SchoolsController);

  SchoolsController.$inject = ['$scope', '$state', '$filter', 'SchoolsService'];

  /**
   *
   * @param {Object} $scope - Scope
   * @param {Object} $state - State
   * @param {Object} $filter - Filters
   * @param {Object} schoolsService - Schools service
   * @constructor
   */
  function SchoolsController($scope, $state, $filter, schoolsService) {

    var _schools = [];
    var _tmp = [];

    activate();

    /**
     * @name activate
     * @desc Actions to be performed when this controller is instantiated
     * @memberOf app.schools.SchoolsController
     */
    function activate() {

      $scope.schools = [];
      $scope.letter = '';
      $scope.letters = [];
      $scope.columns = [];
      $scope.columnCount = 4;

      var calculateColumns = function() {
        var itemsPerColumn = Math.ceil($scope.schools.length / $scope.columnCount);
        for (var i = 0; i < $scope.schools.length; i += itemsPerColumn) {
          var col = {start: i, end: Math.min(i + itemsPerColumn, $scope.schools.length)};
          $scope.columns.push(col);
        }
      };

      $scope.reset = function () {
        $scope.setLetter('');
        $scope.search('');
      };

      /**
       *
       * @param {object} letter Letter from index
       */
      $scope.setLetter = function (letter) {
        $scope.letter = letter;
        if (letter === '') {
          $scope.schools = _schools;
        } else {
          $scope.schools = $filter('startsWithLetter')(_schools, letter);
          _tmp = $scope.schools;
        }
      };

      /**
       *
       * @param {string} q Query value
       */
      $scope.search = function (q) {
        if (q === '') {
          _tmp = _schools;
          $scope.schools = _schools;
          if ($scope.letter) {
            $scope.setLetter($scope.letter);
          }
        }

        $scope.schools = $filter('filter')(_tmp, q);
      };

      /**
       * @name tokenSuccessFn
       * @param {string} token - Auth token
       * @desc Calls schoolsService.getAll()
       */
        // function tokenSuccessFn(token) {
      schoolsService.getAll().then(schoolSuccessFn, schoolErrorFn);
      // }

      /**
       * @name schoolsSuccessFn
       * @param {object} data - Response data
       * @desc Update `schools` on viewmodel
       */
      function schoolSuccessFn(data) {
        _schools = data.data;
        _tmp = _schools;

        $scope.schools = _schools;
        $scope.letters = $filter('firstLetters')(_schools, 'name');

        calculateColumns();
      }

      /**
       * @name schoolErrorFn
       * @desc Redirect to index and show error Snackbar
       */
      function schoolErrorFn() {
        $state.transitionTo('app.schools');
      }
    }
  }

})();

/**
 * School
 * @namespace app.schools
 */
(function () {
  'use strict';

  angular
    .module('app.schools')
    .filter('firstLetters', [function () {
      return function (list, key) {
        if (typeof list === 'undefined') {
          return list;
        } else {
          var firstLetters = [];
          list.forEach(function (item) {
            var firstLetter = item[key].charAt(0);
            if (firstLetters.indexOf(firstLetter) === -1) {
              firstLetters.push(firstLetter);
            }
          });
          return firstLetters;
        }
      };
    }]);

}());

/**
 * School
 * @namespace app.schools
 */
(function () {
  'use strict';

  angular
    .module('app.schools')
    .filter('slice', function () {
      return function (arr, start, end) {
        return arr.slice(start, end);
      };
    });

}());

/**
 * School
 * @namespace app.schools
 */
(function () {
  'use strict';

  angular
    .module('app.schools')
    .filter('startsWithLetter', [function () {
      return function (list, letter) {
        if (typeof list === 'undefined') {
          return list;
        } else {
          var filtered = [];
          var letterMatch = new RegExp(letter, 'i');
          for (var i = 0; i < list.length; i++) {
            var item = list[i];
            if (letterMatch.test(item.name.substring(0, 1))) {
              filtered.push(item);
            }
          }
          return filtered;
        }
      };
    }]);

}());

/**
 * School
 * @namespace app.schools
 */
(function () {
  'use strict';

  angular
    .module('app.schools')
    .factory('Config', Config);

  Config.$inject = [];

  function Config() {

    var factory = function (data) {
      this.subdomain = data.subdomain;
    };

    return factory;
  }

}());

/**
 * School
 * @namespace app.schools
 */
(function () {
  'use strict';

  angular
    .module('app.schools')
    .factory('Logo', Logo);

  Logo.$inject = [];

  function Logo() {

    var factory = function (data) {
      this.id = data.id;
      this.url = data.url;
    };

    return factory;
  }

}());

/**
 * School
 * @namespace app.schools
 */
(function () {
  'use strict';

  angular
    .module('app.schools')
    .factory('School', School);

  School.$inject = ['Logo', 'Config'];

  function School(Logo, Config) {

    var factory = function (data) {
      this.id = data.id;
      this.name = data.name;
      this.slug = data.slug;
      this.logo = new Logo(data.logo);
      this.config = new Config(data.config);
    };

    return factory;
  }

}());


(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name app [app.schools]
   * @description Config provider for app.schools
   */
  angular
    .module('app.schools')
    .provider('BraveSchools', function () {

      this.apiUrl = '/api';
      this.endpoint = '/schools';

      this.templates = {
        index: 'templates/schools.html',
        list: 'templates/schools-list.html',
        detail: 'templates/schools-detail.html'
      };

      this.$get = function () {
        var apiUrl = this.apiUrl;
        var templates = this.templates;
        var endpoint = this.endpoint;

        return {
          getApiUrl: function () {
            return apiUrl;
          },
          getTemplates: function () {
            return templates;
          },
          getEndpoint: function () {
            return apiUrl + endpoint;
          }
        };
      };

      this.setApiUrl = function (apiUrl) {
        this.apiUrl = apiUrl;
      };

      this.setTemplates = function (templates) {
        this.templates = templates;
      };

    });

})();



(function () {

  'use strict';

  angular
    .module('app.schools')
    .factory('SchoolsServiceMock', ['$q', 'School', function ($q, School) {

      var mock = {
        logo: {
          id: 3,
          url: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=university...&w=300&h=200'
        },
        name: 'University of Waterloo',
        slug: 'university-of-waterloo',
        id: '8d577746-eef6-4656-968f-921ecec7a9b5',
        config: {
          subdomain: 'university-of-waterloo.egradgifts.com'
        }
      };

      var factory = {
        detail: new School(mock),
        list: {
          data: [
            new School(mock)
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
    .module('app.schools')
    .factory('SchoolsService', SchoolsService);

  SchoolsService.$inject = ['$http', '$q', 'BraveSchools', 'SchoolTransformer', 'SchoolListTransformer'];

  /**
   *
   * @param {object} $http - Http object
   * @param {object} $q - Query object
   * @param {object} braveSchools - app config object provider
   * @param {object} schoolTransformer - school transformer object
   * @param {object} schoolListTransformer - school list transformer object
   * @returns {{get: app.schools.get, getAll: app.schools.getAll}} - Service Factory
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
     * @memberOf app.schools
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
     * @memberOf app.schools
     */
    function getAll() {
      return $http({
        method: 'GET',
        url: endpoint,
        transformResponse: schoolListTransformer
      })
        .then(function (data) {
          return data;
        });
    }
  }
})();

/**
 * SchoolListTransformer
 * @namespace app.schools
 */
(function () {
  'use strict';

  angular
    .module('app.schools')
    .factory('SchoolListTransformer', SchoolListTransformer);

  SchoolListTransformer.$inject = ['$filter', 'School'];

  function SchoolListTransformer($filter, School) {
    return function (response) {
      var result = (typeof response === 'string') ? angular.fromJson(response) : response;
      var data = [];
      if (result.data.length) {
        data = _.map(result.data, function (item) {
          return new School(item);
        });

        data = $filter('orderBy')(data, 'name');
      }
      return data;
    };
  }

}());

/**
 * SchoolTransformer
 * @namespace app.schools
 */
(function () {
  'use strict';

  angular
    .module('app.schools')
    .factory('SchoolTransformer', SchoolTransformer);

  SchoolTransformer.$inject = ['School'];

  function SchoolTransformer(School) {
    return function (response) {
      var object = (typeof response === 'string') ? angular.fromJson(response) : response;
      return new School(object);
    };
  }

}());