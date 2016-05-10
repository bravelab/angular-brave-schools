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

  });

})();
