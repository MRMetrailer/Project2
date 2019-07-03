var db = require("../models");

module.exports = function (app) {
  // Get all games
  app.get("/api/games", function (req, res) {
    db.game.findAll({}).then(function (dbGames) {
      res.json(dbGames);
    });
  });

  // Get all users
  app.get("/api/users", function (req, res) {
    db.game.findAll({}).then(function (dbGames) {
      res.json(dbGames);
    });
  });

  // Create a new game
  app.post("/api/games", function (req, res) {
    db.game.create({
      name: req.body.name,
    }).then(function (dbGames) {
      res.json(dbGames);
    });
  });

  // Find one game by id
  app.get("/api/games/:gameId", function (req, res) {
    db.game.findOne({
      where: {
        id: req.params.gameId
      }
    }).then(function (dbGames) {
      res.json(dbGames);
    });
  });

  // Delete a game by id
  app.delete("/api/games/:gameid", function (req, res) {
    db.game.destroy({ where: { id: req.params.game_id } }).then(function (dbGames) {
      res.json(dbGames);
    });
  });

  // create user (like create game)
  // app.post("/api/games/", function (req,res) {
  //   db.user.create({
  //     name: req.body.name,
  //     avatar: '000???'
  //   });
  // });

  // create entry
  app.post("/api/games/:gameId/enter", function (req, res) {
    var entry = {
      game_id: req.params.game_id,
      user_id: req.body.user_id
    };
    // loop over number of entries
    var entries = [];
    for (var i = 0; i < req.body.numEntries; i++) {
      entries.push(entry);
    }
    db.entry.bulkCreate(entries)
      .then(function (out) {
        // todo - count all entries for this user in this game
        // db.entry.findOne(/* count where user_id = ID and game_id = ID*/)
        res.json(out);
      })
      .catch(function (e) {
        // handle errors
        res.json(e);
      })
  });



  // Get a winner
  // app.get("/api/games/winner", function(req,res) {
  //   db.entry.findAll({ where: {winner: true } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

  // Delete user and all entries for that user if they are a winner
  app.delete("/api/users/:id", function (req, res) {
    db.user.destroy({
      where: {
        did_win: 1
      }
    }).then(function (dbGames) {
      res.json(dbGames);
    });
  });

};
