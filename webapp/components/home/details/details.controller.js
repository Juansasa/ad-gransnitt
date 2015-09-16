(function() {
    'use strict';
    angular.module('home')
        .controller('DetailsController', ctrl);

    /*@ngInject*/
    function ctrl($scope) {
        $scope.getDate = getdate;
        $scope.setSelectedGroup = setSelectedGroup;
        $scope.getGroupColor = getGroupColor;

        function setSelectedGroup(group) {
            $scope.selectedGroup = group;
        }

        function getGroupColor(group) {
            if(group === $scope.selectedGroup) {
                return 'danger';
            }

            return '';
        }

        function getdate (date) {
        	if(!date) {
        		return 'Information saknas';
        	}
        	
        	var dt = new Date(date);
        	return dt.toLocaleDateString() + '-' + dt.toLocaleTimeString();
        }
    }
})();