(function () {
    'use strict';

    function HomeController() {
        var vm = this;
        vm.startGame = startGame;

        init();
        function startGame() {

        }

        function init() {
        }
    }

    angular.module('app').controller('homeController', HomeController );

})();