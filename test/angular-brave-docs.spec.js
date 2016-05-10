(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name app.docs
   * @description app.docs tests
   *
   */
  describe('app.docs module', function () {

    beforeEach(module('app.docs'));

    describe('value - version', function () {
      it('should return current version', inject(function (version) {
        expect(version).toEqual('0.0.4');
      }));
    });

  });

})();
