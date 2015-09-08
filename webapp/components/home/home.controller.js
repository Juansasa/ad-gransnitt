(function() {
    'use strict';
    angular.module('home')
        .controller('HomeController', homeCtrl);

    /*@ngInject*/
    function homeCtrl($scope) {
    	$scope.personList = [];
        $scope.addPerson = addPerson;


        function addPerson(person) {
			if(person) {
				$scope.personList.push(person);
			}
        }
    }
})();