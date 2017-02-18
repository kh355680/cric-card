(function () {
    'use strict';

    function HomeController() {
        var vm = this;
        vm.startGame = startGame;

        vm.tossResultInfo = '';

        init();
        function startGame() {

        }

        vm.toss = function () {

            var playingTeams = [];
            var teamOne = new Team(vm.teamOneName);
            var teamTwo = new Team(vm.teamTwoName);

            playingTeams.push(teamOne);
            playingTeams.push(teamTwo);

            var game = new Game(playingTeams);

            game.tossResult = game.Toss();
            console.log(game.tossResult);

            if (game.tossResult === 0) {
                vm.tossResultInfo = teamOne.name + ' ' + 'Won The Toss & Choosed To Bat';
                vm.teamOneCurrentStatus = 'batting';
                vm.teamTwoCurrentStatus = 'bowling';
            }
            else {
                vm.tossResultInfo = teamTwo.name + ' ' + 'Won The Toss & Choosed To Bat';
                vm.teamOneCurrentStatus = 'bowling';
                vm.teamTwoCurrentStatus = 'batting';
            }

            vm.isTossDone = true;

        }

        function init() {

            vm.teamOneName = '';
            vm.teamTwoName = '';

            vm.teamOneCurrentStatus = '';
            vm.teamTwoCurrentStatus = '';

            vm.isBowling = true;

            vm.isTossDone = false;
        }
    }

    angular.module('app').controller('homeController', HomeController );

})();