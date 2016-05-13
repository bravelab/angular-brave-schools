(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name app.schools
   * @description app.schools tests
   *
   */
  describe('app.schools module', function () {

    beforeEach(function () {
      module('app.schools');
      module('app.auth');
    });

    describe('value - version', function () {
      it('should return current version', inject(function (version) {
        expect(version).toEqual('0.0.2');
      }));
    });

    describe('app.auth', function () {
      it('should return app auth service mock', inject(function (AuthServiceMock) {
        expect(AuthServiceMock).toBeDefined();
      }));
    });

  });

})();
