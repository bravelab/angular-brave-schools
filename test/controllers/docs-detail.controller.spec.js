(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name app.docs tests
   * @description Docs tests
   *
   */
  describe('should provide DocsDetailController', function () {

    var // AuthenticationMock,
      docsServiceMock,
      controller;

    var $httpBackend,
      $controller,
      $rootScope,
      $scope,
      $stateParams,
      $state;

    beforeEach(function () {
      module('app.docs');
    });

    beforeEach(inject(function ($injector) {
      $state = $injector.get('$state');
      $stateParams = $injector.get('$stateParams');
      $rootScope = $injector.get('$rootScope');
      $httpBackend = $injector.get('$httpBackend');
      $controller = $injector.get('$controller');

      $scope = $rootScope.$new();
    }));

    beforeEach(inject(function (_DocsServiceMock_) {

      // AuthenticationMock = _AuthenticationMock_;
      docsServiceMock = _DocsServiceMock_; // (2)

      $stateParams.id = docsServiceMock.detail.id;

      controller = $controller('DocsDetailController', {
        $scope: $scope,
        $stateParams: $stateParams,
        docsService: docsServiceMock
      });

    }));

    it('should have defined controller', inject(function () {
      expect(controller).toBeDefined();
    }));

    it('should have doc in scope', inject(function () {

      $httpBackend.whenGET('/api/docs/' + docsServiceMock.detail.id + '/').respond(docsServiceMock.detail);
      $httpBackend.flush();
      $scope.$apply();

      expect(controller.doc).toEqual(docsServiceMock.detail);
    }));

  });

})();
