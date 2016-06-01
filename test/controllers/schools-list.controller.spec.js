(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name brave.schools tests
   * @description Schools tests
   * @todo Inject AutheticationService
   *
   */
  describe('should provide SchoolsListController', function () {

    var // AuthenticationMock,
      schoolsServiceMock,
      controller;

    var $httpBackend,
      $controller,
      $rootScope,
      $scope,
      $state;

    beforeEach(function () {
      module('brave.schools');
    });

    beforeEach(inject(function ($injector) {
      $state = $injector.get('$state');
      $rootScope = $injector.get('$rootScope');
      $httpBackend = $injector.get('$httpBackend');
      $controller = $injector.get('$controller');

      $scope = $rootScope.$new();
    }));

    beforeEach(inject(function (_SchoolsServiceMock_) {

      // AuthenticationMock = _AuthenticationMock_;
      schoolsServiceMock = _SchoolsServiceMock_; // (2)

      controller = $controller('SchoolsListController', {
        $scope: $scope,
        $state: $state,
        // Authentication: _AuthenticationMock_,
        schoolsService: schoolsServiceMock
      });

    }));

    it('should have defined controller', inject(function () {
      expect(controller).toBeDefined();
    }));

  });

})();
