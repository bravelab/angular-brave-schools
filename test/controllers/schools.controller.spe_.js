(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name brave.schools tests
   * @description Schools tests
   * @todo Inject AutheticationService
   *
   */
  describe('should provide SchoolsController', function () {

    var schoolsServiceMock,
      controller,
      appConfigMock;

    var $httpBackend,
      $controller,
      $rootScope,
      $scope,
      $filter,
      $state;

    beforeEach(function () {
      module('brave.schools');
    });

    beforeEach(inject(function ($injector) {
      $state = $injector.get('$state');
      $filter = $injector.get('$filter');
      $rootScope = $injector.get('$rootScope');
      $httpBackend = $injector.get('$httpBackend');
      $controller = $injector.get('$controller');

      $scope = $rootScope.$new();
    }));

    beforeEach(inject(function (_appConfigMock_, _SchoolsServiceMock_) {

      schoolsServiceMock = _SchoolsServiceMock_; // (2)
      appConfigMock = _appConfigMock_;

      controller = $controller('SchoolsController', {
        $scope: $scope,
        $state: $state,
        $filter: $filter,
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
