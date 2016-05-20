(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name app.schools tests
   * @description schoolsServiceMock tests
   *
   */
  describe('should provide schoolsServiceMock', function () {

    var schoolsServiceMock;

    beforeEach(function () {
      module('brave.schools');
      module('app.auth');
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
      expect(schoolsServiceMock.detail.logo).toBeDefined();
      expect(schoolsServiceMock.detail.logo.id).toBeDefined();
      expect(schoolsServiceMock.detail.logo.url).toBeDefined();
      expect(schoolsServiceMock.detail.config).toBeDefined();
      expect(schoolsServiceMock.detail.config.subdomain).toBeDefined();
    });

    it('should have list objects', function () {
      expect(schoolsServiceMock.list).toBeDefined();
    });

  });

})();
