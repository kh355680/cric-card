(function () {
    'use strict';

    angular.module('app').controller('playController', PlayController);

    PlayController.$inject = ['cricCardRESTService'];

    function PlayController(cricCardRESTService) {

        var vm = this;
        init();

        vm.disablePlayButton = false;
        vm.game = null;

        vm.score = 0;
        var game = null;
        var bowlCounter = 1;
        vm.gameProgressPercentage = 0;
        function init() {

            var data = cricCardRESTService.game;
            vm.teamOne = data.Teams[0].name;
            vm.teamTwo = data.Teams[1].name;
        }

        vm.bowl = function () {

            if (game === null)
                game = cricCardRESTService.game;

            game.Innings[0].Bowl();
            vm.score = game.Innings[0].totalRunScore;

            if (bowlCounter === 12) {
                vm.disablePlayButton = true;
            } else {
                bowlCounter += 1;
            }

            vm.gameProgressPercentage += 9;
            vm.game = game;

            console.log(vm.game.Innings[0].Overs);
        }
    }

})();