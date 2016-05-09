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

  routes.$inject = ['$stateProvider', 'braveDocsProvider'];

  /*
   * @name routes
   * @desc Define valid application routes.
   */
  function routes($stateProvider, braveDocs) {

    var templates = braveDocs.getConfig(),templates;

    $stateProvider.state('ngBraveDocs', {
      url: '/docs',
      views: {
        'content@app': {
          templateUrl: templates.index,
          controller: 'DocsController',
          controllerAs: 'vm'
        }
      }
    });

    $stateProvider.state('ngBraveDocs.list', {
      parent: 'ngBraveDocs',
      url: '/all',
      templateUrl: templates.list,
      controller: 'DocsListController',
      controllerAs: 'vm'
    });

    $stateProvider.state('ngBraveDocs.detail', {
      parent: 'ngBraveDocs',
      url: '/:id/:slug',
      templateUrl: templates.detail,
      controller: 'DocsDetailController',
      controllerAs: 'vm'
    });
  }

})();
