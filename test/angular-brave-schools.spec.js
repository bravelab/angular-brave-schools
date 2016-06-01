(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name brave.schools
   * @description brave.schools tests
   *
   */
  describe('brave.schools module', function () {

    beforeEach(function () {
      module('brave.schools');
    });

    describe('value - version', function () {
      it('should return current version', inject(function (version) {
        expect(version).toEqual('0.0.5');
      }));
    });

  });

})();
