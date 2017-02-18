(function () {
    'use strict';

    angular.module('app').service('cricCardRESTService', cricCardRESTService);

    function cricCardRESTService() {

        function saveNewGameInfoToDb(game, onSuccess) {
            //localStorage.setItem('game', JSON.stringify(game));
            //onSuccess(JSON.parse(localStorage.getItem('game')));
            this.game = game;
            onSuccess(this.game);
        }

        this.saveNewGameInfoToDb = saveNewGameInfoToDb;
    }

})();