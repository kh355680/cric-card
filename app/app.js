(function () {
    'use strict';

    var app = angular.module('app', ['ui.router']);

    app.config(function ($stateProvider, $urlRouterProvider) {

        var playState = {
            name: 'play',
            url: '/play',
            templateUrl: 'app/views/play.html',
            controller: 'playController',
            controllerAs: 'vm'
        }

        var homeState = {
            name: 'home',
            url: '/',
            templateUrl: 'app/views/home.html',
            controller: 'homeController',
            controllerAs: 'vm'
        }

        $stateProvider.state(playState);
        $stateProvider.state(homeState);

        $urlRouterProvider.when('', '/')
    });

})();