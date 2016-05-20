(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name app.schools tests
   * @description Schools tests
   *
   */
  describe('should provide schoolsService', function () {

    var schoolsService;

    beforeEach(function () {
      module('brave.schools');
      module('app.auth');
    });

    beforeEach(inject(function (_SchoolsService_) {
      schoolsService = _SchoolsService_; // (2)
    }));

    it('should have getAll function', function () {
      expect(angular.isFunction(schoolsService.getAll)).toBe(true);
    });

    it('should have get function', function () {
      expect(angular.isFunction(schoolsService.get)).toBe(true);
    });

  });

})();
