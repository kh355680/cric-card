(function () {
    'use strict';

    function Bowl(number, result) {
        this.number = number;
        this.result = result;
        this.commentary = '';
    }

    Bowl.prototype.getFact = function () {
        return this.result;
    }


    function Over(number) {

        this.number = number;
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