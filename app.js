const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/GameRatingDB', {useNewUrlParser: true, useUnifiedTopology: true});

const gameSchema = new mongoose.Schema ({
  name: String,
  rating: Number,
  review: String
});

const Game = mongoose.model("Game", gameSchema)

const game = new Game ({
  name: 'Undertale',
  score: 9.5,
  review: "A really really good game. Has the iconic sound track of 'Megalovania'. It's kinda like a movie game, though graphics are not as good. Really good story! Absolutely irresistable!"
})


const roblox = new Game({
  name: 'Roblox',
  score: 8,
  review: 'Lots of multiplayer games made my users. Cool stuff, but can sometimes get boring because of dumb spam games, I guess?'
})
//game.save()
