(function () {
    'use strict';

    function Game(playingTeams) {
        this.Teams = playingTeams;
        this.Innings = [];
        this.tossResult = null;
    }

    Game.prototype.Toss = function () {
        var min = Math.ceil(0);
        var max = Math.floor(2);
        return Math.floor(Math.random() * (max - min)) + min;
    }


    Game.prototype.StartInnings = function () {

        if (this.tossResult === 0) {
            this.Innings[0] = new Innings(this.Teams[0], this.Teams[1]);
            this.Innings[1] = new Innings(this.Teams[1], this.Teams[0]);
        }
        else {
            this.Innings[0] = new Innings(this.Teams[1], this.Teams[0]);
            this.Innings[1] = new Innings(this.Teams[0], this.Teams[1]);
        }
        console.log(this.Innings[0]);
    }

    window.Game = Game;
})();