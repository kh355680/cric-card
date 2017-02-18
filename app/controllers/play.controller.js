(function () {
    'use strict';

    angular.module('app').controller('playController', PlayController);

    PlayController.$inject = ['cricCardRESTService'];

    function PlayController(cricCardRESTService) {

        var vm = this;
        init();

        vm.disablePlayButton = false;
        vm.gameOver = false;
        vm.game = null;
        vm.gameProgressPercentageDisplay = 0;
        vm.score = 0;
        var game = null;
        var bowlCounter = 1;
        vm.gameProgressPercentage = 0;

        vm.isInningsOver = false;

        function init() {

            vm.game = cricCardRESTService.game;
            vm.teamOne = vm.game.Teams[0].name;
            vm.teamTwo = vm.game.Teams[1].name;

            console.log(vm.game);

            vm.battingTeam = vm.game.Innings[0].BattingTeam.name;
            vm.bowlingTeam = vm.game.Innings[0].BowlingTeam.name;
        }

        vm.bowl = function () {

            if (game === null)
                game = cricCardRESTService.game;

            game.Innings[0].Bowl();
            vm.score = game.Innings[0].totalRunScore;

            if (bowlCounter === 12) {
                vm.disablePlayButton = true;
                vm.gameOver = true;
                bowlCounter += 1;
            }

            bowlCounter += 1;
            vm.gameProgressPercentage += 9;
            vm.gameProgressPercentageDisplay += 10;
            vm.game = game;

        }
    }

})();