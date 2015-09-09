(function() {
    'use strict';
    angular.module('home')
        .controller('HomeController', homeCtrl);

    /*@ngInject*/
    function homeCtrl($scope) {
    	$scope.personList = [{
            username: 'zquavu',
            name: {
                firstname: 'Quang',
                lastname: 'Vu'
            },
            isSelected: true,
            color: '#1abc9c'
        }, {
            username: 'zviczel',
            name: {
                firstname: 'Viktor',
                lastname: 'Zellin'
            },
            isSelected: true,
            color: '#3498db'
        }];

        $scope.colors = ['#1abc9c', '#37d078', '#3498db', '#9b59b6', '#34495e', '#f1c40f', '#e67e22', '#e74c3c', '#95a5a6', 'black'];
        $scope.addPerson = addPerson;
        $scope.removePerson = removePerson;
        $scope.toogleSelect = toogleSelect;
        $scope.getSelectedColor = getSelectedColor;


        function addPerson(person) {
			if(person) {
                person.isSelected = true;
                person.color = getRandomColor();
				$scope.personList.push(person);
			}
        }

        function removePerson(person) {
            _.remove($scope.personList, function(value) {
                return value.username === person.username;
            });
        }

        function toogleSelect (person) {
            person.isSelected = !person.isSelected;
        }

        function getRandomColor () {
            return $scope.colors[$scope.personList.length];
        }

        function getSelectedColor (person) {
            return person.isSelected ? person.color : 'bg-active';
        }
    }
})();