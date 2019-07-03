var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.game.findAll({}).then(function(dbGames) {
      res.render("index", {
        msg: "Welcome!",
        games: dbGames
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/games/:id", function(req, res) {
    db.game.findOne({ where: { id: req.params.id } }).then(function(dbGames) {
      res.render("example", {
        game: dbGames
      });
    });
  });

  // Load game page and run raffle
  app.get("/games/:id/raffle", function(req, res) {
    db.game.findOne({ where: { id: req.params.id } }).then(function(dbGames) {
      res.render("raffle", {
        game: dbGames
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
