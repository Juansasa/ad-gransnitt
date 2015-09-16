(function() {
    'use strict';
    angular.module('data')
        .factory('activeDirectory', adService);

    /*@ngInject*/
    function adService($http) {
        var service = {
            getPersons: getPersons,
            getAccountInfo: getAccountInfo
        };

        return service;

        function getPersons(queryString) {
            return $http.get('/api/ad/search/' + queryString);
        }

        function getAccountInfo(username) {
            return $http.get('/api/ad/account/' + username);
        }
    }

})();