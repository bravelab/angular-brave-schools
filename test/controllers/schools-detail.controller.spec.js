(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name brave.schools tests
   * @description Schools tests
   *
   */
  describe('should provide SchoolsDetailController', function () {

    var // AuthenticationMock,
      schoolsServiceMock,
      controller;

    var $httpBackend,
      $controller,
      $rootScope,
      $scope,
      $stateParams,
      $state;

    beforeEach(function () {
      module('brave.schools');
    });

    beforeEach(inject(function ($injector) {
      $state = $injector.get('$state');
      $stateParams = $injector.get('$stateParams');
      $rootScope = $injector.get('$rootScope');
      $httpBackend = $injector.get('$httpBackend');
      $controller = $injector.get('$controller');

      $scope = $rootScope.$new();
    }));

    beforeEach(inject(function (_SchoolsServiceMock_) {

      // AuthenticationMock = _AuthenticationMock_;
      schoolsServiceMock = _SchoolsServiceMock_; // (2)

      $stateParams.id = schoolsServiceMock.detail.id;

      controller = $controller('SchoolsDetailController', {
        $scope: $scope,
        $stateParams: $stateParams,
        schoolsService: schoolsServiceMock
      });

    }));

    it('should have defined controller', inject(function () {
      expect(controller).toBeDefined();
    }));

    it('should have school in scope', inject(function () {

      $httpBackend.whenGET('/api/schools/' + schoolsServiceMock.detail.id + '/').respond(schoolsServiceMock.detail);
      $httpBackend.flush();
      $scope.$apply();

      expect(controller.school).toEqual(schoolsServiceMock.detail);
    }));

  });

})();
