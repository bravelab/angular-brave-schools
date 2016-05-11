(function () {

  'use strict';

  angular.module('app.schools.mocks', ['app.schools']);

  angular.module('app.schools.mocks').factory('SchoolsMock',
    ['$q',
      function ($q) {
        var factory = {};

        factory.mockedData = {
          "data": [
            {
              "school_id": "89f7191e-d455-42c6-80cd-58ed48bd54b3",
              "name": "Townson University",
              "subdomain": "town-university",
              "main_logo": {
                "school_logo_id": 301,
                "logo_url": "http://i.kinja-img.com/gawker-media/image/upload/s--pEKSmwzm--/c_scale,fl_progressive,q_80,w_800/1414228815325188681.jpg"
              }
            },
            {
              "school_id": "89f7191e-d455-42c6-80cd-58ed48bd6423",
              "name": "Cambridge University",
              "subdomain": "cambridge-university",
              "main_logo": {
                "school_logo_id": 302,
                "logo_url": "http://i.kinja-img.com/gawker-media/image/upload/s--pEKSmwzm--/c_scale,fl_progressive,q_80,w_800/1414228815325188681.jpg"
              }
            }
          ],
          "meta": {
            "totalAmount": 2
          }
        };

        factory.mockedDetail = {
          "school_id": "89f7191e-d455-42c6-80cd-58ed48bd54b3",
          "name": "Townson University",
          "subdomain": "town-university",
          "main_logo": {
            "school_logo_id": 301,
            "logo_url": "http://i.kinja-img.com/gawker-media/image/upload/s--pEKSmwzm--/c_scale,fl_progressive,q_80,w_800/1414228815325188681.jpg"
          }
        };

        factory.get = function (id) {
          var defer = $q.defer();
          defer.resolve(this.mockedDetail);
          return defer.promise;
        };

        factory.getAll = function () {
          var defer = $q.defer();
          defer.resolve(this.mockedData);
          return defer.promise;
        };

        return factory;
      }
    ]);

})();



