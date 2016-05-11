/**
 * Created by msmenzyk on 23.04.2016.
 */
/**
 * SchoolsListController
 * @namespace app.schools
 */
(function () {
  'use strict';

  angular
    .module('app.schools')
    .controller('SchoolsListController', SchoolsListController);

  SchoolsListController.$inject = ['$scope'];

  /**
   * @namespace SchoolsListController
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
