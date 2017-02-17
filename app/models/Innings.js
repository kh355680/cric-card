(function () {
    'use strict';


    function Innings(BattingTeam, BowlingTeam) {

        this.BattingTeam = BattingTeam;
        this.BowlingTeam = BowlingTeam;

        this.totalRunScore = 0;
        this.remainingWickets = 10; 

        this.Overs = [];
        this.Overs[0] = new Over(1);
        this.Overs[1] = new Over(2);


        this.currentOverNumberTracker = 0;
        this.currentBowlNumberInOverTracker = 0;
    }

    Game.prototype.Bowl = function () {


        if (this.currentBowlNumberInOverTracker <= 6) {
            this.currentBowlNumberInOverTracker += this.currentBowlNumberInOverTracker;
        }
        else {
            this.currentBowlNumberInOverTracker = 0;
            this.currentOverNumberTracker += this.currentOverNumberTracker;
        }

        var bowl = new Bowl();
        this.Overs[currentOverNumberTracker].addBowlToOver();
    }

    Game.prototype.getScoreTillGivenBowlNumberPerOver = function () { };

    window.Innings = Innings;
})();