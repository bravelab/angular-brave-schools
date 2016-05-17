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
        root: {
          templateUrl: 'app/layout/templates/master.tpl.html'
        },
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
