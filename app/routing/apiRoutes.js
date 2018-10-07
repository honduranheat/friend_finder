var path = require("path");
var friendList = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (reqquire, response) {
        response.json(friendList);
    });

    app.post("/api/friends", function (require, response) {


        var userInput = require.body;
        var userAnswers = userInput.scores;
        var userMatch = '';
        var totalDifference = 919;

        for (var i = 0; i < friendList.length; i++) {
            var difference = 0;
            for (var d = 0; d < userAnswers.length; d++) {
                difference = difference + Math.abs(friendList[i].scores[d] - userAnswers[d]);
            }

            if (difference < totalDifference) {
                totalDifference = difference;
                userMatch = friendList[i].name;
                
            }
        }

        friendList.push(userInput);
       // response.json(userMatch);
        response.send(userMatch)
       // console.log(userMatch);
        console.log(userInput);
        

        
    });


};