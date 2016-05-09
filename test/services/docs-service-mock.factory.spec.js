(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name ngBraveDocs tests
   * @description docsServiceMock tests
   *
   */
  describe('should provide docsServiceMock', function () {

    var docsServiceMock;

    beforeEach(function () {
      module('ngBraveDocs');
    });

    beforeEach(inject(function (_DocsServiceMock_) {
      docsServiceMock = _DocsServiceMock_; // (2)
    }));

    it('should have detail object', function () {
      expect(docsServiceMock.detail).toBeDefined();
    });

    it('should defined object keys', function () {
      expect(docsServiceMock.detail.id).toBeDefined();
      expect(docsServiceMock.detail.name).toBeDefined();
      expect(docsServiceMock.detail.slug).toBeDefined();
      expect(docsServiceMock.detail.type).toBeDefined();
      expect(docsServiceMock.detail.content).toBeDefined();
    });

    it('should have list objects', function () {
      expect(docsServiceMock.list).toBeDefined();
    });

  });

})();
