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

    Innings.prototype.Bowl = function () {

        var runScoredInThisBowl = scoreRun();

        if (this.currentBowlNumberInOverTracker < 6) {
            var bowl = new Bowl(this.currentBowlNumberInOverTracker, runScoredInThisBowl);
            this.Overs[this.currentOverNumberTracker].addBowlToOver(bowl);
            this.currentBowlNumberInOverTracker += 1;
        }
        else {
            this.currentOverNumberTracker += 1;
            this.currentBowlNumberInOverTracker = 0;
            var bowl = new Bowl(this.currentBowlNumberInOverTracker, runScoredInThisBowl);
            this.Overs[this.currentOverNumberTracker].addBowlToOver(bowl);
            this.currentBowlNumberInOverTracker += 1;
        }

        this.totalRunScore += runScoredInThisBowl;
    }

    var scoreRun = function () {
        var min = Math.ceil(0);
        var max = Math.floor(7);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    Innings.prototype.getInningsFact = function () {


        this.Overs.forEach(function (over) {
            console.log(over);

            over.Bowls.forEach(function (bowl) {
                console.log(bowl);
            });
        })

        console.log('Total Score', this.totalRunScore);
    }

    Innings.prototype.test = function (over,ball) {

        var val = 0;
        for (var i = 0; i <= over; i++) {

            for (var j = 0; j < ball; j++){
                val += this.Overs[i].Bowls[j].result;
            }
        }

        console.log('Total Score', val);
    }

    Innings.prototype.getScoreTillGivenBowlNumberPerOver = function () { };

    window.Innings = Innings;
})();