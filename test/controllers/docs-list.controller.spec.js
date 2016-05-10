(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name app.docs tests
   * @description Docs tests
   * @todo Inject AutheticationService
   *
   */
  describe('should provide DocsListController', function () {

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

      controller = $controller('DocsListController', {
        $scope: $scope,
        $state: $state,
        // Authentication: _AuthenticationMock_,
        docsService: docsServiceMock
      });

    }));

    it('should have defined controller', inject(function () {
      expect(controller).toBeDefined();
    }));

  });

})();
