(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name app.docs
   * @description app.docs tests
   *
   */
  describe('app.docs module', function () {

    beforeEach(function () {
      module('app.docs');
      module('app.auth');
    });

    describe('value - version', function () {
      it('should return current version', inject(function (version) {
        expect(version).toEqual('0.0.5');
      }));
    });

    describe('app.auth', function () {
      it('should return app auth service mock', inject(function (AuthServiceMock) {
        expect(AuthServiceMock).toBeDefined();
      }));
    });

  });

})();
