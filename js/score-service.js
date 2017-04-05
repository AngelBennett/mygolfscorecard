/**
 * Created by ABennett on 3/28/17.
 */

function ScoreService() {
    this.getOutScore = function (scores) {
        var out = 0;
        for(var hole = 0; hole < 9; hole++){
            out += scores(hole);
        }

    }
 }

    module.exports = ScoreService;