/**
 * Created by msmenzyk on 26.04.2016.
 */
/**
 * SchoolsController
 * @namespace app.schools
 */
(function () {
  'use strict';

  angular
    .module('app.schools')
    .controller('SchoolsController', SchoolsController);

  SchoolsController.$inject = ['$scope', '$state', 'AuthService', 'Schools'];

  /**
   * @namespace SchoolsController
   */
  function SchoolsController($scope, $state, authService, Schools) {

    activate();

    /**
     * @name activate
     * @desc Actions to be performed when this controller is instantiated
     * @memberOf app.schools.SchoolsController
     */
    function activate() {

      authService.getToken().then(tokenSuccessFn);

      /**
       * @name tokenSuccessFn
       * @desc Calls Schools.getAll()
       */
      function tokenSuccessFn(token) {
        Schools.getAll().then(schoolsSuccessFn, schoolsErrorFn);
      }

      /**
       * @name schoolsSuccessFn
       * @desc Update `schools` on viewmodel
       */
      function schoolsSuccessFn(data) {
        $scope.schools = data.data;
        //$state.transitionTo('app.schools.list');
      }

      /**
       * @name accountErrorFn
       * @desc Redirect to index and show error Snackbar
       */
      function schoolsErrorFn() {
        $state.transitionTo('app.schools');
      }
    }
  }

})();
