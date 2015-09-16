(function() {
    'use strict';
    angular.module('home')
        .controller('DetailsController', ctrl);

    /*@ngInject*/
    function ctrl($scope) {
        $scope.getDate = getdate;
        $scope.setSelectedGroup = setSelectedGroup;
        $scope.setHoveredGroup = setHoveredGroup;
        $scope.getGroupColorHover = getGroupColorHover;
        $scope.getGroupColorSelected = getGroupColorSelected;


        function getGroupColorSelected(group) {
            if(group === $scope.selectedGroup) {
                return 'danger';
            }

            return null;
        }

        function setSelectedGroup(group) {
            $scope.selectedGroup = group;
        }

        function setHoveredGroup(group) {
            $scope.hoveredGroup = group;
        }

        function getGroupColorHover(group) {
            if(group === $scope.hoveredGroup) {
                return 'info';
            }

            return null;
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