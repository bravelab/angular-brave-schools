/**
 * Created by msmenzyk on 25.04.2016.
 */
/**
 * SchoolsDetailController
 * @namespace app.schools
 */
(function () {
  'use strict';

  angular
    .module('app.schools')
    .controller('SchoolsDetailController', SchoolsDetailController);

  SchoolsDetailController.$inject = ['$scope', '$stateParams', 'Schools'];

  /**
   * @namespace SchoolsDetailController
   */
  function SchoolsDetailController($scope, $stateParams, Schools) {
    var vm = this;
    vm.school = null;

    activate();

    /**
     * @name activate
     * @desc Actions to be performed when this controller is instantiated
     * @memberOf app.schools.SchoolsDetailController
     */
    function activate() {
      console.log($stateParams);
      Schools.get($stateParams.id).then(function (data) {
        vm.school = data;
      });
    }
  }

})();
