(function() {
    'use strict';

    angular.module('home')
        .run(setUpRoutes);

    /*@ngInject*/
    function setUpRoutes(routeHelper, gettext) {
        var stateName = 'home';
        var stateConfig = {
            url: '/hem',
            views: {
                '@': {
                    templateUrl: 'components/home/home.html',
                    title: gettext('Hem'),
                    controller: 'HomeController',
                    controllerAs: 'vm',
                },
                'search@home': {
                    templateUrl: 'components/home/search/search.html',
                    controller: 'SearchController'
                },
                'selector@home': {
                    templateUrl: 'components/home/selector/selector.html',
                    controller: 'SelectorController'
                },
                'details@home': {
                    templateUrl: 'components/home/details/details.html',
                    controller: 'DetailsController'
                },

            }
        };

        routeHelper.registerState(stateName, stateConfig);
        routeHelper.setDefaultState(stateConfig.url);
    }
})();