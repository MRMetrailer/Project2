var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.game.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        games: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/games/:id", function(req, res) {
    db.game.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        game: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
