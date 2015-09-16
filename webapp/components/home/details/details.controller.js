(function() {
    'use strict';
    angular.module('home')
        .controller('DetailsController', ctrl);

    /*@ngInject*/
    function ctrl($scope) {
        $scope.getDate = getdate;

        function getdate (date) {
        	if(!date) {
        		return 'Information saknas';
        	}
        	
        	var dt = new Date(date);
        	return dt.toLocaleDateString() + '-' + dt.toLocaleTimeString();
        }
    }
})();