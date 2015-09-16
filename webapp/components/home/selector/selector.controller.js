(function() {
    'use strict';
    angular.module('home')
        .controller('SelectorController', ctrl);

    /*@ngInject*/
    function ctrl($scope) {
        $scope.getThumbnailPhotoUrl = getTPUrl;

        function getTPUrl(person) {
        	if(!person.thumbnailPhoto) {
        		return '';
        	}
        	
        	return 'data:image/gif;base64,' + person.thumbnailPhoto;
        }
    }
})();