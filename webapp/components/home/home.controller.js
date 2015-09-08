(function() {
    'use strict';
    angular.module('home')
        .controller('HomeController', homeCtrl);

    /*@ngInject*/
    function homeCtrl($scope) {
    	$scope.personList = [];
        $scope.addPerson = addPerson;
        $scope.removePerson = removePerson;


        function addPerson(person) {
			if(person) {
				$scope.personList.push(person);
			}
        }

        function removePerson(person) {
            $scope.personList = _.remove($scope.personList, function(value) {
                value.username = person.username;
            });
        }
    }
})();