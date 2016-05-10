(function () {
  'use strict';


  /**
   * @ngdoc routes
   * @name app [app.docs]
   * @description Routes configuration app.docs
   * @see http://stackoverflow.com/questions/15286588/how-to-inject-dependency-into-module-configconfigfn-in-angular
   */
  angular
    .module('app.docs')
    .config(routes);

  routes.$inject = ['$stateProvider', 'BraveDocsProvider'];

  /*
   * @name routes
   * @desc Define valid application routes.
   */
  function routes($stateProvider, braveDocsProvider) {

    $stateProvider.state('app.docs', {
      url: '/docs',
      views: {
        'content@app': {
          templateUrl: function () {
            return braveDocsProvider.templates['index'];
          },
          controller: 'DocsController',
          controllerAs: 'vm'
        }
      }
    });

    $stateProvider.state('app.docs.list', {
      parent: 'app.docs',
      url: '/all',
      templateUrl: function () {
        return braveDocsProvider.templates['list'];
      },
      controller: 'DocsListController',
      controllerAs: 'vm'
    });

    $stateProvider.state('app.docs.detail', {
      parent: 'app.docs',
      url: '/:id/:slug',
      templateUrl: function () {
        return braveDocsProvider.templates['detail'];
      },
      controller: 'DocsDetailController',
      controllerAs: 'vm'
    });

  }

})();
