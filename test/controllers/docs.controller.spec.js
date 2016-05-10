(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name app.docs tests
   * @description Docs tests
   * @todo Inject AutheticationService
   *
   */
  describe('should provide DocsController', function () {

    var // AuthenticationMock,
      docsServiceMock,
      controller;

    var $httpBackend,
      $controller,
      $rootScope,
      $scope,
      $state;

    beforeEach(function () {
      module('app.docs');
      module('app.auth');
    });

    beforeEach(inject(function ($injector) {
      $state = $injector.get('$state');
      $rootScope = $injector.get('$rootScope');
      $httpBackend = $injector.get('$httpBackend');
      $controller = $injector.get('$controller');

      $scope = $rootScope.$new();
    }));

    beforeEach(inject(function (_DocsServiceMock_) {

      // AuthenticationMock = _AuthenticationMock_;
      docsServiceMock = _DocsServiceMock_; // (2)

      controller = $controller('DocsController', {
        $scope: $scope,
        $state: $state,
        // Authentication: _AuthenticationMock_,
        docsService: docsServiceMock
      });

    }));

    it('should have defined controller', inject(function () {
      expect(controller).toBeDefined();
    }));

    it('should have doc in scope', inject(function () {

      $httpBackend.whenGET('/api/docs/').respond(docsServiceMock.list);
      $httpBackend.flush();
      $scope.$apply();

      expect($scope.docs).toEqual(docsServiceMock.list.data);
    }));

  });

})();
