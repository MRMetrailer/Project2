module.exports = function(sequelize, DataTypes) {
  var Game = sequelize.define("game", {
    name: DataTypes.STRING,
    is_over: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    }
  });
  return Game;
};
