(function () {
    'use strict';

    function Bowl(Number, result, commentary) {
        this.Number = number;
        this.result = result;
        this.commentary = commentary;
    }

    Bowl.prototype.getFact = function () {
        return this.result;
    }


    function Over(number) {

        this.Number = number;
        this.Bowls = [];
        this.TotalScoreInOver = 0;
        
    }

    Over.prototype.addBowlToOver = function (bowl) {

        this.Bowls.push(bowl);
        this.TotalScoreInOver += bowl.result;
    }




    window.Bowl = Bowl;
    window.Over = Over;

})();