(function () {
  'use strict';

  angular
    .module('brave.schools')
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
     * @memberOf brave.schools.SchoolsDetailController
     */
    function activate() {
      schoolsService.get($stateParams.id).then(function (school) {
        console.log(school);
        vm.school = school;
      });
    }
  }

})();
