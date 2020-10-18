const MongoClient = require('mongodb').MongoClient;
const assert = require("assert");

// Connection Url
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'GameRatingDB';

// Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });

// Use connect method to connect to the Server
client.connect(function(err){
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  findDocuments(db, function(){
    client.close();
  });
});

const insertDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('games');
  // Insert some documents
  collection.insertMany([
    {
      name: 'Roblox',
      score: 8,
      review: 'Lots of multiplayer games made my users. Cool stuff, but can sometimes get bring because of dumb spam games, I guess?'
    },
    {
      name: 'Undertale',
      score: 9.5,
      review: "A really really good game. Has the iconic sound track of 'Megalovania'. It's kinda like a movie game, though graphics are not as good. Really good story!"
    },
    {
      name: 'Sally Face',
      score: 8.5,
      review: "Not as good characters, though sound effects and the story are too awesome to resist. Warning: It's a scary game, so beware!"
    }
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into collection");
    callback(result);
  });
}
const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('games');
  // Find some documents
  collection.find({}).toArray(function(err, games) {
    assert.equal(err, null);
    console.log('Found the following records');
    console.log(games);
    callback(games);
  });
}
