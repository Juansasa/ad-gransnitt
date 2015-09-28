'use strict';

describe('HomeController', function() {

    var $rootScope, $scope, $controller;

    beforeEach(module('previa.ad'));

    beforeEach(inject(function(_$rootScope_, _$controller_){
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $controller = _$controller_;

        $controller('HomeController', {'$rootScope' : $rootScope, '$scope': $scope});
    }));

    it('should be defined', function() {
    	expect($controller).toBeDefined();
    });
});