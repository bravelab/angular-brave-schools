(function () {

  'use strict';

  angular
    .module('app.schools')
    .factory('SchoolsServiceMock', ['$q', 'School', function ($q, School) {

      var mock = {
        logo: {
          id: 3,
          url: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=university...&w=300&h=200'
        },
        name: 'University of Waterloo',
        slug: 'university-of-waterloo',
        id: '8d577746-eef6-4656-968f-921ecec7a9b5',
        config: {
          subdomain: 'university-of-waterloo.egradgifts.com'
        }
      };

      var factory = {
        detail: new School(mock),
        list: {
          data: [
            new School(mock)
          ],
          meta: {
            totalAmount: 1
          }
        }
      };

      return factory;

    }]);

})();
