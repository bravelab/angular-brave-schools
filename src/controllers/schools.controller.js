(function () {
  'use strict';

  angular
    .module('app.schools')
    .controller('SchoolsController', SchoolsController);

  SchoolsController.$inject = ['$scope', '$state', 'SchoolsService'];

  /**
   *
   * @param {Object} $scope - Scope
   * @param {Object} $state - State
   * @param {Object} schoolsService - Schools service
     * @constructor
     */
  function SchoolsController($scope, $state, schoolsService) {

    activate();

    /**
     * @name activate
     * @desc Actions to be performed when this controller is instantiated
     * @memberOf app.schools.SchoolsController
     */
    function activate() {

      // authService.getToken().then(tokenSuccessFn);

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
        $scope.schools = data.data;
        // $state.transitionTo('app.schools.list');
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
