(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name app.schools
   * @description brave.schools tests
   *
   */
  describe('app.schools module', function () {

    beforeEach(function () {
      module('brave.schools');
      module('app.auth');
    });

    describe('value - version', function () {
      it('should return current version', inject(function (version) {
        expect(version).toEqual('0.0.3');
      }));
    });

    describe('app.auth', function () {
      it('should return app auth service mock', inject(function (AuthServiceMock) {
        expect(AuthServiceMock).toBeDefined();
      }));
    });

  });

})();
