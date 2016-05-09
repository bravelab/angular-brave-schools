(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name ngBraveDocs
   * @description ngBraveDocs tests
   *
   */
  describe('ngBraveDocs module', function () {

    beforeEach(module('ngBraveDocs'));

    describe('value - version', function () {
      it('should return current version', inject(function (version) {
        expect(version).toEqual('0.0.4');
      }));
    });

    describe('constant - defaults', function () {
      it('should have default options object', inject(function (defaults) {
        expect(defaults).toBeDefined();
      }));
    });

  });

})();
