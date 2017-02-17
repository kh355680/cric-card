(function () {
    'use strict';

    function HomeController() {
        var vm = this;
        vm.startGame = startGame;
        function startGame() {

        }

    }

    angular.module('app').controller('homeController', HomeController );

})();