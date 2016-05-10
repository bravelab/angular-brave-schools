
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
