var db = require("../models");

module.exports = function(app) {
  // Get all games
  app.get("/api/games", function(req, res) {
    db.game.findAll({}).then(function(dbgame) {
      res.json(dbgame);
    });
  });

  // Create a new game
  app.post("/api/games", function(req, res) {
    db.game.create({
      name: req.body.name,
    }).then(function(dbgame) {
      res.json(dbgame);
    });
  });

  // Find game by id
  app.get("/api/games/:gameId", function(req, res) {
    db.game.findOne({
      where: {
        id: req.params.gameId
      }
    }).then(function(dbgame) {
      res.json(dbgame);
    });
  });

  // create user (like create game)
  app.post("/api/games/", function (req,res) {
    db.user.create({
      name: req.body.name,
      avatar: '000???'
    });
  })

  // create entry
  app.post("/api/games/:gameId/enter", function (req, res) {
    var entry = {
      game_id: req.params.game_id,
      user_id: req.body.user_id
    };
    // loop over number of entries
    var entries = [];
    for (var i = 0; i<req.body.numEntries; i++) {
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

//   // Delete an example by id
//   app.delete("/api/examples/:id", function(req, res) {
//     db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });

//   // Get a winner
//   app.get("/api/examples/:winner", function(req,res) {
//     db.Example.findAll({ where: {winner: true } }).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });
};
