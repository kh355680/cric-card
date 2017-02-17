(function () {
    'use strict';

    var app = angular.module('app', ['ui.router']);

    app.config(function ($stateProvider,$urlRouterProvider) {

        var playState = {
            name: 'play',
            url: '/play',
            template: '<h3>hello world!</h3>'
        }

        var homeState = {
            name: 'home',
            url: '/',
            template: '<h3>Its the UI-Router hello world app!</h3>',
            controller: 'homeController',
            controllerAs:'vm'
        }

        $stateProvider.state(playState);
        $stateProvider.state(homeState);

        $urlRouterProvider.when('','/')
    });

})();