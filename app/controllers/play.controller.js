(function () {
    'use strict';

    angular.module('app').controller('playController', PlayController);

    PlayController.$inject = ['cricCardRESTService'];

    function PlayController(cricCardRESTService) {

        var vm = this;
        init();

        vm.score = 0;
        var game = null;

        function init() {

            var data = cricCardRESTService.game;
            vm.teamOne = data.Teams[0].name;
            vm.teamTwo = data.Teams[1].name;
        }

        vm.bowl = function () {
            //var game = JSON.parse(localStorage.getItem('game'));
            //var game = cricCardRESTService.game;

            if (game === null)
                game = cricCardRESTService.game;

            game.Innings[0].Bowl();
            vm.score = game.Innings[0].totalRunScore;
            console.log(game.Innings[0].getInningsFact());
        }
    }

})();