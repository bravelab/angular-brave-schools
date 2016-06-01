(function () {
  'use strict';

  angular
    .module('brave.schools')
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
     * @memberOf brave.schools.SchoolsListController
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
