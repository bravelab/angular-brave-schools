(function () {

  'use strict';

  angular
    .module('app.docs')
    .factory('DocsServiceMock', ['$q', 'Doc', function ($q, Doc) {

      var mock = {
        id: '89f7191e-d455-42c6-80cd-58ed48bd54b3',
        name: 'Collections',
        slug: 'collections',
        type: 'page',
        content: '-some content-'
      };

      var factory = {
        detail: new Doc(mock),
        list: {
          data: [
            new Doc(mock)
          ],
          meta: {
            totalAmount: 1
          }
        }
      };

      return factory;

    }]);

})();
