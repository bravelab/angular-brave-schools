(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name app.schools tests
   * @description Schools tests
   * @todo Inject AutheticationService
   *
   */
  describe('should provide SchoolsController', function () {

    var // AuthenticationMock,
      schoolsServiceMock,
      controller;

    var $httpBackend,
      $controller,
      $rootScope,
      $scope,
      $filter,
      $state;

    beforeEach(function () {
      module('brave.schools');
      module('app.auth');
    });

    beforeEach(inject(function ($injector) {
      $state = $injector.get('$state');
      $filter = $injector.get('$filter');
      $rootScope = $injector.get('$rootScope');
      $httpBackend = $injector.get('$httpBackend');
      $controller = $injector.get('$controller');

      $scope = $rootScope.$new();
    }));

    beforeEach(inject(function (_SchoolsServiceMock_) {

      // AuthenticationMock = _AuthenticationMock_;
      schoolsServiceMock = _SchoolsServiceMock_; // (2)

      controller = $controller('SchoolsController', {
        $scope: $scope,
        $state: $state,
        $filter: $filter,
        // Authentication: _AuthenticationMock_,
        schoolsService: schoolsServiceMock
      });

    }));

    it('should have defined controller', inject(function () {
      expect(controller).toBeDefined();
    }));

    it('should have schools in scope', inject(function () {

      $httpBackend.whenGET('/api/schools').respond(schoolsServiceMock.list);
      $httpBackend.flush();
      $scope.$apply();

      expect($scope.schools).toEqual(schoolsServiceMock.list.data);
    }));

  });

})();
