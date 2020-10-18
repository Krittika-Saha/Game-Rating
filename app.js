const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/GameRatingDB', {useNewUrlParser: true, useUnifiedTopology: true});

const gameSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [0, 'How r u gonna identify a game without a name? Oh, that rhymes well..'],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Game = mongoose.model("Game", gameSchema)

//const game = new Game ({
  //name: 'Undertale',
  // score: 9.5,
  // review: "A really really good game. Has the iconic sound track of 'Megalovania'. It's kinda like a movie game, though graphics are not as good. Really good story! Absolutely irresistable!"
// })
//
//
// const roblox = new Game({
//   name: 'Roblox',
//   score: 8,
//   review: 'Lots of multiplayer games made my users. Cool stuff, but can sometimes get boring because of dumb spam games, I guess?'
// });
//
// const sallyFace = new Game({
//   name: 'Sally Face',
//   score: 8.5,
//   review: "Not as good characters, though sound effects and the story are too awesome to resist. Warning: It's a scary game, so beware!"
// });
//
// const animalCrossing = new Game({
//   name: 'Animal Crossing - New Horizons',
//   score: 7.5,
//   review: "Really really REALLY good graphics and functionality. But very expensive and only one island per nintendo switch :C!"
// });
//
//  Game.insertMany([roblox, sallyFace, animalCrossing], function(err){
// if (err) {
//      console.log(err);
//    } else {
//     console.log("Successfully saved game reviews to GameRatingDB! :D");
//   };
// });
const lifeIsStrange = new Game ({
  rating: 10,
  review: 'Too good to resist. Awesomest graphics and storyline!!'
})
//lifeIsStrange.save()

Game.find(function(err, games){
  if (err) {
    console.log(err);
  } else {

    mongoose.connection.close()
    games.forEach(function(game){
      console.log(game['name']);
    });
  };
});

Game.updateOne({_id: "5f8c5049bac9c3361c7ffbea"}, {name: "Life Is Strange"}, function(err){
  if (err) {
    console.log(err);
  } else {
    console.log("Updated object with id 5f8c5049bac9c3361c7ffbea successfully! Oof!");
  }
})
