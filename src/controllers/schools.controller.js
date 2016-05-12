(function () {
  'use strict';

  angular
    .module('app.schools')
    .controller('SchoolsController', SchoolsController);

  SchoolsController.$inject = ['$scope', '$state', '$filter', 'SchoolsService'];

  /**
   *
   * @param {Object} $scope - Scope
   * @param {Object} $state - State
   * @param {Object} $filter - Filters
   * @param {Object} schoolsService - Schools service
   * @constructor
   */
  function SchoolsController($scope, $state, $filter, schoolsService) {

    var _schools = [];
    var _tmp = [];

    activate();

    /**
     * @name activate
     * @desc Actions to be performed when this controller is instantiated
     * @memberOf app.schools.SchoolsController
     */
    function activate() {

      $scope.schools = [];
      $scope.letter = '';
      $scope.letters = [];
      $scope.columns = [];
      $scope.columnCount = 4;

      var calculateColumns = function() {
        var itemsPerColumn = Math.ceil($scope.schools.length / $scope.columnCount);
        for (var i = 0; i < $scope.schools.length; i += itemsPerColumn) {
          var col = {start: i, end: Math.min(i + itemsPerColumn, $scope.schools.length)};
          $scope.columns.push(col);
        }
      };

      $scope.reset = function () {
        $scope.setLetter('');
        $scope.search('');
      };

      /**
       *
       * @param {object} letter Letter from index
       */
      $scope.setLetter = function (letter) {
        $scope.letter = letter;
        if (letter === '') {
          $scope.schools = _schools;
        } else {
          $scope.schools = $filter('startsWithLetter')(_schools, letter);
          _tmp = $scope.schools;
        }
      };

      /**
       *
       * @param {string} q Query value
       */
      $scope.search = function (q) {
        if (q === '') {
          _tmp = _schools;
          $scope.schools = _schools;
          if ($scope.letter) {
            $scope.setLetter($scope.letter);
          }
        }

        $scope.schools = $filter('filter')(_tmp, q);
      };

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
        _schools = data.data;
        _tmp = _schools;

        $scope.schools = _schools;
        $scope.letters = $filter('firstLetters')(_schools, 'name');

        calculateColumns();
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