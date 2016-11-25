(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name brave.schools tests
   * @description schoolsServiceMock tests
   *
   */
  describe('should provide schoolsServiceMock', function () {

    var schoolsServiceMock;

    beforeEach(function () {
      module('brave.schools');
    });

    beforeEach(inject(function (_SchoolsServiceMock_) {
      schoolsServiceMock = _SchoolsServiceMock_; // (2)
    }));

    it('should have detail object', function () {
      expect(schoolsServiceMock.detail).toBeDefined();
    });

    it('should defined object keys', function () {
      expect(schoolsServiceMock.detail.id).toBeDefined();
      expect(schoolsServiceMock.detail.name).toBeDefined();
      expect(schoolsServiceMock.detail.slug).toBeDefined();
      expect(schoolsServiceMock.detail.logoUrl).toBeDefined();
      expect(schoolsServiceMock.detail.siteUrl).toBeDefined();
      expect(schoolsServiceMock.detail.subdomain).toBeDefined();
    });

    it('should have list objects', function () {
      expect(schoolsServiceMock.list).toBeDefined();
    });

  });

})();
