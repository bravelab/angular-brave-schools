(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name app [app.schools]
   * @description Schools module of the application.
   */
  angular
    .module('app.schools', ['ui.router', 'ui.bootstrap'])
    .config(config);

  config.$inject = ['$stateProvider'];

  /*
   * @name config
   * @desc Define valid application routes
   */
  function config($stateProvider) {
    $stateProvider.state('app.schools', {
      url: '/schools',
      views: {
        "content@app": {
          templateUrl: 'app/schools/views/schools.html',
          controller: 'SchoolsController',
          controllerAs: 'vm'
        }
      }
    });

    $stateProvider.state('app.schools.list', {
      parent: 'app.schools',
      url: '/all',
      templateUrl: 'app/schools/views/schools.list.html',
      controller: 'SchoolsListController',
      controllerAs: 'vm'
    });

    $stateProvider.state('app.schools.detail', {
      parent: 'app.schools',
      url: '/:id/:slug',
      templateUrl: 'app/schools/views/schools.detail.html',
      controller: 'SchoolsDetailController',
      controllerAs: 'vm'
    });
  }

})();
