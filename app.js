const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/GameRatingDB', {useNewUrlParser: true, useUnifiedTopology: true});

const gameSchema = new mongoose.Schema ({
  name: String,
  rating: Number,
  review: String
});

const Game = mongoose.model("Game", gameSchema)

//const game = new Game ({
  //name: 'Undertale',
  // score: 9.5,
  // review: "A really really good game. Has the iconic sound track of 'Megalovania'. It's kinda like a movie game, though graphics are not as good. Really good story! Absolutely irresistable!"
// })


const roblox = new Game({
  name: 'Roblox',
  score: 8,
  review: 'Lots of multiplayer games made my users. Cool stuff, but can sometimes get boring because of dumb spam games, I guess?'
});

const sallyFace = new Game({
  name: 'Sally Face',
  score: 8.5,
  review: "Not as good characters, though sound effects and the story are too awesome to resist. Warning: It's a scary game, so beware!"
});

const animalCrossing = new Game({
  name: 'Animal Crossing - New Horizons',
  score: 7.5,
  review: "Really really REALLY good graphics and functionality. But very expensive and only one island per nintendo switch :C!"
});

// Game.insertMany([roblox, sallyFace, animalCrossing], function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully saved game reviews to GameRatingDB! :D");
//   };
// });

Game.find(function(err, games){
  if (err) {
    console.log(err);
  } else {
    games.forEach(function(game){
      console.log(game['name']);
    });
  };
});
