/**
 * Created by ABennett on 3/28/17.
 */
var ScoreService = require("../js/score-service.js");

describe("ScoreService", function () {
    var scoreService;
    beforeEach(function () {
       scoreService = new ScoreService();
    })
    describe("getOutScore", function () {
        it("should return the correct sum of the front nine holes", function ( ) {
            var scores = [];
            var expectedOut = 0;

            for(var hole = 0; hole < 9; hole++){
                var randomScore = Math.floor(Math.random() * 10);
                scores[hole] = randomScore;
                expectedOut = expectedOut + randomScore;
            }

            var actualOut = scoreService.getOutScore(scores);

            expect(actualOut).toEqual(expectedOut);

        })
        it("should throw a character found error when input has a character in it"), function () {

        }

    })
    describe("getInScore", function () {

    })
    describe("getTotalScore", function () {

    })
    describe("getScoreComparedToPar", function () {

    })
})