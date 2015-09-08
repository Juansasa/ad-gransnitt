(function() {
    'use strict';
    angular.module('home')
        .controller('SearchController', ctrl);

    /*@ngInject*/
    function ctrl($scope, activeDirectory) {
        $scope.getPersons = getPersons;


        function getPersons(queryString) {
            return activeDirectory.getPersons(queryString).then(success, error);
        }

        function success(response) {
            return response.data;
        }

        function error(err) {
            return err.message;
        }
    }
})();